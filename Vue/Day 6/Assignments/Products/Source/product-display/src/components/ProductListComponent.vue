<template lang="en">
    <div>
       <div class="container mx-auto my-2">
            <table class="table my-3 table-striped">
                <caption></caption>
                <thead>
                    <tr>
                    <th>Product Name</th> 
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Payable Amount</th>
                    </tr>
                </thead>
                <tbody class="text-primary">
                    <tr v-for="(product, index) in ProductList" :key="index">
                        <td>{{ product.ProductName }}</td>
                        <td>{{ product.Price }}</td>
                        <td>{{ product.Qty }}</td>
                        <td>{{ product.Amount }}</td>
                        <td>{{ product.PayableAmount }}</td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'ProductListComponent',
    props: {
        ProductList: Array
    }
}
</script>
<style scoped></style>