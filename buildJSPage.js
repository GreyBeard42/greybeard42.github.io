var content = document.getElementById('jscontent')
let links = [
  {name: 'Life', link: 'life', image: 'life/preview.png'},
  {name: 'Encrypt 3', link: 'encrypt3', image: 'encrypt3/preview.png'},
  {name: 'FPV Flight Simulator', link: 'flightsim2', image: 'flightsim2/preview.png'},
  {name: 'Understanding Random', link: 'random', image: 'random/preview.png'},
  {name: 'CSS Tester', link: 'cssTest', image: 'cssTest/preview.png'},
  {name: 'Neural Network Pong', link: 'aipong', image: 'aipong/preview.png'},
  {name: 'Clearance', link: 'clearance', image: 'clearance/preview.png'},
  {name: 'Encrypt 2', link: 'encrypt2', image: 'encrypt2/preview.png'},
  {name: 'Bubble Canvas', link: 'bubble', image: 'bubble/preview.png'},
  {name: 'Text Adventure', link: 'canadia', image: 'canadia/preview.png'},
  {name: 'Garden Planner', link: 'garden', image: 'garden/preview.png'},
  {name: 'Stonks Inc. II', link: 'stonks', image: 'stonks/preview.png'},
  {name: 'Starstrike!', link: 'starstrike', image: 'starstrike/preview.png'},
  {name: 'Wheat Game', link: 'wheat', image: 'wheat/preview.png'},
  {name: 'Flight Simulator', link: 'flight_sim', image: 'flight_sim/preview.png'},
  {name: 'Encrypt', link: 'encrypt', image: 'encrypt/preview.png'},
  {name: 'Performance', link: 'performance', image: 'performance/preview.png'},
  {name: 'FAKE Store', link: 'store', image: 'store/preview.png'},
  {name: 'Graph', link: 'graph', image: 'graph/preview.png'}
]
//For specific release date: [MONTHS START ON 0]
//if(new Date().getDate() >= 9 && new Date().getMonth() >= 7 && new Date().getYear() >= 124) links.unshift(new)
for(let i=0; i<links.length; i++) {
  let abox = document.createElement('a')
  abox.href = 'javascript/'+links[i].link
  abox.alt = links[i].name
  let divBox = document.createElement('div')
  divBox.classList.add('jsBox')
  divBox.style.height = '8em'
  let txt = document.createElement('a')
  txt.classList.add('js')
  txt.innerText = links[i].name
  txt.style = 'text-decoration: underline;'
  let img = document.createElement('img')
  img.src = 'javascript/'+links[i].image
  img.alt = 'preview'
  
  divBox.appendChild(txt)
  divBox.appendChild(document.createElement('br'))
  divBox.appendChild(img)
  abox.appendChild(divBox)
  content.appendChild(abox)
}
