<template>
  <div>
    <!-- Mobile Menu Sidebar -->
    <div :class="`mobile-sidebar ${showSidebar ? 'sidebar-opened' : ''}`">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <nuxt-link href="/" @click="closeSidebar">
            <img src="~/assets/img/logo/lavora-logo.png" alt="لاوورا" class="sidebar-logo-img">
            <span class="sidebar-logo-text">لاوورا</span>
          </nuxt-link>
        </div>
        <button class="sidebar-close" @click="closeSidebar">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="sidebar-content">
        <!-- User Section -->
        <div class="user-section">
          <div v-if="token" class="user-info">
            <i class="fas fa-user-circle"></i>
            <span>حساب کاربری</span>
          </div>
          <div v-else class="user-login">
            <button class="login-btn" @click="handleLogin">
              <i class="fas fa-sign-in-alt"></i>
              <span>ورود / ثبت نام</span>
            </button>
          </div>
        </div>

        <!-- Search Section -->
        <div class="sidebar-search">
          <form class="search-form" @submit.prevent="handleSearch">
            <input
                type="text"
                class="search-input"
                placeholder="جستجو در لاوورا..."
                v-model="searchQuery"
            >
            <button type="submit" class="search-btn">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>

        <!-- Navigation Menu -->
        <nav class="sidebar-nav">
          <ul class="nav-list">
            <li
                v-for="(item, index) in menuItems"
                :key="index"
                class="nav-item"
                :class="{ 'has-children': item.hasDropdown }"
            >
              <div class="nav-link-wrapper">
                <nuxt-link
                    v-if="!item.hasDropdown"
                    :href="item.link"
                    class="nav-link"
                    @click="closeSidebar"
                >
                  <span class="nav-text">{{ item.title }}</span>
                </nuxt-link>

                <div v-else class="nav-link expandable" @click="toggleSubmenu(item.title)">
                  <span class="nav-text">{{ item.title }}</span>
                  <i
                      class="fas fa-chevron-down toggle-icon"
                      :class="{ 'rotated': activeSubmenu === item.title }"
                  ></i>
                </div>
              </div>

              <!-- Submenu -->
              <div
                  v-if="item.hasDropdown"
                  class="submenu"
                  :class="{ 'submenu-opened': activeSubmenu === item.title }"
              >
                <ul class="submenu-list">
                  <template v-if="!item.megamenu">
                    <li v-for="(subItem, subIndex) in item.dropdownItems" :key="subIndex">
                      <nuxt-link
                          :href="subItem.link"
                          class="submenu-link"
                          @click="closeSidebar"
                      >
                        {{ subItem.title }}
                      </nuxt-link>
                    </li>
                  </template>

                  <template v-else>
                    <li v-for="(column, colIndex) in item.dropdownItems" :key="colIndex" class="submenu-column">
                      <div class="submenu-title">{{ column.title }}</div>
                      <ul class="submenu-column-list">
                        <li v-for="(subItem, subIndex) in column.dropdownMenu" :key="subIndex">
                          <nuxt-link
                              :href="subItem.link"
                              class="submenu-link"
                              @click="closeSidebar"
                          >
                            {{ subItem.title }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </template>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <!-- Contact Info -->
        <div class="sidebar-footer">
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <span>تماس با ما: ۰۲۱-۱۲۳۴۵۶۷۸</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <span>info@lavora.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    <div
        :class="`sidebar-backdrop ${showSidebar ? 'backdrop-visible' : ''}`"
        @click="closeSidebar"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UpdatedMobileMenu',
  data() {
    return {
      showSidebar: false,
      activeSubmenu: '',
      searchQuery: '',
      menuItems: [
        {
          title: 'پیشنهاد ویژه',
          link: '/special-offers',
          hasDropdown: false,
        },
        {
          title: 'برندها',
          link: '/brands',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/brands/brand-1', title: 'برند 1' },
            { link: '/brands/brand-2', title: 'برند 2' },
            { link: '/brands/brand-3', title: 'برند 3' },
            { link: '/brands/brand-4', title: 'برند 4' },
            { link: '/brands/brand-5', title: 'برند 5' },
          ]
        },
        {
          title: 'آرایشی',
          link: '/cosmetics',
          hasDropdown: true,
          megamenu: true,
          dropdownItems: [
            {
              title: 'محصولات آرایشی',
              dropdownMenu: [
                { link: '/cosmetics/foundation', title: 'کرم پودر' },
                { link: '/cosmetics/lipstick', title: 'رژ لب' },
                { link: '/cosmetics/mascara', title: 'ریمل' },
                { link: '/cosmetics/eyeshadow', title: 'سایه چشم' },
                { link: '/cosmetics/blush', title: 'رژگونه' },
              ]
            },
            {
              title: 'ابزار آرایشی',
              dropdownMenu: [
                { link: '/cosmetics/brushes', title: 'قلم مو' },
                { link: '/cosmetics/sponges', title: 'پف آرایشی' },
                { link: '/cosmetics/mirrors', title: 'آینه' },
                { link: '/cosmetics/bags', title: 'کیف آرایشی' },
              ]
            },
          ]
        },
        {
          title: 'مراقبت پوست',
          link: '/skincare',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/skincare/cleansers', title: 'پاک کننده' },
            { link: '/skincare/moisturizers', title: 'مرطوب کننده' },
            { link: '/skincare/serums', title: 'سرم' },
            { link: '/skincare/masks', title: 'ماسک' },
            { link: '/skincare/sunscreen', title: 'ضد آفتاب' },
          ]
        },
        {
          title: 'بهداشت و مراقبت مو',
          link: '/hair-care',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/hair-care/shampoo', title: 'شامپو' },
            { link: '/hair-care/conditioner', title: 'نرم کننده' },
            { link: '/hair-care/hair-mask', title: 'ماسک مو' },
            { link: '/hair-care/styling', title: 'استایلینگ' },
            { link: '/hair-care/treatments', title: 'درمان مو' },
          ]
        },
        {
          title: 'بهداشت دهان و دندان',
          link: '/oral-care',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/oral-care/toothpaste', title: 'خمیر دندان' },
            { link: '/oral-care/toothbrush', title: 'مسواک' },
            { link: '/oral-care/mouthwash', title: 'دهان شوی' },
            { link: '/oral-care/dental-floss', title: 'نخ دندان' },
          ]
        },
        {
          title: 'بهداشت خانه',
          link: '/home-care',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/home-care/detergents', title: 'مواد شوینده' },
            { link: '/home-care/disinfectants', title: 'ضد عفونی کننده' },
            { link: '/home-care/air-fresheners', title: 'خوشبو کننده' },
            { link: '/home-care/cleaning-tools', title: 'ابزار نظافت' },
          ]
        },
        {
          title: 'کودک',
          link: '/kids',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/kids/baby-care', title: 'مراقبت نوزاد' },
            { link: '/kids/diapers', title: 'پوشک' },
            { link: '/kids/baby-food', title: 'غذای کودک' },
            { link: '/kids/toys', title: 'اسباب بازی' },
            { link: '/kids/clothing', title: 'لباس کودک' },
          ]
        },
        {
          title: 'مجله لاوورا',
          link: '/magazine',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/magazine/beauty-tips', title: 'نکات زیبایی' },
            { link: '/magazine/health', title: 'سلامت' },
            { link: '/magazine/lifestyle', title: 'سبک زندگی' },
            { link: '/magazine/tutorials', title: 'آموزش ها' },
            { link: '/magazine/news', title: 'اخبار' },
          ]
        },
      ]
    };
  },
  methods: {
    OpenOffcanvas() {
      this.showSidebar = true;
      if (process.client) {
        document.body.style.overflow = 'hidden';
      }
    },
    closeSidebar() {
      this.showSidebar = false;
      this.activeSubmenu = '';
      if (process.client) {
        document.body.style.overflow = 'auto';
      }
    },
    toggleSubmenu(title: string) {
      if (this.activeSubmenu === title) {
        this.activeSubmenu = '';
      } else {
        this.activeSubmenu = title;
      }
    },
    handleLogin() {
      // Handle login logic
      this.closeSidebar();
      // You can emit event or call parent method
      this.$emit('login-clicked');
    },
    handleSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push(`/search?q=${encodeURIComponent(this.searchQuery)}`);
        this.closeSidebar();
      }
    }
  },
  setup() {
    const token = useCookie('authToken');
    return { token };
  },
  beforeUnmount() {
    if (process.client) {
      document.body.style.overflow = 'auto';
    }
  },
});
</script>

<style scoped>
/* Styles are handled in assets/css/mobile-menu.css */
</style>