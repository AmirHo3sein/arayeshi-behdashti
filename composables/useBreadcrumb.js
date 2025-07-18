import {useBreadcrumbStore} from "~/store/breadcrumb.js";

export const useBreadcrumbs = () => {
    const breadcrumbStore = useBreadcrumbStore();

    // Define route mappings for Persian titles
    const routeMappings = {
        '/': 'لاوورا',
        '/shop': 'فروشگاه',
        '/product-details': 'فروشگاه',
        '/cart': 'سبد خرید',
        '/checkout': 'تسویه حساب',
        '/account': 'حساب کاربری',
        '/wishlist': 'لیست علاقه‌مندی‌ها',
        '/blog': 'وبلاگ',
        '/contact': 'تماس با ما',
        '/about': 'درباره ما',
        '/register': 'ثبت نام',
        '/login': 'ورود'
    };

    // Generate breadcrumbs from current route with query support
    const generateBreadcrumbs = async (route, customTitle = null) => {
        // Ensure mappings are initialized
        await breadcrumbStore.initializeMappings();

        const pathArray = route.path.split('/').filter(path => path);
        const breadcrumbArray = [];

        // Always start with لاوورا
        breadcrumbArray.push({
            title: 'لاوورا',
            path: '/',
            slug: null
        });

        // Handle query parameters for shop page
        if (route.path === '/shop') {
            breadcrumbArray.push({
                title: 'فروشگاه',
                path: '/shop',
                slug: null
            });

            // Add category breadcrumb if cat query exists
            if (route.query?.cat) {
                const categoryTitle = breadcrumbStore.getCategoryTitle(route.query.cat);
                breadcrumbArray.push({
                    title: categoryTitle,
                    path: null, // Last item, no link
                    slug: route.query.cat
                });
            }
            // Add brand breadcrumb if brand query exists (and no category)
            else if (route.query?.brand) {
                const brandTitle = breadcrumbStore.getBrandTitle(route.query.brand);
                breadcrumbArray.push({
                    title: `برند: ${brandTitle}`,
                    path: null, // Last item, no link
                    slug: route.query.brand
                });
            }

            return breadcrumbArray;
        }

        // Generate breadcrumbs from route path
        pathArray.forEach((path, index) => {
            const routePath = '/' + pathArray.slice(0, index + 1).join('/');

            let title = '';
            switch (path) {
                case 'shop':
                    title = 'فروشگاه';
                    break;
                case 'product-details':
                    title = 'فروشگاه';
                    break;
                case 'cart':
                    title = 'سبد خرید';
                    break;
                case 'checkout':
                    title = 'تسویه حساب';
                    break;
                case 'account':
                    title = 'حساب کاربری';
                    break;
                case 'wishlist':
                    title = 'لیست علاقه‌مندی‌ها';
                    break;
                case 'blog':
                    title = 'وبلاگ';
                    break;
                case 'contact':
                    title = 'تماس با ما';
                    break;
                case 'about':
                    title = 'درباره ما';
                    break;
                default:
                    // For dynamic routes like product IDs, use the provided title or subtitle
                    title = customTitle || path;
            }

            breadcrumbArray.push({
                title,
                path: index === pathArray.length - 1 ? null : routePath,
                slug: null
            });
        });

        return breadcrumbArray;
    };

    // Create breadcrumbs for product with category context
    const createProductBreadcrumbs = async (productName, categorySlug = null, brandSlug = null) => {
        await breadcrumbStore.initializeMappings();

        const breadcrumbs = [
            { title: 'لاوورا', path: '/', slug: null },
            { title: 'فروشگاه', path: '/shop', slug: null }
        ];

        if (categorySlug) {
            const categoryTitle = breadcrumbStore.getCategoryTitle(categorySlug);
            breadcrumbs.push({
                title: categoryTitle,
                path: `/shop?cat=${categorySlug}`,
                slug: categorySlug
            });
        } else if (brandSlug) {
            const brandTitle = breadcrumbStore.getBrandTitle(brandSlug);
            breadcrumbs.push({
                title: `برند: ${brandTitle}`,
                path: `/shop?brand=${brandSlug}`,
                slug: brandSlug
            });
        }

        breadcrumbs.push({
            title: productName,
            path: null,
            slug: null
        });

        return breadcrumbs;
    };

    // Create breadcrumbs for category pages
    const createCategoryBreadcrumbs = async (categorySlug, subcategorySlug = null) => {
        await breadcrumbStore.initializeMappings();

        const categoryTitle = breadcrumbStore.getCategoryTitle(categorySlug);
        const breadcrumbs = [
            { title: 'لاوورا', path: '/', slug: null },
            { title: 'فروشگاه', path: '/shop', slug: null },
            {
                title: categoryTitle,
                path: subcategorySlug ? `/shop?cat=${categorySlug}` : null,
                slug: categorySlug
            }
        ];

        if (subcategorySlug) {
            const subcategoryTitle = breadcrumbStore.getCategoryTitle(subcategorySlug);
            breadcrumbs.push({
                title: subcategoryTitle,
                path: null,
                slug: subcategorySlug
            });
        }

        return breadcrumbs;
    };

    // Create breadcrumbs for brand pages
    const createBrandBreadcrumbs = async (brandSlug) => {
        await breadcrumbStore.initializeMappings();

        const brandTitle = breadcrumbStore.getBrandTitle(brandSlug);
        return [
            { title: 'لاوورا', path: '/', slug: null },
            { title: 'فروشگاه', path: '/shop', slug: null },
            {
                title: `برند: ${brandTitle}`,
                path: null,
                slug: brandSlug
            }
        ];
    };

    const createAccountBreadcrumbs = (pageTitle) => {
        return [
            { title: 'لاوورا', path: '/', slug: null },
            { title: 'حساب کاربری', path: '/account', slug: null },
            { title: pageTitle, path: null, slug: null }
        ];
    };

    return {
        generateBreadcrumbs,
        createProductBreadcrumbs,
        createCategoryBreadcrumbs,
        createBrandBreadcrumbs,
        createAccountBreadcrumbs,
        getCategoryTitle: breadcrumbStore.getCategoryTitle,
        getBrandTitle: breadcrumbStore.getBrandTitle,
        routeMappings
    };
};