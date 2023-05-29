<template>
    <div class="">
        <div>
            <HomeSwiper></HomeSwiper>
        </div>
        <div>
            <HomeNews></HomeNews>
        </div>
        <div>
            <HomeCompany></HomeCompany>
        </div>
    </div>
</template>

<script>
import HomeNews from "@/components/HomeNews.Vue";
import HomeCompany from "@/components/HomeCompany.Vue";
import HomeSwiper from "@/components/HomeSwiper.Vue";
export default {
    name: "IndexPage",
    components: {
        HomeNews,
        HomeCompany,
        HomeSwiper,
    },
    data() {
        return {
            
        };
    },
    mounted() {},
    methods: {},
};
</script>
