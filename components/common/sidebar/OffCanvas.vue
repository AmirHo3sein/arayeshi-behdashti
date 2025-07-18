<template>
  <section
      :class="`extra__info transition-3 ${showSidebar ? 'info-opened' : ''}`"
  >
    <div class="extra__info-inner">
      <div class="extra__info-close text-end" @click="showSidebar = false">
        <a
            @click.prevent="showSidebar = false"
            href="#"
            class="extra__info-close-btn"
        >
          <i class="fal fa-times"></i>
        </a>
      </div>

      <!-- Logo in mobile menu -->
      <div class="extra__info-logo text-center mb-4">
        <nuxt-link href="/" @click="showSidebar = false">
          <img src="~/assets/img/logo/lavora-logo.png" alt="لاوورا" class="mobile-logo-img">
          <h4 class="white-color mobile-logo-text">لاوورا</h4>
        </nuxt-link>
      </div>

      <!-- side-mobile-menu start -->
      <nav class="side-mobile-menu d-block d-lg-none mm-menu">
        <ul>
          <template v-for="(menu, i) in mobile_menus" :key="i">
            <li
                v-if="menu.dropdownMenu"
                :class="`menu-item-has-children has-droupdown
              ${activeMenu === menu.title ? 'active' : ''}`"
            >
              <a @click.prevent="handleOpenMenu(menu.title)">
                {{menu.title}}
              </a>
              <ul
                  @click.prevent="showSidebar = false"
                  :class="`sub-menu ${activeMenu === menu.title ? 'active' : ''}`"
              >
                <li v-for="(sub_m, index) in menu.dropdownMenu" :key="index">
                  <nuxt-link :href="`${sub_m.link}`">
                    {{sub_m.title}}
                  </nuxt-link>
                </li>
              </ul>
            </li>

            <li v-if="!menu.dropdownMenu">
              <nuxt-link :href="`${menu.link}`">{{ menu.title }}</nuxt-link>
            </li>
          </template>
        </ul>
      </nav>
      <!-- side-mobile-menu end -->
    </div>
  </section>

  <!--  body overlay  -->
  <div
      @click="showSidebar = false"
      :class="`body-overlay transition-3 ${showSidebar ? 'opened' : ''}`"
  ></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import menuData from "~~/mixins/menuData";

// menu type
type MenuDataType = {
  title: string;
  link?: string;
  dropdown?: boolean;
  dropdownMenu?: {
    link: string;
    title: string;
  }[];
};

export default defineComponent({
  mixins: [menuData],
  data() {
    return {
      activeMenu: "",
      showSidebar: false,
    };
  },
  methods: {
    OpenOffcanvas() {
      this.showSidebar = true;
    },
    handleOpenMenu(navTitle: string) {
      if (navTitle === this.activeMenu) {
        this.activeMenu = "";
      } else {
        this.activeMenu = navTitle;
      }
    },
  },
  setup() {
    const mobile_menus = ref<MenuDataType[]>([
      {
        title: "پیشنهاد ویژه",
        dropdown: false,
        link: "/special-offers",
        dropdownMenu: []
      },
      {
        title: "برندها",
        dropdown: true,
        dropdownMenu: [
          { link: '/brands/brand-1', title: 'برند 1' },
          { link: '/brands/brand-2', title: 'برند 2' },
          { link: '/brands/brand-3', title: 'برند 3' },
          { link: '/brands/brand-4', title: 'برند 4' },
          { link: '/brands/brand-5', title: 'برند 5' },
        ],
      },
      {
        title: "آرایشی",
        dropdown: true,
        dropdownMenu: [
          { link: '/cosmetics/foundation', title: 'کرم پودر' },
          { link: '/cosmetics/lipstick', title: 'رژ لب' },
          { link: '/cosmetics/mascara', title: 'ریمل' },
          { link: '/cosmetics/eyeshadow', title: 'سایه چشم' },
          { link: '/cosmetics/blush', title: 'رژگونه' },
          { link: '/cosmetics/brushes', title: 'قلم مو' },
          { link: '/cosmetics/sponges', title: 'پف آرایشی' },
        ],
      },
      {
        title: "مراقبت پوست",
        dropdown: true,
        dropdownMenu: [
          { link: '/skincare/cleansers', title: 'پاک کننده' },
          { link: '/skincare/moisturizers', title: 'مرطوب کننده' },
          { link: '/skincare/serums', title: 'سرم' },
          { link: '/skincare/masks', title: 'ماسک' },
          { link: '/skincare/sunscreen', title: 'ضد آفتاب' },
          { link: '/skincare/toners', title: 'تونر' },
        ],
      },
      {
        title: "بهداشت و مراقبت مو",
        dropdown: true,
        dropdownMenu: [
          { link: '/hair-care/shampoo', title: 'شامپو' },
          { link: '/hair-care/conditioner', title: 'نرم کننده' },
          { link: '/hair-care/hair-mask', title: 'ماسک مو' },
          { link: '/hair-care/styling', title: 'استایلینگ' },
          { link: '/hair-care/treatments', title: 'درمان مو' },
          { link: '/hair-care/hair-tools', title: 'ابزار مو' },
        ],
      },
      {
        title: "بهداشت دهان و دندان",
        dropdown: true,
        dropdownMenu: [
          { link: '/oral-care/toothpaste', title: 'خمیر دندان' },
          { link: '/oral-care/toothbrush', title: 'مسواک' },
          { link: '/oral-care/mouthwash', title: 'دهان شوی' },
          { link: '/oral-care/dental-floss', title: 'نخ دندان' },
          { link: '/oral-care/whitening', title: 'سفید کننده' },
        ],
      },
      {
        title: "بهداشت خانه",
        dropdown: true,
        dropdownMenu: [
          { link: '/home-care/detergents', title: 'مواد شوینده' },
          { link: '/home-care/disinfectants', title: 'ضد عفونی کننده' },
          { link: '/home-care/air-fresheners', title: 'خوشبو کننده' },
          { link: '/home-care/cleaning-tools', title: 'ابزار نظافت' },
          { link: '/home-care/laundry', title: 'لباسشویی' },
        ],
      },
      {
        title: "کودک",
        dropdown: true,
        dropdownMenu: [
          { link: '/kids/baby-care', title: 'مراقبت نوزاد' },
          { link: '/kids/diapers', title: 'پوشک' },
          { link: '/kids/baby-food', title: 'غذای کودک' },
          { link: '/kids/toys', title: 'اسباب بازی' },
          { link: '/kids/clothing', title: 'لباس کودک' },
          { link: '/kids/hygiene', title: 'بهداشت کودک' },
        ],
      },
      {
        title: "مجله لاوورا",
        dropdown: true,
        dropdownMenu: [
          { link: '/magazine/beauty-tips', title: 'نکات زیبایی' },
          { link: '/magazine/health', title: 'سلامت' },
          { link: '/magazine/lifestyle', title: 'سبک زندگی' },
          { link: '/magazine/tutorials', title: 'آموزش ها' },
          { link: '/magazine/news', title: 'اخبار' },
        ],
      },
    ]);
    return { mobile_menus };
  },
});
</script>

<style scoped>
.mobile-logo-img {
  max-height: 40px;
  width: auto;
}

.mobile-logo-text {
  display: none;
}

/* Show text logo if image fails to load */
.mobile-logo-img:not([src]), .mobile-logo-img[src=""] {
  display: none;
}

.mobile-logo-img:not([src]) + .mobile-logo-text, .mobile-logo-img[src=""] + .mobile-logo-text {
  display: block;
}

.extra__info-logo {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.extra__info-logo a {
  display: block;
  text-decoration: none;
}
</style>