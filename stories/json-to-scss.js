import fs from 'fs';

// Чтение JSON файла с дизайн-токенами
fs.readFile('./stories/tokens.json', 'utf-8', (err, data) => {
	if (err) throw err;

	// Парсинг JSON
	const tokens = JSON.parse(data);
	let scssContent = '';

	// Функция для создания SCSS переменных из объекта
	const createScssVariables = (key, value) => {
		scssContent += `$${key}: ${value.value};`;
	};
	Object.entries(tokens).forEach(([key, value]) => {
		createScssVariables(key, value);
	});

	// Запись SCSS файла
	fs.writeFile('./stories/tokens.scss', scssContent, (err) => {
		if (err) throw err;
		console.log('SCSS файл с токенами успешно создан.');
	});
});