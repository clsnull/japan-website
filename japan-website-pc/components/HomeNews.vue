<template>
    <div class="py-20 bg-gray-100 min-h-6xl">
        <div class="container mx-auto px-36 max-md:px-10 max-sm:px-4" style="max-width: 1024px">
            <div class="flex flex-col items-center justify-center pb-8">
                <h2 class="text-2xl font-bold">新着情報</h2>
                <div class="w-1/2 h-1 my-2 border-b border-gray-400"></div>
                <span>What's New</span>
            </div>
            <div class="list">
                <div
                    class="px-8 py-4 border-b border-gray-300 max-sm:px-2"
                    v-for="(item, index) in newsList"
                    :key="index"
                >
                    <a :href="`/news?id=${item.id}`" class="text-sky-700">
                        <div class="flex flex-row">
                            <span class="mr-8">{{ parseTime(item.createDate, "{y}.{m}.{d}") }}</span>
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
import {parseTime} from '@/utils/index'
export default {
    data() {
        return {
            newsList: [],
        };
    },
    mounted() {
        this.init()
    },
    methods:{
        parseTime,
        async init(){
            const params = {
                page: 1,
                size: 10
            }
            let res = await this.$api.getNewsList({params})
            this.newsList = res.data.list.sort((a,b)=>{
                return new Date(b.createDate) - new Date(a.createDate)
            })
        }
    }
};
</script>
