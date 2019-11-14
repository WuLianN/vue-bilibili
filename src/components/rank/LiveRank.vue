<template>
  <div class="liveRank">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="直播排行" name="first">
        <div class="row" v-for="(item,index) in liveRankData" :key="index">
          <span
            class="row-index"
            :style="{ backgroundColor: index>2? '#b8c0cc': '#f25d8e'}"
          >{{index + 1}}</span>
          <el-image class="row-img" :src="item.face"></el-image>
          <span class="row-info">
            <p class="row-info-uname">{{item.uname}}</p>
            <p class="row-info-title">{{item.title}}</p>
          </span>
          <span class="row-count">
            <i class="row-eye"></i>
            {{item.online | formatNum}}
          </span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="为你推荐" name="second">
        
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },

  props: {
    liveRankData: Array
  },

  filters: {
    formatNum: function(value) {
      if (!value) {
        return "";
      } else {
        if (value > 9999 && value <= 99999999) {
          const result = Math.floor(value / 10000);
          // console.log(result);
          return result + "万";
        } else if (value > 99999999) {
          const result = value / 100000000;
          const Tresult = result.toString().slice(0, 3);
          return Tresult + "亿";
        } else {
          return value;
        }
      }
    }
  },

  created() {},

  components: {},

  methods: {}
};
</script>

<style lang='less' scoped>
@images: "../../assets";

.liveRank {
  width: 260px;
  height: 367px;
  position: absolute;
  top: 510px;
  right: 173px;
  font-size: 12px;

  .row {
    display: flex;
    flex-flow: row nowrap;
    margin: 0 0 5px 0;

    .row-index {
      display: inline-block;
      width: 18px;
      height: 18px;
      text-align: center;
      line-height: 18px;
      color: #fff;
      border-radius: 4px;
    }

    .row-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 0 0 10px;
    }

    .row-info {
      width: 80px;
      height: 40px;
      margin: 0 0 0 10px;

      .row-info-uname {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .row-info-title {
        color: #99a2aa;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .row-count {
      margin: 0 0 0 10px;
      font-size: 12px;
      color: #99a2aa;
    }

    .row-eye {
      display: inline-block;
      width: 12px;
      height: 12px;
      background: url("@{images}/live-eye.png");
    }
  }
}
</style>