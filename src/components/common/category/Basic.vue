<template>
  <div class="basic">
    <div class="header">
      <div class="header-left">
        <i class="category-img" :style="{backgroundPosition:category.position}"></i>
        <span class="category-title">{{category.title}}</span>
        <div class="category-newVideo">有新动态</div>
        <div class="category-newCommit">最新投稿</div>
      </div>
      <div class="header-right">
        <div class="read-push">
          <i class="category-fullCount-icon"></i>
          <span class="category-fullCount">{{}}条新动态</span>
        </div>

        <a class="link-more" href>
          更多
          <i class="category-more-icon"></i>
        </a>
      </div>
    </div>

    <div class="content">
      <a
        class="video"
        v-for="(item, index) in videoData"
        :key="index"
        :href="`${link}${item.aid}`"
        target="_blank"
        @mouseover="showOther(index)"
        @mouseout="closeOther(index)"
      >
        <el-image class="video-img" :src="item.pic" alt></el-image>
        <p
          class="video-title"
          :style="{color: isShowDetail[index]?'#00a1d6':'black'}"
        >{{item.title}}</p>
        <p class="video-count" v-show="!isShowDetail[index]">
          <span class="video-span">
            <i class="video-view"></i>
            {{item.stat.view}}
          </span>
          <span class="video-span">
            <i class="video-danmaku"></i>
            {{item.stat.danmaku}}
          </span>
        </p>
        <p class="video-duration" v-show="isShowDetail[index]">{{item.duration | formatSec}}</p>
      </a>
    </div>
  </div>
</template>

<script>
import { link } from "@/api/index";

export default {
  data() {
    return {
      link: link,
      isShowDetail: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    };
  },

  props: {
    videoData: Object,
    category: Object
  },

  methods: {
    showOther(index) {
      this.$set(this.isShowDetail, index, true);
    },

    closeOther(index) {
      this.$set(this.isShowDetail, index, false);
    }
  }
};
</script>

<style lang='less' scoped>
@images: "../../../assets";
.link {
  width: 48px;
  height: 23.8px;
  margin: 0 10px 0 0;
  font-size: 12px;
  line-height: 23.8px;
  cursor: pointer;
}

.basic {
  width: 900px;
  height: 381px;
  position: relative;
  margin: 10px 0 20px 188px;

  .header {
    width: 900px;
    height: 45px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .header-left {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      .category-img {
        display: block;
        width: 45px;
        height: 40px;
        background: url("@{images}/icons.png");
      }

      .category-title {
        width: 48px;
        height: 24px;
        font-size: 24px;
        line-height: 24px;
        font-weight: 400;
        margin: 0 15px 0 10px;
      }

      .category-newVideo {
        .link;
        position: relative;
        color: #00a1d6;
      }

      .category-newCommit {
        .link;
      }
    }

    .header-right {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin: 0 40px 0 0;

      .read-push {
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #ccd0d7;
        border-radius: 4px;
        height: 22px;
        padding: 0 10px;
        transition: all 0.2s;

        .category-fullCount-icon {
          display: inline-block;
          width: 12px;
          height: 13px;
          vertical-align: top;
          transition: all 0.5s;
          margin-top: 5px;
          background-image: url("@{images}/icons.png");
          background-position: -475px -89px;
        }

        .category-fullCount {
          margin-left: 5px;
          font-size: 12px;
        }
      }

      .link-more {
        width: 52px;
        height: 22px;
        line-height: 22px;
        background-color: #fff;
        border: 1px solid #ccd0d7;
        color: #555;
        border-radius: 4px;
        text-align: center;
        margin: 0 0 0 10px;
        transition: all 0.2s;
        font-size: 12px;

        .category-more-icon {
          display: inline-block;
          width: 6px;
          height: 12px;
          margin: -2px 0 0 0;
          vertical-align: middle;
          transition: all 0.2s;
          background-image: url("@{images}/icons.png");
          background-position: -478px -218px;
        }
      }
    }
  }

  .content {
    width: 900px;
    height: 336px;
    display: flex;
    flex-flow: row wrap;
    position: relative;
    .video {
      display: block;
      width: 160px;
      height: 148px;
      position: relative;
      margin: 0 15px 20px 0;

      .video-img {
        width: 160px;
        height: 100px;
        border-radius: 4px;
      }

      .video-duration {
        width: 160px;
        height: 20px;
        position: absolute;
        bottom: 48px;
        font-size: 12px;
        color: #99a2aa;
        line-height: 20px;
        text-indent: 5px;
        color: #fff;
      }
    }

    .video-title {
      width: 160px;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 1px 0;
      color: black;
    }

    .video-count {
      font-size: 12px;
      margin: 4px 0;
      color: #99a2aa;

      .video-span {
        display: inline-block;
        width: 80px;
        height: 14px;
      }

      .video-view {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: url("@{images}/icons.png");
        background-position: -282px -90px;
      }

      .video-danmaku {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: url("@{images}/icons.png");
        background-position: -282px -218px;
      }
    }
  }
}
</style>