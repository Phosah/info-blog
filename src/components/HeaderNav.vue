<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const menu_is_active = computed(() => store.state.menu_is_active)
const ToggleMenu = () => {
    store.dispatch("ToggleMenu");
    console.log(menu_is_active.value)
}
</script>

<template>
    <header class="flex items-center justify-center w-full p-4">
        <div @click="ToggleMenu" :class="`menu-toggle relative z-50 ${menu_is_active ? 'is_active': ''}`">
            <div class="hamburger">
                <span></span>
            </div>
        </div>
        <h1 class="text-center text-2xl uppercase font-light tracking-widest">Sanity News</h1>
    </header>
</template>

<style scoped>
.menu-toggle {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 32px;
    height: 32px;
    cursor: pointer;
}
.hamburger {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
}
.hamburger span {
    top: 50%;
    transform: translateY(-50%);
}
.hamburger span,
.hamburger span:before,
.hamburger span:after {
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 99px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
}
.hamburger span:before,
.hamburger span:after {
    content: '';
}
.hamburger span:before {
    top: -8px;
}
.hamburger span:after {
    top: 8px;
}
.menu-toggle.is_active .hamburger > span {
    transform: rotate(45deg);
}
.menu-toggle.is_active .hamburger > span:before {
    top: 0;
    transform: rotate(0deg);
}
.menu-toggle.is_active .hamburger > span:after {
    top: 0;
    transform: rotate(90deg);
}
</style>