let data
fetch("blog.json")
    .then(file => file.json())
    .then(file => {data = file})
    .then(() => {
        let view = data.length-1
        let params = new URLSearchParams(window.location.search)
        if(params.get("n")) view = JSON.parse(params.get("n"))

        if(view>=data.length-1) next.style.display = 'none'
        if(view<=0) prev.style.display = 'none'

        next.addEventListener("click", () => {location.href = location.origin+location.pathname+"?n="+(JSON.parse(view)+1)})
        prev.addEventListener("click", () => {location.href = location.origin+location.pathname+"?n="+(JSON.parse(view)-1)})

        date.innerText = "No. "+(view+1)+" - "+data[view].date

        let left = document.createElement('div')
        left.innerHTML =  data[view].data[0]
        left.classList.add('column')
        left.style.flex = "2"
        columns.appendChild(left)

        let middle = document.createElement('div')
        middle.innerHTML =  data[view].data[1]
        middle.classList.add('column')
        middle.style.flex = "4"
        columns.appendChild(middle)

        let right = document.createElement('div')
        right.innerHTML =  data[view].data[2]
        right.classList.add('column')
        right.style.flex = "2"
        columns.appendChild(right)
    })