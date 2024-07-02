<template>
	<view class="search">
		<le-dropdown class="dropdown"
			v-model:menuList="menuList" 
			themeColor="#5A5AF6"
			:duration="300"
			:isCeiling="true"
			@onConfirm="dpOnConfirm"
			@onChange="dpOnChange"
		></le-dropdown>
		<uni-search-bar class="search-input" placeholder="请输入设备号查询" radius="50" cancelButton="none" bgColor="#FFF">
		</uni-search-bar>
		<view class="serarch-btn shadow">查询</view>
		<uni-icons class="scan-icon" type="scan" size="40" color="#5A5AF6"></uni-icons>
	</view>
</template>

<script>
	import store from '@/store/index.js'//需要引入store
	export default {
		data() {
			return {
				menuList:[
					{
						title: '筛选',
						type: 'filter',
						children: [{
								title: "单选类型1",
								type: 'radio',
								value: null,
								options: [{
										label: "全部",
										value: null
									},
									{
										label: "属性1",
										value: 0
									},
									{
										label: "属性2",
										value: 1
									},
								]
							},
							{
								title: "单选类型2",
								type: 'radio',
								value: null,
								options: [{
										label: "全部",
										value: null
									},
									{
										label: "属性1",
										value: 0
									},
									{
										label: "属性2",
										value: 1
									},
									{
										label: "属性3",
										value: 2
									},
								]
							},
							{
								title: "进度",
								type: 'slider',
								value: 0,
								suffix: '%',
								componentProps:{
									max:100,
								}
							},
							{
								title: "多选类型1",
								type: 'checkbox',
								value: [],
								options: [{
										label: "属性0",
										value: null
									},
									{
										label: "属性1",
										value: 0
									},
									{
										label: "属性2",
										value: 1
									},
									{
										label: "属性3",
										value: 2
									},
									{
										label: "属性4",
										value: 4
									},
									{
										label: "属性5",
										value: 5
									},
								]
							}
						]
					}
				]
			}
		},
		onShow() {
			// if(!store.getters.isLogin) {
			// 	uni.navigateTo({url: '/pages/login/login'})
			// 	return
			// }
		},
		methods: {
			dpOnConfirm(){
				
			},
			dpOnChange(){
				
			}
		}
	}
</script>

<style lang="scss">
	.dropdown{
		width: 120rpx;
		margin-left: 10px;
	}
	.shadow {
		/* 设置阴影效果 */
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 0 8px rgba(0, 0, 0, 0.2);
	}
	.search{
		display: flex;
		flex-direction: row; /* 水平排列 */
		align-items: center; /* 垂直居中 */
	}
	.uni-search-bar {
		flex-grow: 1; /* 让搜索栏占据剩余空间 */
	}
	
	.search-input {
	  width: 100%;
	}
	.serarch-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 36px;
		width: 100px;
		background: linear-gradient(to right, #0a7df7, $uni-color-primary);
		color: #FFFFFF;
		border-radius: 50rpx;
		font-size: 30rpx;
		margin-right: 5px;
	}
	.scan-icon{
		margin-right: 5px;
	}
</style>
