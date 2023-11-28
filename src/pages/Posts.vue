<script>
import axios from 'axios';
import Post from '../components/posts/Post.vue';
export default {
    name: "Posts",
  data() {
    return {
        postsList: [],
    }

  },
  
  components: {
    Post
  },


  methods: {
    callApi() {
        axios.get('http://localhost:3000/posts').then(res => {
            this.postsList = res.data;
            console.log(this.postsList)
        }).catch(err => {
            console.log(err);
        });
    }
  },


  mounted() {
    this.callApi()
  }
}
</script>

<template>
    <div id="main-posts-container">
        <div id="posts-container">
            <Post class="card" v-for="post in postsList" 
              :key="post.id" 
              :title="post.title" 
              :content="post.content" 
              :tags="post.tags" 
              :img="post.image" 
              :slug="post.slug">
            </Post>
        </div>
    </div>
</template>

<style lang="scss">
//centered container model
  @mixin centeredFlexContainer () {
    display: flex;
    justify-content: center;
    align-items: center;
  }
/////////

  #main-posts-container {
    margin: 30px auto;
    @include centeredFlexContainer();
    flex-flow: column;
    
    width: 80%;

    #posts-container {
        width: 100%;

        @include centeredFlexContainer();
        flex-wrap: wrap;
        gap: 15px;
    }
  }
</style>
