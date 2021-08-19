/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {

eval("\r\n// ------------------------\r\n// --- Global constants ---\r\n// ------------------------\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }\r\nvar __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n};\r\nvar _a;\r\nconst projectEntryTemplate = document.getElementById(\"project-entry-template\");\r\nconst projectContainer = document.getElementById(\"project-container\");\r\nconst introSubtitle = (_a = document.getElementById(\"intro-container\")) === null || _a === void 0 ? void 0 : _a.getElementsByTagName(\"p\")[0];\r\nconst backgroundVideo = document.getElementById(\"background-video\");\r\nconst projectEntryIntroAnimationWaiter = cooldownPool(10);\r\nconst emptyProject = {\r\n    title: \"\",\r\n    thumbnail: \"\",\r\n    url: \"\"\r\n};\r\nconst projects = [\r\n    {\r\n        title: \"Rezrog\",\r\n        thumbnail: \"thumbnails/rezrog-thumbnail.png\",\r\n        url: \"https://store.steampowered.com/app/548370/Rezrog/\"\r\n    },\r\n    {\r\n        title: \"Seacurity Breach\",\r\n        thumbnail: \"thumbnails/seacurity-breach-thumbnail.png\",\r\n        url: \"https://store.steampowered.com/app/906660/Seacurity_Breach/\"\r\n    },\r\n    {\r\n        title: \"Swipe Escape\",\r\n        thumbnail: \"thumbnails/swipe-escape-thumbnail.png\",\r\n        url: \"https://play.google.com/store/apps/details?id=com.vaporwaveconfidential.swipeescape\",\r\n    },\r\n    {\r\n        title: \"ParProf\",\r\n        thumbnail: \"thumbnails/parprof-thumbnail.png\",\r\n        url: \"https://parprof.lv/\"\r\n    },\r\n    {\r\n        title: \"Unity Assets\",\r\n        thumbnail: \"thumbnails/unity-assets-thumbnail.png\",\r\n        url: \"https://assetstore.unity.com/publishers/41656\"\r\n    },\r\n    {\r\n        title: \"Tetris\",\r\n        thumbnail: \"thumbnails/tetris-thumbnail.png\",\r\n        url: \"https://quickz.github.io/Tetris/\"\r\n    },\r\n    {\r\n        title: \"FreeCodeCamp Legacy Front End certificate\",\r\n        thumbnail: \"thumbnails/freecodecamp-thumbnail.png\",\r\n        url: \"https://www.freecodecamp.org/certification/quickz/legacy-front-end\"\r\n    },\r\n    {\r\n        title: \"Memory Card Game\",\r\n        thumbnail: \"thumbnails/memory-card-game-thumbnail.png\",\r\n        url: \"https://quickz.github.io/Memory-Card-Game/\"\r\n    },\r\n    {\r\n        title: \"SWF Game File Extractor\",\r\n        thumbnail: \"thumbnails/swf-game-file-extractor-thumbnail.png\",\r\n        url: \"https://github.com/Quickz/swf-game-file-extractor\"\r\n    },\r\n    {\r\n        title: \"Path Finding Visual\",\r\n        thumbnail: \"thumbnails/path-finding-visual-thumbnail.png\",\r\n        url: \"https://quickz.github.io/PathFinding-Visual/\"\r\n    },\r\n    {\r\n        title: \"Visual Studio video series\",\r\n        thumbnail: \"thumbnails/visual-studio-tips-thumbnail.png\",\r\n        url: \"https://www.youtube.com/watch?v=EmLgSxfhoxI&list=PLz-QWJhJz3MHYx0oO-9Qmyw-EGGRK_Cw6&ab_channel=Quickz\"\r\n    },\r\n    emptyProject\r\n];\r\n// ------------------------\r\n// -------- Global --------\r\n// ------------------------\r\nbackgroundVideo.style.filter = \"opacity(0%)\";\r\nlet backgroundVideoStarted = false;\r\nbackgroundVideo.oncanplaythrough = function () {\r\n    if (backgroundVideoStarted)\r\n        return;\r\n    backgroundVideoStarted = true;\r\n    fadeIn(backgroundVideo, 500);\r\n};\r\nfillProjectContainer();\r\nstartChangingSubtitle();\r\n// -------------------------\r\n// -------- Methods --------\r\n// -------------------------\r\nfunction fadeIn(element, durationInMiliseconds) {\r\n    const framesPerSecond = 50;\r\n    const frames = durationInMiliseconds / 1000 * framesPerSecond;\r\n    const singleFrameDuration = durationInMiliseconds / frames;\r\n    const opacityPerFrame = 1 / frames;\r\n    // Node:\r\n    // Using filter opacity instead of opacity\r\n    // due to a weird issue where the last assignment\r\n    // which set opacity to 1 caused a weird blink\r\n    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {\r\n        let opacity = 0;\r\n        element.style.filter = \"opacity(0%)\";\r\n        while (opacity < 1 - opacityPerFrame) {\r\n            opacity += opacityPerFrame;\r\n            element.style.filter = `opacity(${opacity * 100}%)`;\r\n            yield sleep(singleFrameDuration);\r\n        }\r\n        opacity = 1;\r\n        element.style.filter = `opacity(100%)`;\r\n        resolve(null);\r\n    }));\r\n}\r\nfunction growIn(element) {\r\n    element.classList.add(\"play-grow-in\");\r\n    element.addEventListener(\"animationend\", () => {\r\n        element.classList.remove(\"play-grow-in\");\r\n    });\r\n}\r\nfunction fillProjectContainer() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        for (let i = 0; i < projects.length; i++) {\r\n            const entry = createEntry();\r\n            entry.style.visibility = \"hidden\";\r\n            if (projects[i] == emptyProject) {\r\n                entry.style.visibility = \"hidden\";\r\n                entry.style.height = \"0px\";\r\n            }\r\n            else {\r\n                fillEntry(entry, projects[i]);\r\n            }\r\n            const entryThumbnail = entry.getElementsByClassName(\"thumbnail\")[0];\r\n            entryThumbnail.onload = function () {\r\n                return __awaiter(this, void 0, void 0, function* () {\r\n                    entryThumbnail.onload = null;\r\n                    yield projectEntryIntroAnimationWaiter.next();\r\n                    entry.style.visibility = \"visible\";\r\n                    growIn(entry);\r\n                });\r\n            };\r\n            projectContainer.appendChild(entry);\r\n        }\r\n    });\r\n}\r\n// Acts as a queue of cooldowns.\r\n// If you run 10 things at once\r\n// but wish to ensure a minimum X cooldown\r\n// between all of them, use this method.\r\nfunction cooldownPool(cooldownInMiliseconds) {\r\n    return __asyncGenerator(this, arguments, function* cooldownPool_1() {\r\n        while (true) {\r\n            yield yield __await(null);\r\n            yield __await(sleep(cooldownInMiliseconds));\r\n        }\r\n    });\r\n}\r\nfunction fillEntry(entry, data) {\r\n    const titleLabel = entry.getElementsByClassName(\"title\")[0];\r\n    titleLabel.textContent = data.title;\r\n    entry.href = data.url;\r\n    const thumbnail = entry.getElementsByClassName(\"thumbnail\")[0];\r\n    thumbnail.src = data.thumbnail;\r\n    // Adding hover effect\r\n    titleLabel.hidden = true;\r\n    entry.onmouseover = function () {\r\n        titleLabel.hidden = false;\r\n    };\r\n    entry.onmouseleave = function () {\r\n        titleLabel.hidden = true;\r\n    };\r\n}\r\nfunction createEntry() {\r\n    let newNode = projectEntryTemplate.content.cloneNode(true);\r\n    return newNode.firstElementChild;\r\n}\r\nfunction setSubtitle(text, speed) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        for (let i = 1; i <= text.length; i++) {\r\n            introSubtitle.textContent = text.substr(0, i) + \"_\";\r\n            yield sleep(speed);\r\n        }\r\n    });\r\n}\r\nfunction sleep(ms) {\r\n    return new Promise(resolve => setTimeout(resolve, ms));\r\n}\r\nfunction startChangingSubtitle() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const delay = 35;\r\n        while (true) {\r\n            yield setSubtitle(\"I'm a Software Developer\", delay);\r\n            yield sleep(7000);\r\n            yield setSubtitle(\"I specialize in C# and .NET\", delay);\r\n            yield sleep(7000);\r\n        }\r\n    });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBRUQsU0FBUyxLQUFLLENBQUMsRUFBVztJQUV0QixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFFQSxTQUFlLHFCQUFxQjs7UUFFakMsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWhCLE9BQU8sSUFBSSxFQUNYO1lBQ0ksTUFBTSxXQUFXLENBQUMsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckQsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsTUFBTSxXQUFXLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEQsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckI7SUFDTCxDQUFDO0NBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tIEdsb2JhbCBjb25zdGFudHMgLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgcHJvamVjdEVudHJ5VGVtcGxhdGUgOiBIVE1MVGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWVudHJ5LXRlbXBsYXRlXCIpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbmNvbnN0IHByb2plY3RDb250YWluZXIgOiBIVE1MVGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xyXG5jb25zdCBpbnRyb1N1YnRpdGxlIDogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludHJvLWNvbnRhaW5lclwiKT8uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwXCIpWzBdIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5jb25zdCBiYWNrZ3JvdW5kVmlkZW86IEhUTUxWaWRlb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmQtdmlkZW9cIikgYXMgSFRNTFZpZGVvRWxlbWVudDtcclxuY29uc3QgcHJvamVjdEVudHJ5SW50cm9BbmltYXRpb25XYWl0ZXIgPSBjb29sZG93blBvb2woMTApO1xyXG5cclxuY29uc3QgZW1wdHlQcm9qZWN0IDogUHJvamVjdEVudHJ5RGF0YSA9XHJcbntcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgdGh1bWJuYWlsOiBcIlwiLFxyXG4gICAgdXJsOiBcIlwiXHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0cyA6IFByb2plY3RFbnRyeURhdGFbXSA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJSZXpyb2dcIixcclxuICAgICAgICB0aHVtYm5haWw6IFwidGh1bWJuYWlscy9yZXpyb2ctdGh1bWJuYWlsLnBuZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3N0b3JlLnN0ZWFtcG93ZXJlZC5jb20vYXBwLzU0ODM3MC9SZXpyb2cvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2VhY3VyaXR5IEJyZWFjaFwiLFxyXG4gICAgICAgIHRodW1ibmFpbDogXCJ0aHVtYm5haWxzL3NlYWN1cml0eS1icmVhY2gtdGh1bWJuYWlsLnBuZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3N0b3JlLnN0ZWFtcG93ZXJlZC5jb20vYXBwLzkwNjY2MC9TZWFjdXJpdHlfQnJlYWNoL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlN3aXBlIEVzY2FwZVwiLFxyXG4gICAgICAgIHRodW1ibmFpbDogXCJ0aHVtYm5haWxzL3N3aXBlLWVzY2FwZS10aHVtYm5haWwucG5nXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20udmFwb3J3YXZlY29uZmlkZW50aWFsLnN3aXBlZXNjYXBlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlBhclByb2ZcIixcclxuICAgICAgICB0aHVtYm5haWw6IFwidGh1bWJuYWlscy9wYXJwcm9mLXRodW1ibmFpbC5wbmdcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9wYXJwcm9mLmx2L1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlVuaXR5IEFzc2V0c1wiLFxyXG4gICAgICAgIHRodW1ibmFpbDogXCJ0aHVtYm5haWxzL3VuaXR5LWFzc2V0cy10aHVtYm5haWwucG5nXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vYXNzZXRzdG9yZS51bml0eS5jb20vcHVibGlzaGVycy80MTY1NlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlRldHJpc1wiLFxyXG4gICAgICAgIHRodW1ibmFpbDogXCJ0aHVtYm5haWxzL3RldHJpcy10aHVtYm5haWwucG5nXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vcXVpY2t6LmdpdGh1Yi5pby9UZXRyaXMvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRnJlZUNvZGVDYW1wIExlZ2FjeSBGcm9udCBFbmQgY2VydGlmaWNhdGVcIixcclxuICAgICAgICB0aHVtYm5haWw6IFwidGh1bWJuYWlscy9mcmVlY29kZWNhbXAtdGh1bWJuYWlsLnBuZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3d3dy5mcmVlY29kZWNhbXAub3JnL2NlcnRpZmljYXRpb24vcXVpY2t6L2xlZ2FjeS1mcm9udC1lbmRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJNZW1vcnkgQ2FyZCBHYW1lXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsOiBcInRodW1ibmFpbHMvbWVtb3J5LWNhcmQtZ2FtZS10aHVtYm5haWwucG5nXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vcXVpY2t6LmdpdGh1Yi5pby9NZW1vcnktQ2FyZC1HYW1lL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNXRiBHYW1lIEZpbGUgRXh0cmFjdG9yXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsOiBcInRodW1ibmFpbHMvc3dmLWdhbWUtZmlsZS1leHRyYWN0b3ItdGh1bWJuYWlsLnBuZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vUXVpY2t6L3N3Zi1nYW1lLWZpbGUtZXh0cmFjdG9yXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiUGF0aCBGaW5kaW5nIFZpc3VhbFwiLFxyXG4gICAgICAgIHRodW1ibmFpbDogXCJ0aHVtYm5haWxzL3BhdGgtZmluZGluZy12aXN1YWwtdGh1bWJuYWlsLnBuZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3F1aWNrei5naXRodWIuaW8vUGF0aEZpbmRpbmctVmlzdWFsL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlZpc3VhbCBTdHVkaW8gdmlkZW8gc2VyaWVzXCIsXHJcbiAgICAgICAgdGh1bWJuYWlsOiBcInRodW1ibmFpbHMvdmlzdWFsLXN0dWRpby10aXBzLXRodW1ibmFpbC5wbmdcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1FbUxnU3hmaG94SSZsaXN0PVBMei1RV0poSnozTUhZeDBvTy05UW15dy1FR0dSS19DdzYmYWJfY2hhbm5lbD1RdWlja3pcIlxyXG4gICAgfSxcclxuICAgIGVtcHR5UHJvamVjdFxyXG5dO1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLSBHbG9iYWwgLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5iYWNrZ3JvdW5kVmlkZW8uc3R5bGUuZmlsdGVyID0gXCJvcGFjaXR5KDAlKVwiO1xyXG5cclxubGV0IGJhY2tncm91bmRWaWRlb1N0YXJ0ZWQ9IGZhbHNlO1xyXG5cclxuYmFja2dyb3VuZFZpZGVvLm9uY2FucGxheXRocm91Z2ggPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGlmIChiYWNrZ3JvdW5kVmlkZW9TdGFydGVkKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kVmlkZW9TdGFydGVkID0gdHJ1ZTtcclxuICAgIGZhZGVJbihiYWNrZ3JvdW5kVmlkZW8sIDUwMCk7XHJcbn07XHJcblxyXG5maWxsUHJvamVjdENvbnRhaW5lcigpO1xyXG5zdGFydENoYW5naW5nU3VidGl0bGUoKTtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tIE1ldGhvZHMgLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gZmFkZUluKFxyXG4gICAgZWxlbWVudCA6IEhUTUxFbGVtZW50LFxyXG4gICAgZHVyYXRpb25Jbk1pbGlzZWNvbmRzIDogbnVtYmVyKSA6IFByb21pc2U8dW5rbm93bj5cclxue1xyXG4gICAgY29uc3QgZnJhbWVzUGVyU2Vjb25kID0gNTA7XHJcbiAgICBjb25zdCBmcmFtZXMgPSBkdXJhdGlvbkluTWlsaXNlY29uZHMgLyAxMDAwICogZnJhbWVzUGVyU2Vjb25kO1xyXG4gICAgY29uc3Qgc2luZ2xlRnJhbWVEdXJhdGlvbiA9IGR1cmF0aW9uSW5NaWxpc2Vjb25kcyAvIGZyYW1lcztcclxuICAgIGNvbnN0IG9wYWNpdHlQZXJGcmFtZSA9IDEgLyBmcmFtZXM7XHJcblxyXG4gICAgLy8gTm9kZTpcclxuICAgIC8vIFVzaW5nIGZpbHRlciBvcGFjaXR5IGluc3RlYWQgb2Ygb3BhY2l0eVxyXG4gICAgLy8gZHVlIHRvIGEgd2VpcmQgaXNzdWUgd2hlcmUgdGhlIGxhc3QgYXNzaWdubWVudFxyXG4gICAgLy8gd2hpY2ggc2V0IG9wYWNpdHkgdG8gMSBjYXVzZWQgYSB3ZWlyZCBibGlua1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gXCJvcGFjaXR5KDAlKVwiO1xyXG5cclxuICAgICAgICB3aGlsZSAob3BhY2l0eSA8IDEgLSBvcGFjaXR5UGVyRnJhbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcGFjaXR5ICs9IG9wYWNpdHlQZXJGcmFtZTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSBgb3BhY2l0eSgke29wYWNpdHkgKiAxMDB9JSlgO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoc2luZ2xlRnJhbWVEdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9IGBvcGFjaXR5KDEwMCUpYDtcclxuXHJcbiAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBncm93SW4oZWxlbWVudCA6IEhUTUxFbGVtZW50KVxyXG57XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwbGF5LWdyb3ctaW5cIik7XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+XHJcbiAgICB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicGxheS1ncm93LWluXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZpbGxQcm9qZWN0Q29udGFpbmVyKClcclxue1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBlbnRyeSA9IGNyZWF0ZUVudHJ5KCk7XHJcbiAgICAgICAgZW50cnkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgICAgIGlmIChwcm9qZWN0c1tpXSA9PSBlbXB0eVByb2plY3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlbnRyeS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgZW50cnkuc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmlsbEVudHJ5KGVudHJ5LCBwcm9qZWN0c1tpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbnRyeVRodW1ibmFpbCA9IGVudHJ5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aHVtYm5haWxcIilbMF0gYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICBlbnRyeVRodW1ibmFpbC5vbmxvYWQgPSBhc3luYyBmdW5jdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlbnRyeVRodW1ibmFpbC5vbmxvYWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgcHJvamVjdEVudHJ5SW50cm9BbmltYXRpb25XYWl0ZXIubmV4dCgpO1xyXG4gICAgICAgICAgICBlbnRyeS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgIGdyb3dJbihlbnRyeSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFjdHMgYXMgYSBxdWV1ZSBvZiBjb29sZG93bnMuXHJcbi8vIElmIHlvdSBydW4gMTAgdGhpbmdzIGF0IG9uY2VcclxuLy8gYnV0IHdpc2ggdG8gZW5zdXJlIGEgbWluaW11bSBYIGNvb2xkb3duXHJcbi8vIGJldHdlZW4gYWxsIG9mIHRoZW0sIHVzZSB0aGlzIG1ldGhvZC5cclxuYXN5bmMgZnVuY3Rpb24qIGNvb2xkb3duUG9vbChjb29sZG93bkluTWlsaXNlY29uZHMgOiBudW1iZXIpXHJcbntcclxuICAgIHdoaWxlICh0cnVlKVxyXG4gICAge1xyXG4gICAgICAgIHlpZWxkIG51bGw7XHJcbiAgICAgICAgYXdhaXQgc2xlZXAoY29vbGRvd25Jbk1pbGlzZWNvbmRzKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbEVudHJ5KGVudHJ5IDogSFRNTEFuY2hvckVsZW1lbnQsIGRhdGE6IFByb2plY3RFbnRyeURhdGEpXHJcbntcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBlbnRyeS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGl0bGVcIilbMF0gYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IGRhdGEudGl0bGU7XHJcbiAgICBlbnRyeS5ocmVmID0gZGF0YS51cmw7XHJcblxyXG4gICAgY29uc3QgdGh1bWJuYWlsID0gZW50cnkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRodW1ibmFpbFwiKVswXSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgdGh1bWJuYWlsLnNyYyA9IGRhdGEudGh1bWJuYWlsO1xyXG5cclxuICAgIC8vIEFkZGluZyBob3ZlciBlZmZlY3RcclxuXHJcbiAgICB0aXRsZUxhYmVsLmhpZGRlbiA9IHRydWU7XHJcblxyXG4gICAgZW50cnkub25tb3VzZW92ZXIgPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGVMYWJlbC5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgZW50cnkub25tb3VzZWxlYXZlID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlTGFiZWwuaGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRW50cnkoKSA6IEhUTUxBbmNob3JFbGVtZW50XHJcbntcclxuICAgIGxldCBuZXdOb2RlIDogYW55ID0gcHJvamVjdEVudHJ5VGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICByZXR1cm4gbmV3Tm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0U3VidGl0bGUodGV4dCA6IHN0cmluZywgc3BlZWQgOiBudW1iZXIpXHJcbntcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRleHQubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgaW50cm9TdWJ0aXRsZS50ZXh0Q29udGVudCA9IHRleHQuc3Vic3RyKDAsIGkpICsgXCJfXCI7XHJcbiAgICAgICAgYXdhaXQgc2xlZXAoc3BlZWQpO1xyXG4gICAgfVxyXG59XHJcbiBcclxuZnVuY3Rpb24gc2xlZXAobXMgOiBudW1iZXIpXHJcbntcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxufVxyXG4gXHJcbiBhc3luYyBmdW5jdGlvbiBzdGFydENoYW5naW5nU3VidGl0bGUoKVxyXG4ge1xyXG4gICAgY29uc3QgZGVsYXkgPSAzNTtcclxuXHJcbiAgICAgd2hpbGUgKHRydWUpXHJcbiAgICAge1xyXG4gICAgICAgICBhd2FpdCBzZXRTdWJ0aXRsZShcIkknbSBhIFNvZnR3YXJlIERldmVsb3BlclwiLCBkZWxheSk7XHJcbiAgICAgICAgIGF3YWl0IHNsZWVwKDcwMDApO1xyXG4gICAgICAgICBhd2FpdCBzZXRTdWJ0aXRsZShcIkkgc3BlY2lhbGl6ZSBpbiBDIyBhbmQgLk5FVFwiLCBkZWxheSk7XHJcbiAgICAgICAgIGF3YWl0IHNsZWVwKDcwMDApO1xyXG4gICAgIH1cclxuIH1cclxuXHJcbmludGVyZmFjZSBQcm9qZWN0RW50cnlEYXRhXHJcbntcclxuICAgIHRpdGxlIDogc3RyaW5nO1xyXG4gICAgdGh1bWJuYWlsOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;