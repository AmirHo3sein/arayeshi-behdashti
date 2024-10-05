<template>
  <layout :transparent="true">
    <breadcrumb-area title="حساب کاربری" subtitle="حساب کاربری"/>
    <profile-area/>
    <profile-menu-area/>
  </layout>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Layout from "~/layout/Layout.vue";
import BreadcrumbArea from "~/components/common/breadcrumb/BreadcrumbArea.vue";
import ProfileArea from "~/components/profile/ProfileArea.vue";
import ProfileMenuArea from "~/components/profile/ProfileMenuArea.vue";

useHead({
  title: "Account",
});
</script>
