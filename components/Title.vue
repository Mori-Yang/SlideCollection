<template>
    <div class="inline-code before:content-['「']  after:content-['」']">{{ title }}</div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
const title = ref(props.text)
</script>

