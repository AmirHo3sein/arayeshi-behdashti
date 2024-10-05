export function usePriceFormatter() {
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return {
        formatPrice,
    };
}