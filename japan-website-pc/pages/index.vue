<template>
    <div class="">
        <div>
            <home-swiper></home-swiper>
        </div>
        <div class="container flex flex-row justify-around px-10 py-32 mx-auto max-lg:flex-col max-lg:items-center max-lg:py-16">
            <a
                href="http://www.ktts.co.jp"
                target="_blank"
                class="text-white hover:underline"
            >
                <div
                    class="flex flex-row items-center justify-center h-32 pl-2 pr-16 rounded-md max-sm:mb-10 bg-sky-600 w-96 max-xl:scale-90"
                >
                    <div class="flex items-center justify-center w-32 h-32">
                        <img src="/img/home3.png" />
                    </div>
                    <div class="basis-3/4">
                        <div class="text-xl">会員様専用サイト</div>
                        <div class="my-1 bg-white border-b"></div>
                        <div class="text-sm">MEMBERS ENTRY</div>
                    </div>
                </div>
            </a>
            <a
                href="/company"
                class="text-white hover:underline"
            >
                <div
                    class="flex flex-row items-center justify-center h-32 pl-2 pr-16 rounded-md max-xl:scale-90 max-sm:mb-10 bg-sky-600 w-96"
                >
                    <div class="flex items-center justify-center w-32 h-32">
                        <img src="/img/home1.png" />
                    </div>
                    <div class="basis-3/4">
                        <div class="text-xl">会社案内</div>
                        <div class="my-1 bg-white border-b"></div>
                        <div class="text-sm">COMPANY INFORMATION</div>
                    </div>
                </div>
            </a>
            <a
                href="/provider"
                class="text-white hover:underline"
            >
                <div
                    class="flex flex-row items-center justify-center h-32 pl-2 pr-16 rounded-md bg-sky-600 w-96 max-xl:scale-90"
                >
                    <div class="flex items-center justify-center w-32 h-32">
                        <img src="/img/home2.png" />
                    </div>
                    <div class="basis-3/4">
                        <div class="text-xl">主要取扱メーカー</div>
                        <div class="my-1 bg-white border-b"></div>
                        <div class="text-sm">HANDLING MANUFACTUER</div>
                    </div>
                </div>
            </a>
        </div>
        <div>
            <home-news></home-news>
        </div>
        <div>
            <home-company></home-company>
        </div>
    </div>
</template>

<script>
import HomeNews from "@/components/HomeNews.vue";
import HomeCompany from "@/components/HomeCompany.vue";
import HomeSwiper from "@/components/HomeSwiper.vue";
export default {
    name: "IndexPage",
    components: {
        HomeNews,
        HomeCompany,
        HomeSwiper,
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>
