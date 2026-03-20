<script setup lang="ts">
    const { data: posts } = await useAsyncData('posts-list', () =>
        queryCollection('posts')
        .where('path', 'LIKE', '/posts/%')
        .order('date', 'DESC')
        .select('path', 'title', 'description', 'type', 'date', 'img')
        .limit(5)
        .all()
    )
</script>

<template>
    <section class="min-h-0 overflow-hidden flex flex-col gap-5">
        <div class="flex-1 min-h-0 overflow-y-auto">
            <div class="columns-1 sm:columns-2 lg:columns-3 gap-4">
                <NuxtLink 
                    v-for="post in (posts || [])" 
                    :to="post.path"
                    class=
                        "
                            flex gap-4 mb-4 break-inside-avoid rounded-md p-4 
                            cursor-pointer transition ease-in duration-250 
                            group hover:scale-105
                        "
                >        
                    <div class="flex flex-col gap-3">
                        <img v-if="post.img" :src="post.img" alt="">

                        <h2 class="text-xl text-cyan-200">
                            {{ post.title }}
                        </h2>

                        <p class="text-justify text-white">
                            {{ post.description }}
                        </p>
                        
                        <div class="text-white">
                            <span >
                                {{ post.type }}
                            </span> 
                            &#x2022;
                            <span>
                                {{ post.date }}
                            </span>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <NuxtLink
            to="blog"
            class="text-cyan-200 underline shrink-0"
        >
            See more
        </NuxtLink>
    </section>
</template>