<template>
    <div class="text-white bg-gray-800">
        <div
            class="container box-border flex flex-row items-center px-40 pt-20 pb-10 mx-auto bg-gray-800 border-b border-gray-500 max-lg:px-0 max-sm:flex-col"
        >
            <div class="text-black sm:px-10 h-80 sm:basis-2/3 max-sm:w-full max-sm:px-4">
                <div class="w-full h-full bg-white">
                    <maps></maps>
                </div>
            </div>
            <div class="flex-col basis-2/4 max-sm:mt-5 max-sm:flex max-sm:items-center">
                <strong class="text-lg">京都玉崎株式会社</strong>
                <address class="flex flex-col my-4 text-sm max-sm:items-center">
                    <span>〒550-0013</span>
                    <span>大阪府大阪市西区新町4-2-7 2F</span>
                    <span>TEL：06-6568-9876</span>
                    <span>FAX：06-6568-9875</span>
                </address>
                <a href="/contact">
                    <span
                        class="pointer-events-auto rounded-md bg-sky-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-sky-500"
                    >
                        お問い合わせはこちら
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import Maps from '@/components/Maps.vue'
export default{
    components:{
        Maps
    },
    data(){
        return{

        }
    }
}
</script>
