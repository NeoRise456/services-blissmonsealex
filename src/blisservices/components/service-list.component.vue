<script>
import ApiService from '../../shared/services/base.service.js';

export default {
  name: "service-list",
  data() {
    return {
      services: [],
    };
  },

  created() {
    this.fetchServices();
  },

  methods: {
    async fetchServices() {
      try {
        const response = await ApiService.getServices();
        this.services = response.data;
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    },
  },
}
</script>

<template>
  <div>
    <h1>Services</h1>
    <ul>
      <li v-for="service in services" :key="service.id">
        {{ service.service_name }} - {{ service.price }} - Duration: {{ service.duration }} mins
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>