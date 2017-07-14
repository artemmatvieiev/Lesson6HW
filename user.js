function Worker(firstName, lastName, password) {
    this.firstName = firstName
    this.lastName = lastName
    this.password = password
		
		this.rest = function () {
			for (let i in ac) {
				if(ac[i].temp) {
					ac[i].temp += parseInt(40*Math.random())
					ac[i].coolant = 100 - ac[i].temp
				}
			}
		}
}

function Block(temp, coolant) {
	this.temp = temp
	this.coolant = coolant
}

function AtomicStation(worker) {
	let temp = 40,
			coolant = 100 - temp

	this.worker = worker
	this.block1 = new Block(temp, coolant)
	this.block2 = new Block(temp, coolant)
	
	this.addBlock = function () {
		this.block3 = new Block(temp, coolant)
		return this.block3
	}
	
	this.showTempBlocks = function () {
		for (let i in ac) {
			if(this[i].temp) {
				console.log("Температура в " + i + ": " + this[i].temp)
				console.log("Охлождающей жидкости в " + i + ": " + this[i].coolant)
			}
		}
	}
	
	this.addCoolant = function (block) {
			ac[block].coolant += 20
			ac[block].temp -= 20
	}
}

const ac = new AtomicStation(new Worker("Artem", "Matveev", "1234"))
console.log(ac.showTempBlocks())




