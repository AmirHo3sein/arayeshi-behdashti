<template>
  <!--  <client-only>-->
  <header>
    <PromotionalBanner/>
    <div id="header-sticky" :class="`header__area header__white box-25 ${isSticky ? 'sticky' : ''}`" class="border-bottom">

      <div>

        <div class="d-flex justify-content-between position-relative">
          <div @click.prevent="handleOffcanvas" class="mobile-menu-btn d-lg-none">
            <a href="#" class="mobile-menu-toggle"><i class="fas fa-bars"></i></a>
          </div>
          <div class="d-flex">
            <div class="logo">
              <nuxt-link href="/">
                <img src="~/assets/img/logo/lavora-logo.png" alt="logo" style="width: 150px">
              </nuxt-link>
            </div>
            <div class="search-container mt-3" >
              <div class="border rounded-lg d-flex gap-2 align-items-center">
                <button class="btn btn-sm mt-1">
                      <i class="fas fa-search"></i>
                  </button>
                <input type="text" class="searchbar-input" placeholder="جستجو ...">

              </div>
            </div>
          </div>


          <div>
            <div
                class="header__right p-relative d-flex justify-content-between justify-content-sm-end align-items-center ">

              <div class="header__action">
                <ul>
                  <!--                    <li>-->
                  <!--                      <a @click.prevent="handleOpenSearchBar" href="#" class="search-toggle">-->
                  <!--                        <i class="fas fa-search"></i>-->
                  <!--                      </a>-->
                  <!--                    </li>-->
                  <li v-if="token">
                    <a href="#"><i class="fas fa-user"></i>
                    </a>
                    <!-- extra info start -->
                    <extra-info/>
                    <!-- extra info end -->
                  </li>
                  <li v-else>

                    <button class="profile__info-btn" type="button" data-bs-toggle="modal"
                            data-bs-target="#login_modal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" class="text-black mb-2"
                           viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M9 2h9c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-2h2v2h9V4H9v2H7V4c0-1.1.9-2 2-2"></path>
                        <path fill="currentColor"
                              d="M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67z"></path>
                      </svg>
                      <span class="text-black loign-text"> ورود/ ثبت نام</span>
                    </button>


                  </li>
                  <li>
                    <a href="#" class="cart">
                      <i class="fas fa-cart-plus"></i>
                      <span class="cart-number-2">{{ convertToPersianNumber(cart.totalCount) }}</span>
                    </a>
                    <!-- cart mini start -->
                    <cart-mini/>
                    <!-- cart mini end -->
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="container-fluid">
        <div class="row  align-items-center">
          <div class="">
            <div class="main-menu d-none d-lg-block p-relative">
              <nav>
                <menus/>
              </nav>
            </div>
          </div>


        </div>
      </div>
    </div>
  </header>
  <LoginModal/>

  <!-- search popup start -->
  <search-popup ref="search_popup"/>
  <!-- search popup end -->

  <!-- off canvas start -->
  <off-canvas ref="offcanvas"/>
  <!-- off canvas end -->
  <!--  </client-only>-->
</template>

<script lang="ts">
// external
import {defineComponent} from 'vue';
// import {useCartStore} from '~~/store/useCart';

// internal
import Menus from './Menus.vue';
import CartMini from './header-com/CartMini.vue';
import ExtraInfo from './header-com/ExtraInfo.vue';
import SearchPopup from '~~/components/common/modals/SearchPopup.vue';
import OffCanvas from '~~/components/common/sidebar/OffCanvas.vue';
import LoginModal from "~/components/common/modals/LoginModal.vue";
import {useGeneralStore} from "~/store/cart";
import {usePersianNumbers} from "~/composables/convertNumbers";
import PromotionalBanner from "~/components/common/PromotionalBanner.vue";

// interface
interface SearchPopupComponentRef {
  openSearchPopup(): void
}

interface OffCanvasComponentRef {
  OpenOffcanvas(): void
}

export default defineComponent({
  components: {PromotionalBanner, LoginModal, Menus, CartMini, ExtraInfo, SearchPopup, OffCanvas},
  data() {
    return {
      isSticky: false,
      showSearch: false,
    }
  },
  methods: {
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    handleOpenSearchBar() {
      const searchPopupRef = this.$refs.search_popup as SearchPopupComponentRef
      searchPopupRef.openSearchPopup()
    },
    handleOffcanvas() {
      const offCanvas = this.$refs.offcanvas as OffCanvasComponentRef
      offCanvas.OpenOffcanvas()
    }
  },
  setup() {
    // const state = useCartStore();
    const token = useCookie('authToken')
    const cart = useGeneralStore()
    const {convertToPersianNumber} = usePersianNumbers()
    return {token, cart, convertToPersianNumber}
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
})
</script>
