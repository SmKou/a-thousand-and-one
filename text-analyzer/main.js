import texts from './text.js'
import analyzer from './analyzer.js'

const ui = {
	txt: 0,
	disp: document.querySelector('main section'),
	ipt: document.querySelector('main input'),
	panel: document.querySelector('main article')
}

let text = texts[ui.txt]
for (let i = 0; i < text.text.length; ++i) {
	const p = document.createElement('p')
	p.append(document.createTextNode(text.text[i]))
	ui.disp.append(p)
}

ui.ipt.addEventListener('change', e => {
	const tokens = e.target.value.split(' ')
})
