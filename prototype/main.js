import './style.css'

const ui = {
	nar: document.querySelector('main section'),
	cal: document.querySelector('aside .calendar'),
	info: document.querySelector('aside .information')
}

const data = {}

const storage = {
	load: () => {},
	get: (key) => {
		const value = localStorage.getItem(key)
	},
	set: (key, value) => {
		const res = localStorage.setItem(key, value)
	},
	rm: (key) => {
		const value = localStorage.removeItem(key)
	},

}
