import Post from './Post.js'
import Page from './Page.js'

Vue.component('Post', Post);
Vue.component('Page', Page);

new Vue({
  el: '#app',
  data: () => ({ posts: [] }),
  async mounted() {
    const posts = await fetch("https://sofetch.glitch.me/https://vilsandisse.ee/wp/wp-json/wp/v2/posts").then(res => res.json())
    this.posts = posts
  },
  template: `
  <Page>
    <Post
      v-for="(post,i) in posts"
      :key="i"
      :post="post"
    />
  </Page>
  `
})
