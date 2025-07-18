<template>
  <footer class="footer bg-pink py-5">
    <div class="px-4 px-lg-5 px-xl-5 ">
      <div class="row">
        <!-- Company Info Section -->
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="d-flex align-items-center mb-3">
<!--            <img src="/logo.png" alt="ROJA" class="me-3" style="height: 40px;">-->
            <h5 class="mb-0 fw-bold">ROJA</h5>
          </div>
          <p class="text-muted mb-3">
            روژا شاپ یکی از معتبرترین فروشگاه‌های اینترنتی محصولات آرایشی،
            بهداشتی و عطر است که با هدف ارائه بهترین و باکیفیت‌ترین محصولات
            به مشتریان ایجاد شده است.
          </p>
          <div class="d-flex gap-2">
            <a href="#" class="bg-pink btn btn-lg text-burgundy">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="bg-pink btn btn-lg text-burgundy">
              <i class="fab fa-telegram"></i>
            </a>
            <a href="#" class="bg-pink btn btn-lg text-burgundy">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links Section -->
        <div class="col-lg-2 col-md-6 mb-4">
          <h6 class="fw-bold mb-3">دسترسی سریع</h6>
          <ul class="list-unstyled">
            <li class="mb-2">
              <nuxt-link to="/about" class="text-muted text-decoration-none">درباره ما</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/contact" class="text-muted text-decoration-none">تماس با ما</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/stores" class="text-muted text-decoration-none">فروشگاه های روژا</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/careers" class="text-muted text-decoration-none">فرصت های شغلی</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/faq" class="text-muted text-decoration-none">سوالات متداول</nuxt-link>
            </li>
          </ul>
        </div>

        <!-- Legal Section -->
        <div class="col-lg-2 col-md-6 mb-4">
          <h6 class="fw-bold mb-3">قوانین و مقررات</h6>
          <ul class="list-unstyled">
            <li class="mb-2">
              <nuxt-link to="/privacy" class="text-muted text-decoration-none">حریم خصوصی</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/terms" class="text-muted text-decoration-none">قوانین و مقررات</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/return-policy" class="text-muted text-decoration-none">راهنمای سفارش و خرید</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/shipping" class="text-muted text-decoration-none">ارسال هدیه</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/gift-cards" class="text-muted text-decoration-none">راهنمای استفاده از کارت هدیه</nuxt-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info Section -->
        <div class="col-lg-4 col-md-6 mb-4">
          <h6 class="fw-bold mb-3">اطلاعات تماس</h6>
          <div class="mb-3">
            <div class="d-flex align-items-center gap-2 mb-2">
              <i class="fas fa-map-marker-alt  me-2 text-burgundy"></i>
              <span  class="text-nowrap text-black"> بخش اداری:</span>
              <span class="small  text-black"> تهران، بازار میرداماد، جنب دفینه، بازار میرداماد، ساختمان اداری، طبقه 4 واحد 412</span>
            </div>
            <div class="d-flex align-items-center gap-2 mb-2">
              <i class="fas fa-phone  me-2 text-burgundy"></i>
              <span class="text-nowrap text-black">آدرس فروشگاه:</span>
              <span class="small text-black"> فروشگاه های روژا</span>
            </div>
            <div class="d-flex align-items-center gap-2 mb-2">
              <i class="fas fa-envelope  me-2 text-burgundy"></i>
              <span  class="text-nowrap text-black">پست الکترونیکی</span>
              <span class="small text-black">online@rojagroup.com </span>
            </div>
          </div>

          <div class="d-flex gap-3 mb-3">
            <div class="text-center">
<!--              <img src="/certificate1.png" alt="Certificate" class="img-fluid" style="height: 60px;">-->
              <div class="small text-muted mt-1">نماد اعتماد الکترونیکی</div>
            </div>
            <div class="text-center">
<!--              <img src="/certificate2.png" alt="Certificate" class="img-fluid" style="height: 60px;">-->
              <div class="small text-muted mt-1">مجوز فروشگاه</div>
            </div>
            <div class="text-center">
<!--              <img src="/certificate3.png" alt="Certificate" class="img-fluid" style="height: 60px;">-->
              <div class="small text-muted mt-1">نماد کیفیت</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Description Section -->
      <div class="row">
        <div class="col-12">
          <div class="bg-white p-4 rounded shadow-sm">
            <h6 class="fw-bold mb-3">زیبا بمانید</h6>
            <p class="text-muted small mb-0">
              روژا شاپ یکی از معتبرترین فروشگاه‌های اینترنتی محصولات آرایشی،
              بهداشتی و عطر است که با هدف ارائه بهترین و باکیفیت‌ترین محصولات
              به مشتریان ایجاد شده است. فروشگاه آرایشی و بهداشتی روژاشاپ،
              مجموعه‌ای گسترده از برندهای معروف را در دسترس زیادی‌وستان قرار
              می‌دهد. شما می‌توانید انواع محصولات آرایشی و بهداشتی از جمله
              کرم‌ها، لوازم آرایش، عطرها و محصولات مراقبت از پوست و مو را در این
              فروشگاه آنلاین پیدا کنید. فروشگاه مقتدر خرید لوازم آرایشی و بهداشتی
              روژاشاپ خدماتی مانند مشاوره آنلاین و راهنمای خرید نیز ارائه می‌دهد تا
              مشتریان بتوانند بهترین انتخاب‌ها را داشته باشند. این فروشگاه و سایت
              خرید لوازم آرایشی با سیستم ارسال سریع و بسته‌بندی
              مناسب، سفارش دارد تا رضای مشتریان خود را جلب کند. شما می‌توانید با
              خیال راحت محصولات زیبایی خود را خرید کنید و از کیفیت بالای
              محصولات و خدمات بهره‌مند شوید.
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="row mt-4 pt-3 border-top">
        <div class="col-12 text-center">
          <p class="small text-muted mb-0">
            استفاده از مطالب فروشگاه اینترنتی روژا فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است.
            کلیه حقوق این سایت متعلق به شرکت رویان می باشد.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  direction: rtl;
  text-align: right;
}

.footer .list-unstyled li a:hover {
  color: #4D1634 !important;
  transition: color 0.3s ease;
}

.footer .btn-outline-secondary {
  border-color: #dee2e6;
}

.footer .btn-outline-secondary:hover {
  background-color: #4D1634;
  border-color: #4D1634;
  color: white;
}

.footer .bg-pink {
  border: 1px solid #DFBEAF;
}

@media (max-width: 768px) {
  .footer .col-md-6 {
    margin-bottom: 2rem;
  }

  .footer .d-flex.gap-3 {
    flex-direction: column;
    gap: 1rem !important;
  }
}
</style>