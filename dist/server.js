(()=>{"use strict";var e={978:function(e,t,r){var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{u(o.next(e))}catch(e){i(e)}}function a(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}u((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=r(830);class i extends n.RESTDataSource{constructor(){super(),this.baseURL="https://api.chucknorris.io/jokes"}getAllCategories(){return o(this,void 0,void 0,(function*(){return this.get("categories")}))}getAJoke(e){return o(this,void 0,void 0,(function*(){return yield this.get("random",{category:e})}))}}t.default=i},824:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.environment=void 0,t.environment={apollo:{introspection:"true"===process.env.APOLLO_INTROSPECTION,playground:"true"===process.env.APOLLO_PLAYGROUND},port:process.env.PORT||4e3}},519:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(232),i=o(r(978)),s=r(824),a=n.gql`
  type Joke {
    categories: [String!]
    created_at: String!
    icon_url: String!
    id: String!
    updated_at: String!
    url: String!
    value: String!
  }
  type Query {
    joke(category: String!): Joke
    categories: [String]
  }
`;new n.ApolloServer({typeDefs:a,resolvers:{Query:{joke:(e,{category:t},{dataSources:r})=>r.restWrapper.getAJoke(t),categories:(e,t,{dataSources:r})=>r.restWrapper.getAllCategories()}},dataSources:()=>({restWrapper:new i.default})}).listen(s.environment.port).then((({url:e})=>{console.log("🚀 Server ready at "+e)}))},830:e=>{e.exports=require("apollo-datasource-rest")},232:e=>{e.exports=require("apollo-server")}},t={};!function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}(519)})();
//# sourceMappingURL=server.js.map