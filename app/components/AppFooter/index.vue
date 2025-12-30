<template>
    <section id="contact" class="flex justify-between items-center py-24 border-t border-perimeter">
        <div class="flex flex-col">
            <h2 class="text-2xl text-paragraph font-light mb-6">Deseja manter contato?</h2>
            <ul class="flex gap-5 mb-2">
                <li>
                    <NuxtLink>
                        <UIcon name="i-mdi-instagram" class="text-3xl text-description duration-200 transition-colors cursor-pointer hover:text-accent"/>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink>
                        <UIcon name="i-mdi-linkedin" class="text-3xl text-description duration-200 transition-colors cursor-pointer hover:text-accent"/>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink>
                        <UIcon name="i-mdi-github" class="text-3xl text-description duration-200 transition-colors cursor-pointer hover:text-accent"/>
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
                        bg-[linear-gradient(var(--color-accent),var(--color-accent))]
                        bg-no-repeat bg-left-bottom
                        bg-[length:0_2px] hover:bg-[length:100%_2px]
                        focus-visible:bg-[length:100%_2px]
                        transition-[background-size] duration-200 ease-out
                        "
                >
                    O Jardim
                </NuxtLink>
            </li>
            <li>
                <NuxtLink 
                    to="#contact"
                    class=
                        "
                        text-paragraph font-light duration-300 transition cursor-pointer
                        relative inline-block pb-1
                        bg-[linear-gradient(var(--color-accent),var(--color-accent))]
                        bg-no-repeat bg-left-bottom
                        bg-[length:0_2px] hover:bg-[length:100%_2px]
                        focus-visible:bg-[length:100%_2px]
                        transition-[background-size] duration-200 ease-out
                        "
                >
                    Contato
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>