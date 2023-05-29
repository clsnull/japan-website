<template>
    <div class="flex items-center justify-center bg-gray-100 p-9">
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
</template>
<script>
export default {
    data() {
        return {
            content: "内容内容",
        };
    },
};
</script>
