// ------------------------
// --- Global constants ---
// ------------------------

const projectEntryTemplate : HTMLTemplateElement = document.getElementById("project-entry-template") as HTMLTemplateElement;
const projectContainer : HTMLTemplateElement = document.getElementById("project-container") as HTMLTemplateElement;
const introSubtitle : HTMLParagraphElement = document.getElementById("intro-container")?.getElementsByTagName("p")[0] as HTMLParagraphElement;
const backgroundVideo: HTMLVideoElement = document.getElementById("background-video") as HTMLVideoElement;
const projectEntryIntroAnimationWaiter = cooldownPool(10);

const emptyProject : ProjectEntryData =
{
    title: "",
    thumbnail: "",
    url: "",
    category: "",
    technologies: ""
};

const projects : ProjectEntryData[] = [
    {
        title: "Rezrog",
        thumbnail: "thumbnails/rezrog-thumbnail.png",
        url: "https://store.steampowered.com/app/548370/Rezrog/",
        category: "Worked on it during a job",
        technologies: "Unity3D, C#, .NET"
    },
    {
        title: "Seacurity Breach",
        thumbnail: "thumbnails/seacurity-breach-thumbnail.png",
        url: "https://store.steampowered.com/app/906660/Seacurity_Breach/",
        category: "Worked on it during a job",
        technologies: "Unity3D, C#, .NET"
    },
    {
        title: "Swipe Escape",
        thumbnail: "thumbnails/swipe-escape-thumbnail.png",
        url: "https://play.google.com/store/apps/details?id=com.vaporwaveconfidential.swipeescape",
        category: "Worked on it during a job",
        technologies: "Unity3D, C#, .NET"
    },
    {
        title: "ParProf",
        thumbnail: "thumbnails/parprof-thumbnail.png",
        url: "https://parprof.lv/",
        category: "Worked on it during a job",
        technologies: "Cocos Creator, TypeScript"
    },
    {
        title: "Unity Assets",
        thumbnail: "thumbnails/unity-assets-thumbnail.png",
        url: "https://assetstore.unity.com/publishers/41656",
        category: "Personal project",
        technologies: "Unity3D, C#, .NET"
    },
    {
        title: "Tetris",
        thumbnail: "thumbnails/tetris-thumbnail.png",
        url: "https://quickz.github.io/Tetris/",
        category: "Personal project",
        technologies: "JavaScript, HTML, CSS"
    },
    {
        title: "FreeCodeCamp Legacy Front End certificate",
        thumbnail: "thumbnails/freecodecamp-thumbnail.png",
        url: "https://www.freecodecamp.org/certification/quickz/legacy-front-end",
        category: "",
        technologies: "JavaScript, HTML, CSS"
    },
    {
        title: "Memory Card Game",
        thumbnail: "thumbnails/memory-card-game-thumbnail.png",
        url: "https://quickz.github.io/Memory-Card-Game/",
        category: "Personal project",
        technologies: "C#, .NET, Blazor"
    },
    {
        title: "SWF Game File Extractor",
        thumbnail: "thumbnails/swf-game-file-extractor-thumbnail.png",
        url: "https://github.com/Quickz/swf-game-file-extractor",
        category: "Personal project",
        technologies: "C#, .NET, WPF"
    },
    {
        title: "Path Finding Visual",
        thumbnail: "thumbnails/path-finding-visual-thumbnail.png",
        url: "https://quickz.github.io/PathFinding-Visual/",
        category: "Personal project",
        technologies: "JavaScript, HTML, CSS"
    },
    {
        title: "Visual Studio video series",
        thumbnail: "thumbnails/visual-studio-tips-thumbnail.png",
        url: "https://www.youtube.com/watch?v=EmLgSxfhoxI&list=PLz-QWJhJz3MHYx0oO-9Qmyw-EGGRK_Cw6&ab_channel=Quickz",
        category: "Personal project",
        technologies: ""
    },
    emptyProject
];


// ------------------------
// -------- Global --------
// ------------------------

backgroundVideo.style.filter = "opacity(0%)";

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

fillProjectContainer();
startChangingSubtitle();


// -------------------------
// -------- Methods --------
// -------------------------

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

function growIn(element : HTMLElement)
{
    element.classList.add("play-grow-in");

    element.addEventListener("animationend", () =>
    {
        element.classList.remove("play-grow-in");
    });
}

async function fillProjectContainer()
{
    for (let i = 0; i < projects.length; i++)
    {
        const entry = createEntry();
        entry.style.visibility = "hidden";

        if (projects[i] == emptyProject)
        {
            entry.style.height = "0px";
        }
        else
        {
            fillEntry(entry, projects[i]);

            const entryThumbnail = entry.getElementsByClassName("thumbnail")[0] as HTMLImageElement;
            entryThumbnail.onload = async function()
            {
                entryThumbnail.onload = null;

                await projectEntryIntroAnimationWaiter.next();
                entry.style.visibility = "visible";
                growIn(entry);
            };
        }

        projectContainer.appendChild(entry);
    }
}

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

function fillEntry(entry : HTMLAnchorElement, data: ProjectEntryData)
{
    const titleLabel = entry.getElementsByClassName("title")[0] as HTMLSpanElement;
    titleLabel.textContent = data.title;

    const categoryLabel = entry.getElementsByClassName("category")[0] as HTMLSpanElement;
    categoryLabel.textContent = data.category;

    const technologyLabel = entry.getElementsByClassName("technologies")[0] as HTMLSpanElement;
    technologyLabel.textContent = data.technologies;

    const thumbnail = entry.getElementsByClassName("thumbnail")[0] as HTMLImageElement;
    thumbnail.src = data.thumbnail;

    entry.href = data.url;

    // Adding hover effect

    titleLabel.hidden = true;
    categoryLabel.hidden = true;
    technologyLabel.hidden = true;

    entry.onmouseover = function()
    {
        titleLabel.hidden = false;
        categoryLabel.hidden = false;
        technologyLabel.hidden = false;
    };

    entry.onmouseleave = function()
    {
        titleLabel.hidden = true;
        categoryLabel.hidden = true;
        technologyLabel.hidden = true;
    }
}

function createEntry() : HTMLAnchorElement
{
    let newNode : any = projectEntryTemplate.content.cloneNode(true);
    return newNode.firstElementChild;
}

async function setSubtitle(text : string, speed : number)
{
    for (let i = 1; i <= text.length; i++)
    {
        introSubtitle.textContent = text.substr(0, i) + "_";
        await sleep(speed);
    }
}
 
function sleep(ms : number)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
 
 async function startChangingSubtitle()
 {
    const delay = 35;

     while (true)
     {
         await setSubtitle("I'm a Software Developer", delay);
         await sleep(7000);
         await setSubtitle("I specialize in C# and .NET", delay);
         await sleep(7000);
     }
 }

interface ProjectEntryData
{
    title : string;
    category : string;
    technologies: string;
    thumbnail: string;
    url: string;
}
