let popout = document.createElement("div")
popout.classList.add("popup")

let popup = document.createElement("iframe")
popup.src="popup.html"
popout.appendChild(popup)

let popover = document.createElement("a")
popover.href = "lua"
popout.appendChild(popover)

let pophide = document.createElement("sub")
pophide.innerText = "x"
pophide.style.zIndex = "11"
pophide.style.cursor = "default"
pophide.addEventListener("click", () => {
    popout.remove()
})
popout.appendChild(pophide)

document.body.appendChild(popout)