<!--  -->
<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" activeColor="yellow">
        <img slot="item-icon" src="~assets/imgs/tabbar/home1.png" alt />
        <img slot="item-icon-active" src="~assets/imgs/tabbar/home2.png" alt />
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="yellow">
        <img slot="item-icon" src="~assets/imgs/tabbar/classify1.png" alt />
        <img slot="item-icon-active" src="~assets/imgs/tabbar/classify2.png" alt />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="yellow">
        <img slot="item-icon" src="~assets/imgs/tabbar/cart1.png" alt />
        <img slot="item-icon-active" src="~assets/imgs/tabbar/cart2.png" alt />
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="yellow">
        <img slot="item-icon" src="~assets/imgs/tabbar/mine1.png" alt />
        <img slot="item-icon-active" src="~assets/imgs/tabbar/mine2.png" alt />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<style scoped>
</style>
<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";
export default {
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>