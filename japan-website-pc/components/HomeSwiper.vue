<template>
    <div v-swiper:mySwiper="swiperOption" class="swiper-container">
        <div class="swiper-wrapper">
            <div
                class="w-screen swiper-slide"
                v-for="i in 1"
                :key="i"
                style="height: calc(100vh - 5rem)"
            >
                <div class="">

                </div>
                <img src="/img/banner1.jpg" style="width:100%; height: 100%" />
            </div>
        </div>
        <div class="swiper-pagination my-pagination"></div>
        <!-- <div class="swiper-button-prev my-btn"></div> -->
        <!-- <div class="swiper-button-next my-btn"></div> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            swiperOption: {
                loop: false,
                autoplay: {
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                    autoplay: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        };
    },
};
</script>
