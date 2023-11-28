<script>
export default {
    name: "HomeMain",
  data() {
    return {
    }
  },
}
</script>

<template>
    <div id="grid-container">
        <div class="grid-item item1">
            <img src="https://images7.alphacoders.com/131/1314617.jpg" alt="">
        </div>
        <div class="grid-item item2">
            <img src="https://images2.alphacoders.com/133/1330770.png" alt="">
        </div>
        <div class="grid-item item3">
            <img src="https://images7.alphacoders.com/556/556730.jpg" alt="">
        </div>
        <div class="grid-item item4">
            <img src="https://images3.alphacoders.com/473/47399.png" alt="">
        </div>
        <div class="grid-item item5">
            <img src="https://images5.alphacoders.com/593/593333.jpg" alt="">
        </div>
        <div class="grid-item item6">
            <img src="https://wallpapercave.com/wp/wp5231505.jpg" alt="">
        </div>
        <div class="grid-item item7">
            <img src="https://wallpapercave.com/wp/wp5132020.jpg" alt="">
        </div>
        <div class="grid-item item8">
            <img src="https://wallpapercave.com/wp/wp5037746.jpg" alt="">
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
    /// 
    /// 

    #grid-container {
        @include centeredFlexContainer();
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 

        background-image: url('https://wallpapercave.com/wp/wp2548305.jpg');
        background-repeat: no-repeat;
        background-size: cover;

        .grid-item {
            height: 400px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .item1 { grid-row: span 2; grid-column: span 2; }
    .item2 { grid-row: span 1; grid-column: span 1; }
    .item3 { grid-row: span 1; grid-column: span 3; }
    .item4 { grid-row: span 2; grid-column: span 1; }
    .item5 { grid-row: span 1; grid-column: span 2; }
    .item6 { grid-row: span 2; grid-column: span 2; }
    .item7 { grid-row: span 1; grid-column: span 1; }
    .item8 { grid-row: span 1; grid-column: span 3; }
</style>
