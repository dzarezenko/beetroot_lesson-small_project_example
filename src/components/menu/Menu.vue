<template>
  <nav>
    <menu-item v-for="(item, key) in menu" :key="key"
      :url="item.url" :title="item.title" />
  </nav>
</template>

<script>
import MenuItem from "@/components/menu/MenuItem";

export default {
  data() {
    return {
      menu: [
        { title: "ABOUT US", url: "#whatWeDo" },
        { title: "PROJECTS", url: "#gallery" },
        { title: "NEWS", url: "#news" },
        { title: "CONTACT", url: "#contact" },
      ]
    }
  },
  components: {
    'menu-item': MenuItem,
  },
}
</script>
