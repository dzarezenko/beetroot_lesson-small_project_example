<template>
  <div id="sqr" :style="css"
   :class="className" @click="changeColor()"></div>
</template>

<script>
export default {
  data() {
    return {
      className: {
        redBg: true,
        blueBg: false,
      },
      css: [
        {
          width: '100px',
          height: '100px',
          borderWidth: '3px',
        },
        {
          borderStyle: 'solid',
          borderColor: "yellow",
        },
      ]
    }
  },
  methods: {
    changeColor(e) {
      this.className.redBg = !this.className.redBg;
      this.className.blueBg = !this.className.blueBg;
    }
  }
}
</script>

<style scoped>
.redBg {
  background-color: red;
}
.greenBg {
  background-color: green;
}
.blueBg {
  background-color: blue;
}
</style>
