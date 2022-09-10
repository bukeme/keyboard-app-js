const display = document.querySelector('.display textarea')
const keys = document.querySelectorAll('.keys')
const input = document.querySelectorAll('input')

// keys.forEach(function(element) {
// 	element.addEventListener('click', function(e) {
// 		console.log(e)
// 		let inputVal = e.path[0].value.toLowerCase()
// 		display.value += inputVal
// 	})
// })

input.forEach(function(key) {
	key.addEventListener('click', function() {
		display.value += this.value
	})
})