<script lang="ts">
    export let title = "";
    export let category = "";
    export let technologies = "";
    export let thumbnail = "thumbnails/placeholder-thumbnail.png";
    export let url = "/";
    export let style = "";

    let thumbnailImage : HTMLImageElement;
    $: styleToRender = `visibility: ${visibility}; ${style}`;

    let entry: HTMLElement;
    let visibility: string = "hidden";
    let overlayHidden = true;

    function handleMouseOver()
    {
        overlayHidden = false;
    }

    function handleMouseOut()
    {
        overlayHidden = true;
    }

    export const loadThumbnail = () => new Promise(resolve =>
    {
        var image = new Image();
        image.onload = function()
        {
            thumbnailImage.src = thumbnail;
            resolve(null);
        };
        image.src = thumbnail;
    });

    export function playIntroAnimation()
    {
        entry.classList.add("play-grow-in");

        entry.addEventListener("animationend", () =>
        {
            entry.classList.remove("play-grow-in");
        });
    }
</script>

<svelte:options accessors/>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<a bind:this={entry}
   class="project-entry"
   target="_blank"
   href={url}
   on:mouseover={handleMouseOver}
   on:mouseout={handleMouseOut}
   style={styleToRender}>
    <img bind:this={thumbnailImage} width="320" height="180" class="thumbnail" alt="thumbnail">
    <span class="title" hidden={overlayHidden}>{title}</span>
    <span class="category" hidden={overlayHidden}>{category}</span>
    <span class="technologies" hidden={overlayHidden}>{technologies}</span>
</a>
