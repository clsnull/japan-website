<template>
    <div class="py-20 bg-gray-100 min-h-6xl">
        <div class="container mx-auto px-36" style="max-width: 1024px">
            <div class="flex flex-col items-center justify-center pb-8">
                <h2 class="text-2xl font-bold">新着情報</h2>
                <div class="w-1/2 h-1 my-2 border-b border-gray-400"></div>
                <span>What's New</span>
            </div>
            <div class="list">
                <div
                    class="px-8 py-4 border-b border-gray-300"
                    v-for="(item, index) in newsList"
                    :key="index"
                >
                    <a href="/news" class="text-sky-700">
                        <div class="flex flex-row">
                            <span class="mr-8">{{ item.date }}</span>
                            <span class="hover:underline">
                                {{ item.title }}
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsList: [
                {
                    title: "ハンディミクロメーター TS-HMタイプ 株式会社杉藤",
                    date: "2021.01.01",
                    comtent: "",
                },
                {
                    title: "LEDライト付ミクロメータスコープ TS-8LENタイプ 株式会社杉藤",
                    date: "2021.01.01",
                    comtent: "",
                },
                {
                    title: "ライト＆電池ホルダー付ミクロメータースコープ TS-7LEタイプ 株式会社杉藤 ",
                    date: "2021.01.01",
                    comtent: "",
                },
                {
                    title: "LED照明付ポケットズームマイクロスコープ TS-SPタイプ 株式会社杉藤 ",
                    date: "2021.01.01",
                    comtent: "",
                },
                {
                    title: "センシングヘッド FEM-180S-C 株式会社極東マシーンツール  ",
                    date: "2021.01.01",
                    comtent: "",
                },
            ],
        };
    },
    mounted() {
        this.init()
    },
    methods:{
        async init(){
            const params = {
                page: 1,
                size: 10
            }
            let res = await this.$api.getNewsList({params})
            console.log(res)
        }
    }
};
</script>
