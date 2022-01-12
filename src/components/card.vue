<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-400">
    <div v-if="props.cardData.media_type == 'image'">
        <img class="w-full" :src="props.cardData.url" alt="space">
    </div>
    <div v-else>
        <iframe width="560" height="315" :src="props.cardData.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-1">{{props.cardData.title}}</div>
        <div class="text-l mb-2">{{props.cardData.date}}</div>
        <button @click.prevent="share" class="animate-wiggle py-1 rounded-md flex mb-2">
            <div class="pr-2 pl-2">
                <img style="width: 17px;" src="/share-alt-solid.svg" alt="github">
            </div>
        </button>
            <p :class="state.expText">
                {{props.cardData.explanation}}
            </p>
            <button @click.prevent="expand" class="bg-gray-500 hover:bg-blue-400 text-white py-1 px-2 rounded-full mb-2 inline">
                <div class="pr-2 pl-2">
                    {{ state.buttontext }}
                </div>
            </button>
            <buttonLike class="mt-1" @click="liked" :click="state.liked" :animated="true" />
        </div>
    </div>
</template>

<script>
    import buttonLike from './buttonLike.vue';
    export default {
    components: {
        buttonLike
    }
}
</script>

<script setup>
import { computed } from "@vue/reactivity"
import {reactive} from 'vue';
    const state = reactive({
        expText: "text-gray-700 mb-3 text-base line-clamp-6",
        expFlag: true,
        buttontext: " more",
        liked: false
    })
    const props = defineProps({
            cardData: {
                type: Object,
                default: {}
            }
    })
    const expand = () => {
            state.expFlag = !state.expFlag
            if (!state.expFlag) {
                state.expText = "text-gray-700 mb-3 text-base line-clamp-None"
                state.buttontext = " less"
            } else {
                state.expText = "text-gray-700 mb-3 text-base line-clamp-6"
                state.buttontext = " more"
            }
    }
    const liked = () => {
        state.liked = !state.liked
    }

    const share = () => {
        navigator.clipboard.writeText(props.cardData.url);
        alert ("Image link copied to clipboard!");
    }
</script>



