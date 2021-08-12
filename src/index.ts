import "./style.css";

const projectEntryTemplate : HTMLTemplateElement = document.getElementById("project-entry-template") as HTMLTemplateElement;
const projectContainer : HTMLTemplateElement = document.getElementById("project-container") as HTMLTemplateElement;

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
        title: "Path Finding Visual",
        thumbnail: "thumbnails/path-finding-visual-thumbnail.png",
        url: "https://quickz.github.io/PathFinding-Visual/"
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
        title: "FreeCodeCamp Projects",
        thumbnail: "thumbnails/freecodecamp-projects-thumbnail.png",
        url: "https://codepen.io/Quickz/full/AXkjJp/"
    },
    emptyProject,
    emptyProject
];

fillProjectContainer();


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

interface ProjectEntryData
{
    title : string;
    thumbnail: string;
    url: string;
}
