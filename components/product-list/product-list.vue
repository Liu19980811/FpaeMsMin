<template>
	<uni-list :border="false" v-for="(item, index) in productListProp" :key="index">
		<uni-list-item :border="false" :title="item.productName" :note="item.describe" showArrow
			:thumb="item.image" thumb-size="lg" clickable @click="productItemOnClick(item)" link/>
	</uni-list>
</template>

<script>
	export default {
		name:"product-list",
		props: ['productListProp'],
		data() {
			return {
			};
		},
		methods: {
			productItemOnClick(item){
				uni.showToast({
					title: item.productName,
					duration: 2000
				});
			}
		}
	}
</script>

<style>

</style>