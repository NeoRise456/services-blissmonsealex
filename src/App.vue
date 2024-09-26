<script >
import HeaderToolbar from "./public/components/header-toolbar.component.vue";
import ServicesPage from "./blisservices/pages/services-page.component.vue";

export default {
  name: 'App',
  components: {ServicesPage, HeaderToolbar},
}

</script>

<template>
  <services-page/>
</template>

<style scoped>

</style>
