<template>
    <div class="container-fluid bg-light p-4 pt-0 text-center">
        <h1  class="pb-2 text-primary display-6">Result Details</h1>
        
        <div class="display-6 fs-3">
            <p>{{ result.Name }}</p>
            <p>Percentage: {{ result.Result }} &nbsp; Grade: {{ result.Grade }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           resultDetails: [
				{
                    "Id": 1,
                    "Name": "Charmi Jadawala",
					"Result": "92%",
                    "Grade": "AA"
                },
                {
                    "Id": 2,
                    "Name": "Disha Bhatt",
					"Gender": "Female",
                    "Result": "94%",
                    "Grade": "AA"
                },
                {
                    "Id": 3,
                    "Name": "John Doe",
					"Result": "78%",
                    "Grade": "BB"
                },
                {
                    "Id": 4,
                    "Name": "Susan Mathew",
					"Result": "85%",
                    "Grade": "AB"
                },
                {
                    "Id": 5,
                    "Name": "Willam Smith",
					"Result": "70%",
                    "Grade": "BB"
                },
                {
                    "Id": 6,
                    "Name": "Gopi Jadawala",
					"Result": "89%",
                    "Grade": "AB"
                }
			] 
        }
    },
	computed: {
		inpId: function() {
			return parseInt(this.$route.params.id);
		},
		result: function () {
            return this.resultDetails.find(data => {
                return data.Id == this.inpId;
            });
        }
	}
}
</script>
