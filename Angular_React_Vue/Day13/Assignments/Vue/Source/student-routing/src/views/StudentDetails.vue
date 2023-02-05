<template>
	<div>
		<div class="container-fluid bg-light p-4 fs-6 text-center">
			<h2 class="pb-2 text-primary display-6 text-center">Student Details</h2>
			<div class="card fs-5 m-3 p-0 w-25 mx-auto">
				<div class="card-header text-primary">{{ student.Name }}</div>
				<div class="card-body">
					<p>ID: {{ student.Id }}</p>
					<p>Gender: {{ student.Gender }}</p>
					<p>Standard: {{ student.Standard }}</p>
					<p>Stream: {{ student.Stream }}</p>
					<p>Contact No.: {{ student.ContactNo }}</p>
				</div> 
				<div class="card-footer">
					<router-link :to="`/${student.Id}/Fees/${student.Id}`" class="btn btn-primary mx-2">Fees</router-link>
					<router-link :to="`/${student.Id}/Result/${student.Id}`" class="btn btn-primary mx-2">Result</router-link>
				</div>
			</div>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: 'StudentDetails',
	data() {
		return {
			studentDetails: [
				{
                    "Id": 1,
                    "Name": "Charmi Jadawala",
					"Gender": "Female",
					"Standard": 12,
					"Stream": "Science",
					"ContactNo": 7434966248
                },
                {
                    "Id": 2,
                    "Name": "Disha Bhatt",
					"Gender": "Female",
					"Standard": 12,
					"Stream": "Science",
					"ContactNo": 9638454835
                },
                {
                    "Id": 3,
                    "Name": "John Doe",
					"Gender": "Male",
					"Standard": 8,
					"Stream": "N/A",
					"ContactNo": 9425976278
                },
                {
                    "Id": 4,
                    "Name": "Susan Mathew",
					"Gender": "Female",
					"Standard": 10,
					"Stream": "Arts",
					"ContactNo": 8545017730
                },
                {
                    "Id": 5,
                    "Name": "Willam Smith",
					"Gender": "Male",
					"Standard": 11,
					"Stream": "Commerce",
					"ContactNo": 7716277001
                },
                {
                    "Id": 6,
                    "Name": "Gopi Jadawala",
					"Gender": "Female",
					"Standard": 7,
					"Stream": "N/A",
					"ContactNo": 9427065719
                }
			]
		}
	},
	computed: {
		inpId: function() {
			return parseInt(this.$route.params.id);
		},
		student: function () {
            return this.studentDetails.find(data => {
                return data.Id == this.inpId;
            });
        }
	}
}
</script>
