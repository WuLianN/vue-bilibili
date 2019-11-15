<template>
  <div class="category">
    <ChiefRecomment />
    <Popularize />
    <Live :videoData="live" :category="category.live" />
    <Basic :videoData="douga" :category="category.douga" />
    <Basic :videoData="bangumi" :category="category.bangumi" />
    <Basic :videoData="music" :category="category.music" />
    <Basic :videoData="dance" :category="category.dance" />
    <Basic :videoData="game" :category="category.game" />
    <Basic :videoData="technology" :category="category.technology" />
    <Basic :videoData="life" :category="category.life" />
    <Basic :videoData="kichiku" :category="category.kichiku" />
    <Basic :videoData="fashion" :category="category.fashion" />
    <Basic :videoData="ent" :category="category.ent" />
    <LiveRank :liveRankData="liveRank" />
  </div>
</template>

<script>
import ChiefRecomment from "@/components/category/ChiefRecomment";
import Popularize from "@/components/category/Popularize";
import Live from "@/components/category/Live";
import Basic from "@/components/common/category/Basic";
import LiveRank from "@/components/rank/LiveRank";
import { contentApi, liveApi } from "@/api/index";

export default {
  data() {
    return {
      live: null,
      liveRank: [],
      music: null,
      dance: null,
      bangumi: null,
      teleplay: null,
      technology: null,
      life: null,
      kichiku: null,
      guochuang: null,
      game: null,
      fashion: null,
      ent: null,
      douga: null,

      category: {
        live: { title: "正在直播", position: "-141px -652px" },
        music: { title: "音乐", position: "-140px -266px" },
        dance: { title: "舞蹈", position: "-141px -461px" },
        bangumi: { title: "番剧", position: "-141px -140px" },
        teleplay: { title: "电视剧", position: "-141px -845px" },
        technology: { title: "科技", position: "-141px -525px" },
        life: { title: "生活", position: "-137px -970px" },
        kichiku: { title: "鬼畜", position: "-141px -332px" },
        guochuang: { title: "国创", position: "-140px -1611px" },
        game: { title: "游戏", position: "-141px -203px" },
        fashion: { title: "时尚", position: "-141px -718px" },
        ent: { title: "娱乐", position: "-141px -1032px" },
        douga: { title: "动画", position: "-141px -908px" },
        movie: { title: "电影", position: "-141px -396px" }
      }
    };
  },

  components: {
    ChiefRecomment,
    Popularize,
    Live,
    Basic,
    LiveRank
  },

  created() {
    this.getLive();
    this.getContent();
  },

  methods: {
    // 直播
    getLive() {
      liveApi.live().then(res => {
        this.live = res.data;
        this.liveRank = res.data.ranking;
      });

   
    },

    // 分类内容
    getContent() {
      contentApi.content().then(res => {
        this.music = res.music;
        this.dance = res.dance;
        this.game = res.game;
        this.life = res.life;
        this.movie = res.movie;
        this.technology = res.technology;
        this.fashion = res.fashion;
        this.bangumi = res.bangumi; // 番剧
        this.teleplay = res.teleplay; // 电视剧
        this.kichiku = res.kichiku; // 鬼畜
        this.guochuang = res.guochuang; // 国创
        this.ent = res.ent; // 娱乐
        this.douga = res.douga; // 动画
      });
    }
  }
};
</script>

<style lang='less' scoped>
.category {
  width: 100%;
  position: relative;
}
</style>