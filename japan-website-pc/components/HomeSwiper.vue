<template>
    <div v-swiper:mySwiper="swiperOption" class="swiper-container">
        <div class="swiper-wrapper">
            <div
                class="w-full swiper-slide"
                v-for="(banner, index) in bannerList"
                :key="index"
                style="height: calc(100vh - 5rem)"
            >
                <div class="relative flex justify-end w-full h-full">
                    <div
                        class="absolute left-0 z-0 flex flex-col justify-center w-2/5 h-full pl-20 text-3xl italic bg-white bg-opacity-50 "
                    >
                        <span class="mt-4">あらゆる産業分野で最新製品や</span>
                        <span class="mt-4">計測機器、産業設備、工業用品</span>
                        <span class="mt-4"
                            >をユーザー様のニーズに融合させた</span
                        >
                        <span class="mt-4"
                            >ベストの答えを創り出す専門総合商社です。</span
                        >
                    </div>
                    <img :src="banner.img" style="width: 76%; height: 100%" />
                </div>
            </div>
        </div>
        <!-- <div class="swiper-pagination my-pagination"></div> -->
        <!-- <div class="swiper-button-prev my-btn"></div> -->
        <!-- <div class="swiper-button-next my-btn"></div> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            bannerList: [
                {
                    img: "/img/banner3.png",
                },
                {
                    img: "/img/banner4.png",
                },
                {
                    img: "/img/banner5.png",
                },
            ],
            swiperOption: {
                loop: true,
                autoplay: {
                    pauseOnMouseEnter: true,
                    disableOnInteraction: true,
                    autoplay: true,
                },
                paginationHide: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                effect: "fade",
            },
        };
    },
};
</script>

<style scoped>
.swiper-container {
    background: url('/img/line1.png') repeat-x left bottom;
    padding-bottom: 73px;
    position: relative;
}
</style>
