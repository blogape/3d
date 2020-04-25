<template>
  <div class="r-nav">
    <ul>
      <li>包头供电局</li>
      <li>供电业务介绍</li>
      <li>菜单名称</li>
      <li>网格经理</li>
      <li>网格经理</li>
    </ul>
    <div class="qrcode">
      <div>微信扫一扫</div>
      <div class="am-whitespace am-whitespace-md"></div>
      <div title="https://i.svrvr.com/v2/pano/#/pano/25ab676bee">
        <canvas width="94" height="94" style="display: none;"></canvas>
        <img
          src="data:image/png;base64,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"
          style="display: block;"
        />
      </div>
      <div class="am-whitespace am-whitespace-md"></div>
      <div style="text-shadow: rgb(255, 255, 255) 1px 1px 2px;">浏览量：280</div>
    </div>
  </div>
</template>

<script lang="ts">
/* tslint:disable  */

import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    // HelloWorld
  }
})
export default class rightNav extends Vue {
  // public userData:[]string = "";
}
</script>


<style lang='less' scoped>
.r-nav {
  position: fixed;
  right: 10px;
  z-index: 99999;
  top: 10px;
  ul {
    li {
      background-color: rgba(0, 0, 0, 0.5);
      margin-bottom: 5px;
      border-radius: 5px;
      color: rgb(255, 255, 255);
      text-align: center;
      font-size: 12px;
      overflow: hidden;
      padding: 4px 8px;
      height: auto;
      line-height: 1.5;
      cursor: pointer;
    }
  }
  .qrcode {
    text-align: center;
    font-size: 12px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 7px;
    .am-whitespace.am-whitespace-md {
      height: 9px;
    }
  }
}
// @import "../../assets/style/mixin.less";
// .home {
//   width: 100px;
//   height: 100px;
//   border: 1px solid red;
//   .bis('"https://static.segmentfault.com/sponsor/20191005.png"');
// }
</style>