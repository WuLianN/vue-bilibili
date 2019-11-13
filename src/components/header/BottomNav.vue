<template>
  <div class="bottomNav">
    <div class="bili-wrapper">
      <div class="primary-menu">
        <ul class="bottomNav-menu">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ]
    };
  },

  created() {},

  methods: {}
};
</script>

<style lang='less' scoped>
.bottomNav {
    width: 100%;
    height: 60px;
    position: relative;
    margin: 10px 0;

  .bili-wrapper {
    margin: 0 auto;
    width: 75%;

    .primary-menu {
      width: 100%;
      height: 60px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      .bottomNav-menu {
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
          background: url("../../assets/icons.png");
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
  }
}
</style>