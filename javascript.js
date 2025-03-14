var content = document.getElementById('jscontent')
var links
fetch("javascript.json")
  .then(file => file.json())
  .then(data => links = data)
  .then(() => {
    for(let i=0; i<links.length; i++) {
      if(links[i].hidden) continue;
      let abox = document.createElement('a')
      abox.href = 'javascript/'+links[i].link
      if(!links[i].link) abox.href = "js?p="+encodeURIComponent(links[i].name)
      else abox.href = "oldjavascript/"+links[i].link+"/index.html"
      abox.alt = links[i].name
      let divBox = document.createElement('div')
      divBox.classList.add('jsBox')
      divBox.style.height = '8em'
      let txt = document.createElement('a')
      txt.classList.add('js')
      txt.innerText = links[i].name
      txt.style = 'text-decoration: underline;'
      let img = document.createElement('img')
      if(links[i].repo) img.src = 'https://cdn.jsdelivr.net/gh/GreyBeard42/'+links[i].repo+'@main/preview.png'
      else img.src = "oldjavascript/"+links[i].link+"/preview.png"
      img.alt = 'preview'
      
      divBox.appendChild(txt)
      divBox.appendChild(document.createElement('br'))
      divBox.appendChild(img)
      abox.appendChild(divBox)
      content.appendChild(abox)
    }
  })