import {type menuType} from "~/types/menuType";

export default {
    data() {
        return {
            menuData: [
                {
                    link: '/special-offers',
                    title: 'پیشنهاد ویژه',
                    hasDropdown: false,
                    megamenu: false,
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
                    ]
                },
                {
                    link: '/shop',
                    title: 'آرایشی',
                    hasDropdown: true,
                    megamenu: true,
                    dropdownItems: [
                        {
                            link: '/cosmetics/makeup',
                            title: 'محصولات آرایشی',
                            dropdownMenu: [
                                {link: '/shop', title: 'کرم پودر'},
                                {link: '/shop', title: 'رژ لب'},
                                {link: '/shop', title: 'ریمل'},
                                {link: '/shop', title: 'سایه چشم'},
                                {link: '/shop', title: 'رژگونه'},
                                {link: '/shop', title: 'پودر'},
                                {link: '/shop', title: 'کانسیلر'},
                            ]
                        },
                        {
                            link: '/shop',
                            title: 'ابزار آرایشی',
                            dropdownMenu: [
                                {link: '/shop', title: 'قلم مو'},
                                {link: '/shop', title: 'پف آرایشی'},
                                {link: '/shop', title: 'آینه'},
                                {link: '/shop', title: 'کیف آرایشی'},
                            ]
                        },
                    ]
                },
                {
                    link: '/shop',
                    title: 'مراقبت پوست',
                    hasDropdown: false,
                    megamenu: false,
                },
                {
                    link: '/shop',
                    title: 'بهداشت و مراقبت مو',
                    hasDropdown: false,
                    megamenu: false,
                },
                {
                    link: '/shop',
                    title: 'بهداشت دهان و دندان',
                    hasDropdown: false,
                    megamenu: false,
                },
                {
                    link: '/shop',
                    title: 'بهداشت خانه',
                    hasDropdown: false,
                    megamenu: false,
                },
                {
                    link: '/shop',
                    title: 'کودک',
                    hasDropdown: false,
                    megamenu: false,
                },
                {
                    link: '/magazine',
                    title: 'مجله لاوورا',
                    hasDropdown: false,
                    megamenu: false,
                },
            ] as menuType[]
        }
    }
}