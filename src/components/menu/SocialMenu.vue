<template>
  <div class="socialMenu">
    <a v-for="(menuItem, index) in Config.socialMenu"
      :key="index" :href="menuItem.url">
      <i :class="['fab', menuItem.iconClassName]"></i>
    </a>
  </div>
</template>

<script>
import Config from "@/assets/js/config.json";

export default {
  data() {
    return {
      Config,
    }
  },
}
</script>
