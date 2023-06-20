<script lang="ts">
    import { onMount } from "svelte";

    export let src = "";

    onMount(() =>
    {
        const backgroundVideo: HTMLVideoElement = document.getElementById("background-video") as HTMLVideoElement;

        let backgroundVideoStarted = false;

        if (backgroundVideo.readyState == 4)
        {
            backgroundVideoStarted = true;
            fadeIn(backgroundVideo, 500);
        }
        else
        {
            backgroundVideo.oncanplaythrough = function()
            {
                if (backgroundVideoStarted)
                    return;

                backgroundVideoStarted = true;
                fadeIn(backgroundVideo, 500);
            };
        }
    });

    function fadeIn(
        element : HTMLElement,
        durationInMiliseconds : number) : Promise<unknown>
    {
        const framesPerSecond = 50;
        const frames = durationInMiliseconds / 1000 * framesPerSecond;
        const singleFrameDuration = durationInMiliseconds / frames;
        const opacityPerFrame = 1 / frames;

        // Node:
        // Using filter opacity instead of opacity
        // due to a weird issue where the last assignment
        // which set opacity to 1 caused a weird blink

        return new Promise(async resolve =>
        {
            let opacity = 0;
            element.style.filter = "opacity(0%)";

            while (opacity < 1 - opacityPerFrame)
            {
                opacity += opacityPerFrame;
                element.style.filter = `opacity(${opacity * 100}%)`;

                await sleep(singleFrameDuration);
            }

            opacity = 1;
            element.style.filter = `opacity(100%)`;

            resolve(null);
        });
    }

    function sleep(ms : number)
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
</script>

<video id="background-video" autoplay muted loop style="filter: opacity(0%)">
    <source src={src}>
</video>

<style>
    #background-video {
        z-index: -1;
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }
</style>
