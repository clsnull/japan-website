<template>
    <div>
        <div class="relative w-full">
            <div
                class="absolute z-10 flex flex-col items-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
                <div>
                    <h2 class="text-3xl font-bold text-center text-white">
                        会社案内
                    </h2>
                    <div
                        class="w-full p-2 my-4 tracking-wide text-center rounded-sm bg-white/75 text-sky-600"
                    >
                        COMPANY
                    </div>
                </div>
                <div class="mt-8 text-center text-white">
                    <h2 class="text-xl">プロの力、未来をつくりだす</h2>
                </div>
            </div>
            <img
                src="/img/banner6.png"
                class="brightness-[75%] object-cover object-center w-full max-xl:h-72"
            />
        </div>
        <div
            class="flex justify-center bg-gray-100 max-sm:p-4 p-9"
            style="min-height: calc(100vh - 5rem - 2.5rem)"
        >
            <div class="container p-5 bg-white rounded-lg shadow-md">
                <div
                    class="flex flex-row max-sm:flex-col"
                    :class="{ 'sm:bg-gray-200': index % 2 == 0 }"
                    v-for="(item, index) in data"
                    :key="index"
                >
                    <div
                        class="flex flex-col justify-center px-5 h-14 w-72 max-sm:bg-gray-200 max-sm:w-full"
                    >
                        <label class="block text-lg font-bold">{{
                            item.lable
                        }}</label>
                    </div>
                    <div class="flex flex-col items-start justify-center p-5">
                        <div
                            v-if="Array.isArray(item.value)"
                            class="flex flex-col"
                        >
                            <span
                                class="mb-1 text-base"
                                v-for="(row, i) in item.value"
                                :key="i"
                                >{{ row }}</span
                            >
                        </div>
                        <span v-else>{{ item.value }}</span>
                    </div>
                </div>
                <div
                    class="flex flex-row px-5 pt-3 pb-3 border-t border-gray-100"
                >
                    地図
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                // {
                //     lable: "商号",
                //     value: "京都玉崎株式会社",
                // },
                {
                    lable: "設　立",
                    value: "2016年7月15日",
                },
                {
                    lable: "資本金",
                    value: "1,000万円",
                },
                {
                    lable: "代表取締役",
                    value: "高崎　恵美",
                },
                {
                    lable: "所在地",
                    value: "〒 550-0013　大阪市西区新町4-21-7 2F",
                },
                {
                    lable: "TEL",
                    value: "06-6568-9876",
                },
                {
                    lable: "FAX",
                    value: "06-6568-9875",
                },
                {
                    lable: "E-mail",
                    value: "info@ktts.co.jp",
                },
                {
                    lable: "取扱銀行",
                    value: "りそな銀行・大阪シティ信用金庫",
                },
                {
                    lable: "主要取扱品目",
                    value: [
                        "計測機器",
                        "測定工具",
                        "光源装置",
                        "電機計測器",
                        "産業設備",
                        "工業用品",
                    ],
                },
            ],
        };
    },
};
</script>
