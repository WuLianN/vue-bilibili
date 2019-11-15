<template>
  <div class="popularize">
    <div class="popularize-header">
      <i class="logo"></i>
      <span class="name">推广</span>
      <a href></a>
      <a href></a>
    </div>

    <div class="popularize-content">
      <a
        class="video-wrapper"
        v-for="(item, index) in promote"
        :key="index"
        @mouseover="showDetail(index)"
        @mouseout="closeDetail(index)"
        :href="item.url"
        target="_blank"
      >
        <el-image class="video-img" :src="item.pic" lazy></el-image>
        <p class="video-title" :style="{color: isShowDetail[index]?'#00a1d6':'black'}">{{item.name}}</p>
        <p class="video-duration" v-show="isShowDetail[index]">{{item.archive.duration | formatSec}}</p>
      </a>
    </div>

    <div class="popularize-ad">
      <div class="online">在线人数: {{}}</div>
      <el-image class="ad-img" :src="promoteAd" alt />
    </div>
  </div>
</template>

<script>
import { promoteApi, link } from "../../api/index";
export default {
  data() {
    return {
      promote: [],
      promoteAd: "",
      link: link,
      isShowDetail: [false, false, false, false, false]
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
    },

    showDetail(index) {
      this.$set(this.isShowDetail, index, true);
    },

    closeDetail(index) {
      this.$set(this.isShowDetail, index, false);
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
      display: block;
      width: 160px;
      height: 148px;
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

      .video-duration {
        position: absolute;
        bottom: 50px;
        left: 5px;
        color: white;
        font-size: 12px;
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