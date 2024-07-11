<template>
	<view class="data-empty" v-show="ponds.length == 0">
		<up-empty></up-empty>
	</view>
	<view class="box">
		<uni-swipe-action>
			<uni-swipe-action-item
				:right-options="options"
				@click="swipeActionClick"
				v-for="(item,index) in ponds"
				:key="item.id"
			>
				<view class="menu-item"  @click="contentClick">
					<view class="menu-item-left">
					  <image src="/static/logo.png"></image>
					  <view class="menu-item-text">
						  <view class="menu-item-left-text">
								{{item.name}}
						  </view>
						  <view class="menu-item-left-text-sm">
								{{item.pondSn}}
						  </view>
					  </view>

					</view>
					<view class="menu-item-right">
					  <view class="arrow-right"></view>
					</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>	
		<view>
		<uni-fab  ref="fab" :pattern="pattern" horizontal="right" popMenu="false"
			@fabClick="fabClick" />
		</view>
	</view>
	<up-popup bgColor="" :show="showPopup" :closeable="true" :closeOnClickOverlay="false" :round="20" mode="bottom" @close="closePopup" @open="openPopup">
		<view class="form">
				<uni-forms ref="form" :rules="pondInfoRules" :model="pondInfo" >
					<uni-forms-item label="塘口号" name="name" required>
						<uni-easyinput v-model="pondInfo.name" type="text" placeholder="请输入塘口号"/>
					</uni-forms-item>
					<uni-forms-item label="塘口编号" name="sn" required>
						<uni-easyinput v-model="pondInfo.pondSn" type="text" placeholder="请输入塘口号"/>
					</uni-forms-item>
				</uni-forms>
				<button class="button" @click="submit">{{formType === 0 ? "添加" : "修改"}}</button>
		</view>
	</up-popup>
</template>

<script>
	export default {
		data() {
			return {
				showPopup: false,
				formType: 1,	// 0-新增  1-修改
				ponds: [{
					id:1,
					name:"塘1",
					pondSn:"01001"
				},{
					id:2,
					name:"塘2",
					pondSn:"01002"
				},{
					id:3,
					name:"塘3",
					pondSn:"01003"
				}],
				pondInfo:{
					id:0,
					name:"1",
					pondSn:"1"
				},
				pondInfoRules:{
					name: {
						rules: [{
								required: true,
								errorMessage: '请输入塘口号',
							}
						]
					},
					sn: {
						rules: [{
								required: true,
								errorMessage: '请输入编号',
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
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#FF4B2B'
					}
				}],
			}
		},
		onLoad(){
			setTimeout(function () {
				console.log('start     pulldown');
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
			swipeActionClick(){
				
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
			submit(){
				this.$refs.form.validate().then(res=>{
					if(this.formType === 0){	// 新增
						uni.showToast({
							title: '添加成功',
							icon: 'none'
						})
					} else { // 修改
						uni.showToast({
							title: '修改成功',
							icon: 'none'
						})
					}

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
	.data-empty{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 90%; /* 使用屏幕的完整高度 */
	}
	.content-box {
		flex: 1;
		/* #ifdef APP-NVUE */
		justify-content: center;
		/* #endif */
		height: 44px;
		line-height: 44px;
		padding: 0 15px;
		position: relative;
		background-color: #fff;
		border-bottom-color: #f5f5f5;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}

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
