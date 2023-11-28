<script>
export default {
    name: "Post",
    props: {
        title: String, 
        content: String,
        img: String,
        tags: Array,
        slug: String
    }
}
</script>

<template>
 <div class="card">
    <div id="card-details">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <strong v-for="tag in tags">#{{ tag ? tag.name : '' }} </strong>
    </div>
    <img :src="img ? img.src : ''" alt="">
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
</style>
