<template>
    <div>
        <div class="relative w-full">
            <div
                class="absolute z-10 flex flex-col items-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
                <div>
                    <h2 class="text-3xl font-bold text-center text-white">
                        お知らせ
                    </h2>
                    <div
                        class="w-full p-2 my-4 tracking-wide text-center rounded-sm bg-white/75 text-sky-600"
                    >
                        News
                    </div>
                </div>
                <div class="mt-8 text-center text-white">
                    <!-- <h2 class="text-xl">現状に満足することなく、</h2> -->
                </div>
            </div>
            <img
                src="/img/banner7.png"
                class="brightness-[75%] object-cover object-center w-full max-xl:h-72"
            />
        </div>
        <div
            class="flex justify-center bg-gray-100 max-sm:p-4 p-9"
            style="min-height: calc(100vh - 5rem - 2.5rem)"
        >
            <div class="container p-5 bg-white rounded-lg shadow-md">
                <div class="pb-8 text-center border-b border-gray-100">
                    <h2 class="mb-2 text-2xl font-bold">
                        {{ newsInfo.title }}
                    </h2>
                    <span class="text-gray-500">{{
                        parseTime(newsInfo.createDate)
                    }}</span>
                </div>
                <div>
                    <div v-html="newsInfo.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { parseTime } from "@/utils/index";
export default {
    data() {
        return {
            newsInfo: {},
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        parseTime,
        async init() {
            const id = this.$route.query.id;
            const res = await this.$axios.$get(`/news/${id}`);
            console.log("res", res);
            this.newsInfo = res;
        },
    },
};
</script>
