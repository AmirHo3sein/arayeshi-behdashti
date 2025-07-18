<template>
  <section>
    <div class="container mt-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="text-muted">
            <div class="page__title-breadcrumb">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-start">
                  <li
                      v-for="(crumb, index) in breadcrumbs"
                      :key="index"
                      class=""
                      :class="{ 'active': index === breadcrumbs.length - 1 }"
                      :aria-current="index === breadcrumbs.length - 1 ? 'page' : null"
                  >
                    <nuxt-link
                        v-if="crumb.path && index !== breadcrumbs.length - 1"
                        :to="crumb.path"
                    >
                      {{ crumb.title }}
                      <i class="fa fa-solid fa-chevron-left px-1"></i>
                    </nuxt-link>
                    <span v-else>{{ crumb.title }}</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bg from '~/assets/img/bg/img.png';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  customBreadcrumbs: {
    type: Array,
    default: () => []
  }
});

const route = useRoute();

const { generateBreadcrumbs } = useBreadcrumbs();

// Generate breadcrumbs based on current route
const breadcrumbs = ref([]);

// Initialize breadcrumbs
onMounted(async () => {
  if (props.customBreadcrumbs.length > 0) {
    breadcrumbs.value = props.customBreadcrumbs;
  } else {
    breadcrumbs.value = await generateBreadcrumbs(route, props.title);
  }
});

// Watch for route changes to update breadcrumbs
watch(() => [route.path, route.query], async () => {
  if (props.customBreadcrumbs.length === 0) {
    breadcrumbs.value = await generateBreadcrumbs(route, props.title);
  }
}, { deep: true });
</script>