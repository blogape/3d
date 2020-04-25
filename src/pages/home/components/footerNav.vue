<template>
  <div class="f-nav">
    <ul>
      <li>
        <router-link to="/detail">
          <div class="img">
            <img
              src="https://home-cdn.svrvr.com/scene/2019/11/25/1574602096426193c2458b0f8e97172d7aa7cc1368e2de4cce54e830a5013e1fac1bf34e3f990/thumb.jpg"
            />
          </div>
          <span>北京市供电局</span>
        </router-link>
      </li>
      <li>
        <div class="img">
          <img
            src="https://home-cdn.svrvr.com/scene/2019/11/25/1574602096426193c2458b0f8e97172d7aa7cc1368e2de4cce54e830a5013e1fac1bf34e3f990/thumb.jpg"
          />
        </div>
        <span>天津市供电局</span>
      </li>
      <li>
        <div class="img">
          <img
            src="https://home-cdn.svrvr.com/scene/2019/11/25/1574602096426193c2458b0f8e97172d7aa7cc1368e2de4cce54e830a5013e1fac1bf34e3f990/thumb.jpg"
          />
        </div>
        <span>伏天氏供电局</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
/* tslint:disable  */

import { Component, Vue } from "vue-property-decorator";
// const imgurl1 = require("https://blogape.oss-cn-shenzhen.aliyuncs.com/1.jpg");
// const imgurl2 = require("https://blogape.oss-cn-shenzhen.aliyuncs.com/2.jpg");
// const imgurl3 = require("https://blogape.oss-cn-shenzhen.aliyuncs.com/3.jpg");

@Component({
  components: {
    // HelloWorld
  }
})
export default class rightNav extends Vue {
  img1 = "https://blogape.oss-cn-shenzhen.aliyuncs.com/1.jpg";
  // const imgurl2 = require("https://blogape.oss-cn-shenzhen.aliyuncs.com/2.jpg';
  img2 = "https://blogape.oss-cn-shenzhen.aliyuncs.com/2.jpg";
  img3 = "https://blogape.oss-cn-shenzhen.aliyuncs.com/3.jpg";

  // public userData:[]string = "";
}
</script>

<style lang='less' scoped>
.f-nav {
  position: fixed;
  z-index: 999999;
  left: 10px;
  bottom: 10px;
  ul {
    li {
      float: left;
      width: 100px;
      padding: 5px;
      cursor: pointer;
      font-size: 12px;
      margin-left: 5px;
      background-color: #fff;
      .img {
        height: 80px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      span {
        display: inline-block;
        height: 30px;
        width: 90px;
        line-height: 30px;
        white-space: nowrap;
        /*设置内容不换行*/
        text-overflow: ellipsis;
        /*设置文字超出文本框的内容显示成...*/
        overflow: hidden;
      }
    }
  }
}
</style>