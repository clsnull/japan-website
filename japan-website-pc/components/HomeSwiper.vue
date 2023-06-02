<template>
    <div v-swiper:mySwiper="swiperOption" class="swiper-container">
        <div class="swiper-wrapper">
            <div
                class="w-full swiper-slide"
                v-for="(banner, index) in bannerList"
                :key="index"
            >
                <div class="relative flex justify-end w-full h-full">
                    <div
                        class="absolute left-0 z-0 flex flex-col justify-center w-2/5 h-full px-20 text-3xl italic bg-white/80 text-sky-700 max-sm:leading-4 max-sm:w-1/2 max-sm:px-4 max-sm:text-[12px] max-xl:text-base max-2xl:px-10"
                    >
                        <span class="mt-4 max-sm:mt-2"
                            >あらゆる産業分野で最新製品や</span
                        >
                        <span class="mt-4 max-sm:mt-2"
                            >計測機器、産業設備、工業用品</span
                        >
                        <span class="mt-4 max-sm:mt-2"
                            >をユーザー様のニーズに融合させた</span
                        >
                        <span class="mt-4 max-sm:mt-2"
                            >ベストの答えを創り出す専門総合商社です。</span
                        >
                    </div>
                    <img :src="banner.img" style="width: 76%; height: auto" />
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
    background: url("/img/line1.png") repeat-x left bottom;
    padding-bottom: 73px;
    position: relative;
}
</style>
