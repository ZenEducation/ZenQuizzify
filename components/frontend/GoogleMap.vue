<template>
    <div class="google-map-area" id="support">
        <GmapMap
            :center="{lat:52.482900, lng:-1.893460}"
            :zoom="15"
            map-type-id="terrain"
        >
        </GmapMap>
    </div>
</template>

<style lang="scss" scoped>
    .vue-map-container {
        height: 500px;
        // res
        @media only screen and (max-width: 575px){
            height: 350px;
        }
    }
</style>
