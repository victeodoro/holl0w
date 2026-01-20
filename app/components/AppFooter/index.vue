<template>
    <section id="contact" class="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center py-24 px-5 md:px-25 lg:px-48">
        <div class="flex flex-col items-center lg:items-start">
            <h2 class="text-xl text-paragraph font-light mb-6">Would you like to keep in touch?</h2>
            <ul class="flex gap-5 mb-2">
                <li>
                    <NuxtLink
                        to="https://www.instagram.com/jvicteodoro/"
                        target="_blank"
                    >
                        <UIcon name="i-mdi-instagram" class="text-3xl text-description duration-200 transition-colors cursor-pointer hover:text-brand"/>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="https://www.linkedin.com/in/victeodoro/"
                        target="_blank"
                    >
                        <UIcon name="i-mdi-linkedin" class="text-3xl text-description duration-200 transition-colors cursor-pointer hover:text-brand"/>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="https://github.com/victeodoro"
                        target="_blank"
                    >
                        <UIcon name="i-mdi-github" class="text-3xl text-description duration-200 transition-colors cursor-pointer hover:text-brand"/>
                    </NuxtLink>
                </li>
            </ul>
            <span class="text-description">&copy; 2025 Victor Teodoro</span>
        </div>

        <ul class="flex flex-col gap-3">
            <li>
                <NuxtLink 
                    to="#garden"
                    class=
                        "
                        text-paragraph font-light duration-300 transition cursor-pointer
                        relative inline-block pb-1
                        bg-[linear-gradient(var(--color-brand),var(--color-brand))]
                        bg-no-repeat bg-left-bottom
                        bg-[length:0_2px] hover:bg-[length:100%_2px]
                        focus-visible:bg-[length:100%_2px]
                        transition-[background-size] duration-200 ease-out
                        "
                >
                    The Garden
                </NuxtLink>
            </li>
            <li>
                <NuxtLink 
                    to="#contact"
                    class=
                        "
                        text-paragraph font-light duration-300 transition cursor-pointer
                        relative inline-block pb-1
                        bg-[linear-gradient(var(--color-brand),var(--color-brand))]
                        bg-no-repeat bg-left-bottom
                        bg-[length:0_2px] hover:bg-[length:100%_2px]
                        focus-visible:bg-[length:100%_2px]
                        transition-[background-size] duration-200 ease-out
                        "
                >
                    Contact
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>