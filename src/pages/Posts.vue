<script>
import axios from 'axios';

export default {
    name: "Posts",
  data() {
    return {
        postsList: [],
    }
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
            <div class="card" v-for="post in postsList" :key="post.id">
                <h3>{{ post.title }}</h3>
                <p>{{ post.content }}</p>
            </div>
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

        .card {
            @include centeredFlexContainer();
            flex-flow: column;

            height: 500px;
            max-width: 300px;
            width: calc(100% / 4 - (15px / 4 * 3));
            border: 1px solid black;
            text-align: center;

            h3 {
                font-size: 1.6em;
            }
        }
    }
  }
</style>
