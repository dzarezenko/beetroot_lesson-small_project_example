<template>
  <section id="home">
      <section id="bg">
        <header>
          <div id="logo"><img src="images/Logo.png" alt="logo" /></div>

          <main-menu />

          <social-menu />

        </header>
        <div id="mainSlider">
          <div
            style="background-image: url(images/tu-tram-pham-202263.png);   background-size: cover;
          height: 100vh; background-repeat: no-repeat;"
          >
            <h1>SIMPLE &amp; MODERN</h1>
            <p>WE MAKE THE WORLD'S BEAUTIFUL EVERY DAY</p>
          </div>
          <div
            style="background-image: url(images/scott-webb-176434.png);  background-size: cover;
          height: 100vh; background-repeat: no-repeat;"
          >
            <h1>One World Trade Center</h1>
            <p>WE MAKE THE WORLD'S BEAUTIFUL EVERY DAY</p>
          </div>
          <div
            style="background-image: url(images/main-slider2.png);  background-size: cover;
          height: 100vh; background-repeat: no-repeat;"
          >
            <h1>International Commerce Centre</h1>
            <p>WE MAKE THE WORLD'S BEAUTIFUL EVERY DAY</p>
          </div>
          <div>
            <h1>Effective Advertising Pointers</h1>
            <p>WE MAKE THE WORLD'S BEAUTIFUL EVERY DAY</p>
          </div>
          <div>
            <h1>Hypnotize Yourself Into The Ghost</h1>
            <p>WE MAKE THE WORLD'S BEAUTIFUL EVERY DAY</p>
          </div>
        </div>
      </section>
      <a href="#gallery" class="scroll"><i class="fas fa-chevron-down"></i></a>
    </section>
</template>

<script>
import Menu from "@/components/menu/Menu";
import SocialMenu from "@/components/menu/SocialMenu";

export default {
  components: {
    'main-menu': Menu,
    'social-menu': SocialMenu,
  },
  mounted() {
    console.log(this);
    this.$localStorage.set('someName', "someValue");
  },
}
</script>
