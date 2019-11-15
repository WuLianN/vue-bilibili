<template>
  <div class="bottomNav">
    <div class="bili-wrapper">
      <div class="primary-menu">
        <ul class="bottomNav-menu">
          <li>
            <span class="icon home"></span>
            <a class="link-a" href="https://www.bilibili.com">首页</a>
          </li>

          <li v-for="(item, index) in category" :key="index">
            <a :href="item.link" targett="_block" class="link">
              <div class="count">{{item.count}}</div>
              <div class="title">{{item.title}}</div>
            </a>
          </li>

          <li v-for="(item, index) in specialCategory" :key="index+100">
            <a class="link-a" :href="item.link">
              <div class="icon" :style="{backgroundPosition: item.position}"></div>
              <div>{{item.title}}</div>
            </a>
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
          count: "999+",
          link: "https://www.bilibili.com/v/douga"
        },
        {
          title: "番剧",
          count: 61,
          link: "https://www.bilibili.com/v/anime"
        },
        {
          title: "国创",
          count: 468,
          link: "https://www.bilibili.com/v/guochuang"
        },
        {
          title: "音乐",
          count: "999+",
          link: "https://www.bilibili.com/v/music"
        },
        {
          title: "舞蹈",
          count: 108,
          link: "https://www.bilibili.com/v/dance"
        },
        {
          title: "游戏",
          count: 999,
          link: "https://www.bilibili.com/v/game"
        },
        {
          title: "科技",
          count: 482,
          link: "https://www.bilibili.com/v/technology"
        },
        {
          title: "数码",
          count: 445,
          link: "https://www.bilibili.com/v/digital"
        },
        {
          title: "生活",
          count: 988,
          link: "https://www.bilibili.com/v/life"
        },
        {
          title: "鬼畜",
          count: 64,
          link: "https://www.bilibili.com/v/kichiku"
        },
        {
          title: "时尚",
          count: 177,
          link: "https://www.bilibili.com/v/fashion"
        },
        {
          title: "广告",
          count: 43,
          link: "https://www.bilibili.com/v/ad"
        },
        {
          title: "娱乐",
          count: "999+",
          link: "https://www.bilibili.com/v/ent"
        },
        {
          title: "影视",
          count: 702,
          link: "https://www.bilibili.com/v/cinephile"
        },
        {
          title: "放映厅",
          count: 310,
          link: "https://www.bilibili.com/v/cinema"
        }
      ],

      specialCategory: [
        {
          title: "专栏",
          position: "-87px -1814px",
          link: "https://www.bilibili.com/read/home"
        },
        {
          title: "广场",
          position: "-87px -2006px",
          link: "https://www.bilibili.com/blackboard/x/act_list"
        },
        {
          title: "直播",
          position: "-87px -1878px",
          link: "https://live.bilibili.com"
        },
        {
          title: "小黑屋",
          position: "-87px -1942px",
          link: "https://www.bilibili.com/blackroom/ban"
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

        .link {
          .count {
            display: block;
            text-align: center;
            background: #ffafc9;
            color: white;
            border-radius: 20%;
            font-size: 12px;
            margin: 2px 0 3px 0;
          }

          .title {
            display: block;
            text-align: center;
            color: black;
            font-size: 15px;
          }
        }

        .link-a {
          color: black;
          font-size: 15px;
        }
      }
    }
  }
}
</style>