<template>
  <view class="template-about tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <!-- <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->
    

    
    
    <view class="top-backgroup">
      <image src='https://resource.tuniaokj.com/images/swiper/summer.jpg' mode='widthFix' class='backgroud-image'></image>
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
    
    <view class="about__wrap">
      <!-- 头像用户信息 -->
      <view class="user-info__container">
        <view class="user-info__avatar tn-bg-grey--light">
          <view class="tn-shadow-blur" style="background-image:url('https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg');width: 170rpx;height: 170rpx;background-size: cover;">
          </view>
          <!-- <view class="tn-icon-logo-tuniao" style="font-size: 140rpx;color: #01BEFF;"></view> -->
        </view>
        <view class="user-info__nick-name">游客</view>
      </view>
  
    </view>
    
  </view>
</template>

<script>
  export default {
    data(){
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/style/custom_nav_bar.scss';
  .template-about{

  }
  /* 顶部背景图 start */
  .top-backgroup {
    height: 450rpx;
    z-index: -1;
  
    .backgroud-image {
      width: 100%;
      height: 450rpx;
      // z-index: -1;
    }
  }
  /* 顶部背景图 end */
  
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
      top: 290rpx;
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
  
  /* 页面 start*/
  .about-shadow{
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  .about {
    
    &__wrap {
      position: relative;
      z-index: 1;
      // margin: 20rpx 30rpx;
      margin-top: -330rpx;
    }
  }
  /* 页面 end*/
  
  /* 用户信息 start */
  .user-info {
    &__container {
	  flex-direction: column; /* 垂直排列 */
      display: flex;
      justify-content: center; /* 水平居中 */
      align-items: center;
    }
    
    &__avatar {
      width: 170rpx;
      height: 170rpx;
      border: 8rpx solid rgba(255,255,255,0.05);
      border-radius: 50%;
      overflow: hidden;

      box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    }
    
    &__nick-name {
      margin-top: 26rpx;
      font-size: 36rpx;
      font-weight: 600;
      text-align: center;
    }
  }
  /* 用户信息 end */

</style>
