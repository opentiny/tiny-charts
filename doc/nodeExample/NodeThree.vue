<template>

    <div class="cards" :style="style">
        <div class="text"> {{ data.text }}</div>
    </div>

</template>

<script  >

export default {
	components: {
		
	},
	props: {
		data: Object,
	},
	data() {
		return {}
	},
	mounted() {

	},
	computed: {

	},

	methods: {

	}
}
</script>


<style scoped>
.cards {
	width: 100%;
	height: 100%;
	border: 1px solid #ccc;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
	position: relative;
	
}

.text {
	text-align: center;
	font-size: 12px;
}


</style>
