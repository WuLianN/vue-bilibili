<template>
  <div class="live">
    <div class="header">
      <div class="header-left" v-if="videoData">
        <i class="category-img" :style="{backgroundPosition:category.position}"></i>
        <span class="category-title">{{category.title}}</span>
        <div class="category-newVideo">
          当前共有
          <span class="online_total">{{videoData.online_total}}</span>
          个在线直播
        </div>
        <div class="category-newCommit">
          <i class="category-link-icon"></i>
          {{videoData.text_link.text}}
        </div>
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

    <div class="content" v-if="videoData">
      <div class="video" v-for="(item, index) in videoData.recommend" :key="index">
        <el-image class="video-img" :src="item.pic" alt></el-image>
        <p class="video-title">{{item.title}}</p>
        <p class="video-count">{{item.area_v2_parent_name}} · {{item.area_v2_name}}</p>
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
  },

  created() {},

  components: {},

  methods: {}
};
</script>

<style lang='less' scoped>
@images: "../../assets";

.link {
  width: 170px;
  height: 23.8px;
  margin: 0 10px 0 0;
  font-size: 12px;
  line-height: 23.8px;
  cursor: pointer;
}

.live {
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
        width: 100px;
        height: 24px;
        font-size: 24px;
        line-height: 24px;
        font-weight: 400;
        margin: 0 15px 0 10px;
      }

      .category-newVideo {
        .link;

        .online_total {
          color: #00a1d6;
        }
      }

      .category-newCommit {
        .link;

        .category-link-icon {
          position: relative;
          display: inline-block;
          vertical-align: top;
          margin-top: 4px;
          width: 14px;
          height: 14px;
          background: url("@{images}/icons.png");
          background-position: -665px -1113px;
        }
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
      color: #9ba3ab;
    }
  }
}
</style>