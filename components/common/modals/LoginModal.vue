<script setup>
import {Field, Form, ErrorMessage,} from "vee-validate";
import {object, string} from "yup";

const schema = object({
  phone: string().required("شماره موبایل الزامی میباشد").min(11, 'شماره موبایل صحیح نمیباشد'),
});

import VOtpInput from "vue3-otp-input";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const modal = ref(null);
const number = ref(null);
const interval = ref(null);
const timer = ref("1:59");
const isInvalid = ref(false)
const isOtpInvalid = ref(false)
const hasNumber = ref(false)
const numberRequired = ref(false)
const hasTime = ref(true)
const isLoading = ref(false)
const otpCode = ref(null)
const otpInput = ref()
const verifyBtn = ref('btn-otp-disabled')


const title = computed(() => {
  if (hasNumber.value) {
    return "کد تایید را وارد کنید"
  }
  return "ورود یا ثبت‌نام"
})
const info = computed(() => {
  if (hasNumber.value) {
    return ` کد شش رقمی به شماره موبایل ${number.value} ارسال شد.`
  }
  return "برای ادامه شماره موبایل خود را وارد کنید."
})


function sanitizeInput() {
  number.value = number.value.replace(/[^0-9.-]/g, '');
  if (number.value.length === 0) {
    numberRequired.value = true
    isInvalid.value = false
  } else if (number.value.length < 11 || number.value[0] !== '0') {
    numberRequired.value = false
    isInvalid.value = true
  } else {
    isInvalid.value = false
    numberRequired.value = false
  }
}

function countdown() {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    timer.value = timer.value.split(':');
    let minutes = timer.value[0];
    let seconds = timer.value[1];
    seconds -= 1;
    if (minutes < 0) return;
    else if (seconds < 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    } else if (seconds < 10 && seconds.length != 2) seconds = '0' + seconds;
    timer.value = (minutes + ':' + seconds);
    if (minutes == 0 && seconds == 0) {
      hasTime.value = false
      clearInterval(interval.value);
    }
  }, 1000);
}

function resendCode() {
  if (!hasTime.value) {
    hasTime.value = true
    timer.value = "1:59"
    getOtpCode()
  }
}

function backToMobile() {
  clearInterval(interval.value)
  timer.value = "1:59"
  hasTime.value = true
  otpCode.value = null
  hasNumber.value = false
  handleClearInput()
}

const resendClass = computed(() => {
  if (timer.value === "0:00") {
    return 'resend-active'
  } else {
    return 'resend-disabled'
  }
})
const otpBtn = computed(() => {
  if (number.value && number.value[0] === '0' && number.value.length === 11) {
    return 'btn-otp-active'
  }
  return 'btn-otp-disabled'

})


async function getOtpCode() {
  console.log(number)
  if (number.value && number.value[0] === '0' && number.value.length === 11) {
    isLoading.value = true
    const phoneNumber = "+98" + number.value.substring(1)
    const bodyData = new URLSearchParams({
      'mobile': phoneNumber,
      'country': 'IR',
    })

    const {data, pending, error, refresh} = await useMyFetch('user/authentication/mobile/request', {
      method: 'post',
      body: bodyData
    })

    if (data.value) {
      isLoading.value = false
      hasNumber.value = true
      countdown()
    }
    if (error.value) {
      isLoading.value = false
      hasNumber.value = false
    }

  } else {
    hasNumber.value = false
  }

}

function handleOnComplete(value) {
  // console.log('OTP completed: ', value);
  otpCode.value = value
}

function handleOnChange(value) {
  // console.log('OTP changed: ', value);
  isOtpInvalid.value = false
  if (value && value.length === 6 && hasTime.value) {
    verifyBtn.value = 'btn-otp-active'
  } else {
    verifyBtn.value = 'btn-otp-disabled'
  }


}

function handleClearInput() {
  otpInput.value.clearInput();
}

const userToken = useCookie('authToken',{
  maxAge: 7 * 24 * 60 * 60,   // 7 days in seconds
  // secure: true,               // Ensures cookie is only sent over HTTPS
  sameSite: 'Strict',         // Helps prevent CSRF attacks
  path: '/',                  // Makes it available across the whole site
})

async function verifyMobileNumber() {
  if (otpCode.value && otpCode.value.length === 6 && hasTime.value) {
    isLoading.value = true
    const phoneNumber = "+98" + number.value.substring(1)
    const bodyData = new URLSearchParams({
      'mobile': phoneNumber,
      'country': 'IR',
      'otp': otpCode.value,
    })

    const {data, pending, error, refresh} = await useMyFetch('user/authentication/mobile/verify', {
      method: 'post',
      body: bodyData
    })
    if (data.value) {
      isLoading.value = false
      userToken.value = data.value.data.access_token
      isOtpInvalid.value = false
      number.value = null
      backToMobile()
      closeModal()
    }
    if (error.value) {
      isLoading.value = false
      if (error.value.status === 403) {
        isOtpInvalid.value = true
      }
    }

  }

}

function closeModal() {
  const modalElement = document.getElementById('login_modal');
  const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
   modalInstance.hide();

}


</script>

<template>
  <div class="profile__edit-modal">
    <!-- Modal -->
    <div
        class="modal fade"
        id="login_modal"
        tabindex="-1"
        aria-labelledby="login_modal"
        aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="profile__edit-wrapper">
            <div class="profile__edit-close">
              <button
                  type="button"
                  class="profile__edit-close-btn"
                  data-bs-dismiss="modal"
              >
                <i class="fa fa-times"></i>
              </button>
            </div>
            <div class="profile__edit-back" v-if="hasNumber">
              <button class="position-absolute profile__edit-back-btn"
                      @click="backToMobile">
                <i class="fa fa-solid fa-arrow-left"></i>
              </button>
            </div>

            <h4 class="text-center mt-4" @click="closeModal">{{ title }}</h4>
            <h6 class="text-center mt-3 text-muted">{{ info }}</h6>

            <!-- form start -->
            <Form :validation-schema="schema" @submit="getOtpCode" v-if="!hasNumber">

              <div class="profile__edit-input mt-4">
                <Field name="phone" type="text"
                       @change="sanitizeInput"
                       placeholder="شماره موبایل" v-model="number"/>
                <ErrorMessage name="phone" class="text-danger"/>
              </div>

              <div class="d-flex">
                <p>
                  <i class="fa fa-solid fa-circle-info"></i>
                  استفاده از این سایت به معنی <span class="text-primary"> قوانین و مقررات </span> است.
                </p>
              </div>


              <button
                  :class="otpBtn"
                  class="w-100 py-3 mt-4 rounded text-white btn theme-bg"
                  type="submit"
              >

                <span v-show="!isLoading" class="text-white"> تایید و دریافت کد</span>

                <svg v-show="isLoading" class="w-100 text-center" xmlns="http://www.w3.org/2000/svg" width="24"
                     height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z">
                    <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                                      values="0 12 12;360 12 12"/>
                  </path>
                </svg>

              </button>

            </Form>


            <form @submit.prevent="verifyMobileNumber" v-if="hasNumber">
              <div class="code-inputs">
                <VOtpInput
                    ref="otpInput"
                    input-classes="mt-3 px-2 w-100 rounded border border-muted shadow-sm py-3 text-center focus-outline"
                    separator=""
                    :num-inputs="6"
                    :should-auto-focus="true"
                    :is-input-num="true"
                    dir="ltr"
                    inputmode="numeric"
                    @on-change="handleOnChange"
                    @on-complete="handleOnComplete"
                />
              </div>
              <p class="w-100 text-danger text-xs mt-1 text-end" v-show="isOtpInvalid">
                کد ورود اشتباه است، لطفا مجددا تلاش نمایید
              </p>

              <div class="d-flex justify-content-between w-100 align-items-center gap-1 mt-4 text-sm">
                <div :class="resendClass" @click="resendCode" style="cursor: pointer;">
                  ارسال مجدد کد
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20"/></svg>                </div>
                <span class="text-primary">{{ timer }}</span>
              </div>

              <button :class="verifyBtn" class="w-100 py-3 mt-4 rounded text-white btn os-btn-primary" type="submit"
                      :disabled="isLoading">
                <span v-show="!isLoading" class="text-white"> تایید و ادامه</span>
                <svg v-show="isLoading" class="w-100 text-center" xmlns="http://www.w3.org/2000/svg" width="24"
                     height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z">
                    <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                                      values="0 12 12;360 12 12"/>
                  </path>
                </svg>
              </button>

            </form>
            <!-- form end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

