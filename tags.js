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

        tag.addEventListener("click", () => {
            let url = new URL("explore",window.location.origin)
            url.searchParams.set("tags", JSON.stringify([t]))
            window.location.href = url.toString()
        })
    })

    let side = document.getElementById("side")
    let link = document.createElement("a")
    link.href= "photography"
    link.innerText = "Photography"
    link.style="margin-top: 10px;"
    side.appendChild(link)
    link = document.createElement("a")
    link.href= "art"
    link.innerText = "Pixel Art"
    side.appendChild(link)
  })