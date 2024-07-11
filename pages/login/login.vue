<template>
	<view class="content">
		<view class="head">
			<view class="logo">
				logo
			</view>
			<text class="tip">欢迎登录渔亿物联</text>
		</view>
		<view class="form-box">
<!-- 			<view class="tab-box">
				<view class="row-tab" @click="tabClick(0)">
					<text :class="tabIndex==0?'tab-active':''">账号登录</text>
					<text class="thing" v-show="tabIndex==0?true:false"></text>
				</view>
				<view class="row-tab" @click="tabClick(1)">
					<text :class="tabIndex==1?'tab-active':''">验证码登录</text>
					<text class="thing" v-show="tabIndex==1?true:false"></text>
				</view>
			</view> -->
			<view v-show="tabIndex==0">
				<view class="row-input">
					<input maxlength="11" placeholder="账号" v-model='account'/>
				</view>
				<view class="row-input">
					<input password maxlength="18" placeholder="密码" v-model='password'/>
				</view>
			</view>
			<view v-show="tabIndex==1">
				<view class="row-input">
					<input maxlength="11" placeholder="手机号码" />
					<view class="code">
						<text @click="getCode">获取验证码</text>
					</view>
				</view>
				<view class="row-input">
					<input maxlength="6" placeholder="验证码" />
				</view>
			</view>
			<view class="login-btn" @click="login">
				登录
			</view>
			<view class="menu-link">
				<text></text>
				<text>找回密码</text>
			</view>
		</view>
	</view>
</template>

<script>
	import user from '@/api/user'
	import store from '@/store/index.js'//需要引入store

	export default {
		data() {
			return {
				tabIndex: 0, //tab下标
				account: '',
				password: '',
			}
		},
		methods: {
			// tab点击
			tabClick(id) {
				this.tabIndex = id
			},

			// 获取验证码
			getCode() {
				uni.showToast({
					title: "获取验证码"
				})
			},
			login(){
				store.commit('SET_USER', { user });
				uni.navigateBack()
			}

		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-color-primary;
	}

	.head {
		padding-left: 80rpx;
		height: 30vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		.logo {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 8rpx;
			width: 110rpx;
			height: 110rpx;
			font-size: 40rpx;
			color: $uni-color-primary;
			font-weight: bold;
			background-color: #FFFFFF;
		}

		.tip {
			padding-top: 50rpx;
			color: #FFFFFF;
			font-size: 40rpx;
			letter-spacing: 5rpx;
			font-weight: bold;
		}
	}

	.form-box {
		padding: 0rpx 80rpx;
		height: 70vh;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		background-color: #FFFFFF;

		.tab-box {
			padding-top: 40rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 80rpx;
			color: #929293;
			font-weight: bold;

			.row-tab {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				font-weight: bold;
				font-size: 35rpx;
				width: 50%;
				height: 100%;

				.tab-active {
					color: $uni-color-primary;
				}

				.thing {
					margin-top: 20rpx;
					width: 50rpx;
					height: 6rpx;
					background-color: #3884f6;
				}
			}
		}

		.row-input {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-top: 50rpx;
			font-size: 30rp;
			height: 100rpx;
			border-bottom: 1rpx solid #cfcfd0;

			input {
				flex: 1;
			}

			.code {
				display: flex;
				justify-content: flex-end;
				font-weight: bold;
				color: $uni-color-primary;
				width: 200rpx;
				font-size: 26rpx;
			}
		}

		.login-btn {
			margin-top: 80rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100rpx;
			letter-spacing: 10rpx;
			background: linear-gradient(to right, #0a7df7, $uni-color-primary);
			color: #FFFFFF;
			border-radius: 60rpx;
			font-size: 30rpx;
		}

		.menu-link {
			position: fixed;
			left: 80rpx;
			right: 80rpx;
			bottom: 50rpx;
			display: flex;
			justify-content: space-between;
			font-size: 28rpx;
			font-weight: bold;
			color: $uni-color-primary;
		}
	}
</style>
