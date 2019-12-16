<template>
  <a :href="url" class="scroll">{{ title }}</a>
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
  }
}
</script>
