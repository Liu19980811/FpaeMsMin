<template>
	<view class="box">
		<view class="head">
			<view class="logo">
				logo
			</view>
			<text class="tip">我的设备</text>
		</view>
		<view class="content">
			<view class="search entrance">
				<le-dropdown class="dropdown"
					v-model:menuList="menuList" 
					themeColor="#5A5AF6"
					:duration="300"
					:isCeiling="true"
					@onConfirm="dpOnConfirm"
					@onChange="dpOnChange"
				></le-dropdown>
				<uni-search-bar class="search-input" placeholder="请输入设备号查询" radius="50" cancelButton="none" bgColor="#f8f8f8">
				</uni-search-bar>
		<!-- 		<view class="serarch-btn shadow">查询</view> -->
				<image class="scan-icon" src="/static/image/scan.png" mode="widthFix"></image>
			</view>
			
			<view class="info">
				<uv-tabs 
				lineColor="#5A5AF6" 
				:activeStyle="{
							color: '#303133',
							fontWeight: 'bold',
							transform: 'scale(1.3)'
						}"
				:inactiveStyle="{
					color: '#707070',
					transform: 'scale(1)'
				}" 
				:list="tabList" 
				@click="tabsClick" 
				@change="tabsChange"></uv-tabs>
			</view>
			
			<view class="device-list">
				<scroll-view scroll-with-animation scroll-y style="height: 500px;">
					<device-cards :deviceList="cards"></device-cards>
				</scroll-view>
			</view>
		</view>

		<view>
			<uni-fab  ref="fab" :pattern="pattern" horizontal="right" popMenu="false"
				@fabClick="fabClick" />
		</view>
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
								title: "设别类型",
								type: 'radio',
								value: null,
								options: [{
										label: "全部",
										value: null
									},
									{
										label: "投料机",
										value: 0
									},
									{
										label: "增氧机",
										value: 1
									},
									{
										label: "水质监测",
										value: 2
									},
									{
										label: "水位水温",
										value: 3
									},
								]
							},
							{
								title: "塘口号",
								type: 'radio',
								value: null,
								options: [{
										label: "全部",
										value: null
									},
									{
										label: "塘1",
										value: 0
									},
									{
										label: "塘2",
										value: 1
									},
									{
										label: "塘3",
										value: 2
									},
								]
							}
						]
					}
				],
				pattern: {
					color: '##5A5AF6',
					backgroundColor: '#fff',
					selectedColor: '#5A5AF6',
					buttonColor: '#5A5AF6',
					iconColor: '#fff'
				},
				tabList:[{
					name: '全部(2)',
				}, {
					name: '在线',
				}, {
					name: '离线'
				}],
				current: 0
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
				
			},
			fabClick(){
				uni.showToast({
					title: '点击了添加按钮',
					icon: 'none'
				})
			},
			tabsClick(){
				
			},
			tabsChange(index){
				this.current = index;
			}
		}
	}
</script>

<style lang="scss">
	.box{
		padding-bottom: calc(var(--window-bottom) + 10px)
	}
	.head {
		position: relative;
		width: 100%;
		background-image: linear-gradient(to right, $uni-color-primary, #7debdf);
		padding-left: 80rpx;
		height: 22vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	
		.logo {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 20rpx;
			width: 110rpx;
			height: 110rpx;
			font-size: 40rpx;
			color: $uni-color-primary;
			font-weight: bold;
			background-color: #FFFFFF;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		}
	
		.tip {
			padding-top: 30rpx;
			color: #FFFFFF;
			font-size: 40rpx;
			letter-spacing: 5rpx;
			font-weight: bold;
		}
	}
	
		
	.content {
		padding: 0 20rpx;
	}
	.entrance {
		position: relative;
		margin-top: -45rpx;
		margin-bottom: 30rpx;
		border-radius: 80rpx;
		height: 100rpx;
		background-color: #ffffff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.info {
		position: relative;
		margin-bottom: 30rpx;
		border-radius: 30rpx;
		height: 100rpx;
		background-color: #ffffff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.dropdown{
		width: 130rpx;
		margin-left: 2px;
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
		height: 48px;
		width: 48px;
	}
	.device-list{
		width: 100%;
		height: 100%;
	}

</style>
