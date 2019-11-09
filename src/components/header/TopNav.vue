<template>
  <div class="topNav">
    <div class="topNav-menu">
      <div class="blur-bg" :style="{background: `url(${topBg})`}"></div>
      <div class="topNav-mask"></div>
      <div class="topNav-wrapper">
        <div class="nav-wrapper-left">
          <ul class="nav-con-ul">
            <li class="nav-item">
              <a class="t special" href title="主站">
                <!-- <i class="header-icon-bilibili-tv"></i> -->
                <span class="special-title">主站</span>
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
                <!-- <i class="header-icon-Navbar_mobile"></i> -->
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
                  <img class="face" src="../../assets/akari.jpg" alt />
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
    <div class="topNav-bg" :style="{background: `url(${topBg})`}"></div>
  </div>
</template>

<script>
import { topbgApi } from "../../api/index";
export default {
  data() {
    return {
      topBg: ""
    };
  },

  created() {
    this.getTopBg();
  },

  methods: {
    // 获取头部背景图片
    getTopBg() {
      topbgApi.getTopBg().then(res => {
        this.topBg = res.data[0].pic;
      });
    }
  }
};
</script>

<style lang='less' scoped>
.topNav {
  width: 100%;
  height: 170px;
  position: relative;
  .topNav-menu {
    width: 100%;
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

    .topNav-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: hsla(0, 0%, 100%, 0.4);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      z-index: -10;
    }

    .topNav-wrapper {
      width: 75%;
      height: 42px;
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      position: relative;

      .nav-con-ul {
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        .nav-item {
          display: flex;
          justify-content: center;
          .t {
            display: block;
            position: relative;
            width: 100%;
            height: 42px;
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

        .special-title {
          // display: inline-block;
          // width: 50px;
          // height: 42px;
        }

        .header-icon-bilibili-tv {
          position: relative;
          display: inline-block;
          width: 15px;
          height: 42px;
          // background: url("../assets/icons.png");
          // background-position: -1000px -69px;
          background: #222;
        }

        .header-icon-Navbar_mobile {
          display: inline-block;
          width: 15px;
          height: 42px;
          background: #222;
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

  .topNav-bg {
    position: relative;
    z-index: -50;
    width: 100%;
    height: 170px;
    margin-top: -42px;
    background-position: no-repeat;
    background-position: center -10px;
  }
}
</style>