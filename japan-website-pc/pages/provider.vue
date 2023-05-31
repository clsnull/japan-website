<template>
    <div>
        <div class="relative w-full">
            <div class="absolute z-10 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <h2 class="text-3xl font-bold text-center text-white">主要取扱いメーカー</h2>
                <div class="p-2 my-4 text-center bg-white bg-opacity-75 w-28 text-sky-600">PRODUCT</div>
                <div class="mt-8 text-center text-white">
                    <h2 class="text-xl">当社は計測機器、光源装置、産業設備など約1000社のメーカーを取り扱っております。</h2>
                </div>
            </div>
            <img src="/img/banner8.png" class=" brightness-[75%]" style="width: 100%; height: 100%" />
        </div>
        <div
            class="flex justify-center bg-gray-100 p-9"
            style="min-height: calc(100vh - 5rem - 2.5rem)"
        >
            <div class="p-6 bg-white rounded-lg shadow-md lg:container">
                <!-- <h2
                    class="pb-8 mb-5 text-2xl font-bold text-center border-b border-gray-100"
                >
                    主要取扱いメーカー
                </h2> -->
                <div class="flex flex-row flex-wrap">
                    <div
                        class="w-1/3 mb-5"
                        v-for="(item, index) in provides"
                        :key="index"
                    >
                        <a :href="item.link || '#'" target="__self">
                            <span
                                class="text-gray-600 underline cursor-pointer underline-gray-500 hover:text-black hover:no-underline"
                                >{{ item.name }}</span
                            >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            provides: [
                {
                    name: "セン特殊光源株式",
                    link: "",
                    logo: "",
                },
                {
                    name: "レボックス株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "日本特殊測器株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社エー・アンド・デイ",
                    link: "",
                    logo: "",
                },
                {
                    name: "新光電子株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社サンコウ電子研究所",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社ソニック",
                    link: "",
                    logo: "",
                },
                {
                    name: "セリック株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社 センシズ",
                    link: "",
                    logo: "",
                },
                {
                    name: "杉山電機システム株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "春日電機株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社アイテックシステム",
                    link: "",
                    logo: "",
                },
                {
                    name: "エムアールエム株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "ウシオ電機株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "新東科学株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "日本パルスモーター株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "東洋磁気工業株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "エース技研株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "河北ライティングソリューションズ株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "フナテック株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "ゲイツ・ユニッタ・アジア 株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "タキエンジニアリング株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "岩崎電気株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "日本圧着端子製造株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "飯島電子工業株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "その他取扱いメーカー一覧",
                    link: "http://www.ktts.co.jp",
                    logo: "",
                },
            ],
        };
    },
};
</script>
