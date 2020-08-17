<template>
  <div id="app">
    <component :is="layout" v-if="layout" />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    layout() {
      return this.$route.meta.layout || this.guestLayout;
    }
  }
};
</script>
