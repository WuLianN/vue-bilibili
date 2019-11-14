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
                <i class="header-icon-bilibili-tv"></i>
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
    <div class="topNav-search">
      <a class="link-ranking" href>
        <span class="ranking-title">排行榜</span>
      </a>
      <form class="search-form" action>
        <input class="search-input" type="text" :placeholder="defaultSearchWords" />
      </form>
      <button class="search-button"></button>
    </div>

    <img class="topNav-logo" :src="litpic" alt />
  </div>
</template>

<script>
import { topbgApi, getSearchDefaultWords } from "../../api/index";

export default {
  data() {
    return {
      topBg: "",
      litpic: "",
      defaultSearchWords: ""
    };
  },

  created() {
    this.getTopBg();
    this.getSearchDefaultWords();
  },

  methods: {
    // 获取头部背景图片
    getTopBg() {
      topbgApi.getTopBg().then(res => {
        this.topBg = res.data[0].pic;
        this.litpic = res.data[0].litpic;
      });
    },

    // 默认搜索词
    getSearchDefaultWords() {
      getSearchDefaultWords().then(res => {
        this.defaultSearchWords = res[0].show;
      });
    }
  }
};
</script>

<style lang='less' scoped>
@images: "../../assets";
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
          display: inline-block;
          width: 50px;
          height: 42px;
        }

        .header-icon-bilibili-tv {
          position: relative;
          display: inline-block;
          width: 17px;
          height: 15px;
          background: url("@{images}/icons.png");
          background-position: -920px -87px;
        }

        .header-icon-Navbar_mobile {
          display: inline-block;
          width: 15px;
          height: 15px;
          background: url("@{images}/icons.png");
        background-position: -1367px -1175px;
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

  .topNav-search {
    width: 342px;
    height: 36px;
    position: absolute;
    bottom: 20px;
    right: 190px;
    width: 268px;
    height: 32px;
    padding: 2px 2px 2px 72px;
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    font-size: 12px;
    display: flex;
    flex-flow: row nowrap;

    .link-ranking {
      position: absolute;
      left: 2px;
      top: 2px;
      height: 32px;
      line-height: 32px;
      background-color: hsla(0, 0%, 100%, 0.88);
      border-radius: 4px;
      width: 68px;
      transition: background-color 0.2s;

      .ranking-title {
        padding-left: 26px;
        color: #f25d8e;
        display: inline-block;
        background: url(../../assets/icons.png) -659px -655px no-repeat;
      }
    }

    .search-form {
      background-color: hsla(0, 0%, 100%, 0.88);
      display: block;
      height: 32px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      transition: background-color 0.2s;

      .search-input {
        width: 196px;
        color: #222;
        font-size: 12px;
        overflow: hidden;
        height: 32px;
        line-height: 32px;
        padding: 0 12px;
        border: 0;
        box-shadow: none;
        background-color: transparent;
      }
    }

    .search-button {
      display: block;
      position: absolute;
      right: 2px;
      width: 48px;
      min-width: 0;
      cursor: pointer;
      height: 32px;
      background: url(../../assets/icons.png) -653px -720px;
      background-color: hsla(0, 0%, 100%, 0.88);
      margin: 0;
      padding: 0;
      border: 0;
    }
  }

  .topNav-logo {
    position: absolute;
    width: 220px;
    height: 105px;
    left: 200px;
    top: 55px;
  }
}
</style>