<template>
    <div>
        <div class="relative w-full">
            <div
                class="absolute z-10 flex flex-col items-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
                <div>
                    <h2 class="text-3xl font-bold text-center text-white">
                        主要取扱いメーカー
                    </h2>
                    <div
                        class="w-full p-2 my-4 tracking-wide text-center rounded-sm bg-white/75 text-sky-600"
                    >
                        PRODUCT
                    </div>
                </div>
                <div class="mt-8 text-center text-white">
                    <h2 class="text-xl">
                        当社は計測機器、光源装置、産業設備など約1000社のメーカーを取り扱っております。
                    </h2>
                </div>
            </div>
            <img
                src="/img/banner8.png"
                class="brightness-[75%] object-cover object-center w-full max-xl:h-72"
            />
        </div>
        <div
            class="flex justify-center bg-gray-100 max-sm:p-4 p-9"
            style="min-height: calc(100vh - 5rem - 2.5rem)"
        >
            <div class="container p-5 bg-white rounded-lg shadow-md">
                <!-- <h2
                    class="pb-8 mb-5 text-2xl font-bold text-center border-b border-gray-100"
                >
                    主要取扱いメーカー
                </h2> -->
                <div class="flex flex-row flex-wrap">
                    <div
                        class="box-border w-1/3 px-2 mb-5 max-md:w-1/2 max-sm:w-full"
                        v-for="(item, index) in provides"
                        :key="index"
                    >
                        <a :href="item.link || '#'" target="__self">
                            <span
                                class="text-gray-600 underline cursor-pointer underline-gray-500 hover:text-black hover:no-underline"
                                :class="{
                                    'text-lg': index == provides.length - 1,
                                    'text-sky-600':
                                        index == provides.length - 1,
                                    'hover:text-sky-500':
                                        index == provides.length - 1,
                                }"
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
                    name: "ハヤシレピック株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "HOYA株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "イーエムティー株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "アイコーエンジニアリング株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "フロロメカニック株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "理化工業株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "日本精密科学株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社 ユーテクノロジー",
                    link: "",
                    logo: "",
                },
                {
                    name: "丸井計器株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社相馬光学",
                    link: "",
                    logo: "",
                },
                {
                    name: "安立計器株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "愛知時計電機株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "アイグラフィックス株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社アイ電子技研",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社大菱計器製作所",
                    link: "",
                    logo: "",
                },
                {
                    name: "長野計器株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "長野計器株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "サトーパーツ株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "旭精工株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "アネスト岩田株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "瓜生製作所株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社メトロール",
                    link: "",
                    logo: "",
                },
                {
                    name: "渡辺電機工業株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社協和製作所",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社協和製作所",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社近藤製作所",
                    link: "",
                    logo: "",
                },
                {
                    name: "NOK株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "武蔵オイルシール工業株式会社",
                    link: "",
                    logo: "",
                },
                {
                    name: "株式会社 東洋オイルシール製作所",
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
