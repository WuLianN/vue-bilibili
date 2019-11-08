<template>
  <div class="bili-header-m">
    <div class="nav-menu">
      <div class="blur-bg" :style="{background: `url(${topBg})`}"></div>
      <div class="nav-mask"></div>
      <div class="nav-wrapper">
        <div class="nav-wrapper-left">
          <ul class="nav-con-ul">
            <li class="nav-item">
              <a class="t" href title="主站">
                <i class="header-icon-bilibili-tv"></i>
                主站
              </a>
            </li>
            <li class="nav-item">
              <a class="t" href title="游戏中心">游戏中心</a>
            </li>
            <li class="nav-item">
              <a class="t" href title="直播">直播</a>
            </li>
            <li class="nav-item">
              <a class="t" href title="会员购">会员购</a>
            </li>
            <li class="nav-item">
              <a class="t" href title="漫画">漫画</a>
            </li>
            <li class="nav-item">
              <a class="t" href title="赛事">赛事</a>
            </li>
            <li class="nav-item">
              <a class="t" href title="BW">BW</a>
            </li>
            <li class="nav-item">
              <a class="t" href title="下载APP">
                <i class="header-icon-Navbar_mobile"></i>
                下载APP
              </a>
            </li>
          </ul>
        </div>
        <div class="nav-wrapper-right">
          <div class="nav-con">
            <ul class="nav-con-ul">
              <li class="nav-item">
                <a class="t" href>
                  <img class="face" src="../assets/akari.jpg" alt />
                </a>
              </li>
              <li class="nav-item">
                <a class="t" href>动态</a>
              </li>
              <li class="nav-item">
                <a class="t" href>历史</a>
              </li>
              <li class="nav-item">
                <a class="t" href>创作中心</a>
              </li>
            </ul>
            <div class="up-load">
              <a class="u-link" href>投稿</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-banner" :style="{background: `url(${topBg})`}"></div>

    <div class="bili-wrapper">
      <div class="primary-menu">
        <ul class="nav-menu">
          <li>
            <span class="icon home"></span>
            <a href>首页</a>
          </li>
          <li v-for="(item, index) in category" :key="index">
            <span class="count">{{item.count}}</span>
            <a href class="title">{{item.title}}</a>
          </li>
          <li>
            <span class="icon zhuanlan"></span>
            <a href>专栏</a>
          </li>
          <li>
            <span class="icon square"></span>
            <a href>广场</a>
          </li>
          <li>
            <span class="icon live"></span>
            <a href>直播</a>
          </li>
          <li>
            <span class="icon blackroom"></span>
            <a href>小黑屋</a>
          </li>
        </ul>
      </div>
      <div class="chief-recomment">
        <div class="carousel">
          <el-carousel indicator-position="outside" trigger="click">
            <el-carousel-item v-for="(item,index) in banner" :key="index" height="300">
              <el-image :src="item.pic" lazy></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { topbgApi, bannerApi } from "../api/index";
export default {
  data() {
    return {
      topBg: "",
      category: [
        {
          title: "动画",
          count: "999+"
        },
        {
          title: "番剧",
          count: 61
        },
        {
          title: "国创",
          count: 468
        },
        {
          title: "音乐",
          count: "999+"
        },
        {
          title: "舞蹈",
          count: 108
        },
        {
          title: "游戏",
          count: 999
        },
        {
          title: "科技",
          count: 482
        },
        {
          title: "数码",
          count: 445
        },
        {
          title: "生活",
          count: 988
        },
        {
          title: "鬼畜",
          count: 64
        },
        {
          title: "时尚",
          count: 177
        },
        {
          title: "广告",
          count: 43
        },
        {
          title: "娱乐",
          count: "999+"
        },
        {
          title: "影视",
          count: 702
        },
        {
          title: "放映厅",
          count: 310
        }
      ],
      banner: []
    };
  },

  created() {
    this.getTopBg();
    this.getBanner();
  },

  methods: {
    // 获取头部背景图片
    getTopBg() {
      topbgApi.getTopBg().then(res => {
        this.topBg = res.data[0].pic;
      });
    },

    // 获取轮播图
    getBanner() {
      bannerApi.list().then(res => {
        this.banner = res.data;
        console.log(this.banner);
      });
    }
  },

  components: {}
};
</script>

<style lang='less' scoped>
.fullWidth {
  width: 100%;
}

.bili-header-m {
  .fullWidth;
  height: 228px;
  font-size: 12px;

  .nav-menu {
    .fullWidth;
    height: 42px;
    position: relative;

    .blur-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: no-repeat;
      background-position: center -10px;
      filter: blur(4px);
      z-index: -20;
    }

    .nav-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: hsla(0, 0%, 100%, 0.4);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      z-index: -10;
    }

    .nav-wrapper {
      width: 75%;
      height: 42px;
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;

      .nav-con-ul {
        list-style: none;
        display: flex;
        flex-flow: row nowrap;

        .nav-item {
          .t {
            display: block;
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 42px;
            color: #222;
            padding: 0 7px;
            font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
              Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
          }
        }
      }

      .nav-wrapper-left {
        position: relative;
        .header-icon-bilibili-tv {
          position: relative;
          display: inline-block;
          width: 15px;
          height: 42px;
          // font-size: 16px;
          color: #00a1d6;
        }

        .header-icon-bilibili-tv::before {
          content: "\E668";
        }

        .header-icon-Navbar_mobile {
          position: relative;
          display: inline-block;
          width: 15px;
          height: 42px;
          // font-size: 16px;
          color: #23ade5;
        }

        .header-icon-Navbar_mobile::before {
          content: "\E724";
        }
      }

      .nav-wrapper-right {
        .nav-con {
          display: flex;
          flex-flow: row nowrap;
        }

        .face {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: block;
          margin: 5px auto;
        }

        .up-load {
          width: 68px;
          height: 48px;
          margin: 0 0 0 10px;

          .u-link {
            display: block;
            width: 100%;
            height: 46px;
            line-height: 42px;
            text-align: center;
            font-size: 14px;
            color: #fff;
            background-color: #f45a8d;
            border-radius: 0 0 6px 6px;
          }
        }
      }
    }
  }

  .header-banner {
    .fullWidth;
    position: relative;
    z-index: -50;
    height: 170px;
    margin-top: -42px;
    background-position: no-repeat;
    background-position: center -10px;
  }

  .bili-wrapper {
    margin: 0 auto;
    width: 75%;

    .primary-menu {
      .fullWidth;
      height: 60px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      .nav-menu {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 90%;
        height: 42px;
        color: #222;

        .icon {
          display: block;
          width: 18px;
          height: 18px;
          margin: 0 auto 1px auto;
          background: url("../assets/icons.png");
        }

        .home {
          background-position: -663px -1175px;
          background-repeat: no-repeat;
        }

        .zhuanlan {
          background-position: -87px -1814px;
        }

        .square {
          background-position: -87px -2006px;
        }

        .live {
          background-position: -87px -1878px;
        }

        .blackroom {
          background-position: -87px -1942px;
        }

        .count {
          display: block;
          text-align: center;
          background: #ffafc9;
          color: white;
          border-radius: 20%;
          font-size: 10px;
          margin: 2px 0 3px 0;
        }

        .title {
          display: block;
          text-align: center;
          color: black;
        }
      }
    }

    .carousel {
      width: 440px;
      height: 220px;

      .carousel-img {
        width: 440px;
        height: 220px;
      }
    }
  }
}
</style>