<template>
    <div
        class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full modal"
    >
        <div
            class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
        ></div>

        <div
            class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
        >
            <div class="px-6 py-4 text-left modal-content">
                <div class="flex items-center justify-between pb-3">
                    <p class="text-2xl font-bold">Modal Title</p>
                    <div class="z-50 cursor-pointer modal-close">
                        <svg
                            class="text-black fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                        >
                            <path
                                d="M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z"
                            />
                        </svg>
                    </div>
                </div>

                <div class="my-5">
                    <p>Modal content goes here...</p>
                </div>

                <div class="flex justify-end pt-2">
                    <button
                        class="p-3 px-4 text-white rounded-lg bg-sky-500 modal-close hover:bg-sky-400"
                    >
                        確認
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
