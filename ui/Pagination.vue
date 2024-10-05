<template>
  <div
      :class="`shop-pagination-wrapper ${style_2?'':'d-md-flex justify-content-between align-items-center'}`"
  >
    <div class="basic-pagination">
      <ul>
        <li class="page-item"
            :class="{'disabled': (currPage === 1)}"
            @click.prevent="setPage(currPage -1)">
          <a href="#">
            <i class="fal fa-angle-right"></i>
          </a>
        </li>

        <li class="page-item"
            v-for="n in totalPage"
            @click.prevent="setPage(n)" :key="n">
          <a :class="[`page-link`, {'active': (currPage === (n))}]" href="">
            {{ n }}
          </a>
        </li>
        <li class="page-item"
            :class="{'disabled': (currPage === totalPage)}"
            @click.prevent="setPage(currPage + 1)">
          <a href="#">
            <i class="fal fa-angle-left"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {

    totalPage: {
      type: Number,
      default: 8,
    },
    paginationClass: {
      type: String,
    },
    currPage: {
      type: Number,
      default: 1,
    },
    style_2: {
      type: Boolean,
      default: false,
    }
  },


  methods: {
    setPage(idx: number) {
      if (idx <= 0 || idx > this.totalPage || idx === this.currPage) {
        return;
      }
      const page = idx
      console.log(idx)
      // this.currPage = idx;
      window.scrollTo(0, 0);
      this.$emit(
          "paginatedData",
          page,
      );
    },
  },

  setup() {
    return {};
  },
});
</script>

