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
    <div id="container">
        <h1>Posts List</h1>

        <div id="posts-container">
            <div class="card" v-for="post in postsList" :key="post.id">
                <h4>{{ post.title }}</h4>
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

  #container {
    margin: 30px auto;
    @include centeredFlexContainer();
    flex-flow: column;
    
    width: 80%;

    #posts-container {
        width: 100%;
        border: 1px solid black;

        @include centeredFlexContainer();
        flex-wrap: wrap;
        gap: 15px;

        .card {
            @include centeredFlexContainer();
            height: 300px;
            width: calc(100% / 3 - (15px / 3 * 2));
            border: 1px solid black;
        }
    }
  }
</style>
