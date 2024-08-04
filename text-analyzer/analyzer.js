const word = (text) => text.split(/[ .?!:;,'"\n]/)

const sentence = (text) => text.split(/\n+/).map(p => p.split(/[?!.]+/))

const paragraph = (text) => text.split(/\n+/)

const fst = (text, unit, ctx) => {
	const ctx_txt = (() => {
		switch (ctx) {
			case 'wrd':
				return word(text)
			case 'stc':
				return sentence(text)
			case 'pgh':
				return paragraph(text)
			default:
				return text
		}
	})()

	switch (unit) {
		case 'ltr':
			return ctx_txt[0][0]
		case 'wrd':
			return ctx_txt[0]
	}
}

export default {
	word,
	sentence,
	paragraph
}
