async function loadScripts() {
    if (true) {
        console.log("loading p5")
        await script("https://cdn.jsdelivr.net/npm/p5@1.11.3/lib/p5.js");
        console.log("done loading p5");
    }
    if (true) {
        console.log("loading p5 sound");
        await script("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/addons/p5.sound.js");
        console.log("done loading p5 sound");
    }
    
    let data = {};
    data.scripts = ["starstrike"];
    for (let s of data.scripts) {
        if (!s.includes("/")) s = s + "@main/script.js";
        if (!s.includes("https://")) s = `https://cdn.jsdelivr.net/gh/GreyBeard42/${s}`;
        console.log("loading script");
        await script(s);
        console.log("done loading script");
    }
}

function script(src) {
    return new Promise((resolve, reject) => {
        console.log(`lets make ${src}`);
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            console.log(`Script ${src} loaded`);
            resolve(`Script ${src} loaded`);
        };
        script.onerror = () => reject(new Error(`Script ${src} failed to load`));
    });
}

loadScripts();
