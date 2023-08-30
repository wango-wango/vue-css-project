<template>
  <div class="menu-container">
    <div class="menu-title">
      <transition name="icon-fade" mode="out-in">
        <font-awesome-icon
          :key="showRouter ? 'xmark' : 'bars'"
          :icon="showRouter ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
          class="icon-show"
          @click="toggleIcon"
        />
      </transition>
      白頭翁不吃小米
      <div class="logo"></div>
    </div>
    <transition name="slide">
      <div class="menu-list" v-show="showRouter">
        <router-link
          to="/characteristic"
          :class="{ active: currentRoute === '/characteristic' }"
          >白頭翁的特性</router-link
        >

        <router-link to="/about" :class="{ active: currentRoute === '/about' }"
          >白頭翁的故事</router-link
        >

        <router-link
          to="/pictures"
          :class="{ active: currentRoute === '/pictures' }"
          >白頭翁的美照</router-link
        >

        <router-link
          to="/danger"
          :class="{ active: currentRoute === '/danger' }"
          >白頭翁的危機</router-link
        >
      </div>
    </transition>
    <div class="menu-list tablet-show">
      <router-link
        to="/characteristic"
        :class="{ active: currentRoute === '/characteristic' }"
        >白頭翁的特性</router-link
      >

      <router-link to="/about" :class="{ active: currentRoute === '/about' }"
        >白頭翁的故事</router-link
      >

      <router-link
        to="/pictures"
        :class="{ active: currentRoute === '/pictures' }"
        >白頭翁的美照</router-link
      >

      <router-link to="/danger" :class="{ active: currentRoute === '/danger' }"
        >白頭翁的危機</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuView",
  props: {},
  data() {
    return {
      currentRoute: "",
      showRouter: false,
    };
  },
  watch: {
    $route(to) {
      // 更新当前路由
      this.currentRoute = to.path;
    },
  },
  computed: {},
  methods: {
    toggleIcon() {
      this.showRouter = !this.showRouter;
    },
  },
};
</script>
