let params = new URL(location.href).searchParams

let query = params.get("query")
searchbar.value = query ??= " "
query.toLowerCase()
let tags = JSON.parse(params.get("tags"))
tags ??= [] 

let alltags = []
let tagbox = document.getElementById("tags")
fetch("tags.json")
  .then(file => file.json())
  .then(data => alltags = data)
  .then(() => {
    alltags.forEach((t) => {
        let tag = document.createElement("a")
        tag.innerText = t
        tagbox.appendChild(tag)

        if(tags.includes(tag.innerText.toLowerCase())) {
            tag.style.background = "var(--background)"
        }
        tag.addEventListener("click", () => {
            if(tags.includes(tag.innerText.toLowerCase())) {
                tags = tags.filter(tg => tg !== tag.innerText.toLowerCase())
                let url = new URL(window.location)
                url.searchParams.set("tags",JSON.stringify(tags))
                window.history.replaceState(null, '', url)
                location.reload()
            } else {
                tags.push(tag.innerText.toLowerCase())
                let url = new URL(window.location)
                url.searchParams.set("tags",JSON.stringify(tags))
                window.history.replaceState(null, '', url)
                location.reload()
            }
            
        })
    })
  })

async function showResult(result) {
    let project = new Project(result)
    await project.loadMetadata()
    document.getElementById("results").appendChild(project.outer)
}

async function searchRepos() {
    for(let i in repos) {
        let repo = repos[i]
        try {
            await fetch("https://cdn.jsdelivr.net/gh/GreyBeard42/"+repo+"@main/metadata.json")
                .then(file => file.json())
                .then(data => {
                    let taggood = true
                    tags.forEach((tag) => {
                        if(!JSON.stringify(data).includes(tag)) {
                            taggood = false
                        }
                    })
                    data.tags.forEach((tag) => {
                        if(!alltags.includes(tag)) console.warn(tag+" tag is not regestered in tags.json")
                    })
                    
                    if ((JSON.stringify(data).toLowerCase().includes(query) || query == "test") && taggood) {
                        results.push(repo)
                        showResult(repo)
                    }
                })
        } catch {
            console.warn("Failed to load "+repo)
        }
        innerbar.style.width = (i/(repos.length-1))*100+"%"
    }

    document.getElementById("querybox").innerText = `${results.length} results for '${query}'`
    if(query == "test") {
        document.getElementById("querybox").innerText = "'Test?' You really think this garbge search engine doesn't work? Here's everything:"
    }

    loadbar.remove()
}

let loadbar = document.createElement("div")
loadbar.classList.add("loadbar")
let innerbar = document.createElement("div")
loadbar.appendChild(innerbar)
document.getElementById("querybox").after(loadbar)

let results = []
let repos
fetch("repos.json")
  .then(file => file.json())
  .then(data => repos = data)
  .then(() => {
    searchRepos()
  })