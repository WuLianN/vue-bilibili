<template>
  <div id="app">
    <div class="header">
      <div class="login" @click="showUserInfo">
        <img src="./assets/category.png" alt class="img-content" />
        <img src="./assets/akari.jpg" alt class="img-login" />
      </div>

      <div class="search">
        <van-search
          placeholder="请输入搜索关键词"
          v-model="keyword"
          shape="round"
          width="50vw"
          height="7vh"
        />
      </div>

      <div class="img-wrap">
        <img src="./assets/game.png" alt class="img" />
        <img src="./assets/download.png" alt class="img" />
        <img src="./assets/envelope.png" alt class="img-envelope" />
      </div>
    </div>

    <div class="nav"></div>
    <div class="footer"></div>

    <div class="user" v-show="isShow">
      <User class="info" />
      <div class="masking" @click="closeUserInfo"></div>
    </div>
  </div>
</template>

<script>
import User from "@/views/User";
export default {
  data() {
    return {
      isShow: false,
      keyword: ""
    };
  },

  methods: {
    // 展示用户信息
    showUserInfo() {
      this.isShow = true;
    },

    // 关闭用户信息
    closeUserInfo() {
      this.isShow = false;
    }
  },

  components: {
    User
  }
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
  width: 100vw;
}

.img {
  width: 15%;
  height: 60%;
}

#app {
  .fullWidth;
  height: 100vh;
  position: relative;
}

.header {
  .fullWidth;
  height: 8.5vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  .login {
    width: 15vw;
    height: 8.5vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    .img-content {
      width: 3vw;
      height: 70%;
    }

    .img-login {
      width: 9vw;
      height: 60%;
      border-radius: 50%;
      margin: -1vh 0 0 0;
    }
  }

  .search {
    width: 50vw;
    height: 8.5vh;
  }

  .img-wrap {
    width: 40vw;
    height: 8.5vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    position: relative;
  }

  .img-envelope {
    .img;
    transform: scale(0.8, 0.7);
  }
}

.nav {
  .fullWidth;
  height: 80vh;
  // background: @red;
}

.footer {
  .fullWidth;
  height: 10vh;
  // background: @blue;
}

.user {
  .fullWidth;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;

  .info {
    width: 75vw;
    height: 100vh;
    position: relative;
  }

  .masking {
    width: 25vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.575);
  }
}
</style>
