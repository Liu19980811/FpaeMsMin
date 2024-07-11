<template>
	<view class="content">
		<view class="details">
			<uni-row class="row-pl">
				<uni-col :span="20">
					<view class="row-pl">
						<view class="device-type">
							设备
						</view>
						<view style="font-weight: bold; font-size: 30rpx">
							1111111111
						</view>
					</view>
				</uni-col>
				<uni-col :span="4">
					<uni-row class="row-pl right-aligned"> 
						<uni-col style="margin-top: 3px;" :span="4">
							<view class="status-light" :class="{ 'active': isActive }"></view>
						</uni-col>
						<uni-col  :span="18">
							<view class="text-device">
								离线
							</view>
						</uni-col>
					</uni-row>
				</uni-col>
			</uni-row>
			<uni-row>
				<uni-col>
					<view  class="d-image">
						<image src="/static/image/device.jpeg" style="height: 100%;width: 100%;border-radius: 20rpx;"></image>
					</view>
				</uni-col>
				<uni-col>
					<view class="d-content">
						<uni-row>
							<view class="row-pl">
								<uni-col :span="12">
									<view  class="d-list">塘口：塘1</view>
								</uni-col>	
								<uni-col :span="12">
									<view  class="d-list">模式：自动</view>
								</uni-col>	
							</view>
						</uni-row>
						<uni-row>
							<view class="row-pl">
								<uni-col :span="12">
									<view  class="d-list">状态：<view style="color: green;font-weight: bold;">空闲</view></view>
								</uni-col>	
								<uni-col :span="12">
									<view  class="d-list">饲料：<view style="color: green;font-weight: bold;">有料</view></view>
								</uni-col>	
							</view>
						</uni-row>
						<uni-row>
							<view class="row-pl">
								<uni-col :span="12">
									<view  class="d-list">投料：1秒</view>
								</uni-col>	
								<uni-col :span="12">
									<view  class="d-list">间隔：1秒</view>
								</uni-col>	
							</view>
						</uni-row>
						<uni-row>
							<view class="row-pl">
								<uni-col :span="12">
									<view  class="d-list">投料量：1档</view>
								</uni-col>	
								<uni-col :span="12">
									<view  class="d-list">面积：1档</view>
								</uni-col>	
							</view>
						</uni-row>
					</view>
				</uni-col>
			</uni-row>
			<view :class="startBtn" style="margin-bottom: 15px;" @click="startOrStopClick">
				<!-- <image src="/static/image/switch.png" mode="aspectFill" style="height: 50rpx;width: 50rpx;"></image> -->
				<uni-icons custom-prefix="iconfont" type="icon-kaiguan" size="24" color="#FFFFFF"></uni-icons>
				<view class="btn-text">{{isStop ? '停止' : '启动'}}</view>
			</view>
			<view class="btn btn-peizhi" @click="configOnClick">
				<!-- <image src="/static/image/switch.png" mode="aspectFill" style="height: 50rpx;width: 50rpx;"></image> -->
				<uni-icons custom-prefix="iconfont" type="icon-peizhi" size="24" color="#FFFFFF"></uni-icons>
				<view class="btn-text">配置</view>
			</view>
		</view>
		<view class="other-section">
			<uni-section title="报警信息" type="line" title-font-size="36rpx"  @click="warnListOnClick">
				<template v-slot:right>
					<uni-icons type="right" size="22px"></uni-icons>
				</template>
			</uni-section>
		</view>

	</view>

	<up-popup bgColor="" :show="showPopup" :closeable="true" :closeOnClickOverlay="false" :round="20" mode="bottom" @close="closePopup" @open="openPopup">
		<view class="form">
				<uni-forms ref="customForm" :rules="deviceInfoRules" :model="deviceInfo">
					
					<uni-forms-item label="模式" name="mode">
						<view class="form-item">
							<uni-data-checkbox style="margin-top: 6rpx;" v-model="deviceInfo.mode" :localdata="modes" />
						</view>
					</uni-forms-item>
				
				
					<view v-show="deviceInfo.mode === 0">
						<uni-forms-item>
							<view class="form-item form-item-center" >
								<uni-number-box  :value="0" :step="1" :min="0" :max="999" background="#5A5AF6" color="#fff"/>
								<view style="margin-left: 20rpx;">秒</view>	
							</view>
						</uni-forms-item>
					</view>


			
					<view v-show="deviceInfo.mode === 2">
						<uni-forms-item>
							<view  class="form-item" style="display: flex;flex-direction: column; ">
								<view style="display: flex;justify-content: right;align-self:flex-end">
									<view class="btn-add" style="margin-right: 15rpx;" @tap="addTimeSlot">
										<!-- <image src="/static/image/switch.png" mode="aspectFill" style="height: 50rpx;width: 50rpx;"></image> -->
										<uni-icons type="plusempty" size="18" color="#FFFFFF"></uni-icons>
										<view class="btn-text">添加</view>
									</view>
								</view>

								<scroll-view scroll-with-animation scroll-y style="height: 280rpx;margin-top: 10rpx;">
									<view class="time-slot" v-for="(item,index) in timeSlotLists" :key="index">
										<view class="btn-delete" @click="delTimeSlot(index)">
											<!-- <image src="/static/image/switch.png" mode="aspectFill" style="height: 50rpx;width: 50rpx;"></image> -->
											<uni-icons type="closeempty" size="22" color="#FFFFFF"></uni-icons>
										</view>
										<view class="time-slot-title">
											<label>时段 {{index+1}}</label>
										</view>
										
										<view  class="time-slot-content">
											<label style="margin-left: 5rpx;">起始: {{item.beginTime}}</label>
											<label style="margin-left: 5rpx;">结束: {{item.endTime}}</label>
											<zero-switch  style="margin-left: 10rpx;margin-right: 10rpx;" showText="true" v-model="item.enable" inactive-color="#ccc" active-color="#5A5AF6"></zero-switch>
			
										</view>
										<view class="btn-modify" @click="modifyTimeSlot(index, item)">
											<!-- <image src="/static/image/switch.png" mode="aspectFill" style="height: 50rpx;width: 50rpx;"></image> -->
											<uni-icons custom-prefix="iconfont" type="icon-xiugai" size="20" color="#FFFFFF"></uni-icons>
										</view>
									</view>
								</scroll-view>
							</view>
						</uni-forms-item>
					</view>
					
					<uni-forms-item label-width="120" label="投料 (0~99秒)" name="mode">
						<view  class="form-item form-item-right">
							<uni-number-box :value="0" :step="1" :min="0" :max="99" background="#5A5AF6" color="#fff" />
						</view>
					</uni-forms-item>
					<uni-forms-item  label-width="120" label="间隔 (0~999秒)" name="mode">
						<view  class="form-item form-item-right">
							<uni-number-box :value="0" :step="1" :min="0" :max="999" background="#5A5AF6" color="#fff" />
						</view>
					</uni-forms-item>
					<uni-forms-item label-width="120" label="出料量 (1~16档)" name="mode">
						<view  class="form-item form-item-right">
							<uni-number-box :value="0" :step="1" :min="1" :max="16" background="#5A5AF6" color="#fff" />
						</view>
					</uni-forms-item>
					<uni-forms-item label-width="120" label="面积 (1~16档)" name="mode">
						<view  class="form-item form-item-right">
							<uni-number-box :value="0" :step="1" :min="1" :max="16" background="#5A5AF6" color="#fff" />
						</view>
					</uni-forms-item>
				</uni-forms>
				<button class="button" @click="submit('customForm')">启用参数</button>
		</view>
	</up-popup>
	
	<view v-show="showPicker">
		<up-datetime-picker
			hasInput
			:show="showPicker"
			v-model="pickerTime"
			mode="time"
			:title="pickerTitle"
			@cancel="cancelPicker"
			@confirm="confirmPicker"
			@close="closePicker"
		></up-datetime-picker>
	</view>
	
	<view>
		<up-modal :show="showModal" :title="modalTitle" :content='modalContent' showCancelButton="true" @confirm="modalConfirm" @cancel="modalCancel"></up-modal>
		<up-notify ref="uNotify" message="Hi uview-plus"></up-notify>
	</view>
</template>

<script>
		import {isDateBefore,compareTimes} from '/common/util.js';
	export default {
		data() {
			return {
				showPopup: false,
				showPicker: false,
				showModal: false,
				modalTitle:'提示',
				modalContent:'',
				delTimeSlotIndex:-1,
				addOrUpdateTimeSlotIndex:-1,
				isStop: false,
				pickerTitle:'请选择时间',
				isBeginTimePicker: true,
				pickerTime: this.getNowHousM(),
				timeSlot:{
					beginTime: "",
					endTime: "",
					enable: 0
				},
				modes:[{					
					text: '定时',
					value: 0
				},{
					text: '常开',
					value: 1
				},{
					text: '自动',
					value: 2
				}],
				// 表单数据
				deviceInfo: {
					mode: 0
				},
				timeSlotLists:[{
					beginTime: "01:00",
					endTime: "02:00",
					enable: 0
				},{
					beginTime: "20:00",
					endTime: "21:00",
					enable: 1
				},{
					beginTime: "20:00",
					endTime: "21:00",
					enable: 1
				},{
					beginTime: "20:00",
					endTime: "21:00",
					enable: 1
				},{
					beginTime: "20:00",
					endTime: "21:00",
					enable: 1
				},{
					beginTime: "20:00",
					endTime: "21:00",
					enable: 1
				},{
					beginTime: "20:00",
					endTime: "21:00",
					enable: 1
				}],
				// 表单校验规则
				deviceInfoRules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}]
					},
					hobby: {
						rules: [{
								format: 'array'
							},
							{
								validateFunction: function(rule, value, data, callback) {
									if (value.length < 2) {
										callback('请至少勾选两个兴趣爱好')
									}
									return true
								}
							}
						]
					}

				},
			};
		},
		computed: {
			startBtn() {
			  return this.isStop ? 'stop' : 'btn';
			},
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
			configOnClick() {
				this.showPopup = true;
			},
			openPopup() {
			// console.log('open');
			},
			closePopup() {
				this.showPopup = false
			// console.log('close');
			},
			addTimeSlot(){
				if(this.timeSlotLists.length > 7){
					this.$refs.uNotify.show({
						top: 1,
						type: 'warning',
						message: '最多添加8个时段',
						duration: 1000 * 3,
						fontSize: 20,
						safeAreaInsetTop:true
					})
					return;
				}
				this.isBeginTimePicker = true
				this.pickerTitle = "请选择起始时间"
				this.addOrUpdateTimeSlotIndex = -1
				this.pickerTime = this.getNowHousM()
				this.timeSlot.beginTime = this.getNowHousM()
				this.timeSlot.endTime = this.getNowHousM(1)
				this.showPicker = true
			},
			modifyTimeSlot(index, item){
				this.isBeginTimePicker = true
				this.pickerTitle = "请修改起始时间"
				this.pickerTime = item.beginTime
				this.addOrUpdateTimeSlotIndex = index
				this.timeSlot = { ...item };
				this.showPicker = true
			},
			confirmPicker(time){
				if(this.isBeginTimePicker){
					if(this.addOrUpdateTimeSlotIndex < 0){	//添加
						this.showPicker = false
						this.pickerTitle = "请选择结束时间"
					} else {	// 编辑
						this.showPicker = false
						this.pickerTitle = "请修改结束时间"
					}
					this.timeSlot.beginTime = time.value

					setTimeout(() => {
						this.pickerTime = this.timeSlot.endTime
						this.showPicker = true

					}, 200); // 200毫秒后弹出第二个弹窗

					this.isBeginTimePicker = false
				} else {	// 结束
					// if(!isDateBefore(this.timeSlot.beginTime, time.value)){
					// 	this.$refs.uNotify.show({
					// 		top: 1,
					// 		type: 'error',
					// 		message: '时段格式错误',
					// 		duration: 1000 * 3,
					// 		fontSize: 20,
					// 		safeAreaInsetTop:true
					// 	})
					// 	return
					// }
					this.timeSlot.endTime = time.value
					let t = { ...this.timeSlot}
					if(this.addOrUpdateTimeSlotIndex < 0){	//添加
						this.timeSlotLists.push(t)
					} else {
						this.timeSlotLists[this.addOrUpdateTimeSlotIndex] = t
					}
					this.showPicker = false
					this.$refs.uNotify.show({
						top: 1,
						type: 'success',
						message: '操作成功',
						duration: 1000 * 3,
						fontSize: 20,
						safeAreaInsetTop:true
					})
				}
			},
			cancelPicker(){
				this.showPicker = false
			},
			closePicker(){
				
			},
			startOrStopClick(){
				this.isStop = !this.isStop
			},
			delTimeSlot(index){
				this.modalContent = '确认要删除时段'+(index+1)+'吗？'
				this.delTimeSlotIndex = index
				this.showModal = true
			},
			modalConfirm(){
				this.timeSlotLists.splice(this.delTimeSlotIndex, 1); 
				uni.showToast({
					title: '删除成功',
					icon: 'success'
				})
				this.showModal = false
			},
			modalCancel(){
				this.showModal = false
			},
			getNowHousM(addHours = 0){
				const now = new Date();
				let hour = now.getHours() + addHours;
				let minute = 0;
				const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
				return formattedTime;
			},
			warnListOnClick(){
				uni.navigateTo({
					url: '/pages/warn-records/single-dev-warn?devId=1'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding-bottom: calc(var(--window-bottom) + 10px)
	}
	.details {
		flex-direction: column; /* 垂直排列 */
		height: 1110rpx;
		background-color: #ffffff;
		display: flex;
		padding: 15px;
		// align-items: center;
		// justify-content: center;
	}
	.d-image {
		border-radius: 30rpx;
		height: 400rpx;
		background-color: #ecedf5;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 15px;
	}
	.d-content {
		position: relative;
		flex-direction: column; /* 垂直排列 */
		margin-bottom: 30rpx;
		border-radius: 20rpx;
		height: 300rpx;
		background-color: #ecedf5;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
		display: flex;
		margin-top: 15px;
	}
	.device-type {
		display: flex;
		justify-content: center;
		align-items: center;
		background: linear-gradient(to right, #0a7df7, $uni-color-primary);
		color: #FFFFFF;
		border-radius: 60rpx;
		width: 150rpx;
		height: 40rpx;
		margin-right: 10px;
		padding-bottom: 2px;
	}
	.row-pl{
		display: flex; /* 使用Flex布局 */
		flex-direction: row; /* 水平排列 */
	}
	.d-list{
		display: flex;
		color: #4b5590;
		align-items: center;
		background: #FFFFFF;
		height: 50rpx;
		padding-left: 10px;
		padding-bottom: 3px;
		margin-block-start: 10px;
		margin-left: 10px;
		margin-right: 10px;
		border-radius: 10rpx;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
	}
	.status-light {
	  width: 18px;
	  height: 18px;
	  border-radius: 50%;
	  background-color: #ccc;
	  transition: background-color 0.3s;
	}
	.text-device{
		display: flex;
		flex-wrap: nowrap;
		justify-content: center; /* 水平居中 */
		align-items: center;
		font-weight: bold;
		margin-top: 1rpx;
		margin-left: 8rpx;
		font-size: 24rpx;
	}
	.stop{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100rpx;
		letter-spacing: 10rpx;
		background: linear-gradient(to right, #d99991, #d81e06);
		color: #FFFFFF;
		border-radius: 60rpx;
		font-size: 30rpx;
		text-align: center;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
	}
	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100rpx;
		letter-spacing: 10rpx;
		background: linear-gradient(to right, #1afa29, #2aa515);
		color: #FFFFFF;
		border-radius: 60rpx;
		font-size: 30rpx;
		text-align: center;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
		
		
		&-peizhi{
			background: linear-gradient(to right, #b56fec, #8812e3);
		}
		
		&-add{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60rpx;
			width: 140rpx;
			margin-left: 10rpx;
			letter-spacing: 10rpx;
			background: linear-gradient(to right, #0a7df7, $uni-color-primary);
			color: #FFFFFF;
			border-radius: 60rpx;
			font-size: 26rpx;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
		}
		
		&-delete{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 50rpx;
			width: 50rpx;
			background: linear-gradient(to right, #d81e06, #f3503b);
			color: #FFFFFF;
			border-radius: 50%;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
			margin-left: 5rpx;
			margin-right: 5rpx;
			margin-bottom: 11rpx;
		}
		
		&-modify{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 50rpx;
			width: 50rpx;
			background: linear-gradient(to right, #7dd5d3, #1dbbb8);
			color: #FFFFFF;
			border-radius: 50%;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
			margin-left: 5rpx;
			margin-bottom: 11rpx;
		}
	}
	.btn-text{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 4rpx;
	}
	.other-section{
		margin-block-start: 20rpx;
		font-weight: bold;
	}
	.form{
		padding: 20rpx;
		margin-top: 30px;
		&-item {
			display: flex;
			align-items: center;
			flex-direction: row; 
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
			border-radius: 30rpx;
			padding: 8rpx;
			
			&-right{
				justify-content: flex-end;
				padding-right: 30rpx;
			}
			&-center{
				display: flex;
				flex-direction: row; 
				justify-content: center;
			}
		}
	}
	.time-slot{
		display: flex;
		align-items: center;
		flex-direction: row; 

		
		&-title{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: row;
			background: linear-gradient(to right, #aaa3a3, #d9d3d3);
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
			height: 60rpx;
			width: 100rpx;
			margin-bottom: 10rpx;
			margin-left: 5rpx;
			border-radius: 20rpx;
		}
		
		&-content{
			display: flex;
			align-items: center;
			flex-direction: row;
			background: linear-gradient(to right, #c7b2c6, #eee0ed);
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
			height: 60rpx;
			margin-bottom: 10rpx;
			margin-left: 10rpx;
			border-radius: 20rpx;
		}
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
