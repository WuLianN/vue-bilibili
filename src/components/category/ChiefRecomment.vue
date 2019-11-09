<template>
  <div class="chief-recomment">
    <div class="carousel">
      <el-carousel indicator-position="none" trigger="click">
        <el-carousel-item v-for="(item,index) in banner" :key="index" height="300">
          <el-image :src="item.pic" lazy></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="card-wrapper">
      <!-- <div class="yesterday">
            <div v-for="(item,index) in yesterdayRank" :key="index">
              <el-image :src="item.pic" lazy></el-image>
            </div>
      </div>-->
      <div class="threeDays">
        <div class="card" v-for="(item,index) in threeDaysRank" :key="index">
          <el-image class="card-img" :src="item.pic" lazy></el-image>
          <span class="card-title">{{item.title}}</span>
        </div>
      </div>
      <!-- <div class="oneWeek">
            <div v-for="(item,index) in oneWeekRank" :key="index">
              <el-image :src="item.pic" lazy></el-image>
            </div>
      </div>-->
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import { bannerApi, rankApi } from "../../api/index";
export default {
  data() {
    return {
      banner: [],
      yesterdayRank: [],
      threeDaysRank: [],
      oneWeekRank: []
    };
  },

  created() {
    this.getBanner();
    // this.getYesterday();
    this.getThreeDays();
    // this.getOneWeek();
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
    }
  }
};
</script>

<style lang='less' scoped>
.chief-recomment {
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  width: 75%;
  height: 220px;
  margin: 0 auto;
  .carousel {
    width: 440px;
    height: 220px;

    .carousel-img {
      width: 440px;
      height: 220px;
    }
  }

  .card-wrapper {
    width: 720px;
    height: 220px;
    // background: #00a1d6;

    .threeDays {
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
    }
  }
}
</style>