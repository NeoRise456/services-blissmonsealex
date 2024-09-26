<script>
import HeaderToolbar from "../../public/components/header-toolbar.component.vue";
import ServiceItem from "../components/service-item.component.vue";
import ServiceList from "../components/service-list.component.vue";


export default {
  name: "services-page",
  components: {ServiceList, ServiceItem, HeaderToolbar}
}
</script>

<template>
  <header-toolbar/>
  <service-list/>
  <service-item/>
</template>

<style scoped>

</style>