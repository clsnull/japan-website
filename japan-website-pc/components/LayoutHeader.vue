<template>
    <div
        class="sticky top-0 z-40 flex-none w-full h-20 transition-colors duration-500 bg-white border-b lg:z-50"
    >
        <nav class="box-border text-black">
            <div
                class="container flex items-center justify-between h-20 mx-auto max-sm:px-4"
            >
                <a href="/">
                    <div class="flex flex-row items-center justify-center">
                        <img src="/img/logo.jpg" class="w-36" />
                        <span class="ml-2 text-lg italic font-bold max-sm:hidden"
                            >京都玉崎株式会社</span
                        >
                    </div>
                </a>
                <div class="block lg:hidden">
                    <button
                        @click="isOpen = !isOpen"
                        class="flex items-center px-3 py-2 border rounded border-sky-600 text-sky-600 hover:text-sky-500 hover:border-sky-500"
                    >
                        <svg
                            v-if="isOpen"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-row justify-center h-20 max-lg:hidden">
                    <a
                        v-for="(navbar, index) in navbarList"
                        :key="index"
                        :href="navbar.url"
                        :class="{
                            'active-navbar': isActiveNavbar(navbar),
                            [navbar.width]: true,
                        }"
                        class="flex items-center justify-center h-full text-center hover:text-white hover:bg-gray-900"
                    >
                        <div class="flex flex-col">
                            <span>{{ navbar.name }}</span>
                            <span class="text-[10px]">{{
                                navbar.subName
                            }}</span>
                        </div>
                    </a>
                </div>
                <div class="flex flex-col max-lg:hidden">
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
                        <div class="text-lg cursor-pointer hover:underline">
                            06-6568-9876
                        </div>
                    </div>
                    <div
                        class="flex flex-col items-center justify-center w-full mt-2"
                    >
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
            <div
                class="hidden w-full bg-white border-t border-gray-200 shadow-md shadow-gray-200"
                :class="{ 'max-lg:block': isOpen }"
            >
                <div class="container mx-auto">
                    <div class="flex flex-col text-sm">
                        <a
                            v-for="(navbar, index) in navbarList"
                            :key="index"
                            :href="navbar.url"
                            class="flex items-center w-full border-b border-gray-200 h-14"
                        >
                            <div class="flex flex-col px-4">
                                <span class="text-base">{{ navbar.name }}</span>
                                <span class="text-[10px]">{{
                                    navbar.subName
                                }}</span>
                            </div>
                        </a>
                    </div>
                    <div
                        class="flex flex-row items-center px-4 text-sky-600 h-14"
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
                        <div class="text-lg cursor-pointer hover:underline">
                            06-6568-9876
                        </div>
                        <div
                            class="flex flex-col items-center justify-center ml-4"
                        >
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
                    width: "w-32",
                },
                {
                    name: "会社案内",
                    subName: "COMPANY",
                    url: "/company",
                    width: "w-32",
                },
                {
                    name: "主要取扱メーカー",
                    subName: "PRODUCT",
                    url: "/provider",
                    width: "w-40",
                },
                {
                    name: "お問い合わせ",
                    subName: "CONTACT",
                    url: "/contact",
                    width: "w-32",
                },
            ],
            isOpen: false,
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
