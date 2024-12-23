import {type menuType} from "~/types/menuType";

export default {
    data() {
        return {
            menuData:
                [
                    {
                        link: '/',
                        title: 'خانه',
                        // hasDropdown: true,
                        // megamenu: false,
                        // dropdownItems: [
                        //   { link: '/', title: 'Home Style 1' },
                        //   { link: '/home-2', title: 'Home Style 2' },
                        //   { link: '/home-3', title: 'Home Style 3' },
                        //   { link: '/home-4', title: 'Home Style 4' },
                        //   { link: '/home-5', title: 'Home Style 5' },
                        //   { link: '/home-6', title: 'Home Style 6' },
                        //   { link: '/home-7', title: 'Home Style 7' },
                        // ]
                    },
                    {
                        link: '/shop',
                        title: 'آرایشی',
                        hasDropdown: true,
                        megamenu: true,
                        dropdownItems: [
                            {
                                link: '/shop',
                                title: 'دسته بندی محصولات',
                                dropdownMenu: [
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                ]
                            },
                            {
                                link: '/shop',
                                title: 'صفحات',
                                dropdownMenu: [
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                ]
                            },
                            {
                                link: '/shop',
                                title: 'ایتم ها',
                                dropdownMenu: [
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                    {link: '/shop', title: 'تست'},
                                ]
                            },
                        ]
                    },
                    {
                        link: '/',
                        title: 'بهداشت شخصی',
                        // hasDropdown: true,
                        // megamenu: false,
                        // dropdownItems: [
                        //   { link: '/', title: 'Home Style 1' },
                        //   { link: '/home-2', title: 'Home Style 2' },
                        //   { link: '/home-3', title: 'Home Style 3' },
                        //   { link: '/home-4', title: 'Home Style 4' },
                        //   { link: '/home-5', title: 'Home Style 5' },
                        //   { link: '/home-6', title: 'Home Style 6' },
                        //   { link: '/home-7', title: 'Home Style 7' },
                        // ]
                    },
                    {
                        link: '/',
                        title: 'مراقبت پوست',
                        // hasDropdown: true,
                        // megamenu: false,
                        // dropdownItems: [
                        //   { link: '/', title: 'Home Style 1' },
                        //   { link: '/home-2', title: 'Home Style 2' },
                        //   { link: '/home-3', title: 'Home Style 3' },
                        //   { link: '/home-4', title: 'Home Style 4' },
                        //   { link: '/home-5', title: 'Home Style 5' },
                        //   { link: '/home-6', title: 'Home Style 6' },
                        //   { link: '/home-7', title: 'Home Style 7' },
                        // ]
                    },
                    {
                        link: '/',
                        title: 'مراقبت مو',
                        // hasDropdown: true,
                        // megamenu: false,
                        // dropdownItems: [
                        //   { link: '/', title: 'Home Style 1' },
                        //   { link: '/home-2', title: 'Home Style 2' },
                        //   { link: '/home-3', title: 'Home Style 3' },
                        //   { link: '/home-4', title: 'Home Style 4' },
                        //   { link: '/home-5', title: 'Home Style 5' },
                        //   { link: '/home-6', title: 'Home Style 6' },
                        //   { link: '/home-7', title: 'Home Style 7' },
                        // ]
                    },
                    {
                        link: '/shop',
                        title: 'برندها',
                        hasDropdown: true,
                        megamenu: false,
                        dropdownItems: [
                            {link: '/shop', title: 'برند 1'},
                            {link: '/shop', title: 'برند 2'},
                            {link: '/shop', title: 'برند 3'},
                            {link: '/shop', title: 'برند 4'},
                            {link: '/shop', title: 'برند 5'},
                            // { link: '/cart', title: 'Shopping Cart' },
                            // { link: '/checkout', title: 'Checkout' },
                            // { link: '/account', title: 'Account' },
                            // { link: '/register', title: 'Register' },
                            // { link: '/login', title: 'Login' },
                            // { link: '/404', title: 'Error 404' },
                        ]
                    },
                    {
                        link: '/blog',
                        title: 'مجله',
                        hasDropdown: false,
                        megamenu: false,
                        // dropdownItems: [
                        //   { link: '/blog', title: 'Blog' },
                        //   { link: '/blog-left-sidebar', title: 'Blog Left Sidebar' },
                        //   { link: '/blog-no-sidebar', title: 'Blog No Sidebar' },
                        //   { link: '/blog-2-col', title: 'Blog 2 Column' },
                        //   { link: '/blog-2-col-mas', title: 'Blog 2 Column Masonary' },
                        //   { link: '/blog-3-col', title: 'Blog 3 Column' },
                        //   { link: '/blog-details', title: 'Blog Details' },
                        // ]
                    },

                    // {
                    //   link: '/contact',
                    //   title: 'تماس با ما',
                    // },
                ] as menuType[]
        }
    }
}