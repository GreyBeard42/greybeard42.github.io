var content = document.getElementById('jscontent')
let links = [
  {name: 'Breakout', link: 'breakout', repo: 'breakout@main'},
  {name: 'Life', link: 'life', repo: 'life@main'},
  {name: 'Encrypt 3', link: 'encrypt3', repo: 'handCipherEncryption@main'},
  {name: 'FPV Flight Simulator', link: 'flightsim2', repo: 'flightsim2@main'},
  {name: 'Understanding Random', link: 'random'},
  {name: 'CSS Tester', link: 'cssTest', repo: 'cssTester@main'},
  {name: 'Neural Network Pong', link: 'aipong'},
  {name: 'Clearance', link: 'clearance', repo: 'clearance@main'},
  {name: 'Encrypt 2', link: 'encrypt2'},
  {name: 'Bubble Canvas', link: 'bubble'},
  {name: 'Text Adventure', link: 'canadia', repo: 'textadventure@main'},
  {name: 'Garden Planner', link: 'garden'},
  {name: 'Stonks Inc. II', link: 'stonks'},
  {name: 'Starstrike!', link: 'starstrike', repo: 'starstrike@main'},
  {name: 'Wheat Game', link: 'wheat'},
  {name: 'Flight Simulator', link: 'flight_sim', repo: 'flightsim@main'},
  {name: 'Encrypt', link: 'encrypt'},
  {name: 'Performance', link: 'performance'},
  //{name: 'FAKE Store', link: 'store'},
  {name: 'Graph', link: 'graph'}
]
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
  if(links[i].repo) img.src = 'https://cdn.jsdelivr.net/gh/GreyBeard42/'+links[i].repo+'/preview.png'
  else img.src = "javascript/"+links[i].link+"/preview.png"
  img.alt = 'preview'
  
  divBox.appendChild(txt)
  divBox.appendChild(document.createElement('br'))
  divBox.appendChild(img)
  abox.appendChild(divBox)
  content.appendChild(abox)
}
