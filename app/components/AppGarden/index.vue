<script setup lang="ts">
    type GardenSeed = {
        id: string
        to: string
        icon?: string
        title: string
        description: string
        tag: string
        date: string
    }

    const seeds: GardenSeed[] = [
        {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
                {
            id: "cmdk",
            to: "/garden/command-k-bars",
            title: "Linux Tips",
            description: "Um texto legal sobre Linux e outras coisas que eu achei interessante.",
            tag: "Note",
            date: "26 dez. 2025.",
        },
    ]
</script>

<template>
    <section id="garden" class="flex flex-col gap-20">
        <div>
            <h2 class="text-paragraph text-5xl font-serif font-thin mb-3">The Garden</h2>
            <p class="text-paragraph text-2xl font-thin">A digital garden is a collection of imperfect notes, essays, and ideas growing slowly over time.</p>
        </div>

        <div class="columns-1 sm:columns-2 lg:columns-3 gap-4">
            <AppGardenSeed
                v-for="seed in seeds"
                :key="seed.id"
                :to="seed.to"
                :title="seed.title"
                :description="seed.description"
                :tag="seed.tag"
                :date="seed.date"
                :icon="seed.icon"
            />
        </div>
    </section>
</template>