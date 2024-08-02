const word = (text) => text.split(/[ .?!:;,'"\n]/)

const sentence = (text) => text.split(/\n+/).map(p => p.split(/[?!.]+/))

const paragraph = (text) => text.split(/\n+/)

const sum = (nums) => {
	if (nums.filter(n => !Boolean(Number(n))).length)
		return { status: false, message: `Error: cannot sum ${nums}.` }
	return nums.reduce((acc, v) => acc + v, 0)
}

const difference = (init, nums) => {
	if (!init || Array.isArray(init))
		return { status: false, message: `Error: cannot subtract ${nums} from ${init}`}
	if (nums.filter(n => !Boolean(Number(n))).length)
		return { status: false, message: `Error: cannot subtract ${nums}` }
	return nums.reduce((acc, v) => acc - v, init)
}

const product = (nums) => {
	if (nums.filter(n => !Boolean(Number(n))).length)
		return { status: false, message: `Error: cannot multiply ${nums}` }
	return nums.reduce((acc, v) => acc * v, 1)
}

const quotient = (init, nums) => {
	if (!init || Array.isArray(init))
		return { status: false, message: `Error: cannot divide ${}`

		}
}

const analyzer = () => {}

export default analyzer
