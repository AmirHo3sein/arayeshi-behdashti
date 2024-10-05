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
    const mobile_menus = ref<MenuDataType[]>(
        [
      {
        title: "خانه",
        dropdown: false,
        dropdownMenu: [

        ],
      },
      {
        title: "محصولات",
        dropdown: true,
        dropdownMenu: [
          { link: '/shop', title: 'تست' },
          { link: '/shop', title: 'تست' },
          { link: '/shop', title: 'تست' },
          { link: '/shop', title: 'تست' },
          { link: '/shop', title: 'تست' },
          { link: '/shop', title: 'تست' },
          { link: '/shop', title: 'تست' },
        ],
      },
      {
        title: "صفحات",
        dropdown: true,
        dropdownMenu: [
          { link: '/shop', title: 'تست' },
          { link: '/shop', title: 'تست' },
          { link: '/shop', title: 'تست' },
          { link: '/shop', title: 'تست' },
          { link: '/shop', title: 'تست' },
          { link: '/shop', title: 'تست' },
          { link: '/shop', title: 'تست' },
        ],
      },
      {
        title: "وبلاگ",
        dropdown: true,
        dropdownMenu: [
          { link: "/blog", title: "وبلاگ" },
        ],
      },
      {
        title: "تماس با ما",
        dropdown: false,
        link: "/contact",
      },
    ]);
    return { mobile_menus };
  },
});
</script>
