<template>
  <div class="profile__edit-modal">
    <!-- Modal -->
    <div
        class="modal fade"
        id="address_modal"
        tabindex="-1"
        aria-labelledby="address_modal"
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
            <!-- form start -->
            <Form :validation-schema="schema" @submit="onSubmit">

              <div class="row mt-4 mt-sm-0">
                <div class="col-md-12">
                  <div class="profile__edit-input">
                    <p>نام</p>
                    <Field name="name" type="text" placeholder="نام"/>
                    <ErrorMessage name="name" class="text-danger"/>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="profile__edit-input">
                    <p>استان</p>
                    <Field name="state" type="text" placeholder="استان"/>
                    <ErrorMessage name="state" class="text-danger"/>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="profile__edit-input">
                    <p>شهر</p>
                    <Field name="city" type="text" placeholder="نام"/>
                    <ErrorMessage name="city" class="text-danger"/>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="profile__edit-input">
                    <p>آدرس پستی</p>
                    <Field name="address" type="text" placeholder="آدرس پستی"/>
                    <ErrorMessage name="address" class="text-danger"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="profile__edit-input">
                    <p>کد پستی</p>
                    <Field name="zip_code" type="text" placeholder="کد پستی"/>
                    <ErrorMessage name="zip_code" class="text-danger"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="profile__edit-input">
                    <p>تلفن همراه</p>
                    <Field name="phone" type="text" placeholder="تلفن همراه"/>
                    <ErrorMessage name="phone" class="text-danger"/>
                  </div>
                </div>
<!--                <div class="col-md-12">-->
<!--                  <div class="profile__edit-input">-->
<!--                    <p>ایمیل</p>-->
<!--                    <Field name="email" type="text" placeholder="ایمیل"/>-->
<!--                    <ErrorMessage name="email" class="text-danger"/>-->
<!--                  </div>-->
<!--                </div>-->


              </div>
              <!-- form end -->
              <div class="profile__edit-input">
                <button type="submit" class="os-btn os-btn-black w-100">

                  <span v-show="!cartStore.processing" class="text-white"> ثبت</span>
                  <svg v-show="cartStore.processing" class="w-100 text-center" xmlns="http://www.w3.org/2000/svg"
                       width="24"
                       height="24" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z">
                      <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                                        values="0 12 12;360 12 12"/>
                    </path>
                  </svg>
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Field, Form, ErrorMessage,} from "vee-validate";
import {string, object} from "yup";
import {useGeneralStore} from "~/store/cart";

const schema = object({
  // email: string().required().email().label("Email"),
  name: string().required("فیلد الزامی میباشد"),
  address: string().required("فیلد الزامی میباشد"),
  state: string().required("فیلد الزامی میباشد"),
  city: string().required("فیلد الزامی میباشد"),
  zip_code: string().required("فیلد الزامی میباشد"),
  phone: string().required('"فیلد الزامی میباشد"').min(11).label("تلفن صحیح نمیباشد"),
});

const cartStore = useGeneralStore()

function onSubmit(values, {resetForm}) {
  cartStore.addAddress(values)
}

</script>
