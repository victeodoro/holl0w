<script setup lang="ts">
    const route = useRoute()

    const path = computed(() => {
        const slug = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]
        return `/posts/${slug.filter(Boolean).join('/')}`
    })

    const { data, pending, error } = await useAsyncData(
        () => `posts-doc:${path.value}`,
        () => queryCollection('posts').where('path', '=', path.value).first(),
        { watch: [path] }
    )

    const doc = computed(() => data.value ?? null)

    watchEffect(() => {
        if (!pending.value && !error.value && !doc.value) {
            throw createError({ statusCode: 404, statusMessage: 'Not found' })
        }
    })

    useSeoMeta({
        title: () => doc.value?.title ?? 'posts',
        description: () => doc.value?.description ?? ''
    })
</script>

<template>
    <div class="max-w-4xl mx-auto p-6">
        <div v-if="pending" class="opacity-60">Loading...</div>

        <template v-else-if="doc">
            <section class="flex flex-col gap-8 mb-24">
                
                <div class="flex flex-col">
                    <NuxtLink
                        to="/"
                        class="text-cyan-brand underline w-fit flex flex items-center gap-1 p-2 cursor-pointer hover:text-cyan-brand/60"
                    >   
                        <UIcon name="i-mdi-chevron-double-left" />
                        <span>127.0.0.1</span>
                    </NuxtLink>

                    <h3 class="uppercase text-cyan-brand text-sm">
                        {{ doc.type }}
                    </h3>

                    <h1 class="text-3xl lg:text-6xl lg:font-bold text-white-brand/90 leading-tight">
                        {{ doc.title }}
                    </h1>

                    <p v-if="doc.description" class="text-cyan-brand text-sm lg:text-2xl mt-4">
                        {{ doc.description }}
                    </p>
                </div>

                <hr>

                <div class="flex justify-between items-center">
                    <div v-if="doc.tags?.length" class="flex flex-wrap gap-1 lg:gap-6">
                        <span
                            v-for="tag in doc.tags"
                            :key="tag"
                            class="text-cyan-brand"
                        >
                            {{ tag }}
                        </span>
                    </div>

                    <p class="text-cyan-brand">{{ doc.date }}</p>
                </div>
            </section>

            <article 
                class="
                    prose prose-invert prose-headings:text-white-brand
                    max-w-none
                "
            >
                <ContentRenderer :value="doc" />
            </article>
        </template>
    </div>
</template>
