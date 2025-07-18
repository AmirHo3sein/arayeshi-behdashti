export const useBreadcrumbStore = defineStore('breadcrumb', {
    state: () => ({
        categoryMappings: {},
        brandMappings: {},
        initialized: false
    }),

    actions: {
        // Set category mappings (called from your existing filter components)
        setCategoryMappings(categories) {
            const mappings = {};
            categories.forEach(category => {
                mappings[category.slug] = category.title;
                // Also map children if they exist
                if (category.children) {
                    category.children.forEach(child => {
                        mappings[child.slug] = child.title;
                    });
                }
            });
            this.categoryMappings = mappings;
        },

        // Set brand mappings (called from your existing filter components)
        setBrandMappings(brands) {
            const mappings = {};
            brands.forEach(brand => {
                mappings[brand.slug] = brand.title;
            });
            this.brandMappings = mappings;
        },

        // Get category title by slug
        getCategoryTitle(slug) {
            return this.categoryMappings[slug] || slug;
        },

        // Get brand title by slug
        getBrandTitle(slug) {
            return this.brandMappings[slug] || slug;
        },

        // Initialize mappings if not already done
        async initializeMappings() {
            if (this.initialized) return;

            try {
                // Fetch categories
                const categoryOptions = { method: 'POST' };
                const { data: categoryData } = await useMyFetch('product/category/list', categoryOptions);

                if (categoryData.value?.data?.list) {
                    this.setCategoryMappings(categoryData.value.data.list);
                }

                // Fetch brands
                const brandOptions = {
                    method: 'POST',
                    body: { key: "brand" }
                };
                const { data: brandData } = await useMyFetch('product/brand/list', brandOptions);

                if (brandData.value?.data?.list) {
                    this.setBrandMappings(brandData.value.data.list);
                }

                this.initialized = true;
            } catch (error) {
                console.error('Failed to initialize mappings:', error);
            }
        }
    },

    getters: {
        isInitialized: (state) => state.initialized
    }
});