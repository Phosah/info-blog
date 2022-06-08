<script setup>
import {FormatDate, CreateURL} from '../utils'
defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row">
        <img v-if="post.image" :src="CreateURL(post.image, 480, 320)" alt="" class="block w-full sm:max-w-xs mr-4 object-cover mb-4 sm:mb-0">      
        <div class="flex flex-1 flex-col">
            <h3 class="text-lg md:text-2xl font-bold mb-4">{{post.title}}</h3>
            <p class="flex-1 bg-gray-500 md:text-lg mb-4">{{post.excerpt}}</p>
            <div class="flex sm:flex-col md:flex-row justify-between items-start md:items-end">
                <div class="flex items-center sm:mb-4 md:mb-0">
                    <img v-if="post.author.avatar" :src="CreateURL(post.author.avatar, 100, 100)" alt="" class="mr-4 rounded-full w-12 h-12">
                    <div>
                        <p class="text-white mr-4">{{post.author.full_name}}</p>
                        <p class="text-gray-500 text-sm">{{FormatDate(post._createdAt)}}</p>
                    </div>
                </div>
                <router-link :to="`/post/${post._id}`" class="btn">Read More</router-link>
            </div>
        </div>
    </div>
</template>