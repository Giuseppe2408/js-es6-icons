const arrayIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

console.log();
// container
const grid = document.getElementById('grid');
	
// creazione dei box
for (let i = 0; i < arrayIcons.length; i++) {
	const box = document.createElement('div');
	box.classList.add('box');
	
	const icona = document.createElement('i');
	icona.classList.add(arrayIcons[i].family);
	icona.classList.add(arrayIcons[i].prefix + arrayIcons[i].name);
	let span = document.createElement('span');
	span = arrayIcons[i].name


	grid.append(box);
	box.append(icona);
	box.append(span);

	if (arrayIcons[i].type === 'animal') {
		icona.style.color = arrayIcons[i].color;
	}

	else if (arrayIcons[i].type === 'vegetable') {
		icona.style.color = arrayIcons[i].color;
	}

	else {
		icona.style.color = arrayIcons[i].color;
	}

}
const selezione = document.getElementById('selezione').value;

switch (selezione) {
	case 0:
	default:
		
	break;

	
	case 1:
	for (let i = 0; i < arrayIcons.length; i++) {
		if (arrayIcons[i].type === 'vegetable' || arrayIcons[i].type === 'user') {
			box.style.display = 'none';
		}
	}
	break;
}
	