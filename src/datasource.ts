// Wrapper for GraphQL around REST APIs
import { RESTDataSource } from 'apollo-datasource-rest'

export default class RESTWrapper extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.chucknorris.io/jokes'
    }

    // Send GET request to https://api.chucknorris.io/jokes/categories
    async getAllCategories() {
        return this.get('categories')
    }

    // Send GET request to https://api.chucknorris.io/jokes/random?category={category}
    async getAJoke(category: string) {
        const result = await this.get('random', {
            category
        })
        return result
    }
}
