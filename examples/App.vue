<template>
  <div id="app">
    <header>
      <div class="logo">simple ui</div>
      <div class="nav">
        <div class="navitem">首页</div>
        <div class="navitem">组件</div>
      </div>
    </header>
    <div class="contain">
      <div class="content">
        <div class="sliderbar">
          <ul>
            <router-link :to="item.path" v-for="(item,index) in navs" :key="index">
              <li class="menuItem">{{item.name}}</li>
            </router-link>
          </ul>
        </div>

        <div class="right">
          <router-view></router-view>
          <!-- 
          <g-row :gutter="10">
            <g-col :span="6">
              <div class="bg-purple-dark"></div>
            </g-col>
            <g-col :span="8" :offset="2">
              <div class="bg-purple-dark"></div>
            </g-col>
            <g-col :span="8">
              <div class="bg-purple-light"></div>
            </g-col>
          </g-row>
          <g-Button @click="visible=true">dialog</g-Button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import routes from './router/nav.json'
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    a () {
      console.log(111)
    }
  },
  computed: {
    navs () {
      return routes.list
    }
  },
  created () {

  }

}
</script>

<style lang='scss' >
* {
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    color: black;
  }
  div {
    box-sizing: border-box;
  }
}
:root {
  --button-bg: #fff;
}
#app {
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  header {
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    padding: 0 48px;
    background-color: rgb(45, 183, 245);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
      &:hover {
        cursor: pointer;
      }
    }
    .nav {
      display: flex;
      height: 100%;

      .navitem {
        font-size: 0.9rem;
        line-height: 4rem;
        width: 4rem;
        text-align: center;
        color: #fff;
        &:hover {
          border-bottom: 2px solid #fff;
          cursor: pointer;
        }
      }
    }
  }

  .contain {
    padding: 1rem 4rem 4rem;
    background-color: rgb(241, 244, 249);

    .content {
      background-color: #fff;
      display: flex;
      .sliderbar {
        width: 15rem;
        height: 100%;
        ul {
          list-style: none;
          li {
            text-align: center;
            &.menuItem {
              padding: 1rem 2rem;
              font-size: 0.8rem;
              cursor: pointer;
            }
            &.menuItem:hover {
              background-color: rgb(234, 248, 254);
            }
          }
        }
      }
      .right {
        width: 100%;
        border-left: 1px solid #ccc;
        .g-swipe {
          margin: 10px auto;
        }
        .g-swipe .g-swipe-item {
          color: #fff;
          font-size: 20px;
          line-height: 150px;
          text-align: center;
          background-color: #39a9ed;
        }
      }
    }
  }
}
</style>
