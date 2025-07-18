<template>
  <div>
    <!-- Promotional Banner -->
    <PromotionalBanner />

    <!-- Main Header -->
    <header class="new-header" :class="{ 'sticky': isSticky }">
      <!-- Top Header Section -->
      <div class="header-top">
        <div class="container-fluid">
          <div class="row align-items-center">
            <!-- Logo Section -->
            <div class="col-lg-3 col-md-4 col-6">
              <div class="logo-section">
                <nuxt-link href="/" class="logo-link">
                  <img src="~/assets/img/logo/lavora-logo.png" alt="لاوورا" class="header-logo-img">
                  <span class="header-logo-text">لاوورا</span>
                </nuxt-link>
              </div>
            </div>

            <!-- Search Section -->
            <div class="col-lg-6 col-md-4 d-none d-md-block">
              <div class="search-section">
                <form class="search-form" @submit.prevent="handleSearch">
                  <input
                      type="text"
                      class="search-input"
                      placeholder="عبارت مورد نظرتان را جهت دستیابی وارد نمایید"
                      v-model="searchQuery"
                  >
                  <button type="submit" class="search-btn">
                    <i class="fas fa-search"></i>
                  </button>
                </form>
              </div>
            </div>

            <!-- Action Section -->
            <div class="col-lg-3 col-md-4 col-6">
              <div class="header-actions">
                <div class="action-items">
                  <!-- User Account -->
                  <div class="action-item">
                    <a href="#" class="action-link" @click.prevent="handleUserAction">
                      <i class="fas fa-user"></i>
                      <span class="action-text">ورود/ثبت‌نام</span>
                    </a>
                  </div>

                  <!-- Shopping Cart -->
                  <div class="action-item cart-item">
                    <a href="#" class="action-link cart-link">
                      <i class="fas fa-shopping-cart"></i>
                      <span class="cart-count">{{ convertToPersianNumber(cart.cartProducts.length) }}</span>
                    </a>
                    <cart-mini/>
                  </div>

                  <!-- Mobile Menu Toggle -->
                  <div class="action-item mobile-toggle d-md-none">
                    <button class="mobile-menu-btn" @click="handleOffcanvas">
                      <i class="fas fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Search Row -->
          <div class="row d-md-none">
            <div class="col-12">
              <div class="mobile-search-section">
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
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <div class="header-nav">
        <div class="container-fluid">
          <nav class="main-navigation">
            <ul class="nav-menu d-none d-lg-flex">
              <li v-for="(item, index) in menuData" :key="index" class="nav-item" :class="{ 'has-dropdown': item.hasDropdown }">
                <nuxt-link :href="item.link" class="nav-link">
                  {{ item.title }}
                  <i v-if="item.hasDropdown" class="fas fa-angle-down dropdown-icon"></i>
                </nuxt-link>

                <!-- Dropdown Menu -->
                <div v-if="item.hasDropdown && !item.megamenu" class="dropdown-menu">
                  <ul class="dropdown-list">
                    <li v-for="(subItem, subIndex) in item.dropdownItems" :key="subIndex">
                      <nuxt-link :href="subItem.link" class="dropdown-link">
                        {{ subItem.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>

                <!-- Mega Menu -->
                <div v-if="item.hasDropdown && item.megamenu" class="mega-menu">
                  <div class="mega-menu-content">
                    <div class="mega-menu-columns">
                      <div
                          v-for="(column, colIndex) in item.dropdownItems"
                          :key="colIndex"
                          class="mega-menu-column"
                      >
                        <h6 class="mega-menu-title">{{ column.title }}</h6>
                        <ul class="mega-menu-list">
                          <li v-for="(subItem, subIndex) in column.dropdownMenu" :key="subIndex">
                            <nuxt-link :href="subItem.link" class="mega-menu-link">
                              {{ subItem.title }}
                            </nuxt-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <!-- Search Popup -->
    <search-popup ref="search_popup"/>

    <!-- Mobile Sidebar -->
    <updated-mobile-menu ref="mobileMenu"/>

    <!-- Login Modal -->
    <login-modal ref="loginModal"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import menuData from '~/mixins/menuData';
import PromotionalBanner from '~/components/common/PromotionalBanner.vue';
import CartMini from './header-com/CartMini.vue';
import SearchPopup from '~/components/common/modals/SearchPopup.vue';
import UpdatedMobileMenu from '~/components/common/UpdatedMobileMenu.vue';
import LoginModal from '~/components/common/modals/LoginModal.vue';
import { useGeneralStore } from '~/store/cart';
import { usePersianNumbers } from '~/composables/convertNumbers';

export default defineComponent({
  name: 'NewHeader',
  components: {
    PromotionalBanner,
    CartMini,
    SearchPopup,
    UpdatedMobileMenu,
    LoginModal,
  },
  mixins: [menuData],
  data() {
    return {
      searchQuery: '',
      isSticky: false,
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        // Navigate to search results page
        this.$router.push(`/search?q=${encodeURIComponent(this.searchQuery)}`);
      }
    },
    handleUserAction() {
      if (this.token) {
        // Handle logged in user actions
        this.$router.push('/profile');
      } else {
        // Open login modal
        const loginModal = this.$refs.loginModal as any;
        loginModal.openModal();
      }
    },
    handleOffcanvas() {
      const mobileMenu = this.$refs.mobileMenu as any;
      mobileMenu.OpenOffcanvas();
    },
    handleSticky() {
      if (window.scrollY > 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  setup() {
    const token = useCookie('authToken');
    const cart = useGeneralStore();
    const { convertToPersianNumber } = usePersianNumbers();

    return {
      token,
      cart,
      convertToPersianNumber,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleSticky);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleSticky);
  },
});
</script>

<style scoped>
/* Styles are handled in assets/css/new-header.css */
</style>