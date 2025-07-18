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
                {{ menu.title }}
              </a>
              <ul
                  @click.prevent="showSidebar = false"
                  :class="`sub-menu ${activeMenu === menu.title ? 'active' : ''}`"
              >
                <li v-for="(sub_m, index) in menu.dropdownMenu" :key="index">
                  <nuxt-link :href="`${sub_m.link}`">
                    {{ sub_m.title }}
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
import {defineComponent, ref} from "vue";
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
        link: "/shop",
        dropdown: false,
        link: "/special-offers",
        dropdownMenu: []
      },
      {
        title: "برندها",
        dropdown: true,
        dropdownMenu: [
          {link: '/brands/brand-1', title: 'برند 1'},
          {link: '/brands/brand-2', title: 'برند 2'},
          {link: '/brands/brand-3', title: 'برند 3'},
          {link: '/brands/brand-4', title: 'برند 4'},
          {link: '/brands/brand-5', title: 'برند 5'},
        ],
      },
      {
        title: "آرایشی",
        dropdown: true,
        dropdownMenu: [
          {link: '/shop', title: 'کرم پودر'},
          {link: '/shop', title: 'رژ لب'},
          {link: '/shop', title: 'ریمل'},
          {link: '/shop', title: 'سایه چشم'},
          {link: '/shop', title: 'رژگونه'},
          {link: '/shop', title: 'قلم مو'},
          {link: '/shop', title: 'پف آرایشی'},
        ],
      },
      {
        title: "مراقبت پوست",
        link: "/shop",
        dropdown: false,
        dropdownMenu: [],
      },
      {
        title: "بهداشت و مراقبت مو",
        link: "/shop",
        dropdown: false,
        dropdownMenu: [],
      },
      {
        title: "بهداشت دهان و دندان",
        link: "/shop",
        dropdown: false,
        dropdownMenu: [],
      },
      {
        title: "بهداشت خانه",
        link: "/shop",
        dropdown: false,
        dropdownMenu: [],
      },
      {
        title: "کودک",
        link: "/shop",
        dropdown: false,
        dropdownMenu: [],
      },
      {
        title: "مجله لاوورا",
        link: "/blog",
        dropdown: false,
        dropdownMenu: [
          {link: '/blog', title: 'نکات زیبایی'},
          {link: '/blog', title: 'سلامت'},
          {link: '/blog', title: 'سبک زندگی'},
          {link: '/blog', title: 'آموزش ها'},
          {link: '/blog', title: 'اخبار'},
        ],
      },
    ]);
    return {mobile_menus};
  },
});
</script>
