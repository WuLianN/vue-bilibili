<template>
  <div class="chief-recomment">
    <div class="carousel">
      <el-carousel indicator-position="none" trigger="click">
        <el-carousel-item v-for="(item,index) in banner" :key="index" height="300">
          <el-image :src="item.pic" lazy></el-image>
          <span class="carousel-name">{{item.name}}</span>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="card-wrapper" @mouseover="showControls" @mouseout="donotShowControls">
      <div class="card-show" :style="{marginLeft: left}">
        <div class="day">
          <a
            class="card"
            v-for="(item,index) in yesterdayRank"
            :key="index"
            @mouseover="showDetail(index)"
            @mouseout="closeDetail(index)"
            :href="`${link}${item.aid}`"
            target="_blank"
          >
            <div>
              <el-image class="card-img" :src="item.pic" lazy></el-image>
              <span class="card-title" v-show="!isShowDetail[index]">{{item.title}}</span>
              <div class="card-detail" v-show="isShowDetail[index]">
                <p class="card-fullTitle">{{ item.title }}</p>
                <p class="card-author">up主: {{item.author}}</p>
                <p class="card-play">播放: {{item.play}}</p>
              </div>
            </div>
          </a>
        </div>

        <div class="day">
          <a
            class="card"
            v-for="(item,index) in threeDaysRank"
            :key="index"
            @mouseover="showDetail(index)"
            @mouseout="closeDetail(index)"
            :href="`${link}${item.aid}`"
            target="_blank"
          >
            <div>
              <el-image class="card-img" :src="item.pic" lazy></el-image>
              <span class="card-title" v-show="!isShowDetail[index]">{{item.title}}</span>
              <div class="card-detail" v-show="isShowDetail[index]">
                <p class="card-fullTitle">{{ item.title }}</p>
                <p class="card-author">up主: {{item.author}}</p>
                <p class="card-play">播放: {{item.play}}</p>
              </div>
            </div>
          </a>
        </div>

        <div class="day">
          <a
            class="card"
            v-for="(item,index) in oneWeekRank"
            :key="index"
            @mouseover="showDetail(index)"
            @mouseout="closeDetail(index)"
            :href="`${link}${item.aid}`"
            target="_blank"
          >
            <div>
              <el-image class="card-img" :src="item.pic" lazy></el-image>
              <span class="card-title" v-show="!isShowDetail[index]">{{item.title}}</span>
              <div class="card-detail" v-show="isShowDetail[index]">
                <p class="card-fullTitle">{{ item.title }}</p>
                <p class="card-author">up主: {{item.author}}</p>
                <p class="card-play">播放: {{item.play}}</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <span @click="prev" class="prev" v-show="isShowControl">
        {{day[index-1]}}
        <i class="prev-i"></i>
      </span>
      <span @click="next" class="next" v-show="isShowControl">
        {{day[index+1]}}
        <i class="next-i"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { bannerApi, rankApi, link } from "../../api/index";
export default {
  data() {
    return {
      link: link,
      banner: [],
      yesterdayRank: [],
      threeDaysRank: [],
      oneWeekRank: [],
      isShowDetail: [false, false, false, false, false, false, false, false],
      index: 2,
      left: "-720px",
      day: ["一周", "昨日", "三日", "一周", "昨日"],
      isShowControl: false
    };
  },

  created() {
    this.getBanner();
    this.getThreeDays();
    this.getYesterday();
    this.getOneWeek();
  },

  methods: {
    // 获取轮播图
    getBanner() {
      bannerApi.list().then(res => {
        this.banner = res.data;
      });
    },

    // 昨日排行
    getYesterday() {
      rankApi.rankingYesterday().then(res => {
        this.yesterdayRank = res.recommend.list;
      });
    },

    // 三天排行
    getThreeDays() {
      rankApi.ranking3().then(res => {
        this.threeDaysRank = res.recommend.list;
      });
    },

    // 一周排行
    getOneWeek() {
      rankApi.ranking7().then(res => {
        this.oneWeekRank = res.recommend.list;
      });
    },

    showDetail(index) {
      this.$set(this.isShowDetail, index, true);
    },

    closeDetail(index) {
      this.$set(this.isShowDetail, index, false);
    },

    prev() {
      this.index -= 1;

      if (this.index === 0) {
        this.index = 3;
      }

      this.left = (this.index - 1) * -720 + "px";
    },

    next() {
      this.index += 1;

      if (this.index === 4) {
        this.index = 1;
      }

      this.left = (this.index - 1) * -720 + "px";
    },

    showControls() {
      this.isShowControl = true;
    },

    donotShowControls() {
      this.isShowControl = false;
    }
  }
};
</script>

<style lang='less' scoped>
@images: "../../assets";

.btn {
  position: absolute;
  top: 108px;
  display: block;
  width: 35px;
  height: 58px;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  text-align: center;
}

.chief-recomment {
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  width: 75%;
  height: 220px;
  margin: 0 auto 40px auto;
  .carousel {
    width: 440px;
    height: 220px;
    position: relative;

    .carousel-img {
      width: 440px;
      height: 220px;
    }

    .carousel-name {
      display: block;
      width: 440px;
      height: 20px;
      color: #fff;
      position: absolute;
      bottom: 90px;
      text-indent: 20px;
      z-index: 10000;
    }
  }

  .card-wrapper {
    width: 720px;
    height: 220px;
    // background: #00a1d6;
    overflow: hidden;
    position: relative;

    .card-show {
      width: 2160px;
      height: 220px;
      display: flex;
      flex-flow: row nowrap;

      .day {
        width: 720px;
        height: 220px;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
      }

      .card {
        position: relative;

        .card-img {
          width: 160px;
          height: 100px;
          margin: 5px 5px;
          border-radius: 5%;
          display: block;
        }

        .card-title {
          position: absolute;
          left: 15px;
          bottom: 15px;
          display: block;
          width: 140px;
          height: 15px;
          font-size: 13px;
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .card-detail {
          position: absolute;
          top: 0;
          width: 160px;
          height: 100px;
          margin: 5px 5px;
          background: rgba(0, 0, 0, 0.7);
          color: white;

          .card-fullTitle {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 140px;
            height: 30px;
            font-size: 12px;
            overflow: hidden;
          }

          .card-author {
            color: #99a2aa;
            position: absolute;
            bottom: 28px;
            left: 10px;
            font-size: 12px;
          }

          .card-play {
            color: #99a2aa;
            position: absolute;
            bottom: 10px;
            left: 10px;
            font-size: 12px;
          }
        }
      }
    }

    .prev {
      .btn;
      left: 45px;
      border-radius: 0 4px 4px 0;
      writing-mode: vertical-rl;
    }

    .next {
      .btn;
      right: 0px;
      border-radius: 4px 0 0 4px;
      writing-mode: vertical-lr;
    }

    .prev-i {
      display: block;
      width: 20px;
      height: 30px;
      background-image: url("@{images}/icons.png");
      background-repeat: no-repeat;
      background-position: -1236px -912px;
      margin: 15px 0 0 0;
    }

    .next-i {
      display: block;
      width: 20px;
      height: 30px;
      background-image: url("@{images}/icons.png");
      background-repeat: no-repeat;
      background-position: -1240px -848px;
      margin: 15px 0 0 0;
    }
  }
}
</style>