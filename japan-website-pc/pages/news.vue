<template>
    <div>
        <div class="relative w-full">
            <div class="absolute z-10 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <h2 class="text-3xl font-bold text-center text-white">お知らせ</h2>
                <div class="p-2 my-4 text-center bg-white bg-opacity-75 w-28 text-sky-600">News</div>
                <div class="mt-8 text-center text-white">
                    <!-- <h2 class="text-xl">現状に満足することなく、</h2> -->
                </div>
            </div>
            <img src="/img/banner7.png" class=" brightness-[75%]" style="width: 100%; height: 100%" />
        </div>
        <div
            class="flex justify-center bg-gray-100 p-9"
            style="min-height: calc(100vh - 5rem - 2.5rem)"
        >
            <div class="p-6 bg-white rounded-lg shadow-md lg:container">
                <div class="pb-8 text-center border-b border-gray-100">
                    <h2 class="mb-2 text-2xl font-bold">
                        アルム株式会社との業務提携契約締結のお知らせ
                    </h2>
                    <span class="text-gray-500">2023年03月22日</span>
                </div>
                <div>
                    <div v-html="content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            content:
                "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
        };
    },
};
</script>
