<template>
    <div v-if="props.click">
        <button class="animate-wiggle w-8 h-8">
            <slot class="justify-center" name="buttonText"> 
                <div v-if="props.click">
                    <fa icon="heart" color="#C41E3A" size="lg" />
                </div>
                <div v-else>
                    <fa icon="heart" color="#484848" size="lg" />
                </div>
            </slot>
        </button>
    </div>
    <div v-else>
        <button class="w-8 h-8">
            <slot class="justify-center" name="buttonText"> 
                <div v-if="props.click">
                    <fa icon="heart" color="#C41E3A" size="lg" />
                </div>
                <div v-else>
                    <fa icon="heart" color="#484848" size="lg" />
                </div>
            </slot>
        </button>
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity"
    const props = defineProps({
            click: {
                type: Boolean,
                default: false
            },
            animated: {
                type: Boolean,
                default: false
            }
    })
    const toggleAnimated = () => {
        props.animated = !props.animated
    }
</script>