<template>
	<view class="card-container">
		<view class="card" v-for="(item, index) in deviceList" :key="item.id" @tap="showDetails(item)">
			  <!-- 卡片内容 -->
			<view class="card-content" @click.stop="showDetails(item)">
				<uni-row class="base-info-row">
					<uni-col :span="8">
						<uv-image class="dev-image" :src="item.image" width="50px" height="50px" lazy-load="true" radius="15"></uv-image>
					</uni-col>
					<uni-col :span="16">
						<uni-row>
							<uni-col :span="12">
								<view class="device-type">
									{{item.deviceTypeName}}
								</view>
							</uni-col>
							<uni-col :span="12">
								<view class="pond">
									{{item.pond}}
								</view>
							</uni-col>
						</uni-row>
						<text class="text-device">
							{{item.devId}}
						</text>
					</uni-col>
				</uni-row>
				<view class="status-row">
					<view class="status-col">
						<view class="status-light" :class="{ 'active': item.status === 1 }"></view>
						<view class="text-status">
							{{item.status === 0 ? item.statusName : item.statusName+'('+item.runningStateName+')'}}
						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"device-cards",
		props: {
			deviceList: Array,
		},
		data() {
			return {
				isActive: true
			};
		},
		methods: {
			showDetails(item) {
				uni.navigateTo({
					url: '/pages/device-details/device-details'
				})
			}
			
		}
		
	}
</script>

<style lang="scss" scoped>
	
	.card-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between; /* 卡片在容器中均匀分布 */
	}
	 
	.card {
		width: 48%; /* 每个卡片的宽度为48%，即容器的一半 */
		height: 200rpx;
		margin-bottom: 15px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
		border-radius: 20px;
		background-color: #fff;
	}
	 
	.card-content {
	  /* 卡片内容样式 */
		  display: flex;
		  flex-direction: column; 
		padding: 10px;

		
		.dev-image{
			display: flex;
		}
		
		.text-device{
			display: flex;
			flex-wrap: nowrap;
			justify-content: center; /* 水平居中 */
			align-items: center;
			font-weight: bold;
			margin-top: 5px;
			font-size: 24rpx;
		}
	}
	.device-type {
		display: flex;
		justify-content: center;
		align-items: center;
		background: linear-gradient(to right, #0a7df7, $uni-color-primary);
		color: #FFFFFF;
		border-radius: 60rpx;
		height: 30px;
		margin-left: 4rpx;
		margin-right: 2rpx;
		font-size: 24rpx;
		font-weight: bold;
	}
	
	.pond {
		display: flex;
		justify-content: center;
		align-items: center;
		background: linear-gradient(to right, #f39555, #e0620d);
		color: #FFFFFF;
		border-radius: 60rpx;
		height: 30px;
		margin-left: 2px;
		font-size: 24rpx;
		font-weight: bold;
	}
	.base-info-row{
		display: flex;		
	}
	.status-row{
		display: flex;
		flex-direction: column; 
		margin-top: 30rpx;
	}
	.status-col{
		display: flex;
		flex-direction: row;
	}
	
	.status-light {
	  width: 18px;
	  height: 18px;
	  border-radius: 50%;
	  background-color: #ccc;
	  transition: background-color 0.3s;
	}
	
	.text-status{
		display: flex;
		font-weight: bold;
		font-size: 24rpx;
		margin-left: 10rpx;
	}
	 
	.active {
	  background-color: #4cd964;
	}
</style>