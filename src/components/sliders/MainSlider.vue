<template>
  <div id="mainSlider">
    <div v-for="(slide, index) in slides" :key="index" :style="getCSS(slide.bgImage)">
      <h1>{{ slide.title }}</h1>
      <p>{{ slide.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "SIMPLE &amp; MODERN",
          content: "WE MAKE THE WORLD'S BEAUTIFUL EVERY DAY",
          bgImage: "images/tu-tram-pham-202263.png",
        },
        {
          title: "One World Trade Center",
          content: "WE MAKE THE WORLD'S BEAUTIFUL EVERY DAY",
          bgImage: "images/scott-webb-176434.png",
        },
        {
          title: "International Commerce Centre",
          content: "WE MAKE THE WORLD'S BEAUTIFUL EVERY DAY",
          bgImage: "images/main-slider2.png",
        },
        {
          title: "Hypnotize Yourself Into The Ghost",
          content: "WE MAKE THE WORLD'S BEAUTIFUL EVERY DAY",
          bgImage: "",
        },
        {
          title: "Hypnotize Yourself Into The Ghost",
          content: "WE MAKE THE WORLD'S BEAUTIFUL EVERY DAY",
          bgImage: "",
        },
      ],
    }
  },
  methods: {
    getCSS(img) {
      if (!img) {
        return {};
      }

      return {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }
    }
  }
}
</script>