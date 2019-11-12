<template>
  <div class="popularize">
    <div class="popularize-header">
      <i class="logo"></i>
      <span class="name">推广</span>
      <a href></a>
      <a href></a>
    </div>

    <div class="popularize-content">
      <div class="video-wrapper" v-for="(item, index) in promote" :key="index">
        <el-image class="video-img" :src="item.pic" lazy></el-image>
        <p class="video-title">{{item.name}}</p>
      </div>
    </div>

    <div class="popularize-ad">
      <div class="online">在线人数: {{}}</div>
      <el-image class="ad-img" :src="promoteAd" alt />
    </div>
  </div>
</template>

<script>
import { promoteApi } from "../../api/index";
export default {
  data() {
    return {
      promote: [],
      promoteAd: ""
    };
  },

  created() {
    this.getPromote();
  },

  methods: {
    getPromote() {
      promoteApi.promote().then(res => {
        this.promote = res.data;
        this.promoteAd = res.promoteAd[0].pic;
      });
    }
  }
};
</script>

<style lang='less' scoped>
.popularize {
  width: 900px;
  height: 228px;
  position: relative;
  margin: 0 0 0 188px;

  .popularize-header {
    width: 900px;
    height: 45px;
    position: relative;
    display: flex;
    flex-flow: row nowrap;

    .logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      vertical-align: middle;
      margin-top: -10px;
      background: url("../../assets/icons.png");
      background-position: -141px -75px;
    }

    .name {
      font-size: 24px !important;
      line-height: 24px;
      font-weight: 400;
      margin-right: 20px;
    }
  }

  .popularize-content {
    width: 100%;
    height: 168px;
    display: flex;
    flex-flow: row nowrap;
    position: relative;

    .video-wrapper {
      position: relative;
      width: 160px;
      height: 48px;
      margin: 0 20px 20px 0;
      .video-img {
        width: 160px;
        height: 100px;
      }

      .video-title {
        font-size: 12px;
        padding-top: 8px;
        height: 40px;
        line-height: 20px;
        transition: all 0.2s linear;
        color: #222;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        text-align: left;
      }
    }
  }

  .popularize-ad {
    width: 260px;
    height: 184px;
    position: absolute;
    top: 0;
    right: -260px;

    .online {
      position: relative;
      height: 34px;
      line-height: 34px;
      padding: 0 10px;
      border-radius: 4px;
      text-align: center;
      background: #e5e9ef;
      white-space: nowrap;
    }

    .ad-img {
      position: absolute;
      width: 260px;
      height: 150px;
      margin-top: 10px;
      border-radius: 4px;
      overflow: hidden;
    }
  }
}
</style>