import {defineStore} from "pinia";
import {ref} from "vue";
import {useToast} from "vue-toastification";

export const useGeneralStore = defineStore('general', () => {
    const cartProducts = ref([])
    const payableAmount = ref(0)
    const totalCount = ref(0)
    const totalItemCount = ref(0)
    const availableCount = ref(0)
    const availableItemCount = ref(0)
    const totalPrice = ref(0)
    const cartId = ref(null)
    const token = useCookie('authToken')
    const processing = ref(false)
    const addressList = ref([])
    const toast = useToast()
    async function getCartProduct() {
        processing.value = true
        const {data, error} = await useMyFetch('api/product/cart/get', {
            method: 'POST',
            headers: {
                token: token
            }
        })
        if (data.value) {
            const {cart} = data.value.data
            cartId.value = data.value.data.id
            if (cart) {
                cartProducts.value = cart.items
                payableAmount.value = cart.payable_price
                totalCount.value = cart.total_count
                totalItemCount.value = cart.total_item_count
                availableCount.value = cart.available_count
                availableItemCount.value = cart.available_item_count
                totalPrice.value = cart.total_price
            } else {
                cartProducts.value = []
                payableAmount.value = 0
                totalCount.value = 0
                totalItemCount.value = 0
                availableCount.value = 0
                availableItemCount.value = 0
                totalPrice.value = 0
            }
            processing.value = false
        } else if (error.value) {
            if (error.value.data) {
                toast.error(error.value.data.error.message);
            }
            processing.value = false
        }
    }

    function itemExistInStore(productId) {
        if (cartProducts.value.length) {
            return cartProducts.value.find(product => product.id === productId) || null
        }
    }

    async function addCartProduct(payload) {
        processing.value = true
        const {data, error} = await useMyFetch('api/product/cart/add', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                token: token
            }
        })
        if (data.value) {
            await getCartProduct()
            processing.value = false
        } else if (error.value) {
            if (error.value.data) {
                toast.error(error.value.data.error.message);
            }
            processing.value = false
        }
    }

    async function updateCartProduct(payload) {
        processing.value = true
        const {data, error} = await useMyFetch('api/product/cart/update', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                token: token
            }
        })
        if (data.value) {
            processing.value = false
            await getCartProduct()
        } else if (error.value) {
            if (error.value.data) {

                toast.error(error.value.data.error.message);
            }
            processing.value = false
        }
    }


    async function removeCartProduct(payload) {
        processing.value = true
        const {data, error} = await useMyFetch('api/product/cart/remove', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                token: token
            }
        })
        if (data.value) {
            await getCartProduct()
            processing.value = false
        } else if (error.value) {
            if (error.value.data) {
                toast.error(error.value.data.error.message);
            }
            processing.value = false
        }
    }

    async function clearCartProduct() {
        processing.value = true
        const {data, error} = await useMyFetch('api/product/cart/clear', {
            method: 'POST',
            headers: {
                token: token
            }
        })
        if (data.value) {
            console.log("data", data)
            await getCartProduct()
            processing.value = false
        } else if (error.value) {
            if (error.value.data) {
                toast.error(error.value.data.error.message);
            }
            processing.value = false
        }
    }

    async function getAddressList() {
        processing.value = true
        const {data, error} = await useMyFetch('order/address/list', {
            method: 'POST',
            headers: {
                token: token
            }
        })
        if (data.value) {
            console.log(data.value)
            addressList.value = data.value.data.list
            processing.value = false
        } else if (error.value) {
            if (error.value.data) {
                // $toast.error(error.value.data.error.message,{
                //     position:'top-right'
                // });
            }
            processing.value = false
        }
    }

    async function addAddress(payload) {
        processing.value = true
        const {data, error} = await useMyFetch('order/address/add', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                token: token
            }
        })
        if (data.value) {
            await getAddressList()
            processing.value = false
        } else if (error.value) {
            if (error.value.data) {
                toast.error(error.value.data.error.message);
            }
            processing.value = false
        }
    }


    return {
        addCartProduct,
        updateCartProduct,
        removeCartProduct,
        clearCartProduct,
        getCartProduct,
        itemExistInStore,
        getAddressList,
        addAddress,
        cartProducts,
        cartId,
        payableAmount,
        totalCount,
        totalItemCount,
        availableCount,
        availableItemCount,
        totalPrice,
        addressList,
        processing,

    }
})