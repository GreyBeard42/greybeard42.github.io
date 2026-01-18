class Project {
    constructor(repo) {
        this.repo = repo
        this.image = "https://cdn.jsdelivr.net/gh/GreyBeard42/"+repo+"@main/preview.png"
        this.gif = "https://cdn.jsdelivr.net/gh/GreyBeard42/"+repo+"@main/preview.gif"
    }
    async loadMetadata() {
        let metadata
        await fetch("https://cdn.jsdelivr.net/gh/GreyBeard42/"+this.repo+"@main/metadata.json")
            .then(file => file.json())
            .then(data => metadata=data)
        
        this.metadata = metadata
        this.build()
    }
    build() {
        this.outer = document.createElement("a")
        this.outer.href = "p?p="+this.repo
        this.outer.classList.add("project")
        let imageouter = document.createElement("div")
        imageouter.classList.add("projectimageouter")
        let image = document.createElement("div")
        image.style.backgroundImage = `url(${this.image})`
        image.loading = "lazy"
        image.classList.add("projectimage")
        imageouter.appendChild(image)
        let gif = document.createElement("div")
        gif.classList.add("projectimage")
        gif.classList.add("gif-overlay")
        gif.style.backgroundImage = `url(${this.gif})`
        imageouter.appendChild(gif)
        this.outer.appendChild(imageouter)

        let title = document.createElement("p")
        title.innerText = this.metadata.title
        this.outer.appendChild(title)
        let desc = document.createElement("p")
        desc.innerHTML = this.metadata.desc
        desc.style = "font-size: 15px; color: var(--text); margin-bottom: 3px;"
        this.outer.appendChild(desc)
    }
}