(()=>{"use strict";var __webpack_modules__={607:function(){eval('\r\n// ------------------------\r\n// --- Global constants ---\r\n// ------------------------\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }\r\nvar __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume("next", value); }\r\n    function reject(value) { resume("throw", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n};\r\nvar _a;\r\nconst projectEntryTemplate = document.getElementById("project-entry-template");\r\nconst projectContainer = document.getElementById("project-container");\r\nconst introSubtitle = (_a = document.getElementById("intro-container")) === null || _a === void 0 ? void 0 : _a.getElementsByTagName("p")[0];\r\nconst backgroundVideo = document.getElementById("background-video");\r\nconst projectEntryIntroAnimationWaiter = cooldownPool(10);\r\nconst emptyProject = {\r\n    title: "",\r\n    thumbnail: "",\r\n    url: "",\r\n    category: "",\r\n    technologies: ""\r\n};\r\nconst projects = [\r\n    {\r\n        title: "Rezrog",\r\n        thumbnail: "thumbnails/rezrog-thumbnail.png",\r\n        url: "https://store.steampowered.com/app/548370/Rezrog/",\r\n        category: "Worked on it during a job",\r\n        technologies: "Unity3D, C#, .NET"\r\n    },\r\n    {\r\n        title: "Seacurity Breach",\r\n        thumbnail: "thumbnails/seacurity-breach-thumbnail.png",\r\n        url: "https://store.steampowered.com/app/906660/Seacurity_Breach/",\r\n        category: "Worked on it during a job",\r\n        technologies: "Unity3D, C#, .NET"\r\n    },\r\n    {\r\n        title: "Swipe Escape",\r\n        thumbnail: "thumbnails/swipe-escape-thumbnail.png",\r\n        url: "https://play.google.com/store/apps/details?id=com.vaporwaveconfidential.swipeescape",\r\n        category: "Worked on it during a job",\r\n        technologies: "Unity3D, C#, .NET"\r\n    },\r\n    {\r\n        title: "ParProf",\r\n        thumbnail: "thumbnails/parprof-thumbnail.png",\r\n        url: "https://parprof.lv/",\r\n        category: "Worked on it during a job",\r\n        technologies: "Cocos Creator, TypeScript"\r\n    },\r\n    {\r\n        title: "Unity Assets",\r\n        thumbnail: "thumbnails/unity-assets-thumbnail.png",\r\n        url: "https://assetstore.unity.com/publishers/41656",\r\n        category: "Personal project",\r\n        technologies: "Unity3D, C#, .NET"\r\n    },\r\n    {\r\n        title: "Tetris",\r\n        thumbnail: "thumbnails/tetris-thumbnail.png",\r\n        url: "https://quickz.github.io/Tetris/",\r\n        category: "Personal project",\r\n        technologies: "JavaScript, HTML, CSS"\r\n    },\r\n    {\r\n        title: "FreeCodeCamp Legacy Front End certificate",\r\n        thumbnail: "thumbnails/freecodecamp-thumbnail.png",\r\n        url: "https://www.freecodecamp.org/certification/quickz/legacy-front-end",\r\n        category: "",\r\n        technologies: "JavaScript, HTML, CSS"\r\n    },\r\n    {\r\n        title: "Memory Card Game",\r\n        thumbnail: "thumbnails/memory-card-game-thumbnail.png",\r\n        url: "https://quickz.github.io/Memory-Card-Game/",\r\n        category: "Personal project",\r\n        technologies: "C#, .NET, Blazor"\r\n    },\r\n    {\r\n        title: "SWF Game File Extractor",\r\n        thumbnail: "thumbnails/swf-game-file-extractor-thumbnail.png",\r\n        url: "https://github.com/Quickz/swf-game-file-extractor",\r\n        category: "Personal project",\r\n        technologies: "C#, .NET, WPF"\r\n    },\r\n    {\r\n        title: "Path Finding Visual",\r\n        thumbnail: "thumbnails/path-finding-visual-thumbnail.png",\r\n        url: "https://quickz.github.io/PathFinding-Visual/",\r\n        category: "Personal project",\r\n        technologies: "JavaScript, HTML, CSS"\r\n    },\r\n    {\r\n        title: "Visual Studio video series",\r\n        thumbnail: "thumbnails/visual-studio-tips-thumbnail.png",\r\n        url: "https://www.youtube.com/watch?v=EmLgSxfhoxI&list=PLz-QWJhJz3MHYx0oO-9Qmyw-EGGRK_Cw6&ab_channel=Quickz",\r\n        category: "Personal project",\r\n        technologies: ""\r\n    },\r\n    emptyProject\r\n];\r\n// ------------------------\r\n// -------- Global --------\r\n// ------------------------\r\nbackgroundVideo.style.filter = "opacity(0%)";\r\nlet backgroundVideoStarted = false;\r\nif (backgroundVideo.readyState == 4) {\r\n    backgroundVideoStarted = true;\r\n    fadeIn(backgroundVideo, 500);\r\n}\r\nelse {\r\n    backgroundVideo.oncanplaythrough = function () {\r\n        if (backgroundVideoStarted)\r\n            return;\r\n        backgroundVideoStarted = true;\r\n        fadeIn(backgroundVideo, 500);\r\n    };\r\n}\r\nfillProjectContainer();\r\nstartChangingSubtitle();\r\n// -------------------------\r\n// -------- Methods --------\r\n// -------------------------\r\nfunction fadeIn(element, durationInMiliseconds) {\r\n    const framesPerSecond = 50;\r\n    const frames = durationInMiliseconds / 1000 * framesPerSecond;\r\n    const singleFrameDuration = durationInMiliseconds / frames;\r\n    const opacityPerFrame = 1 / frames;\r\n    // Node:\r\n    // Using filter opacity instead of opacity\r\n    // due to a weird issue where the last assignment\r\n    // which set opacity to 1 caused a weird blink\r\n    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {\r\n        let opacity = 0;\r\n        element.style.filter = "opacity(0%)";\r\n        while (opacity < 1 - opacityPerFrame) {\r\n            opacity += opacityPerFrame;\r\n            element.style.filter = `opacity(${opacity * 100}%)`;\r\n            yield sleep(singleFrameDuration);\r\n        }\r\n        opacity = 1;\r\n        element.style.filter = `opacity(100%)`;\r\n        resolve(null);\r\n    }));\r\n}\r\nfunction growIn(element) {\r\n    element.classList.add("play-grow-in");\r\n    element.addEventListener("animationend", () => {\r\n        element.classList.remove("play-grow-in");\r\n    });\r\n}\r\nfunction fillProjectContainer() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        for (let i = 0; i < projects.length; i++) {\r\n            const entry = createEntry();\r\n            entry.style.visibility = "hidden";\r\n            if (projects[i] == emptyProject) {\r\n                entry.style.height = "0px";\r\n            }\r\n            else {\r\n                fillEntry(entry, projects[i]);\r\n                const entryThumbnail = entry.getElementsByClassName("thumbnail")[0];\r\n                entryThumbnail.onload = function () {\r\n                    return __awaiter(this, void 0, void 0, function* () {\r\n                        entryThumbnail.onload = null;\r\n                        yield projectEntryIntroAnimationWaiter.next();\r\n                        entry.style.visibility = "visible";\r\n                        growIn(entry);\r\n                    });\r\n                };\r\n            }\r\n            projectContainer.appendChild(entry);\r\n        }\r\n    });\r\n}\r\n// Acts as a queue of cooldowns.\r\n// If you run 10 things at once\r\n// but wish to ensure a minimum X cooldown\r\n// between all of them, use this method.\r\nfunction cooldownPool(cooldownInMiliseconds) {\r\n    return __asyncGenerator(this, arguments, function* cooldownPool_1() {\r\n        while (true) {\r\n            yield yield __await(null);\r\n            yield __await(sleep(cooldownInMiliseconds));\r\n        }\r\n    });\r\n}\r\nfunction fillEntry(entry, data) {\r\n    const titleLabel = entry.getElementsByClassName("title")[0];\r\n    titleLabel.textContent = data.title;\r\n    const categoryLabel = entry.getElementsByClassName("category")[0];\r\n    categoryLabel.textContent = data.category;\r\n    const technologyLabel = entry.getElementsByClassName("technologies")[0];\r\n    technologyLabel.textContent = data.technologies;\r\n    const thumbnail = entry.getElementsByClassName("thumbnail")[0];\r\n    thumbnail.src = data.thumbnail;\r\n    entry.href = data.url;\r\n    // Adding hover effect\r\n    titleLabel.hidden = true;\r\n    categoryLabel.hidden = true;\r\n    technologyLabel.hidden = true;\r\n    entry.onmouseover = function () {\r\n        titleLabel.hidden = false;\r\n        categoryLabel.hidden = false;\r\n        technologyLabel.hidden = false;\r\n    };\r\n    entry.onmouseleave = function () {\r\n        titleLabel.hidden = true;\r\n        categoryLabel.hidden = true;\r\n        technologyLabel.hidden = true;\r\n    };\r\n}\r\nfunction createEntry() {\r\n    let newNode = projectEntryTemplate.content.cloneNode(true);\r\n    return newNode.firstElementChild;\r\n}\r\nfunction setSubtitle(text, speed) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        for (let i = 1; i <= text.length; i++) {\r\n            introSubtitle.textContent = text.substr(0, i) + "_";\r\n            yield sleep(speed);\r\n        }\r\n    });\r\n}\r\nfunction sleep(ms) {\r\n    return new Promise(resolve => setTimeout(resolve, ms));\r\n}\r\nfunction startChangingSubtitle() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const delay = 35;\r\n        while (true) {\r\n            yield setSubtitle("I\'m a Software Developer", delay);\r\n            yield sleep(7000);\r\n            yield setSubtitle("I specialize in C# and .NET", delay);\r\n            yield sleep(7000);\r\n        }\r\n    });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDckM7WUFDSSxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNwRCxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7Q0FBQTtBQUVELFNBQVMsS0FBSyxDQUFDLEVBQVc7SUFFdEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBRUEsU0FBZSxxQkFBcUI7O1FBRWpDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixPQUFPLElBQUksRUFDWDtZQUNJLE1BQU0sV0FBVyxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JELE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sV0FBVyxDQUFDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hELE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztDQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LnRzP2ZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLSBHbG9iYWwgY29uc3RhbnRzIC0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IHByb2plY3RFbnRyeVRlbXBsYXRlIDogSFRNTFRlbXBsYXRlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1lbnRyeS10ZW1wbGF0ZVwiKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xyXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyIDogSFRNTFRlbXBsYXRlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1jb250YWluZXJcIikgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcclxuY29uc3QgaW50cm9TdWJ0aXRsZSA6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRyby1jb250YWluZXJcIik/LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicFwiKVswXSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuY29uc3QgYmFja2dyb3VuZFZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLXZpZGVvXCIpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XHJcbmNvbnN0IHByb2plY3RFbnRyeUludHJvQW5pbWF0aW9uV2FpdGVyID0gY29vbGRvd25Qb29sKDEwKTtcclxuXHJcbmNvbnN0IGVtcHR5UHJvamVjdCA6IFByb2plY3RFbnRyeURhdGEgPVxyXG57XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIHRodW1ibmFpbDogXCJcIixcclxuICAgIHVybDogXCJcIixcclxuICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgdGVjaG5vbG9naWVzOiBcIlwiXHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0cyA6IFByb2plY3RFbnRyeURhdGFbXSA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJSZXpyb2dcIixcclxuICAgICAgICB0aHVtYm5haWw6IFwidGh1bWJuYWlscy9yZXpyb2ctdGh1bWJuYWlsLnBuZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3N0b3JlLnN0ZWFtcG93ZXJlZC5jb20vYXBwLzU0ODM3MC9SZXpyb2cvXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiV29ya2VkIG9uIGl0IGR1cmluZyBhIGpvYlwiLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJVbml0eTNELCBDIywgLk5FVFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNlYWN1cml0eSBCcmVhY2hcIixcclxuICAgICAgICB0aHVtYm5haWw6IFwidGh1bWJuYWlscy9zZWFjdXJpdHktYnJlYWNoLXRodW1ibmFpbC5wbmdcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yZS5zdGVhbXBvd2VyZWQuY29tL2FwcC85MDY2NjAvU2VhY3VyaXR5X0JyZWFjaC9cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJXb3JrZWQgb24gaXQgZHVyaW5nIGEgam9iXCIsXHJcbiAgICAgICAgdGVjaG5vbG9naWVzOiBcIlVuaXR5M0QsIEMjLCAuTkVUXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU3dpcGUgRXNjYXBlXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsOiBcInRodW1ibmFpbHMvc3dpcGUtZXNjYXBlLXRodW1ibmFpbC5wbmdcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS52YXBvcndhdmVjb25maWRlbnRpYWwuc3dpcGVlc2NhcGVcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJXb3JrZWQgb24gaXQgZHVyaW5nIGEgam9iXCIsXHJcbiAgICAgICAgdGVjaG5vbG9naWVzOiBcIlVuaXR5M0QsIEMjLCAuTkVUXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiUGFyUHJvZlwiLFxyXG4gICAgICAgIHRodW1ibmFpbDogXCJ0aHVtYm5haWxzL3BhcnByb2YtdGh1bWJuYWlsLnBuZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3BhcnByb2YubHYvXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiV29ya2VkIG9uIGl0IGR1cmluZyBhIGpvYlwiLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJDb2NvcyBDcmVhdG9yLCBUeXBlU2NyaXB0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiVW5pdHkgQXNzZXRzXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsOiBcInRodW1ibmFpbHMvdW5pdHktYXNzZXRzLXRodW1ibmFpbC5wbmdcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hc3NldHN0b3JlLnVuaXR5LmNvbS9wdWJsaXNoZXJzLzQxNjU2XCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiUGVyc29uYWwgcHJvamVjdFwiLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJVbml0eTNELCBDIywgLk5FVFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlRldHJpc1wiLFxyXG4gICAgICAgIHRodW1ibmFpbDogXCJ0aHVtYm5haWxzL3RldHJpcy10aHVtYm5haWwucG5nXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vcXVpY2t6LmdpdGh1Yi5pby9UZXRyaXMvXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiUGVyc29uYWwgcHJvamVjdFwiLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJKYXZhU2NyaXB0LCBIVE1MLCBDU1NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJGcmVlQ29kZUNhbXAgTGVnYWN5IEZyb250IEVuZCBjZXJ0aWZpY2F0ZVwiLFxyXG4gICAgICAgIHRodW1ibmFpbDogXCJ0aHVtYm5haWxzL2ZyZWVjb2RlY2FtcC10aHVtYm5haWwucG5nXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmZyZWVjb2RlY2FtcC5vcmcvY2VydGlmaWNhdGlvbi9xdWlja3ovbGVnYWN5LWZyb250LWVuZFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJKYXZhU2NyaXB0LCBIVE1MLCBDU1NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJNZW1vcnkgQ2FyZCBHYW1lXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsOiBcInRodW1ibmFpbHMvbWVtb3J5LWNhcmQtZ2FtZS10aHVtYm5haWwucG5nXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vcXVpY2t6LmdpdGh1Yi5pby9NZW1vcnktQ2FyZC1HYW1lL1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlBlcnNvbmFsIHByb2plY3RcIixcclxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiQyMsIC5ORVQsIEJsYXpvclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNXRiBHYW1lIEZpbGUgRXh0cmFjdG9yXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsOiBcInRodW1ibmFpbHMvc3dmLWdhbWUtZmlsZS1leHRyYWN0b3ItdGh1bWJuYWlsLnBuZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vUXVpY2t6L3N3Zi1nYW1lLWZpbGUtZXh0cmFjdG9yXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiUGVyc29uYWwgcHJvamVjdFwiLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJDIywgLk5FVCwgV1BGXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiUGF0aCBGaW5kaW5nIFZpc3VhbFwiLFxyXG4gICAgICAgIHRodW1ibmFpbDogXCJ0aHVtYm5haWxzL3BhdGgtZmluZGluZy12aXN1YWwtdGh1bWJuYWlsLnBuZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3F1aWNrei5naXRodWIuaW8vUGF0aEZpbmRpbmctVmlzdWFsL1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlBlcnNvbmFsIHByb2plY3RcIixcclxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiSmF2YVNjcmlwdCwgSFRNTCwgQ1NTXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiVmlzdWFsIFN0dWRpbyB2aWRlbyBzZXJpZXNcIixcclxuICAgICAgICB0aHVtYm5haWw6IFwidGh1bWJuYWlscy92aXN1YWwtc3R1ZGlvLXRpcHMtdGh1bWJuYWlsLnBuZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUVtTGdTeGZob3hJJmxpc3Q9UEx6LVFXSmhKejNNSFl4MG9PLTlRbXl3LUVHR1JLX0N3NiZhYl9jaGFubmVsPVF1aWNrelwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlBlcnNvbmFsIHByb2plY3RcIixcclxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiXCJcclxuICAgIH0sXHJcbiAgICBlbXB0eVByb2plY3RcclxuXTtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0gR2xvYmFsIC0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuYmFja2dyb3VuZFZpZGVvLnN0eWxlLmZpbHRlciA9IFwib3BhY2l0eSgwJSlcIjtcclxuXHJcbmxldCBiYWNrZ3JvdW5kVmlkZW9TdGFydGVkID0gZmFsc2U7XHJcblxyXG5pZiAoYmFja2dyb3VuZFZpZGVvLnJlYWR5U3RhdGUgPT0gNClcclxue1xyXG4gICAgYmFja2dyb3VuZFZpZGVvU3RhcnRlZCA9IHRydWU7XHJcbiAgICBmYWRlSW4oYmFja2dyb3VuZFZpZGVvLCA1MDApO1xyXG59XHJcbmVsc2Vcclxue1xyXG4gICAgYmFja2dyb3VuZFZpZGVvLm9uY2FucGxheXRocm91Z2ggPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGJhY2tncm91bmRWaWRlb1N0YXJ0ZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZFZpZGVvU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgZmFkZUluKGJhY2tncm91bmRWaWRlbywgNTAwKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmZpbGxQcm9qZWN0Q29udGFpbmVyKCk7XHJcbnN0YXJ0Q2hhbmdpbmdTdWJ0aXRsZSgpO1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0gTWV0aG9kcyAtLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBmYWRlSW4oXHJcbiAgICBlbGVtZW50IDogSFRNTEVsZW1lbnQsXHJcbiAgICBkdXJhdGlvbkluTWlsaXNlY29uZHMgOiBudW1iZXIpIDogUHJvbWlzZTx1bmtub3duPlxyXG57XHJcbiAgICBjb25zdCBmcmFtZXNQZXJTZWNvbmQgPSA1MDtcclxuICAgIGNvbnN0IGZyYW1lcyA9IGR1cmF0aW9uSW5NaWxpc2Vjb25kcyAvIDEwMDAgKiBmcmFtZXNQZXJTZWNvbmQ7XHJcbiAgICBjb25zdCBzaW5nbGVGcmFtZUR1cmF0aW9uID0gZHVyYXRpb25Jbk1pbGlzZWNvbmRzIC8gZnJhbWVzO1xyXG4gICAgY29uc3Qgb3BhY2l0eVBlckZyYW1lID0gMSAvIGZyYW1lcztcclxuXHJcbiAgICAvLyBOb2RlOlxyXG4gICAgLy8gVXNpbmcgZmlsdGVyIG9wYWNpdHkgaW5zdGVhZCBvZiBvcGFjaXR5XHJcbiAgICAvLyBkdWUgdG8gYSB3ZWlyZCBpc3N1ZSB3aGVyZSB0aGUgbGFzdCBhc3NpZ25tZW50XHJcbiAgICAvLyB3aGljaCBzZXQgb3BhY2l0eSB0byAxIGNhdXNlZCBhIHdlaXJkIGJsaW5rXHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT5cclxuICAgIHtcclxuICAgICAgICBsZXQgb3BhY2l0eSA9IDA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSBcIm9wYWNpdHkoMCUpXCI7XHJcblxyXG4gICAgICAgIHdoaWxlIChvcGFjaXR5IDwgMSAtIG9wYWNpdHlQZXJGcmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9wYWNpdHkgKz0gb3BhY2l0eVBlckZyYW1lO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9IGBvcGFjaXR5KCR7b3BhY2l0eSAqIDEwMH0lKWA7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBzbGVlcChzaW5nbGVGcmFtZUR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gYG9wYWNpdHkoMTAwJSlgO1xyXG5cclxuICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdyb3dJbihlbGVtZW50IDogSFRNTEVsZW1lbnQpXHJcbntcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBsYXktZ3Jvdy1pblwiKTtcclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT5cclxuICAgIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwbGF5LWdyb3ctaW5cIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmlsbFByb2plY3RDb250YWluZXIoKVxyXG57XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gY3JlYXRlRW50cnkoKTtcclxuICAgICAgICBlbnRyeS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICAgICAgaWYgKHByb2plY3RzW2ldID09IGVtcHR5UHJvamVjdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGVudHJ5LnN0eWxlLmhlaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZpbGxFbnRyeShlbnRyeSwgcHJvamVjdHNbaV0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZW50cnlUaHVtYm5haWwgPSBlbnRyeS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGh1bWJuYWlsXCIpWzBdIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGVudHJ5VGh1bWJuYWlsLm9ubG9hZCA9IGFzeW5jIGZ1bmN0aW9uKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW50cnlUaHVtYm5haWwub25sb2FkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBwcm9qZWN0RW50cnlJbnRyb0FuaW1hdGlvbldhaXRlci5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgICBncm93SW4oZW50cnkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFjdHMgYXMgYSBxdWV1ZSBvZiBjb29sZG93bnMuXHJcbi8vIElmIHlvdSBydW4gMTAgdGhpbmdzIGF0IG9uY2VcclxuLy8gYnV0IHdpc2ggdG8gZW5zdXJlIGEgbWluaW11bSBYIGNvb2xkb3duXHJcbi8vIGJldHdlZW4gYWxsIG9mIHRoZW0sIHVzZSB0aGlzIG1ldGhvZC5cclxuYXN5bmMgZnVuY3Rpb24qIGNvb2xkb3duUG9vbChjb29sZG93bkluTWlsaXNlY29uZHMgOiBudW1iZXIpXHJcbntcclxuICAgIHdoaWxlICh0cnVlKVxyXG4gICAge1xyXG4gICAgICAgIHlpZWxkIG51bGw7XHJcbiAgICAgICAgYXdhaXQgc2xlZXAoY29vbGRvd25Jbk1pbGlzZWNvbmRzKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbEVudHJ5KGVudHJ5IDogSFRNTEFuY2hvckVsZW1lbnQsIGRhdGE6IFByb2plY3RFbnRyeURhdGEpXHJcbntcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBlbnRyeS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGl0bGVcIilbMF0gYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IGRhdGEudGl0bGU7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlMYWJlbCA9IGVudHJ5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXRlZ29yeVwiKVswXSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBjYXRlZ29yeUxhYmVsLnRleHRDb250ZW50ID0gZGF0YS5jYXRlZ29yeTtcclxuXHJcbiAgICBjb25zdCB0ZWNobm9sb2d5TGFiZWwgPSBlbnRyeS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGVjaG5vbG9naWVzXCIpWzBdIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIHRlY2hub2xvZ3lMYWJlbC50ZXh0Q29udGVudCA9IGRhdGEudGVjaG5vbG9naWVzO1xyXG5cclxuICAgIGNvbnN0IHRodW1ibmFpbCA9IGVudHJ5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aHVtYm5haWxcIilbMF0gYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHRodW1ibmFpbC5zcmMgPSBkYXRhLnRodW1ibmFpbDtcclxuXHJcbiAgICBlbnRyeS5ocmVmID0gZGF0YS51cmw7XHJcblxyXG4gICAgLy8gQWRkaW5nIGhvdmVyIGVmZmVjdFxyXG5cclxuICAgIHRpdGxlTGFiZWwuaGlkZGVuID0gdHJ1ZTtcclxuICAgIGNhdGVnb3J5TGFiZWwuaGlkZGVuID0gdHJ1ZTtcclxuICAgIHRlY2hub2xvZ3lMYWJlbC5oaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgIGVudHJ5Lm9ubW91c2VvdmVyID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlTGFiZWwuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0ZWNobm9sb2d5TGFiZWwuaGlkZGVuID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGVudHJ5Lm9ubW91c2VsZWF2ZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICB0aXRsZUxhYmVsLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRlY2hub2xvZ3lMYWJlbC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbnRyeSgpIDogSFRNTEFuY2hvckVsZW1lbnRcclxue1xyXG4gICAgbGV0IG5ld05vZGUgOiBhbnkgPSBwcm9qZWN0RW50cnlUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiBuZXdOb2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXRTdWJ0aXRsZSh0ZXh0IDogc3RyaW5nLCBzcGVlZCA6IG51bWJlcilcclxue1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGV4dC5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBpbnRyb1N1YnRpdGxlLnRleHRDb250ZW50ID0gdGV4dC5zdWJzdHIoMCwgaSkgKyBcIl9cIjtcclxuICAgICAgICBhd2FpdCBzbGVlcChzcGVlZCk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5mdW5jdGlvbiBzbGVlcChtcyA6IG51bWJlcilcclxue1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG59XHJcbiBcclxuIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0Q2hhbmdpbmdTdWJ0aXRsZSgpXHJcbiB7XHJcbiAgICBjb25zdCBkZWxheSA9IDM1O1xyXG5cclxuICAgICB3aGlsZSAodHJ1ZSlcclxuICAgICB7XHJcbiAgICAgICAgIGF3YWl0IHNldFN1YnRpdGxlKFwiSSdtIGEgU29mdHdhcmUgRGV2ZWxvcGVyXCIsIGRlbGF5KTtcclxuICAgICAgICAgYXdhaXQgc2xlZXAoNzAwMCk7XHJcbiAgICAgICAgIGF3YWl0IHNldFN1YnRpdGxlKFwiSSBzcGVjaWFsaXplIGluIEMjIGFuZCAuTkVUXCIsIGRlbGF5KTtcclxuICAgICAgICAgYXdhaXQgc2xlZXAoNzAwMCk7XHJcbiAgICAgfVxyXG4gfVxyXG5cclxuaW50ZXJmYWNlIFByb2plY3RFbnRyeURhdGFcclxue1xyXG4gICAgdGl0bGUgOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeSA6IHN0cmluZztcclxuICAgIHRlY2hub2xvZ2llczogc3RyaW5nO1xyXG4gICAgdGh1bWJuYWlsOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///607\n')}},__webpack_exports__={};__webpack_modules__[607]()})();