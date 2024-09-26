import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api/v1', // Replace with your JSON Server URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    // Function to get all categories
    getCategories() {
        return apiClient.get('/categories');
    },

    // Function to get a single category by ID
    getCategory(id) {
        return apiClient.get(`/categories/${id}`);
    },

    // Function to get all companies
    getCompanies() {
        return apiClient.get('/companies');
    },

    // Function to get a single company by ID
    getCompany(id) {
        return apiClient.get(`/companies/${id}`);
    },

    // Function to get all services
    getServices() {
        return apiClient.get('/services');
    },

    // Function to get a single service by ID
    getService(id) {
        return apiClient.get(`/services/${id}`);
    }
};
