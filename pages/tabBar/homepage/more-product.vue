<template>
	<view class="container">
		<product-list :productListProp="productList"></product-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				productList:[
					{
						image: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
						productName: '投料机',
						describe: '自动投料机，自动化喂养'
					},
					{
						image: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
						productName: '增氧机',
						describe: '用于水体氧气增加'
					},
					{
						image: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
						productName: '水质监测',
						describe: '用于水质实时监测'
					},
					{
						image: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
						productName: '水位水温',
						describe: '用于水位水温实时反馈'
					}
				]
			}
		},
		onLoad(){
			setTimeout(function () {
				console.log('start pulldown');
			}, 1000);
			uni.startPullDownRefresh();
		},
		async onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
