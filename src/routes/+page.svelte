<script lang="ts">
    import FooterButtons from "$lib/components/FooterButtons.svelte";

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
    <div class="flex flex-col sofia slanted-transition-right py-4 delay-1000 font-light gap-3">
        <p>
            Welcome to Echidna's Path, an official guide to playing Bellus: Dimension Raid, written by the infamous
            and mysterious, virtual character named Echidna. In this guide, you will learn the general mechanisms
            in Bellus and the different lefts and rights of the bot.
        </p>
        <h3 class="sofia font-bold leading-none">table of contents</h3>
        <ul class="list-decimal px-8">
            {#each contents as content}
                <li>
                    <a href="{content.slug}" class="table-of-content">{content.title}</a>
                </li>
            {/each}
        </ul>
        <FooterButtons/>
    </div>
</div>