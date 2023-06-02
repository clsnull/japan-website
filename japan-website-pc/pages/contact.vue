<template>
    <div>
        <div class="relative w-full">
            <div
                class="absolute z-10 flex flex-col items-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
                <div>
                    <h2 class="text-3xl font-bold text-center text-white">
                        お問い合わせ
                    </h2>
                    <div
                        class="w-full p-2 my-4 tracking-wide text-center rounded-sm bg-white/75 text-sky-600"
                    >
                        CONTACT
                    </div>
                </div>
                <div class="mt-8 text-center text-white">
                    <h2 class="text-xl">現状に満足することなく、</h2>
                    <h2 class="text-xl">常に新しいチャレンジを続けている</h2>
                    <h2 class="text-xl">私たちだからできることがあります</h2>
                </div>
            </div>
            <img
                src="/img/banner7.png"
                class="brightness-[75%] object-cover object-center w-full max-xl:h-72"
            />
        </div>
        <div
            class="flex justify-center bg-gray-100 max-sm:p-4 p-9"
            style="min-height: calc(100vh - 5rem - 2.5rem)"
        >
            <div class="container p-5 bg-white rounded-lg shadow-md">
                <!-- <h2
                    class="pb-8 text-2xl font-bold text-center border-b border-gray-100"
                >
                    お問い合わせ
                </h2> -->
                <form>
                    <div
                        class="flex flex-row items-center mt-4 mb-4 max-sm:flex-col max-sm:items-start"
                        :class="{
                            'pb-4': error.includes(
                                'お問合せ製品が入力されていません。'
                            ),
                        }"
                    >
                        <div class="flex flex-row w-60 max-sm:h-8">
                            <label class="w-2 text-red-500">*</label>
                            <label for="email">お問合せ製品：</label>
                        </div>
                        <div class="relative w-full">
                            <input
                                class="w-full px-3 py-2 border rounded"
                                v-model="formData.title"
                            />
                            <p
                                class="absolute mt-1 text-sm text-red-500"
                                v-show="
                                    error.includes(
                                        'お問合せ製品が入力されていません。'
                                    )
                                "
                            >
                                お問合せ製品が入力されていません。
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row items-center mt-4 mb-4 max-sm:flex-col max-sm:items-start"
                        :class="{
                            'pb-4': error.includes(
                                '会社名が入力されていません。'
                            ),
                        }"
                    >
                        <div class="flex flex-row w-60 max-sm:h-8">
                            <label class="w-2 text-red-500">*</label>
                            <label for="email">会社名：</label>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="text"
                                class="w-full px-3 py-2 border rounded"
                                v-model="formData.businessName"
                            />
                            <p
                                class="absolute mt-1 text-sm text-red-500"
                                v-show="
                                    error.includes(
                                        '会社名が入力されていません。'
                                    )
                                "
                            >
                                会社名が入力されていません。
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row items-center mt-4 mb-4 max-sm:flex-col max-sm:items-start"
                        :class="{
                            'pb-4': error.includes(
                                '担当者名が入力されていません。'
                            ),
                        }"
                    >
                        <div class="flex flex-row w-60 max-sm:h-8">
                            <label class="w-2 text-red-500">*</label>
                            <label for="email">担当者名：</label>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="text"
                                id="password"
                                class="w-full px-3 py-2 border rounded"
                                v-model="formData.username"
                            />
                            <p
                                class="absolute mt-1 text-sm text-red-500"
                                v-show="
                                    error.includes(
                                        '担当者名が入力されていません。'
                                    )
                                "
                            >
                                担当者名が入力されていません。
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row items-center mt-4 mb-4 max-sm:flex-col max-sm:items-start"
                        :class="{
                            'pb-4': error.includes(
                                'フリガナが入力されていません。'
                            ),
                        }"
                    >
                        <div class="flex flex-row w-60 max-sm:h-8">
                            <label class="w-2 text-red-500">*</label>
                            <label for="email">フリガナ：</label>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="text"
                                id="password"
                                class="w-full px-3 py-2 border rounded"
                                v-model="formData.nomen"
                            />
                            <p
                                class="absolute mt-1 text-sm text-red-500"
                                v-show="
                                    error.includes(
                                        'フリガナが入力されていません。'
                                    )
                                "
                            >
                                フリガナが入力されていません。
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row items-center mb-4 max-sm:flex-col max-sm:items-start"
                    >
                        <div class="flex flex-row w-60 max-sm:h-8">
                            <label class="w-2 text-red-500"></label>
                            <label for="email">郵便番号：</label>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="text"
                                id="password"
                                class="w-full px-3 py-2 border rounded"
                                v-model="formData.postCode"
                            />
                            <p class="absolute mt-1 text-sm text-red-500"></p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row items-center mb-4 max-sm:flex-col max-sm:items-start"
                        :class="{
                            'pb-4': error.includes(
                                '住所が入力されていません。'
                            ),
                        }"
                    >
                        <div class="flex flex-row w-60 max-sm:h-8">
                            <label class="w-2 text-red-500">*</label>
                            <label for="email">住所：</label>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="text"
                                id="password"
                                class="w-full px-3 py-2 border rounded"
                                v-model="formData.address"
                            />
                            <p
                                class="absolute mt-1 text-sm text-red-500"
                                v-show="
                                    error.includes('住所が入力されていません。')
                                "
                            >
                                住所が入力されていません。
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row items-center mb-4 max-sm:flex-col max-sm:items-start"
                        :class="{
                            'pb-4': error.includes(
                                '電話番号が入力されていません。'
                            ),
                        }"
                    >
                        <div class="flex flex-row w-60 max-sm:h-8">
                            <label class="w-2 text-red-500">*</label>
                            <label for="email">電話番号：</label>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="text"
                                id="password"
                                class="w-full px-3 py-2 border rounded"
                                v-model="formData.phone"
                            />
                            <p
                                class="absolute mt-1 text-sm text-red-500"
                                v-show="
                                    error.includes(
                                        '電話番号が入力されていません。'
                                    )
                                "
                            >
                                電話番号が入力されていません。
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row items-center mb-4 max-sm:flex-col max-sm:items-start"
                        :class="{
                            'pb-4': error.includes(
                                'メールアドレスが入力されていません。'
                            ),
                            'pb-4': error.includes(
                                'メールアドレスの形式が不正です。'
                            ),
                        }"
                    >
                        <div class="flex flex-row w-60 max-sm:h-8">
                            <label class="w-2 text-red-500">*</label>
                            <label for="email">メールアドレス：</label>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="text"
                                id="password"
                                class="w-full px-3 py-2 border rounded"
                                v-model="formData.email"
                            />
                            <p
                                class="absolute mt-1 text-sm text-red-500"
                                v-if="
                                    error.includes(
                                        'メールアドレスが入力されていません。'
                                    )
                                "
                            >
                                メールアドレスが入力されていません。
                            </p>
                            <p
                                class="absolute mt-1 text-sm text-red-500"
                                v-else-if="
                                    error.includes(
                                        'メールアドレスの形式が不正です。'
                                    )
                                "
                            >
                                メールアドレスの形式が不正です。
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row items-center mb-4 max-sm:flex-col max-sm:items-start"
                        :class="{
                            'pb-4': error.includes(
                                'お問い合わせ内容が入力されていません。'
                            ),
                        }"
                    >
                        <div class="flex flex-row w-60 max-sm:h-8">
                            <label class="w-2 text-red-500">*</label>
                            <label for="email">お問合せ内容：</label>
                        </div>
                        <div class="relative w-full">
                            <textarea
                                id="content"
                                class="w-full px-3 py-2 border rounded"
                                v-model="formData.content"
                            ></textarea>
                            <p
                                class="absolute mt-1 text-sm text-red-500"
                                v-if="
                                    error.includes(
                                        'お問い合わせ内容が入力されていません。'
                                    )
                                "
                            >
                                お問い合わせ内容が入力されていません。
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-center mt-8">
                        <div
                            class="my-4 text-center text-green-500"
                            :class="{ hidden: sendSuccess === false }"
                        >
                            ありがとうございます。メッセージは送信されました。
                        </div>
                        <button
                            type="submit"
                            class="w-40 px-4 py-2 text-white rounded bg-sky-600 hover:bg-sky-500"
                            @click="submit"
                        >
                            送信する
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <!-- <Modal></Modal> -->
    </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
export default {
    components: {
        Modal,
    },
    data() {
        return {
            formData: {
                title: "",
                businessName: "",
                username: "",
                nomen: "",
                address: "",
                postCode: "",
                phone: "",
                email: "",
                content: "",
            },
            error: [],
            sendSuccess: false,
        };
    },
    methods: {
        async submit(e) {
            e.preventDefault();
            let res = await this.$api.contactAdd({ data: this.formData });
            console.log(res);
            if (res.code !== 200) {
                this.error = res.error;
            } else {
                this.sendSuccess = true;
                this.error = [];
                this.formData = {
                    title: "",
                    businessName: "",
                    username: "",
                    nomen: "",
                    address: "",
                    postCode: "",
                    phone: "",
                    email: "",
                    content: "",
                };
            }
        },
    },
};
</script>
