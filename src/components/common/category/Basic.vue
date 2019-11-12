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
      <div class="video" v-for="(item, index) in videoData" :key="index">
        <el-image class="video-img" :src="item.pic" alt></el-image>
        <p class="video-title">{{item.title}}</p>
        <p class="video-count">
          <span class="video-span">
            <i class="video-view"></i>
            {{item.stat.view}}
          </span>
          <span class="video-span">
            <i class="video-danmaku"></i>
            {{item.stat.danmaku}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    videoData: Object,
    category: Object
  }
};
</script>

<style lang='less' scoped>
.link {
  width: 48px;
  height: 23.8px;
  margin: 0 10px 0 0;
  font-size: 12px;
  line-height: 23.8px;
}

.basic {
  width: 900px;
  height: 228px;
  position: relative;
  margin: 0 0 0 188px;

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
        background: url("../../../assets/icons.png");
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
          background-image: url("../../../assets/icons.png");
          background-position: -475px -89px;
        }

        .category-fullCount {
          margin-left: 5px;
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

        .category-more-icon {
          display: inline-block;
          width: 6px;
          height: 12px;
          margin: -2px 0 0;
          transition: all 0.2s;
          background-image: url("../../../assets/icons.png");
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
      width: 160px;
      height: 148px;
      position: relative;
      margin: 0 15px 20px 0;

      .video-img {
        width: 160px;
        height: 100px;
        border-radius: 4px;
      }
    }

    .video-title {
      width: 160px;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 1px 0;
    }

    .video-count {
      font-size: 12px;
      margin: 4px 0;

      .video-span {
        display: inline-block;
        width: 80px;
        height: 14px;
      }

      .video-view {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: url("../../../assets/icons.png");
        background-position: -282px -90px;
      }

      .video-danmaku {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: url("../../../assets/icons.png");
        background-position: -282px -218px;
      }
    }
  }
}
</style>