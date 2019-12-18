<template>
  <a :href="url" class="scroll">{{ title }}</a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
    title: String,
  }
}
</script>
