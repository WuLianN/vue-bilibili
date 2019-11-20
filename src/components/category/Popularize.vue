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
        @mousemove="getVideoShot($event, item, index)"
        :href="item.url"
        target="_blank"
      >
        <el-image class="video-img" :src="item.pic" lazy v-show="!isShowDetail[index]"></el-image>
        <div
          class="video-mask"
          v-show="isShowDetail[index]"
          :style="{backgroundImage: backgroundImage, backgroundPosition: backgroundPosition}"
        ></div>
        <p class="video-title" :style="{color: isShowDetail[index]?'#00a1d6':'black'}">{{item.name}}</p>
        <p class="video-duration" v-show="isShowDetail[index]">{{item.archive.duration | formatSec}}</p>
      </a>
    </div>

    <div class="popularize-ad">
      <a class="online" :href="online" target="_block">在线列表</a>
      <el-image class="ad-img" :src="promoteAd" alt />
    </div>
  </div>
</template>

<script>
import { promoteApi, link, contentrankApi, videoShot } from "../../api/index";

export default {
  data() {
    return {
      promote: [],
      image: [],
      promoteAd: "",
      lastIndex: "",
      backgroundImage: "",
      backgroundPosition: "",
      item_width: Number,
      imageCount: Number,
      link: link,
      online: "https://www.bilibili.com/video/online.html",
      isShowDetail: [false, false, false, false, false],
      isFirstTime: true
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
      // 记录上一个索引
      this.lastIndex = index;
      this.$set(this.isShowDetail, index, false);
    },

    // 获取雪碧图
    getVideoShot(event, item, index) {
      const width = 160;
      let aid = item.archive.aid;
      let total, nums, x, y;
      let offsetX = event.offsetX;

      if (this.isFirstTime) {
        this.isFirstTime = false;

        videoShot({ aid }).then(res => {
          const result = res.data;
          // 雪碧图中的小图数量
          total = result.index.length;
          // 雪碧图张数
          this.imgCount = result.image.length;
          // 雪碧图数组
          this.image = result.image;
          //
          this.item_width = Math.ceil(width / total);
        });
      }

      if (index !== this.lastIndex) {
        this.lastIndex = index;
        videoShot({ aid }).then(res => {
          const result = res.data;
          total = result.index.length;
          this.imgCount = result.image.length;
          this.image = result.image;
          this.item_width = Math.ceil(width / total);
        });
      }

      // 雪碧图张数 大于 1
      if (this.imgCount > 1 && this.image.length > 0) {
        let range = width / this.imgCount;
        for (let i = 1; i < this.imgCount; i++) {
          while (offsetX < range * i) {
            this.backgroundImage = `http:${this.image[i - 1]}`;
          }
          this.backgroundImage = `http:${this.image[i]}`;
        }
      } else {
        this.backgroundImage = `url('http:${this.image[0]}')`;
      }

      if (this.item_width) {
        nums = Math.ceil(offsetX / this.item_width);
        x = (nums - 1) % 10;
        y = Math.ceil(nums / 10) - 1;

        this.backgroundPosition = `${-x * 160}px ${-y * 90}px`;
      }
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

      .video-mask {
        position: absolute;
        top: 0;
        left: 0;
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
      display: block;
      color: #6d757a;
      position: relative;
      height: 34px;
      line-height: 34px;
      padding: 0 10px;
      border-radius: 4px;
      text-align: center;
      background: #e5e9ef;
      white-space: nowrap;
    }

    .online:hover {
      color: #00a1d6;
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