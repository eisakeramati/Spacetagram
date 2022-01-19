<template>
    <h1 class="flex justify-center text-center text-5xl text-gray-600 dark:text-yellow-300 font mt-16 mb-6">
    s p a c e t a g r a m
    </h1>
    <h1 class="flex justify-center text-center text-xl text-gray-700 font-text dark: text-gray-400"> spacetagram provides daily space images. like the posts and read the info, and share images!</h1>
        <h1 class="flex justify-center text-center text-xl text-gray-700 font-text mt-2 dark: text-gray-400">Toggle between dark and light mode and bottom of can provide more posts!</h1>
    <h1 class="flex justify-center text-center text-xl text-gray-700 font-text mt-2 dark: text-gray-400">Designed by Eisa Keramati as a Vue3 passion project:</h1>
    <div v-if="props.darkOn == 'dark'">
        <span class="flex gap-6 justify-center mt-6 mb-6">
        <a href="https://github.com/eisakeramati"><img width="30px" src="/git.png" alt="github"></a>
        <a href="https://eisakeramati.github.io/HomePage/"><img width="30px" src="/web.png" alt="website"></a>
        <a href="https://www.linkedin.com/in/eisa-keramatinejad/"><img width="30px" src="/linkedin.png" alt="linkedin"></a>
        <a href="mailto:eisa.keramati@gmail.com"><img width="30px" src="/mail.png" alt="mail"></a>
        </span>
    </div>
    <div v-else>
        <span class="flex gap-6 justify-center mt-6 mb-6">
        <a href="https://github.com/eisakeramati"><img width="30px" src="/github-brands.svg" alt="github"></a>
        <a href="https://eisakeramati.github.io/HomePage/"><img width="30px" src="/rss-square-solid.svg" alt="website"></a>
        <a href="https://www.linkedin.com/in/eisa-keramatinejad/"><img width="30px" src="/linkedin-brands.svg" alt="linkedin"></a>
        <a href="mailto:eisa.keramati@gmail.com"><img width="30px" src="/envelope-square-solid.svg" alt="mail"></a>
        </span>
    </div>
</template>
<script setup>
    const props = defineProps({
        darkOn: {
            type: String,
            default: "light"
        }
    })
</script>