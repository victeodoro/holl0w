<script setup lang="ts">
    const route = useRoute()

    const path = computed(() => {
        const slug = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]
        return `/garden/${slug.filter(Boolean).join('/')}`
    })

    const { data, pending, error } = await useAsyncData(
        () => `garden-doc:${path.value}`,
        () => queryCollection('garden').where('path', '=', path.value).first(),
        { watch: [path] }
    )

    const doc = computed(() => data.value ?? null)

    watchEffect(() => {
        if (!pending.value && !error.value && !doc.value) {
            throw createError({ statusCode: 404, statusMessage: 'Not found' })
        }
    })

    useSeoMeta({
        title: () => doc.value?.title ?? 'garden',
        description: () => doc.value?.description ?? ''
    })
</script>

<template>
    <div class="max-w-4xl mx-auto p-6">
        <div v-if="pending" class="opacity-60">carregando…</div>

        <template v-else-if="doc">
            <section class="flex flex-col gap-8 mb-24">
                
                <div class="flex flex-col">
                    <h3 class="uppercase text-brand font-medium">
                        {{ doc.type }}
                    </h3>

                    <h1 class="text-6xl font-normal font-serif text-paragraph leading-tight">
                        {{ doc.title }}
                    </h1>

                    <p v-if="doc.description" class="text-paragraph text-2xl font-thin mt-4">
                        {{ doc.description }}
                    </p>
                </div>

                <hr class="text-perimeter">

                <div class="flex justify-between items-center">
                    <div v-if="doc.tags?.length" class="flex flex-wrap gap-6">
                        <span
                            v-for="tag in doc.tags"
                            :key="tag"
                            class="text-brand font-normal"
                        >
                            {{ tag }}
                        </span>
                    </div>

                    <p class="text-paragraph font-normal">{{ doc.date }}</p>
                </div>
            </section>

            <article 
                class="prose prose-invert max-w-none    "
            >
                <ContentRenderer :value="doc" />
            </article>
        </template>
    </div>
</template>
