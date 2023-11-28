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
                <div id="card-details">
                  <h3>{{ post.title }}</h3>
                  <p>{{ post.content }}</p>
                  <strong id="tags" v-for="tag in post.tags">#{{ tag ? tag.name : '' }} </strong>
                </div>
                <img :src="post.image ? post.image.src : ''" alt="">
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

            position: relative;
            height: 500px;
            max-width: 450px;
            width: calc(100% / 3 - (15px / 3 * 2));
            text-align: center;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.521);
            transition: all .3s ease;

            &:hover {
              scale: 1.05;
              cursor: pointer;
              z-index: 4;
            }

            &:hover img {
              filter: brightness(80%);

            }

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;

              filter: brightness(60%);
            }



            #card-details {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 2;

              h3 {
                  font-size: 1.6em;
              }

            }

        }
    }
  }
</style>
