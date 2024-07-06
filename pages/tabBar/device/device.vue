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
				<uni-icons color="#5A5AF6" class="scan-icon" type="scan" size="32"></uni-icons>
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
	
	<up-popup bgColor="" :show="showPopup" :closeable="true" :closeOnClickOverlay="false" :round="20" mode="bottom" @close="closePopup" @open="openPopup">
		<view class="form">
				<uni-forms ref="form" :rules="addDeviceInfoRules" :model="addDeviceInfo" >
					
						<uni-forms-item  label="设备类型" name="type" required>
							    <uni-data-select
									:clear="true"
									v-model="value"
									:localdata="deviceTypes"
									@change="typeSelectChange"
							    ></uni-data-select>
						</uni-forms-item>
						<uni-forms-item  label="塘口" name="pond" required>
							    <uni-data-select 
									:clear="true"
									v-model="value"
									:localdata="ponds"
									@change="pondSelectChange"
									placement="top"
							    ></uni-data-select>
						</uni-forms-item>
						<uni-forms-item style="margin-right: -25rpx;" label="设备号" name="devId" required>
								<view style="display: flex;flex-direction: row;">
									<uni-easyinput type="text" placeholder="请输入设备号"/>
									<uni-icons color="#5A5AF6" class="scan-icon" type="scan" size="36"></uni-icons>
								</view>
						</uni-forms-item>
				
				</uni-forms>
				<button class="button" @click="submit">添加</button>
		</view>
	</up-popup>
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
				deviceTypes:[{
					text: '投料机',
					value: 0
				},{
					text: '增氧机',
					value: 1
				},{
					text: '水质监测',
					value: 2
				},{
					text: '水位水温',
					value: 3
				}],
				ponds:[{
					text: '塘1',
					value: 0
				},{
					text: '塘2',
					value: 1
				},{
					text: '塘3',
					value: 2
				},{
					text: '塘4',
					value: 3
				}],
				addDeviceInfo:{
					
				},
				addDeviceInfoRules:{
					type: {
						rules: [{
								required: true,
								errorMessage: '请选择设备类型',
							}
						]
					},
					pond: {
						rules: [{
								required: true,
								errorMessage: '请选择塘口',
							}
						]
					},
					devId: {
						rules: [{
								required: true,
								errorMessage: '请输入设备号',
							}
						]
					},
				},
				current: 0,
				showPopup: false
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
				this.showPopup = true
			},
			openPopup() {
			// console.log('open');
			},
			closePopup() {
				this.showPopup = false
			// console.log('close');
			},
			tabsClick(){
				
			},
			tabsChange(index){
				this.current = index;
			},
			typeSelectChange(e){
				
			},
			submit(){
				this.$refs.form.validate().then(res=>{
					uni.showToast({
						title: '添加成功',
						icon: 'none'
					})
					this.showPopup = false
					console.log('表单数据信息：', res);
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})


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
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
		}
	
		.tip {
			padding-top: 20rpx;
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
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
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
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
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
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5), 0 0 8px rgba(0, 0, 0, 0.2);
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
		margin-right: 20rpx;
		border-radius: 10rpx;
	}
	.device-list{
		width: 100%;
		height: 100%;
	}
	.form{
		padding: 20rpx;
		margin-top: 30px;
	}
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: $uni-color-primary;
		color: white; /* 按钮文本颜色 */
		height: 35px;
		border-radius: 60rpx;
	}
</style>
