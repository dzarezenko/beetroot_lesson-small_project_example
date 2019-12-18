<template>
  <div class="socialMenu">
    <a v-for="(menuItem, index) in socialMenuItems"
      :key="index" :href="menuItem.url">
      <i :class="['fab', menuItem.iconClassName]"></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialMenuItems: [
        {
          url: "#facebook",
          iconClassName: "fa-facebook-f"
        },
        {
          url: "#twitter",
          iconClassName: "fa-twitter"
        },
        {
          url: "#instagram",
          iconClassName: "fa-instagram"
        },
        
      ],
    }
  },
}
</script>
