<template>
    <UMain class="bg-background max-w-screen min-h-screen flex flex-col">
        <AppHeader />
        <slot />
        <hr class="text-perimeter w-[80%] mx-auto my-5">
        <AppFooter />
    </UMain>
</template>