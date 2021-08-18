const projectEntryTemplate : HTMLTemplateElement = document.getElementById("project-entry-template") as HTMLTemplateElement;
const projectContainer : HTMLTemplateElement = document.getElementById("project-container") as HTMLTemplateElement;
const introSubtitle : HTMLParagraphElement = document.getElementById("intro-container")?.getElementsByTagName("p")[0] as HTMLParagraphElement;

const emptyProject : ProjectEntryData =
{
    title: "",
    thumbnail: "",
    url: ""
};

const projects : ProjectEntryData[] = [
    {
        title: "Rezrog",
        thumbnail: "thumbnails/rezrog-thumbnail.png",
        url: "https://store.steampowered.com/app/548370/Rezrog/"
    },
    {
        title: "Seacurity Breach",
        thumbnail: "thumbnails/seacurity-breach-thumbnail.png",
        url: "https://store.steampowered.com/app/906660/Seacurity_Breach/"
    },
    {
        title: "Swipe Escape",
        thumbnail: "thumbnails/swipe-escape-thumbnail.png",
        url: "https://play.google.com/store/apps/details?id=com.vaporwaveconfidential.swipeescape",
    },
    {
        title: "ParProf",
        thumbnail: "thumbnails/parprof-thumbnail.png",
        url: "https://parprof.lv/"
    },
    {
        title: "Unity Assets",
        thumbnail: "thumbnails/unity-assets-thumbnail.png",
        url: "https://assetstore.unity.com/publishers/41656"
    },
    {
        title: "Tetris",
        thumbnail: "thumbnails/tetris-thumbnail.png",
        url: "https://quickz.github.io/Tetris/"
    },
    {
        title: "FreeCodeCamp Legacy Front End certificate",
        thumbnail: "thumbnails/freecodecamp-thumbnail.png",
        url: "https://www.freecodecamp.org/certification/quickz/legacy-front-end"
    },
    {
        title: "Memory Card Game",
        thumbnail: "thumbnails/memory-card-game-thumbnail.png",
        url: "https://quickz.github.io/Memory-Card-Game/"
    },
    {
        title: "SWF Game File Extractor",
        thumbnail: "thumbnails/swf-game-file-extractor-thumbnail.png",
        url: "https://github.com/Quickz/swf-game-file-extractor"
    },
    {
        title: "Path Finding Visual",
        thumbnail: "thumbnails/path-finding-visual-thumbnail.png",
        url: "https://quickz.github.io/PathFinding-Visual/"
    },
    {
        title: "Visual Studio video series",
        thumbnail: "thumbnails/visual-studio-tips-thumbnail.png",
        url: "https://www.youtube.com/watch?v=EmLgSxfhoxI&list=PLz-QWJhJz3MHYx0oO-9Qmyw-EGGRK_Cw6&ab_channel=Quickz"
    },
    emptyProject
];

fillProjectContainer();
startChangingSubtitle();


function fillProjectContainer()
{
    for (let i = 0; i < projects.length; i++)
    {
        const entry = createEntry();

        if (projects[i] == emptyProject)
        {
            entry.style.visibility = "hidden";
            entry.style.height = "0px";
        }
        else
        {
            fillEntry(entry, projects[i]);
        }

        projectContainer.appendChild(entry);
    }
}

function fillEntry(entry : HTMLAnchorElement, data: ProjectEntryData)
{
    const titleLabel = entry.getElementsByClassName("title")[0] as HTMLSpanElement;
    titleLabel.textContent = data.title;
    entry.href = data.url;

    const thumbnail = entry.getElementsByClassName("thumbnail")[0] as HTMLImageElement;
    thumbnail.src = data.thumbnail;

    // Adding hover effect

    titleLabel.hidden = true;

    entry.onmouseover = function()
    {
        titleLabel.hidden = false;
    };

    entry.onmouseleave = function()
    {
        titleLabel.hidden = true;
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
    thumbnail: string;
    url: string;
}
