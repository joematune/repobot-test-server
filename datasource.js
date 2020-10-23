// Wrapper for GraphQL around REST APIs
const { RESTDataSource } = require('apollo-datasource-rest');

module.exports = class RESTWrapper extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.chucknorris.io/jokes';
    }

    // Send GET request to https://api.chucknorris.io/jokes/categories
    async getAllCategories() {
        return this.get('categories');
    }

    // Send GET request to https://api.chucknorris.io/jokes/random?category={category}
    async getAJoke(category) {
        const result = await this.get('random', {
        category
        });
        return result;
    }
};
