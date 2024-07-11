<template>
	<view class="box">
		<u-dropdown active-color="#5A5AF6" ref="uDropdownRef">
			<u-dropdown-item v-model="devType" title="设备类型" :options="options1"></u-dropdown-item>
			<u-dropdown-item title="时间">
				<view class="slot-content">
					<view class="time-select-content">
						<view class="time-select" @click="beginTimeClick">
							{{beginTime}}
							<up-icon style="margin-left: auto;" name="arrow-down-fill" size="14"></up-icon>
						</view>
						<view class="line"></view>
						<view class="time-select"  @click="endTimeClick">
							{{endTime}}
							<up-icon style="margin-left: auto;" name="arrow-down-fill" size="14"></up-icon>
						</view>
					</view>

					<u-button color="#5A5AF6" shape="circle" @click="closeDropdown">确定</u-button>
				</view>
			</u-dropdown-item>
		</u-dropdown>
		<view class="data-empty" v-show="warns.length == 0">
			<up-empty></up-empty>
		</view>
		<warn-list :warnsProp="warns"></warn-list>
	</view>
	<view>
		<up-datetime-picker
			:show="showTimePicker"
			v-model="time"
			mode="date"
			@cancel="cancel"
			@confirm="confirm"
		></up-datetime-picker>
	</view>
	<view>

	</view>

</template>

<script>
	import {getTodayDate,formatDateTime,isDateBefore} from '/common/util.js';
	export default {
		data() {
			return {
				devType: null,
				beginTime: getTodayDate(),
				endTime:getTodayDate(),
				showTimePicker: false,
				showType:0,
				time:getTodayDate(),
				warns: [{
					id:1,
					devType:"设备类型1",
					reason:"报警原因1"
				},{
					id:2,
					devType:"设备类型2",
					reason:"报警原因2"
				},{
					id:3,
					devType:"设备类型3",
					reason:"报警原因3"
				}],
				options1: [{
					label: '全部',
					value: null,
				},{
					label: '投料机',
					value: 0,
				},
				{
					label: '增氧机',
					value: 1,
				},
				{
					label: '水质监测',
					value: 2,
				},
				{
					label: '水位水温',
					value: 3,
				}
			],
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
			beginTimeClick(){
				this.showType = 0
				this.time = this.beginTime
				this.showTimePicker = true

			},
			endTimeClick(){
				this.showType = 1
				this.time = this.endTime
				this.showTimePicker = true
			},
			cancel(){
				this.showTimePicker = false
			},
			confirm(e){
				if(this.showType === 0){
					this.beginTime = formatDateTime(e.value, 'yyyy-MM-dd')
					this.showTimePicker = false
				} else {
					var eTime = formatDateTime(e.value, 'yyyy-MM-dd')
					if(!isDateBefore(this.beginTime, eTime)) {
						uni.showToast({
							title: '时间段错误',
							duration: 2000,
							icon:'error'
						});
						return;
					}
					this.endTime = eTime
					this.showTimePicker = false
				}
			},
			closeDropdown() {
				this.$refs.uDropdownRef.close();
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
	
	.slot-content {
		background-color: #FFFFFF;
		padding: 24rpx;

	}
	.time-select{
		// background-color: #F5F5F5;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		padding: 24rpx;
		margin-bottom: 20rpx;
		border-radius: 60rpx;
		width: 45%;
		height: 60rpx;
		border: 1px solid $uni-color-primary;
	}
	.time-select-content{
		display: flex;
		flex-direction: row;
	}
	.line {
		height: 1px; /* 线的高度 */
		background-color: $uni-text-color-assist; /* 线的颜色 */
		width: 10%; /* 线的宽度 */
		margin-top: 25rpx;
		margin-inline: 20rpx;
	}
</style>
