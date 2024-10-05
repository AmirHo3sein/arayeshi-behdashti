<script setup lang="ts">

const emit = defineEmits(['handleResetFilters'])

function handleResetFilters(){
  emit("handleResetFilters")
}
</script>



<template>
  <div class="reset-button mt-20 mb-30">
    <button class="os-btn os-btn-black" @click="handleResetFilters">
      حدف فیلترها
    </button>
  </div>
</template>

