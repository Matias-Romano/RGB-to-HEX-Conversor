const dictionary = {
	a: 10,
	b: 11,
	c: 12,
	d: 13,
	e: 14,
	f: 15
}
const convert = (string) => {
	string.toLowerCase();
	let finalString = "";
	if (string.charAt(0) === "#") {
		let tempString = string.slice(1);
		let evens = [];
		let odds = [];
		for (i in tempString) {
			if (i === 0 || i % 2 === 0) {
				evens.push(tempString.charAt(i));
			} else {
				odds.push(tempString.charAt(i));
			}
		}
		for (item in odds) {
			if (isNaN(odds[item])) {
				for(char in diccionario) {
					if(char === odds[item]) {
						odds[item] = diccionario[char];
						break;
					}
				}
			} else {
				odds[item] = odds[item]*1;
			}
		}
		for (item in evens) {
			if (isNaN(evens[item])) {
				for(char in diccionario) {
					if(char === evens[item]) {
						evens[item] = diccionario[char]*16;
						break;
					}
				}
			} else {
				evens[item] = evens[item]*16;
			}
		}
		for (let i = 0; i < 3; i++) {
			finalString += evens[i] + odds[i] + ",";
		}
		finalString = finalString.slice(0, -1);
	} else {
		let colorsArray = string.split(",");
		for(color of colorsArray) {
			let color16 = Math.floor(color/16);
			if(color % 16 === 0) {
				if(color16 > 9) {
					for(char in diccionario) {
						if(color16 === diccionario[char]) {
							color16 = char.toString();
							break;
						}
					}
				}
				finalString += color16 + "0";
			} else {
				if(color16 > 9) {
					for(char in diccionario) {
						if(color16 === diccionario[char]) {
							color16 = char.toString();
							break;
						}
					}
				}
				let resto = color % 16;
				if(resto > 9) {
					for(char in diccionario) {
						if(resto === diccionario[char]) {
							resto = char.toString();
							break;
						}
					}
				}
				finalString += color16 + resto;
			}
		}
	}
	return finalString;
}