<template>
    <div class="py-20 bg-gray-100 ">
        <div class="container mx-auto px-36" style="max-width: 1024px;">
            <h2 class="pb-8 text-2xl font-bold text-center">新着情報</h2>
            <div class="list">
                <div
                    class="px-8 py-4 border-b border-gray-300"
                    v-for="i in 5"
                    :key="i"
                >
                    <a href="/news" class="text-sky-600">
                        <div class="flex flex-row">
                            <span class="mr-8">2021.01.01</span>
                            <span class="hover:underline"
                                >ハンディミクロメーター TS-HMタイプ 株式会社杉藤
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
        return {};
    },
};
</script>
