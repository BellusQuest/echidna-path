<script>
    import {Icon} from "@steeze-ui/svelte-icon";
    import {ChevronLeft} from "@steeze-ui/radix-icons";
    import FooterButtons from "$lib/components/FooterButtons.svelte";

    export let title;
</script>
<svelte:head>
    <title>{title} by Echidna</title>
</svelte:head>
<div class="flex flex-col">
    <a href="/" class="flex flex-row items-center gap-1 slanted-transition-right p-1 slant-hover duration-1000 transition hover:opacity-80 max-w-fit">
        <Icon src={ChevronLeft} size="16"></Icon>
        <div class="flex flex-col playfair">
            <div class="flex flex-row gap-2 items-center">
                <img src="/bellus.min.png" class="w-6" alt="Bellus"/>
                <h1 class="text-sm playfair leading-none">Echidna's Path</h1>
            </div>
            <h3 class="sofia text-xs font-light leading-none">the official guide to start with bellus: dimension raid</h3>
        </div>
    </a>
    <div class="flex flex-col sofia slanted-transition-left delay-1000 font-light max-w-3xl py-2">
        <h3 class="playfair leading-none text-4xl">{title}</h3>
        <div class="flex flex-col gap-3 py-4 font-light px-2 content">
            <slot/>
        </div>
        <FooterButtons/>
    </div>
</div>