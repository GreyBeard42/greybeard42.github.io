let editor, main
let element = document.createElement('p')

function createMain() {
  main = document.createElement('select')
  main.id = 'elements'
  main.style.width = 'max-content'
  main.addEventListener('change', update)
  let elements = [
    {tag: 'h1', name: 'Heading 1'},
    {tag: 'h2', name: 'Heading 2'},
    {tag: 'h3', name: 'Heading 3'},
    {tag: 'h4', name: 'Heading 4'},
    {tag: 'h5', name: 'Heading 5'},
    {tag: 'h6', name: 'Heading 6'},
    {tag: 'p', name: 'Paragraph'},
    {tag: 'a', name: 'Anchor'},
    {tag: 'b', name: 'Bold'},
    {tag: 'em', name: 'Emphasized'},
    {tag: 'input', name: 'Input'},
    {tag: 'textarea', name: 'Textarea'},
    {tag: 'button', name: 'Button'},
    {tag: 'img', name: 'Image'},
    {tag: 'div', name: 'Div'}
  ]
  elements.forEach((e) => {
    let opt = document.createElement('option')
    opt.value = e.tag
    opt.innerText = e.name
    main.appendChild(opt)
  })
  document.getElementById('thing').appendChild(main)
  editor = document.createElement('div')
  editor.style = 'width: max-content;'
  document.getElementById('thing').appendChild(editor)
}

function br(e) {
  e.appendChild(document.createElement('br'))
}

function update() {
  editor.innerHTML = ''
  let opt = main.value
  element.remove()
  element = document.createElement(main.value)
  element.style = 'margin: 3% 0; color: inherit; font-family: initial;'
  element.id = 'element'

  function input(attribute, ph=attribute, isStyle=true, dflt='') {
    let i = document.createElement('input')
    i.type = 'text'
    i.value = dflt
    i.placeholder = ph
    i.addEventListener('input', () => {
      if(isStyle) element.style[attribute] = i.value
      else element[attribute] = i.value
    })
    editor.appendChild(i)
    br(editor)
  }

  function dropdown(attribute, options, norm=options[0], isStyle=true, name=attribute) {
    let label = document.createElement('label')
    label.innerText = name
    label.for = attribute
    label.style = 'margin-right: 0.5em;'
    let main = document.createElement('select')
    main.id = attribute
    main.style.width = 'max-content'
    options.forEach((e) => {
      let opt = document.createElement('option')
      opt.value = e
      opt.innerText = e
      if(e == norm) opt.selected = 'selected'
      main.appendChild(opt)
    })
    main.addEventListener('change', () => {
      if(isStyle) element['style'][attribute] = main.value
      else element[attribute] = main.value
    })
    editor.appendChild(label)
    editor.appendChild(main)
    br(editor)
  }
  
  if(['input', 'textarea'].includes(opt)) {
    element.placeholder = 'Element'
    input('placeholder', 'placeholder', false)
  }
  
  if(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'b', 'em', 'p', 'input', 'textarea', 'button', 'div'].includes(opt)) {
    if(opt != 'div') element.innerText = 'Text'
    else element.style.background = 'blue'

    if(opt == 'a') {
      input('href', 'href', false)
    }

    if(opt != 'input') input('innerText', 'innerText', false)
    else input('value', 'value', false)

    if(opt == 'textarea') dropdown('resize', ['none', 'both', 'horizontal', 'vertical', 'initial', 'inherit'], 'both')

    input('font-family')
    input('fontSize')

    dropdown('text-align', ['left', 'right', 'center', 'justify', 'start', 'end', 'initial', 'inherit'], 'center')
  } else if(opt == 'img') {
    element.src = 'hehe'
    
    input('src', 'src', false)
    
    dropdown('image-rendering', ['auto', 'smooth', 'high-quality', 'crisp-edges', 'pixelated'], 'auto', true, 'img-render')
  }

  input('color')
  if(opt != 'div') input('background')
  else input('background', 'background', true, 'blue')

  input('border')
  
  if(['div', 'textarea'].includes(opt)) input('scrollbar-color', 'scrollbar-color (two colors)')

  dropdown('cursor', ['alias', 'all-scroll', 'auto', 'cell', 'col-resize', 'context-menu', 'copy', 'crosshair', 'default', 'e-resize', 'ew-resize', 'grab', 'grabbing', 'help', 'move', 'n-resize', 'ne-resize', 'nesw-resize', 'no-drop', 'none', 'not-allowed', 'pointer', 'progress', 'row-resize', 's-resize', 'se-resize', 'sw-resize', 'text', 'url', 'w-resize', 'wait', 'zoom-in', 'zoom-out'], 'auto')

  dropdown('user-select', ['all', 'auto', 'none', 'text'], 'all')

  dropdown('display', ['inline', 'block', 'contents', 'flex', 'grid', 'inline-block', 'inline-flex', 'inline-grid', 'inline-table', 'list-item', 'run-in', 'table', 'table-caption', 'table-cell', 'table-column', 'table-row', 'none', 'initial', 'inherit'], 'block')

  dropdown('visibility', ['visible', 'hidden', 'initial', 'inherit'], 'visible')
  
  dropdown('justify-content', ['felx-start', 'flex-end', 'center', 'initial', 'inherit'], 'center', true, 'jstfy-cntnt')

  input('margin')
  if(opt == 'div') {
    input('padding')
    dropdown('overflow', ['visible', 'hidden', 'clip', 'scroll', 'auto', 'initial', 'inherit'], 'visible')
    element.style.padding = '5%'
  }

  input('width')
  input('height')

  input('rotate', 'rotate (ex: 180deg)')
  
  document.getElementById('thing').appendChild(element)
}

createMain()
update()

console.log(element.style)
