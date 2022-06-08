<script setup>
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import AuthorCard from '../components/AuthorCard.vue'

const store = useStore();
const authors = computed(() => store.getters.authors);
onMounted(() => {
  store.dispatch("FetchAuthors")
})
</script>

<template>
  <main class="authors-page">
    <section class="container mx-auto p-4">
      <h1 class="text-2xl mb-8">Authors</h1>
      <div class="grid md:grid-cols-3 gap-4">
        <AuthorCard v-for="(author, i) in authors" :key="i" :author="author"/>
      </div>
    </section>
  </main>
</template>

<style>
</style>
