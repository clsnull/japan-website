<template>
    <div
        class="h-20 sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
    >
        <nav class="text-black">
            <div
                class="container flex items-center justify-between h-20 mx-auto"
            >
                <a href="/">
                    <div class="flex flex-row items-center justify-center">
                        <img src="/img/logo.jpg" class="w-36" />
                        <span class="ml-2 text-lg font-bold"
                            >京都玉崎株式会社</span
                        >
                    </div>
                </a>
                <div class="flex flex-row justify-center h-20">
                    <a
                        v-for="(navbar, index) in navbarList"
                        :key="index"
                        :href="navbar.url"
                        :class="{ 'active-navbar': isActiveNavbar(navbar) }"
                        class="flex items-center justify-center w-32 h-full text-center hover:text-white hover:bg-gray-900"
                    >
                        <div class="flex flex-col">
                            <span>{{ navbar.name }}</span>
                            <span class="text-[10px]">{{
                                navbar.subName
                            }}</span>
                        </div>
                    </a>
                </div>
                <div class="flex flex-col">
                    <div
                        class="flex flex-row items-center justify-center text-sky-600"
                    >
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 mr-2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>
                        </div>
                        <div class="text-sm cursor-pointer hover:underline">
                            06-6568-9876
                        </div>
                    </div>
                    <div class="w-full mt-2">
                        <a href="/contact">
                            <span
                                class="pointer-events-auto rounded-md bg-sky-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-sky-500"
                            >
                                お問い合わせ
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navbarList: [
                {
                    name: "ホーム",
                    subName: "HOME",
                    url: "/",
                },
                {
                    name: "会社案内",
                    subName: "COMPANY",
                    url: "/company",
                },
                {
                    name: "取扱メーカー",
                    subName: "PRODUCT",
                    url: "/provider",
                },
                {
                    name: "お問い合わせ",
                    subName: "CONTACT",
                    url: "/contact",
                },
            ],
        };
    },
    methods: {
        isActiveNavbar(item) {
            const currentUrl = this.$route.fullPath;
            return item.url === currentUrl;
        },
    },
};
</script>

<style scoped>
.active-navbar {
    color: #fff;
    background: #111827;
}
</style>
