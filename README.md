#### Echidna's Path

An official guide to playing Bellus: Dimension Raid, supposedly written by a mysterious, fictional character named Echidna. 
This guide contains information about the general mechanisms of Bellus, and feels more like a mini-wiki than a guide.

#### 🔬 Contributing 

Before being able to contribute to the guide, you need to install Node.js. Once you have installed Node.js, you need 
to run the following command:
```shell
git clone https://github.com/BellusQuest/echidna-path
cd echidna-path
npm install
```

After that, you can contribute to the guide by adding articles in the [Guides Folder](src/routes/guide) which can be done by doing 
the following:
1. Creating a folder inside the [Guides Folder](src/routes/guide), make sure to follow the naming conventions of the existing guides.
2. Adding a `+page.svx` inside the folder.

Inside the `page.svx`, you need to have two of the following metadata:
1. Title
2. Rank (simply add 999 until the pull request is ready to merge, in which by then, we'll assign a rank to it)

An example of how that would look would be:
```markdown
---
title: Hello World
rank: 999
---

Hello World, we are still in markdown.
```

You can then start writing markdown with Svelte-injected code, after completing your article, you can feel free to write a 
pull request that describes what the article adds and related.

To test out your contribution, you can run the following line:
```shell
npm run dev
```
