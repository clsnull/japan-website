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
                    <div
                        class="flex flex-col items-start justify-center flex-1 p-5 pr-0"
                    >
                        <span v-if="item.type == 1">{{ item.value }}</span>
                        <div v-if="item.type == 2" class="flex flex-col">
                            <span
                                class="mb-1 text-base"
                                v-for="(row, i) in item.value"
                                :key="i"
                                >{{ row }}</span
                            >
                        </div>
                        <div
                            v-if="false"
                            class="box-border flex flex-row flex-wrap justify-between"
                        >
                            <div
                                class="p-3 mb-[1%] text-base border lg:basis-[49%] rounded-md max-lg:basis-[100%]"
                                v-for="(row, i) in item.value"
                                :key="i"
                            >
                                <div class="flex flex-row items-center py-1">
                                    <label class="w-16 py-1 mr-3 text-center bg-gray-100">拠点:</label>
                                    <span class="flex-1">{{ row.title }}</span>
                                </div>
                                <div class="flex flex-row items-center py-1">
                                    <label class="w-16 py-1 mr-3 text-center bg-gray-100">所在地:</label>
                                    <span class="flex-1">{{ row.address }}</span>
                                </div>
                                <div class="flex flex-row items-center py-1">
                                    <label class="w-16 py-1 mr-3 text-center bg-gray-100">TEL:</label>
                                    <span class="flex-1">+ {{ row.tel }}</span>
                                </div>
                                <!-- <div class="flex flex-row items-center py-1">
                                    <label class="w-16 py-1 mr-3 text-center bg-gray-100">FAX:</label>
                                    <span class="flex-1">{{ row.fax }}</span>
                                </div> -->
                                <div class="flex flex-row items-center py-1">
                                    <label class="w-16 py-1 mr-3 text-center bg-gray-100">E-mail:</label>
                                    <span class="flex-1">{{ row.email }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div
                        class="flex flex-col justify-center px-5 h-14 w-72 max-sm:bg-gray-200 max-sm:w-full"
                    >
                        <label class="block text-lg font-bold">海外拠点</label>
                    </div>
                    <div
                        class="flex flex-col flex-1 py-5 pr-0"
                    >
                        <div
                            class="box-border flex flex-col justify-between flex-1"
                        >
                            <div
                                class="py-3 px-5 mb-[1%] text-base border-t w-full basis-1"
                                v-for="(row, i) in abc"
                                :key="i"
                            >
                                <div class="flex flex-row items-center py-1">
                                    <label class="w-20 py-1 mr-3 text-center bg-gray-100 ">拠点:</label>
                                    <span class="flex-1">{{ row.title }}</span>
                                </div>
                                <div class="flex flex-row items-center py-1">
                                    <label class="w-20 py-1 mr-3 text-center bg-gray-100">所在地:</label>
                                    <span class="flex-1">{{ row.address }}</span>
                                </div>
                                <div class="flex flex-row items-center py-1">
                                    <label class="w-20 py-1 mr-3 text-center bg-gray-100">TEL:</label>
                                    <span class="flex-1">+ {{ row.tel }}</span>
                                </div>
                                <!-- <div class="flex flex-row items-center py-1">
                                    <label class="w-20 py-1 mr-3 text-center bg-gray-100">FAX:</label>
                                    <span class="flex-1">{{ row.fax }}</span>
                                </div> -->
                                <div class="flex flex-row items-center py-1">
                                    <label class="w-20 py-1 mr-3 text-center bg-gray-100">E-mail:</label>
                                    <span class="flex-1">{{ row.email }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-col px-5 pt-3 pb-3 border-t border-gray-100 h-96"
                >
                    <div class="pl-2 mb-2 font-bold border-l-[3px] border-sky-500">本社 〒 550-0013　大阪市西区新町4-21-7</div>
                    <maps></maps>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Maps from "@/components/Maps.vue";
export default {
    components: {
        Maps,
    },
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
                    type: 1,
                },
                {
                    lable: "資本金",
                    value: "1,000万円",
                    type: 1,
                },
                {
                    lable: "代表取締役",
                    value: "高崎　恵美",
                    type: 1,
                },
                {
                    lable: "本社所在地",
                    value: "〒 550-0013　大阪市西区新町4-21-7 2F",
                    type: 1,
                },
                {
                    lable: "TEL",
                    value: "06-6568-9876",
                    type: 1,
                },
                {
                    lable: "FAX",
                    value: "06-6568-9875",
                    type: 1,
                },
                {
                    lable: "E-mail",
                    value: "info@ktts.co.jp",
                    type: 1,
                },
                {
                    lable: "取扱銀行",
                    value: "りそな銀行・大阪シティ信用金庫",
                    type: 1,
                },
                {
                    lable: "主要取扱品目",
                    type: 2,
                    value: [
                        "計測機器",
                        "測定工具",
                        "光源装置",
                        "電機計測器",
                        "産業設備",
                        "工業用品",
                    ],
                },
                // {
                //     lable: "海外拠点",
                //     type: 3,
                //     value: [
                //         {
                //             title: "深圳公司",
                //             address:
                //                 "广东省深圳市龙华新区梅龙大道906号创业楼3楼",
                //             tel: "86-755-2857-8111",
                //             fax: "86-755-2857-8000",
                //             email: "sz@tamasaki.com",
                //         },
                //         {
                //             title: "北京公司",
                //             address: "北京市通州区江米店街1号院5号楼16层1612",
                //             tel: "86-10-6786-8591",
                //             fax: "86-10-6786-8081",
                //             email: "bj@tamasaki.com",
                //         },
                //         {
                //             title: "苏州公司",
                //             address: "苏州高新区竹园路7号2幢1201室",
                //             tel: "86-512-6708-9211",
                //             fax: "86-512-6708-8433",
                //             email: "suz@tamasaki.com",
                //         },
                //         {
                //             title: "重庆公司",
                //             address: "重庆市沙坪坝区龙湖拉特芳斯1街区3栋1112号",
                //             tel: "86-23-6637-6663",
                //             fax: "86-23-6637-6669",
                //             email: "cq@tamasaki.com",
                //         },
                //         {
                //             title: "成都公司",
                //             address:
                //                 "成都市郫都区郫筒镇创智东一路8号银座A栋1801室",
                //             tel: "86-28-6874-9616",
                //             fax: "86-28-6874-9615",
                //             email: "cd@tamasaki.com",
                //         },
                //         {
                //             title: "江西公司",
                //             address:
                //                 "江西省萍乡市安源区八一街总部经济大楼3125室",
                //             tel: "0799-6669801",
                //             fax: "0799-6669801",
                //             email: "px@tamasaki.com",
                //         },
                //     ],
                // },
            ],
            abc: [
                        {
                            title: "深圳公司",
                            address:
                                "广东省深圳市龙华新区梅龙大道906号创业楼3楼",
                            tel: "86-755-2857-8111",
                            fax: "86-755-2857-8000",
                            email: "sz@tamasaki.com",
                        },
                        {
                            title: "北京公司",
                            address: "北京市通州区江米店街1号院5号楼16层1612",
                            tel: "86-10-6786-8591",
                            fax: "86-10-6786-8081",
                            email: "bj@tamasaki.com",
                        },
                        {
                            title: "苏州公司",
                            address: "苏州高新区竹园路7号2幢1201室",
                            tel: "86-512-6708-9211",
                            fax: "86-512-6708-8433",
                            email: "suz@tamasaki.com",
                        },
                        {
                            title: "重庆公司",
                            address: "重庆市沙坪坝区龙湖拉特芳斯1街区3栋1112号",
                            tel: "86-23-6637-6663",
                            fax: "86-23-6637-6669",
                            email: "cq@tamasaki.com",
                        },
                        {
                            title: "成都公司",
                            address:
                                "成都市郫都区郫筒镇创智东一路8号银座A栋1801室",
                            tel: "86-28-6874-9616",
                            fax: "86-28-6874-9615",
                            email: "cd@tamasaki.com",
                        },
                        {
                            title: "江西公司",
                            address:
                                "江西省萍乡市安源区八一街总部经济大楼3125室",
                            tel: "0799-6669801",
                            fax: "0799-6669801",
                            email: "px@tamasaki.com",
                        },
                    ],
        };
    },
};
</script>
