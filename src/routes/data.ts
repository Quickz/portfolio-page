interface ProjectEntryData
{
    title : string;
    category : string;
    technologies: string;
    thumbnail: string;
    url: string;
}

export const projects : Array<ProjectEntryData | null> = [
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
    {
        title: "Portfolio",
        thumbnail: "thumbnails/portfolio-thumbnail.png",
        url: "/",
        category: "Personal project",
        technologies: "Svelte, TypeScript, HTML, CSS"
    },
];
