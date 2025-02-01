var content = document.getElementById('artContent')
let art

fetch("art.json")
  .then(file => file.json())
  .then(data => art = data)
  .then(() => {
    let column1 = document.createElement('div')
    column1.classList.add('column')
    let column2 = document.createElement('div')
    column2.classList.add('column')
    let column3 = document.createElement('div')
    column3.classList.add('column')
    let columns = []
    columns.push(column1)
    columns.push(column2)
    columns.push(column3)

    let i = 0
    art.forEach((e) => {
      if(e.alt != '') {
        let image = document.createElement('img')
        image.src = 'images/art/'+e.image
        image.alt = e.alt
        image.id = e.image
        columns[i%3].appendChild(image)
      }
      i++
    })

    let row = document.createElement('div')
    row.classList.add('row')
    row.appendChild(columns[0])
    row.appendChild(columns[1])
    row.appendChild(columns[2])

    content.appendChild(row)
  })