<script lang="ts">
    import { onMount } from "svelte";
    import { projects } from "./data";
    import ProjectEntry from "./components/ProjectEntry.svelte";
    import TypingText from "./components/TypingText.svelte";
    import BackgroundVideo from "./components/BackgroundVideo.svelte";
    
    let projectEntries : ProjectEntry[] = [];

    onMount(() =>
    {
        // ------------------------
        // -------- Global --------
        // ------------------------
        
        const projectEntryIntroAnimationWaiter = cooldownPool(10);
        for (let projectEntry of projectEntries)
        {
            playAnimation(projectEntry);
        }
        
        // -------------------------
        // -------- Methods --------
        // -------------------------
        
        // Acts as a queue of cooldowns.
        // If you run 10 things at once
        // but wish to ensure a minimum X cooldown
        // between all of them, use this method.
        async function* cooldownPool(cooldownInMiliseconds : number)
        {
            while (true)
            {
                yield null;
                await sleep(cooldownInMiliseconds);
            }
        }

        function sleep(ms : number)
        {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        async function playAnimation(projectEntry: ProjectEntry)
        {
            projectEntry.style = "visibility: hidden";
            await projectEntry.loadThumbnail();
            await projectEntryIntroAnimationWaiter.next();
            projectEntry.style = "visibility: visible";
            projectEntry.playIntroAnimation();
        }
    });

</script>

<div style="display: contents">
    <BackgroundVideo src="background-video.mp4"/>
    
    <div id="intro-container">
        <div>
            <h1>Welcome to my Portfolio</h1>
            <p>
                <TypingText values={[
                    "I'm a Software Developer",
                    "I specialize in C# and .NET"]}/>
            </p>
        </div>
    </div>
    
    <h1 class="section-title margin-top-zero">Skills</h1>
    
    <div id="skill-container">
        <div>
            <div class="logo unity-logo tooltip">
                <span class="tooltiptext">Unity3D</span>
            </div>
            <div class="logo csharp-logo tooltip">
                <span class="tooltiptext">C#</span>
            </div>
            <div class="logo net-logo tooltip">
                <span class="tooltiptext">.NET<br>Framework</span>
            </div>
            <div class="logo javascript-logo tooltip move-tooltip-left-below-720px-width">
                <span class="tooltiptext">JavaScript</span>
            </div>
        </div>
        <div>
            <div class="logo html-logo tooltip">
                <span class="tooltiptext">HTML</span>
            </div>
            <div class="logo css-logo tooltip">
                <span class="tooltiptext">CSS</span>
            </div>
            <div class="logo git-logo tooltip">
                <span class="tooltiptext">GIT</span>
            </div>
            <div class="logo typescript-logo tooltip move-tooltip-left">
                <span class="tooltiptext">TypeScript</span>
            </div>
        </div>
    </div>
    
    <h1 class="section-title">Projects</h1>
    
    <div id="project-container" style="height: auto;">
        {#each projects as project, index}
            {#if project == null}
                <ProjectEntry style="height: 0px" />
            {:else}
                <ProjectEntry
                    bind:this={projectEntries[index]}
                    title={project.title}
                    thumbnail={project.thumbnail}
                    url={project.url}
                    category={project.category}
                    technologies={project.technologies}/>
            {/if}
        {/each}
    </div>
    
    <div id="social-container">
        <h1 id="social-title">You can find me on:</h1>
        <div id="social-button-container">
            <a href="https://www.codewars.com/users/Quickz" class="fas fa fa-codewars" target="_blank">&nbsp;</a>
            <a href="https://github.com/quickz" class="fa fa-github" target="_blank">&nbsp;</a>
            <a href="https://stackoverflow.com/users/5946094/quickz" class="fa fa-stack-overflow"target="_blank">&nbsp;</a>
            <a href="https://www.youtube.com/channel/UC6JYEP9wFE7fdbiLiaXLi4A" class="fa fa-youtube"target="_blank">&nbsp;</a>
            <a href="https://www.linkedin.com/in/aleksejs-sergejevs/" class="fa fa-linkedin"target="_blank">&nbsp;</a>
        </div>
    </div>
</div>
