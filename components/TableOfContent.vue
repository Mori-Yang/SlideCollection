<template>
    <div class="list-container" :style="style">
        <div v-for="(value, key) in items" :key="key" v-click class="list-item-container">
            <span class="list-item-number">{{ key + 1 }}</span> <span class="list-item-text">{{ value }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    column: {
        type: Number,
        required: true
    },
    full:{
        type: Boolean,
        default: true
    }
})
const items = ref(props.items)
const style = { 
    gridTemplateColumns: `repeat(${props.column}, 1fr)`,
}
</script>

<style scoped>
.list-container {
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    padding-bottom: 36px;
}

.list-item-container {
    cursor: pointer;
    list-style: none;
}

.list-item-number{
    background-color: rgba(149, 149, 149, 0.1);
    border-color: rgba(149, 149, 149, 0.3);
    border-radius: 8px;
    width: fit-content;
    padding: 8px;
}

.list-item-text{
    margin-left: 12px;
}
</style>