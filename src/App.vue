<template>
  <div id="app">
    <div class="bill-header-m">
      <div class="nav-menu">
        <div class="blur-bg"></div>
        <div class="nav-mask"></div>
        <div class="nav-wrapper">
          <div class="nav-wrapper-left">
            <ul class="nav-con-ul">
              <li class="nav-item">
                <a class="t" href>
                  <i class="header-icon-bilibili-tv"></i>
                  主站
                </a>
              </li>
              <li class="nav-item">
                <a class="t" href>游戏中心</a>
              </li>
              <li class="nav-item">
                <a class="t" href>直播</a>
              </li>
              <li class="nav-item">
                <a class="t" href>会员购</a>
              </li>
              <li class="nav-item">
                <a class="t" href>漫画</a>
              </li>
              <li class="nav-item">
                <a class="t" href>赛事</a>
              </li>
              <li class="nav-item">
                <a class="t" href>BW</a>
              </li>
              <li class="nav-item">
                <a class="t" href>
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
                    <img class="face" src="./assets/akari.jpg" alt />
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
      <div class="header-banner"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},

  components: {}
};
</script>

<style lang="less">
@red: red;
@green: green;
@blue: blue;

* {
  margin: 0;
  padding: 0;
}

.fullWidth {
  width: 100%;
}

a {
  text-decoration: none;
}

#app {
  .fullWidth;
  height: 100vh;
  position: relative;
}

.bill-header-m {
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
      background: url("./assets/background.png");
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
    background: url("./assets/background.png");
    background-position: no-repeat;
    background-position: center -10px;
  }
}
</style>
