<script lang="ts">
    import { onMount } from "svelte";

    export let values: string[] = [];
    let currentValue = "_";

    onMount(() =>
    {
        startChangingSubtitle();
    });

    async function startChangingSubtitle()
    {
        const delay = 35;
        
        while (values.length > 0)
        {
            for (let value of values)
            {
                await setSubtitle(value, delay);
                await sleep(7000);
            }
        }
    }

    async function setSubtitle(text : string, speed : number)
    {
        for (let i = 1; i <= text.length; i++)
        {
            currentValue = text.substr(0, i) + "_";
            await sleep(speed);
        }
    }

    function sleep(ms : number)
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
</script>

{currentValue}
