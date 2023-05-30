<template>
    <div class="flex justify-center bg-gray-100 p-9" style="min-height: calc(100vh - 5rem - 2.5rem);">
        <div class="p-6 bg-white rounded-lg shadow-md lg:container">
            <h2 class="pb-8 text-2xl font-bold text-center border-b border-gray-100">お問い合わせ</h2>
            <form>
                <div class="flex flex-row items-center mt-4 mb-4">
                    <label for="email" class="block w-60"
                        >お問合せ製品：</label
                    >
                    <input
                        type="email"
                        id="email"
                        class="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div class="flex flex-row items-center mb-4">
                    <label for="email" class="block w-60">会社名：</label>
                    <input
                        type="text"
                        class="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div class="flex flex-row items-center mb-4">
                    <label for="email" class="block w-60"
                        >担当者名：</label
                    >
                    <input
                        type="text"
                        id="password"
                        class="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div class="flex flex-row items-center mb-4">
                    <label for="email" class="block w-60"
                        >フリガナ：</label
                    >
                    <input
                        type="text"
                        id="password"
                        class="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div class="flex flex-row items-center mb-4">
                    <label for="email" class="block w-60"
                        >郵便番号：</label
                    >
                    <input
                        type="text"
                        id="password"
                        class="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div class="flex flex-row items-center mb-4">
                    <label for="email" class="block w-60">住所：</label>
                    <input
                        type="text"
                        id="password"
                        class="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div class="flex flex-row items-center mb-4">
                    <label for="email" class="block w-60"
                        >電話番号：</label
                    >
                    <input
                        type="text"
                        id="password"
                        class="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div class="flex flex-row items-center mb-4">
                    <label for="email" class="block w-60"
                        >メールアドレス：</label
                    >
                    <input
                        type="text"
                        id="password"
                        class="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div class="flex flex-row items-center mb-4">
                    <label for="email" class="block w-60"
                        >お問合せ内容：</label
                    >
                    <textarea id="content" class="w-full px-3 py-2 border rounded"></textarea>
                </div>
                <div class="flex items-center justify-center mt-8">
                    <button
                        type="submit"
                        class="w-40 px-4 py-2 text-white rounded bg-sky-600 hover:bg-sky-500"
                    >
                        送信する
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
