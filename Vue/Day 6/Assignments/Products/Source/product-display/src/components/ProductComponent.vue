<template lang="en">
    <div>
        <h1 class="my-3 text-center display-6 text-primary">Products</h1>
        <ProductListComponent v-bind:ProductList ="ProductData"></ProductListComponent> 
    </div>
</template>
<script>
import ProductListComponent from './ProductListComponent.vue'

export default {
    name: 'ProductComponent',
    components: {
       ProductListComponent
    },
    data() {
        return {
            ProductData: [
                {
                    ProductName: "Pen",
                    Price: 20,
                    Qty: 12,
                    Amount: 240,
                    PayableAmount: 228
                },
                {
                    ProductName: "Pencil",
                    Price: 10,
                    Qty: 20,
                    Amount: 200,
                    PayableAmount: 190
                },
                {
                    ProductName: "Eraser",
                    Price: 4,
                    Qty: 10,
                    Amount: 40,
                    PayableAmount: 38
                },
                {
                    ProductName: "Sharpner",
                    Price: 5,
                    Qty: 16,
                    Amount: 80,
                    PayableAmount: 76
                },
                {
                    ProductName: "Ink Pen",
                    Price: 80,
                    Qty: 4,
                    Amount: 320,
                    PayableAmount: 304
                },
                {
                    ProductName: "Water Colors",
                    Price: 60,
                    Qty: 7,
                    Amount: 420,
                    PayableAmount: 399
                }
            ]
        }
    },
}
</script>
<style scoped></style>