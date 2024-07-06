<template>
	<view class="">
		<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="info" :current="current" :mode="mode"
			:dots-styles="dotsStyles">
			<swiper class="swiper-box" @change="change" :current="current" :autoplay="autoplay">
				<swiper-item v-for="(item, index) in info" :key="index">
					<view>
						<image class="swiper-image" :src="item.url" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
	<view class="content">
		<view class="notice">
			<uni-notice-bar class="notice-bar" speed="80" show-icon scrollable color="#5A5AF6" background-color="#EAF2FF"
				:text="noticeText" />
		</view>
		<view class="product-list">
			<uni-section title="产品列表" title-font-size="$uni-font-size-title" title-color="$uni-color-title">
				<template v-slot:decoration>
				  <image mode="aspectFill" class="custom-image" src="/static/image/productTitleDz.png"></image>
				</template>
				<product-list :productListProp="productList"></product-list>
				<template v-slot:right>
					<uni-icons type="more-filled" size="30px" @click="moreProductListOnClick()"></uni-icons>
				</template>
			</uni-section>
		</view>
		<view class="warn">
			<uni-section title="报警统计" title-font-size="$uni-font-size-title" title-color="$uni-color-title">
				<template v-slot:decoration>
				  <image mode="aspectFill" class="custom-image-warn" src="/static/image/warning.png"></image>
				</template>
				<uni-grid :column="2" :margin="10" :show-border="false" :square="false" @change="warnGridchange">
					<uni-grid-item v-for="(item ,index) in warnList" :index="index" :key="index" >
						<view class="grid-item-box">
							<image class="warnImage" :src="item.url" mode="aspectFill" />
							<text class="text">{{item.text}}</text>
							<view v-if="item.badge" class="grid-dot">
								<uni-badge :text="item.badge" :type="item.type" />
							</view>
						</view>
					</uni-grid-item>
				</uni-grid>
			</uni-section>
		</view>
		<view class="entrance">
			<uni-section title="快速入口" title-font-size="$uni-font-size-title" title-color="$uni-color-title">
				<template v-slot:decoration>
				  <image mode="aspectFill" class="custom-image-warn" src="/static/image/entrance.png"></image>
				</template>
				<uni-grid :column="2" :show-border="false" :square="false" @change="entranceGridchange">
					<uni-grid-item :index="0">
						<view class="grid-item-box">
							<image class="image warnImage" src="/static/image/pond.png" mode="aspectFill" />
							<text class="text">我的鱼塘</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index="1">
						<view class="grid-item-box">
							<image class="warnImage" src="/static/image/mydevice.png" mode="aspectFill" />
							<text class="text">我的设备</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</uni-section>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
						content: '内容 C'
					}
				],
				dotsStyles: {
					backgroundColor: 'rgba(90, 90, 246, 0.5)',
					border: '1px rgba(90, 90, 246, 0.5) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(90, 90, 246, 0.9)',
					selectedBorder: '1px rgba(90, 90, 246, 0.9) solid'
				},
				current: 0,
				mode: 'round',
				autoplay: true,
				noticeText: "广东锦源电子科技有限公司！",
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
				],
				warnList:[
					{
						url: '/static/image/today.png',
						text: '今日报警数',
						badge: '1',
						type: "error"
					},
					{
						url: '/static/image/month.png',
						text: '本月报警数',
						badge: '100',
						type: "error"
					},
				]
			}
		},
		onLoad() {},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
			clickItem(e) {
				this.current = e
			},
			moreProductListOnClick(){
				uni.navigateTo({
					url: '/pages/tabBar/homepage/more-product'
				})
			},
			entranceGridchange(e){
				let {
					index
				} = e.detail
				if(index === 0){	// 我的鱼塘

				} else {	//	我的设备
					uni.switchTab({
						url: "/pages/tabBar/device/device"
					})	
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
/* #ifdef H5 */
page {
	height: auto;
	min-height: 100%;
}
/* #endif */
.swiper-box {
		height: 420rpx;
	}
	

	.swiper-image {
		width: 100%;
	}

	/* #ifndef APP-NVUE */
	::v-deep .image img {
		-webkit-user-drag: none;
		-khtml-user-drag: none;
		-moz-user-drag: none;
		-o-user-drag: none;
		user-drag: none;
	}

	/* #endif */

	@media screen and (min-width: 500px) {
		.uni-swiper-dot-box {
			width: 600px;
			/* #ifndef APP-NVUE */
			margin: 0 auto;
			/* #endif */
			margin-top: 8px;
		}

		.image {
			width: 100%;
		}
	}

	.active {
		border-style: solid;
		border-color: #007aff;
		border-width: 1px;
	}
	
	.notice-bar {
		margin: 0rpx;

	}
	.product-list{
		margin-top: -20rpx;
	}
	.custom-image {
		width: 18px;
		height: 18px;
		margin-right: 10px;
	}
	.custom-image-warn {
		width: 25px;
		height: 25px;
		margin-right: 10px;
	}
	.uni-list-item:active {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
	}
	.uni-section ::v-deep {
		position: relative;
		font-size: 40rpx;
		font-weight: 500;
		width: 100%;
		color: #ffffff;
	}
	.warnImage{
		width: 48px;
		height: 48px;
	}
	.text {
		color: $uni-text-color;
		margin-top: 5px;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}
	
	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}
	
	.swiper {
		height: 420px;
	}
	
	/* #ifdef H5 */
	@media screen and (min-width: 768px) and (max-width: 1425px) {
		.swiper {
			height: 630px;
		}
	}

	@media screen and (min-width: 1425px) {
		.swiper {
			height: 830px;
		}
	}
	/* #endif */
</style>
