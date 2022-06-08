<script setup>
import { CreateURL } from '../utils'
defineProps({
    author: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="bg-gray-800 rounded-lg p-4 text-center">
        <div v-if="author">
            <img :src="CreateURL(author.avatar)" alt="" class="inline-block w-32 h-32 mb-4 rounded-full">
            <h3 class="text-2xl font-bold mb-4">{{author.full_name}}</h3>
            <h3 class="text-gray-400 mb-4">{{author.short_bio}}</h3>
            <router-link :to="`/author/${author._id}`" class="btn">Profile</router-link>
        </div>
    </div>
</template>