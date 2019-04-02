<template>
  <div class="MenuBar">
   <ul>
     <li>
       <router-link to="/">
        <span class="iconfont"></span>
       </router-link>
     </li>
     <li>
       <router-link to="/Classify">
        <span class="iconfont"></span>
       </router-link>
     </li>
     <li>
       <router-link to="/Message">
        <span class="iconfont"></span>
        
       </router-link>
     </li>
     <li>
       <router-link to="/ShopCar">
        <span class="iconfont"></span>
       
       </router-link>
     </li>
     <li>
       <router-link to="/User">
        <span class="iconfont"></span>
       
       </router-link>
     </li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuBar'
  
}
</script>


<style scoped>
.MenuBar{position: fixed;bottom: 0px;width: 100%;height: 98px;z-index: 999;}
.MenuBar ul{width:100%;height: 98px;background: #b0afaf;display: flex;}
.MenuBar ul li{width: 20%;text-align: center;display: flex;justify-content: center;align-items: center;}
.MenuBar ul li a{display:block;width: 50px;height: 50px;border-radius: 50%;background: #fff;}
.MenuBar ul li a span{}
.MenuBar ul li .router-link-exact-active{background: #fff;}
.MenuBar ul li .router-link-exact-active span{color: #f4b469;}

</style>
