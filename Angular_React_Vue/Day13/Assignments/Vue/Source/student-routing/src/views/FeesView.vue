<template>
    <div class="container-fluid bg-light p-4 pt-0 text-center">
        <h1  class="pb-2 text-primary display-6">Fees Details</h1>
        
        <p class="display-6 fs-3">{{ fees.Name }}: ₹ {{ fees.Fees }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
           feesDetails: [
				{
                    "Id": 1,
                    "Name": "Charmi Jadawala",
					"Fees": 30000
                },
                {
                    "Id": 2,
                    "Name": "Disha Bhatt",
                    "Fees": 30000
                },
                {
                    "Id": 3,
                    "Name": "John Doe",
					"Fees": 20000
                },
                {
                    "Id": 4,
                    "Name": "Susan Mathew",
					"Fees": 24000
                },
                {
                    "Id": 5,
                    "Name": "Willam Smith",
					"Fees": 27000
                },
                {
                    "Id": 6,
                    "Name": "Gopi Jadawala",
					"Fees": 20000
                }
			] 
        }
    },
	computed: {
		inpId: function() {
			return parseInt(this.$route.params.id);
		},
		fees: function () {
            return this.feesDetails.find(data => {
                return data.Id == this.inpId;
            });
        }
	}
}
</script>
