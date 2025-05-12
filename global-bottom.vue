<template>
    <footer>
        <span 
            class="mask"
        ></span>
        <span 
            class="halo"
            :style="positionStyle"
        ></span>
    </footer>
</template>

<script setup lang="ts">
import { CSSProperties, ref, watch } from 'vue';
import { useNav } from '@slidev/client';

const nav = useNav();
const positionStyle = ref<CSSProperties>({});

watch(nav.currentPage, (pageCount) => {
    const posIndex = pageCount % 4;
    const posMap = [
        {
            left: '50%',
            top: '50%',
        },
        {
            left: '0%',
            top: '50%',
        },
        {
            left: '0%',
            top: '100%',
        },
        {
            left: '50%',
            top: '100%',
        },
    ];
    positionStyle.value = posMap[posIndex];
}, {immediate: true});
</script>

<style scoped>
footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    overflow: hidden;
}

.mask {
    display: block;
    pointer-events: none;
    width: 400%;
    height: 400%;
    left: -150%;
    top: -150%;
    background: radial-gradient(ellipse 25% 25% at 50% 37.5%, #0d4929, #000000);
    opacity: 0.5;
} 

.halo {
    display: block;
    width:520px;
    height:520px;
    position: absolute;
    transform: translate(-50%, -50%) rotate(-45deg);
    filter: blur(140px);
    background-image: radial-gradient(#08ac3a 1px, transparent 1px);
    opacity: 0.2;
    background-size: 0.125rem 0.125rem;
    pointer-events: none;
    transition: all 0.5s ease-in-out;
}
</style>