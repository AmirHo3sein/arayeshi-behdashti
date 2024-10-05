<template>
  <div class="different-address">
    <div class="ship-different-title">
      <h3>
        <label for="ship-box">ثبت آدرس جدید</label>
        <input @click="handleShipBox" id="ship-box" type="checkbox" />
      </h3>
    </div>
    <div v-if="shipBox" id="ship-box-info">
      <div class="row">
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>نام<span class="required">*</span></label>
            <input type="text" placeholder="نام" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>نام خانوادگی <span class="required">*</span></label>
            <input type="text" placeholder="نام خانوادگی" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="checkout-form-list">
            <label>آدرس پستی <span class="required">*</span></label>
            <input type="text" placeholder="آدرس پستی " />
          </div>
        </div>

        <div class="col-md-12">
          <div class="checkout-form-list">
            <label>استان<span class="required">*</span></label>
            <input type="text" placeholder="استان" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>شهر <span class="required">*</span></label>
            <input type="text" placeholder="شهر" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>کد پستی <span class="required">*</span></label>
            <input type="text" placeholder="کد پستی " />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>ایمیل<span class="required">*</span></label>
            <input type="email" placeholder="ایمیل" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>تلفن همراه <span class="required">*</span></label>
            <input type="text" placeholder="تلفن همراه" />
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import CountrySelect from "./CountrySelect.vue";

export default {
  components: { CountrySelect },
  data() {
    return {
      shipBox: false,
    };
  },
  methods: {
    handleShipBox() {
      this.shipBox = !this.shipBox;
    },
  },
};
</script>
