<script setup lang="ts">
    const { data: posts } = await useAsyncData('posts-list', () =>
        queryCollection('posts')
        .where('path', 'LIKE', '/posts/%')
        .order('date', 'DESC')
        .select('path', 'title', 'description', 'type', 'date')
        .all()
    )
</script>

<template>
    <NuxtLink
        to="/"
        class="text-cyan-brand underline w-fit flex flex items-center gap-1 p-2 cursor-pointer hover:text-cyan-brand/60"
    >   
        <UIcon name="i-mdi-chevron-double-left" />
        <span>127.0.0.1</span>
    </NuxtLink>

    <section class="flex flex-col gap-5 lg:items-center px-12 lg:px-40 py-6 lg:py-24">
        <div>
            <span class="text-white-brand">holl0w@victeodoro:~/# ls -t ./posts | cut -d " " -f1,2,3,5 </span>
        </div>

        <div class="flex flex-col border border-white-brand/60">
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="post.path"
            class="group grid gap-2 border-b border-white-brand/60 px-3 py-3 transition-colors hover:bg-cyan-950/20 md:grid-cols-[120px_90px_minmax(0,1fr)] md:items-start"
          >
            <div class="flex gap-3 text-sm md:block">
              <span class="text-white-brand/70 md:hidden">date:</span>
              <span class="whitespace-nowrap text-white-brand group-hover:text-cyan-brand">
                {{ post.date }}
              </span>
            </div>

            <div class="flex gap-3 text-sm md:block">
              <span class="text-white-brand/70 md:hidden">type:</span>
              <span class="whitespace-nowrap uppercase text-white-brand group-hover:text-cyan-brand">
                {{ post.type }}
              </span>
            </div>

            <div class="min-w-0">
              <h3 class="text-white-brand group-hover:text-cyan-brand group-hover:underline">
                {{ post.title }}
              </h3>

              <p class="mt-1 line-clamp-2 text-sm text-white-brand/80 group-hover:text-cyan-brand">
                {{ post.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
    </section>
</template>