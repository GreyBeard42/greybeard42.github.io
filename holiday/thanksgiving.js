let score = 0
let fullness = 0
let time = 20

let foods = ["thanksg/turkey.png", "thanksg/salad.png", "thanksg/pie.png"]
let options = [f1, f2, f3]

let pigImages = ["thanksg/pig_0.png","thanksg/pig_1.png","thanksg/pig_2.png","thanksg/pig_1.png"]
let frame = 0
let munching = false
let munchtime = 0
pig.src = pigImages[0]

setInterval(() => {
    if(!munching && frame==0) {
        frame = 0
        munchtime = 0
    } else {
        frame = (frame+1)%3
        munchtime++
    }
    pig.src = pigImages[frame]
    if(dead()) pig.src = "thanksg/dead.png"
    if(munchtime > 5) munching = false
}, 100)

setInterval(() => {
    if(!dead()) time--
    s3.innerText = time
    if(dead()) refresh()
}, 1000)

options.forEach((o) => {
    o.addEventListener("click", () => {
        if(!dead()) {
            munching = true
            if(o.src.includes(foods[0])) {
                score += 200
                fullness += 15
                notf("+200   Score")
            } else if(o.src.includes(foods[1])) {
                fullness -= 7
                if(fullness < 0) fullness = 0
                notf("-7   Fullness")
            } else if(o.src.includes(foods[2])) {
                score += 100
                fullness += 10
                notf("+100   Score")
            }
            refresh()
        }
    })
    o.classList.add("option")
})

function refresh() {
    if(!dead()) {
        options.forEach((o) => {
            o.src = foods[Math.floor(Math.random()*3)]
        })
    }
    s1.innerText = score
    s2.innerText = fullness
    if(fullness > 100) s2.innerText = 100
}

function dead() {
    if(time<=0 || fullness>=100) return true
    else return false
}

function notf(txt) {
    let text = document.createElement('p')
    text.innerText = txt
    text.classList.add('fly')
    document.body.appendChild(text)
}

refresh()