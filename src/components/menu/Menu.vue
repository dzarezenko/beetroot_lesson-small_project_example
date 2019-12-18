<template>
  <nav>
    <menu-item v-for="(item, key) in menu" :key="key"
      :url="item.url" :title="item.title" />
  </nav>
</template>

<script>
import MenuItem from "@/components/menu/MenuItem";
import Config from "@/assets/js/config.json";

export default {
  data() {
    return {
      menu: Config.mainMenu,
    }
  },
  components: {
    'menu-item': MenuItem,
  },
}
</script>
