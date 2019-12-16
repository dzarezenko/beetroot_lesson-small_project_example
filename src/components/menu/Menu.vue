<template>
  <nav>
    <a v-for="(menuItem, key) in menu"
       :key="key" :href="menuItem.url" class="scroll">{{ menuItem.title }}</a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { title: "ABOUT US", url: "#whatWeDo" },
        { title: "PROJECTS", url: "#gallery" },
        { title: "NEWS", url: "#news" },
        { title: "CONTACT", url: "#contact" },
        { title: "TEST", url: "#test" },
      ]
    }
  }
}
</script>
