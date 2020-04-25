<template>
  <div class="home">
    <div id="viewer"></div>
    <!-- <rightNav /> -->
    <!-- <footerNav /> -->
    <video id="video" v-if='isVideo' style="z-index:9999999" src="https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Bastion_TheLastBastion.mp4" controls="controls"
     width="100%"
     height="50%"
     class="video"
     autoplay='isauto'
     preload="auto"    x5-playsinline="" playsinline="" webkit-playsinline=""
    >
您的浏览器不支持 video 标签。
</video>
  </div>
</template>

<script lang="ts">
/* tslint:disable  */

import { Component, Vue } from "vue-property-decorator";
import { Utils } from "../../config/utils";
import PhotoSphereViewer from "photo-sphere-viewer";
import rightNav from "@/pages/home/components/rightNav.vue";
import footerNav from "@/pages/home/components/footerNav.vue";
// import { Account, Shop } from "../../api/index";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
const imgurl = "https://blogape.oss-cn-shenzhen.aliyuncs.com/3.jpg";
const loading = require("../../assets/photosphere-logo.gif");
const pinRed = require("../../assets/pin-red.png");

// import avater from "../../";
@Component({
  components: {
    // HelloWorld
    rightNav,
    footerNav
  }
})
export default class Home extends Vue {
  // public userData:[]string = "";
  factoryLink = imgurl;
  loadingimg = loading;
  pinRedImg = pinRed;
  isauto=false;
  isVideo=false;
  async getUserData() {
    // let name = "bruce";
    // let password = "123456";
    // console.log(1233);
    // this.userData = await Shop.getShopList();
    // console.log(this.userData);
  }

  initPhotoSphere() {
    (this as any).PSV = PhotoSphereViewer({
      container: document.getElementById("viewer"),
      panorama: this.factoryLink,
      // caption: "Bryce Canyon National Park <b>&copy; Mark Doliner</b>",
      loading_img: this.loadingimg,
      size: {
        width: "100%",
        height: screen.availHeight
      },
      caption: "供电图",
      // navbar: true,
      time_anim: false,
      default_long: 1.4441088145446443,
      default_lat: 0.0800613513013615,
      sphere_correction: { pan: 30.01, tilt: 0, roll: 0 },
      // max_fov: 100,         // 最大缩放值
      // min_fov: 99,          // 最小缩放值
      default_fov: 100, // 默认缩放值，在1-179之间
      // latitude_range: [0,0],//禁止上下滑动
      // mousewheel: false,    // 禁止鼠标滚轮缩放
      // navbar: true,
      navbar: ["autorotate", "zoom", "markers", "caption", "fullscreen"],
      theta_offset: 1000, // 旋转速度
      markers: [
        {
          // image marker that opens the panel when clicked
          id: "image",
          longitude: 0.2,
          latitude: -0.1377,
          image:
            "https://home-cdn.svrvr.com/upload/2020/2/260-1581348635-4b6b8f54-58cb-4866-aa35-b323e965d56d.png",
          width: 122,
          height: 152,
          anchor: "bottom center",
          tooltip: "A image marker."

          // content: document.getElementById('lorem-content').innerHTML
        }
      ]
    });
  }

  mounted() {
      let video:any = document.getElementById('video')

    // console.log(process.env.VUE_APP_IMAGEPATH);
    this.initPhotoSphere();
    this.getUserData();
    Utils.getStore("name");
  let that=this;
    (this as any).PSV.on("select-marker", function(marker) {
      that.isVideo=true;
      // if (marker.data && marker.data.generated) {
      //   PSV.removeMarker(marker);
      video.play();
      that.isauto=true;
      // }
    });
  }
}
</script>


<style lang='less' scoped>
.video{
  position: fixed;
  background-color: #000;
  top:25%;
  left:0;
  // margin-left: -25%;
  // left:50%;
}
// @import "../../assets/style/mixin.less";
// .home {
//   width: 100px;
//   height: 100px;
//   border: 1px solid red;
//   .bis('"https://static.segmentfault.com/sponsor/20191005.png"');
// }
</style>