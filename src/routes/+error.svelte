<script lang="ts">
    import FooterButtons from "$lib/components/FooterButtons.svelte";
    import {page} from "$app/stores"

    const modules = import.meta.glob("./guide/**/*.{md,svx}", { eager: true })
    const contents: {title:string,rank:number,slug:string}[] = []
    for (const k in modules) {
        const module = modules[k]
        console.info(module.metadata)
        contents.push({
            title: module.metadata.title,
            rank: module.metadata.rank,
            slug: k.replace("./", "").replace("+page.md", "").replace("+page.svx", "")
        })
    }
    contents.sort((a, b) => a.rank-b.rank)
</script>
<style>
    .slanted-transition-right {
        transform-style: preserve-3d;
        animation: slanted-transition-right 1s;
    }
    @keyframes slanted-transition-right {
        0% {
            transform: translate3d(0px, 0%, 0px) scale3d(82%, 1, 1) rotateX(10deg) rotateY(10deg) rotateZ(0deg);
            opacity: 0;
        }
        100% {
            transform: translate3d(0px, 0%, 3px) scale3d(1, 1, 1) rotate(0deg); transform-style: preserve-3d;
            opacity: 100;
        }
    }
    .slant-hover:hover {
        transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 82%) rotateX(10deg) rotateY(10deg) rotateZ(0deg);
    }
    .slanted-transition-left {
        transform-style: preserve-3d;
        animation: slanted-transition-left 1s;
    }
    @keyframes slanted-transition-left {
        0% {
            transform: translate3d(0px, 0%, 10px) scale3d(76%, 10%, 1) rotateX(10deg) rotateY(10deg) rotateZ(0deg);
            opacity: 0;
        }
        100% {
            transform: translate3d(0px, 0%, 3px) scale3d(1, 1, 1) rotate(0deg); transform-style: preserve-3d;
            opacity: 100;
        }
    }
</style>
<svelte:head>
    <title>Echidna's Path</title>
</svelte:head>
<div class="flex flex-col max-w-2xl">
    <div class="slanted-transition-right slant-hover duration-1000 transition hover:opacity-80 max-w-fit">
        <div class="flex flex-col playfair">
            <div class="flex flex-row gap-2 items-center">
                <img src="/bellus.min.png" class="w-6" alt="Bellus"/>
                <h1 class="text-4xl playfair leading-none">Echidna's Path</h1>
            </div>
            <h3 class="sofia font-light leading-none">the official guide to start with bellus: dimension raid</h3>
        </div>
    </div>
    <div class="flex flex-col sofia slanted-transition-left py-4 delay-1000 font-light gap-3">
        <p>
            {#if $page.status === 404}
                it seems to me that you stumbled upon an empty page here, how about navigating to another page
                instead from the table of contents?
            {:else}
                whoopsies, it seems like an error occurred while trying to navigate to this page: {$page.error.message}
            {/if}
        </p>
        <h3 class="sofia font-bold leading-none">table of contents</h3>
        <ul class="list-decimal px-8">
            {#each contents as content}
                <li>
                    <a href="/{content.slug}" class="table-of-content">{content.title}</a>
                </li>
            {/each}
        </ul>
        <FooterButtons/>
    </div>
</div>