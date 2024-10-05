<template>
  <section :class="`footer__area theme-bg ${box_style ? 'box-m-15' : ''}`">
    <div class="footer__top pt-100 pb-60">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-4 col-12">
            <div class="footer__widget mb-30">
              <div class="footer__widget-title mb-25">
                <nuxt-link href="/">
                  <!--                  <img src="~/assets/img/logo/logo-2.png" alt="logo">-->
                  <span class="white-color  ">دکتر ژیلا لوگو</span>

                </nuxt-link>
              </div>
              <div class="footer__widget-content ">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                <div class="footer__contact">
                  <ul>
                    <li class="d-flex gap-2">
                      <div class="icon">
                        <i class="fal fa-map-marker-alt"></i>
                      </div>
                      <div class="text">
                        <span>آدرس:   تهران, تهران, تهران </span>
                      </div>
                    </li>
                    <li class="d-flex gap-2">
                      <div class="icon">
                        <i class="fal fa-envelope-open-text"></i>
                      </div>
                      <div class="text">
                        <span>ایمیل: Contact@gmail.com </span>
                      </div>
                    </li>
                    <li class="d-flex gap-2">
                      <div class="icon">
                        <i class="fal fa-phone-alt"></i>
                      </div>
                      <div class="text">
                        <span>تلفن: 123456789</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-4 col-12">
            <div class="footer__widget mb-30">
              <div class="footer__widget-title mb-25">
                <h5>خدمات مشتریان</h5>
              </div>
              <div class="footer__widget-content">
                <div class="footer__links">
                  <ul>
                    <li><a href="#">قوانین خرید</a></li>
                    <li><a href="#">پاسخ به پرسش‌های متداول</a></li>
                    <li><a href="#">رویه‌های بازگرداندن کالا</a></li>
                    <li><a href="#">شرایط استفاده</a></li>
                    <li><a href="#">نحوه ثبت سفارش</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-4 col-12">
            <div class="footer__widget mb-30">
              <div class="footer__widget-title">
                <h5>ارتباط با ما</h5>
              </div>
              <div class="footer__widget-content">
                <div class="footer__links">
                  <ul>
                    <li><a href="#">درباره ما</a></li>
                    <li><a href="#">فرصت‌های شغلی</a></li>
                    <li><a href="#">تماس با ما</a></li>
                    <li><a href="#">قوانین</a></li>
                    <li><a href="#">شرایط و ضوابط</a></li>
                   </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-7">
            <div class="footer__copyright">
              <p>Copyright {{ new Date().getFullYear() }} ©
                <nuxt-link href="/"> </nuxt-link>
                کلیه حقوق محفوظ است
                <nuxt-link href="/">دکتر ژیلا </nuxt-link>
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-5">
            <div class="footer__social f-left">
              <ul>
                <social/>
                <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Social from '~~/components/social/Social.vue';

export default defineComponent({
  components: {Social},
  props: {
    box_style: {
      type: Boolean,
      default: false,
    }
  }
})
</script>
