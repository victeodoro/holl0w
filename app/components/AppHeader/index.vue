<template>
    <header class="py-2 px-10">
        <nav class="flex justify-between items-center">
            <AppHeaderLogo />

            <ul class="flex gap-12">
                <li>
                    <NuxtLink 
                        href="/"
                        class=
                            "
                            text-paragraph duration-300 transition cursor-pointer hover:text-brand
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
                    href="/contact"
                    class=
                        "
                        text-paragraph duration-300 transition cursor-pointer hover:text-brand
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
        </nav>
    </header>
</template>