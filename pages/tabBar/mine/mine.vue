<template>
  <view class="mypage-container">
    <!-- 自定义头部 -->
    <view class="head"></view>
    <!-- 个人信息模块 -->
    <view class="user-info-box">
      <view class="avatar-box">
        <image class="avatar" src="/static/logo.png"></image>
        <view class="avatar-text">
          <view class="name">点击登录</view>
          <view class="desc">173***1658</view>
        </view>
      </view>
      <view class="card-three"></view>
      <view class="card-two"></view>
      <view class="card-one"></view>
    </view>
	<view class="tnwave waveAnimation">
	  <view class="waveWrapperInner bgTop">
	    <view class="wave waveTop" style="background-image: url('https://resource.tuniaokj.com/images/wave/wave-2.png')"></view>
	  </view>
	  <view class="waveWrapperInner bgMiddle">
	    <view class="wave waveMiddle" style="background-image: url('https://resource.tuniaokj.com/images/wave/wave-2.png')"></view>
	  </view>
	  <view class="waveWrapperInner bgBottom">
	    <view class="wave waveBottom" style="background-image: url('https://resource.tuniaokj.com/images/wave/wave-1.png')"></view>
	  </view>
	</view>
    <!-- 占位 空出user-info-box的距离 -->
    <view class="size-seat">
    </view>
    
    <!-- 我的积分/我的任务/我的收藏 -->
    <view class="menu-box">
      <view class="menu-item">
        <view class="menu-item-left">
          <image src="/static/logo.png"></image>
          <view class="menu-item-left-text">
            我的鱼塘
          </view>
        </view>
        <view class="menu-item-right">
          <view class="arrow-right"></view>
        </view>
      </view>
      <view class="menu-item">
        <view class="menu-item-left">
          <image src="/static/logo.png"></image>
          <view class="menu-item-left-text">
            我的设备
          </view>
        </view>
        <view class="menu-item-right">
          <view class="arrow-right"></view>
        </view>
      </view>
      <view class="menu-item">
        <view class="menu-item-left">
          <image src="/static/logo.png"></image>
          <view class="menu-item-left-text">
            报警记录
          </view>
        </view>
        <view class="menu-item-right">
          <view class="arrow-right"></view>
        </view>
      </view>
    </view>
    <!-- 我的下载/我的粉丝/联系我们 -->
    <view class="menu-box">
      <view class="menu-item">
        <view class="menu-item-left">
          <image src="/static/logo.png"></image>
          <view class="menu-item-left-text">
            联系我们
          </view>
        </view>
        <view class="menu-item-right">
          <view class="arrow-right"></view>
        </view>
      </view>
	  <view class="menu-item">
	    <view class="menu-item-left">
	      <image src="/static/logo.png"></image>
	      <view class="menu-item-left-text">
	        当前版本
	      </view>
	    </view>
	    <view class="menu-item-right">
	      <view class="menu-item-left-text">1.0.0</view>
	    </view>
	  </view>
	  <view class="menu-item">
	    <view class="menu-item-left">
	      <image src="/static/logo.png"></image>
	      <view class="menu-item-left-text">
	        退出登录
	      </view>
	    </view>

	  </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  /* 自定义头部 */
  .head {
    height: 140rpx;
  }

  /* 用户信息部分 */
  .user-info-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 400rpx;
    background: linear-gradient(to right, $uni-color-primary, #7debdf);
  }

  .avatar-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    align-items: center;
    padding-left: 40rpx;
  }

  .avatar-box .avatar {
	  width: 170rpx;
	  height: 170rpx;
	  border: 8rpx solid rgba(255,255,255,0.05);
	  border-radius: 50%;
	  overflow: hidden;
  }

  .avatar-box .avatar-text {
    padding-left: 20rpx;
  }

  .avatar-text .name {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }

  .avatar-text .desc {
    color: #fff;
    padding-top: 10rpx;
    font-size: 12px;
  }

  .card-one {
    height: 40rpx;
    width: 100%;
    background: #ffffff;
    border-radius: 30px 30px 0px 0px;
    position: absolute;
    bottom: 0px;
  }

  .card-two {
    height: 40rpx;
    width: 92%;
    background: #ffffffb0;
    border-radius: 10px 10px 0px 0px;
    position: absolute;
    bottom: 5px;
    left: 4%;
    right: 6%;
  }

  .card-three {
    position: absolute;
    bottom: 10px;
    left: 6%;
    right: 8%;
    height: 40rpx;
    width: 88%;
    background: #ffffff59;
    border-radius: 10px 10px 0px 0px;
  }

  .size-seat {
    margin-top: 300rpx;
  }


  /* 菜单区域 */
  .menu-box {
    box-shadow: 0 0px 20px rgba(255, 255, 255, 0);
    border-radius: 16rpx;
    margin: 40rpx 40rpx 0 40rpx;
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
	margin: 10rpx;
  }

  .menu-item-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .menu-item-left image {
    width: 38rpx;
    height: 38rpx;
  }

  .menu-item-left-text {
    padding-left: 20rpx;
    font-size: 14px;
  }

  .arrow-right {
    width: 15rpx;
    height: 15rpx;
    border-top: 3rpx solid #a9acb3;
    border-right: 3rpx solid #a9acb3;
    transform: rotate(45deg);
  }
  
  /* 波浪*/
  @keyframes move_wave {
      0% {
          transform: translateX(0) translateZ(0) scaleY(1)
      }
      50% {
          transform: translateX(-25%) translateZ(0) scaleY(1)
      }
      100% {
          transform: translateX(-50%) translateZ(0) scaleY(1)
      }
  }
  .tnwave {
      overflow: hidden;
      position: absolute;
      z-index: 9999;
      height: 200rpx;
      left: 0;
      right: 0;
      top: 190rpx;
      bottom: auto;
  }
  .waveWrapperInner {
      position: absolute;
      width: 100%;
      overflow: hidden;
      height: 100%;
  }
  .wave {
      position: absolute;
      left: 0;
      width: 200%;
      height: 100%;
      background-repeat: repeat no-repeat;
      background-position: 0 bottom;
      transform-origin: center bottom;
  }
  
  .bgTop {
      opacity: 0.4;
  }
  .waveTop {
      background-size: 50% 45px;
  }
  .waveAnimation .waveTop {
    animation: move_wave 4s linear infinite;
  }
  
  .bgMiddle {
      opacity: 0.6;
  }
  .waveMiddle {
      background-size: 50% 40px;
  }
  .waveAnimation .waveMiddle {
      animation: move_wave 3.5s linear infinite;
  }
  
  .bgBottom {
      opacity: 0.95;
  }
  .waveBottom {
      background-size: 50% 35px;
  }
  .waveAnimation .waveBottom {
      animation: move_wave 2s linear infinite;
  }
  /* 波浪*/
</style>
