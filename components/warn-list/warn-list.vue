<template>
	<view>
		<view class="menu-item" v-for="(item, index) in warnsProp" :key="item.id" @click="contentClick">
			<view class="menu-item-left">
			  <image src="/static/logo.png"></image>
			  <view class="menu-item-text">
				  <view class="menu-item-left-text">
						{{item.reason}}
				  </view>
				  <view class="menu-item-left-text-sm">
						{{item.devType}}
				  </view>
			  </view>

			</view>
			<view class="menu-item-right">
			  <view class="arrow-right"></view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name:"warn-list",
		props: {
			warnsProp: Array,
		},
		data() {
			return {

			};
		},
		methods: {
			contentClick(){
				
			}
		}
	}
</script>

<style lang="scss">

	.menu-item {
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  justify-content: space-between;
	  border-bottom: 1rpx solid #F6F6F6;
		background: #ffffff;
	  padding: 30rpx;
		border-radius: 16rpx;
	}
	
	.menu-item-left {
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  justify-content: flex-start;
	}
	
	.menu-item-left image {
	  width: 80rpx;
	  height: 80rpx;
	}
	
	.menu-item-left-text {
	  padding-left: 20rpx;
	  font-size: 18px;
	}
	.menu-item-left-text-sm{
		padding-left: 20rpx;
		font-size: 15px;
		color: #a9acb3;
	}
	
	.arrow-right {
	  width: 15rpx;
	  height: 15rpx;
	  border-top: 3rpx solid #a9acb3;
	  border-right: 3rpx solid #a9acb3;
	  transform: rotate(45deg);
	}
	.menu-item-text{
		display: flex;
		flex-direction: column;
	}
</style>