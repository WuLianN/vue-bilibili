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
        @mouseover="showDetail(item,index)"
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
      lastIndex: -1,
      backgroundImage: "",
      backgroundPosition: "",
      item_width: Number,
      imageCount: Number,
      link: link,
      online: "https://www.bilibili.com/video/online.html",
      isShowDetail: [false, false, false, false, false],
      controlGetTimes: [true, true, true, true, true],
      videoShotData: []
    };
  },

  created() {
    this.getPromote();
  },

  methods: {
    getPromote() {
      promoteApi.promote().then(res => {
        this.promote = res.data.slice(1, 6);
        this.promoteAd = res.promoteAd[0].pic;
      });
    },

    showDetail(item, index) {
      this.$set(this.isShowDetail, index, true);
      const aid = item.archive.aid;

      if (this.controlGetTimes[index] === true) {
        videoShot({ aid }).then(res => {
          // 使用videoShotData，存储雪碧图数据
          this.$set(this.videoShotData, index, res.data);

          // console.log(this.videoShotData)

          // 该雪碧图已经加载了，之后不再加载
          this.$set(this.controlGetTimes, index, false);

          // console.log(this.controlGetTimes)
        });
      }
    },

    closeDetail(index) {
      this.$set(this.isShowDetail, index, false);
    },

    // 获取雪碧图
    getVideoShot(event, item, index) {
      const width = 160;
      let offsetX = event.offsetX;
      // console.log(item, index)
      // console.log(aid, offsetX);

      // console.log(this.videoShotData[index]);

      if (this.videoShotData[index] !== undefined) {
        let total = this.videoShotData[index].index.length;
        let imgCount = this.videoShotData[index].image.length;
        let image = this.videoShotData[index].image;
        let item_width = Math.ceil(width / total);

        // 雪碧图张数 大于 1
        if (imgCount > 1 && image.length > 0) {
          let range = width / imgCount;
          for (let i = 1; i < imgCount; i++) {
            while (offsetX < range * i) {
              this.backgroundImage = `http:${image[i - 1]}`;
            }
            this.backgroundImage = `http:${image[i]}`;
          }
        } else {
          this.backgroundImage = `url('http:${image[0]}')`;
        }

        if (item_width) {
          let nums = Math.ceil(offsetX / item_width);
          let x = (nums - 1) % 10;
          let y = Math.ceil(nums / 10) - 1;

          this.backgroundPosition = `${-x * 160}px ${-y * 90}px`;
        }
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
        position: absolute;
        top: 100px;
        left: 0;
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