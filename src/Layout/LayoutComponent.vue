<template>
  <div class="layout-container">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "LayoutComponent",
  components: { Menu },
};
</script>

