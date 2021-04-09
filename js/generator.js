function generate() {
	
	let races = ["европеоид", "негроид", "азиат", "метис", "ангел", "демон", "джин", "пришелец", "орк", "вампир", "фея"];
	let eyes_colors = ["серый", "красный", "янтарный", "золотой", "лаймовый", "мятный", "голубой", "синий", "фиолетовый", "розовый", "карий", "черный", "гетерохромия (красный + синий)", "гетерохромия (розовый + голубой)", "гетерохромия (зеленый + голубой)", "гетерохромия (серый + голубой)", "гетерохромия (розовый + зеленый)", "гетерохромия (золотой + голубой)", "гетерохромия (карий + голубой)"];
	let hairstyles = ["без волос", "очень короткие волосы", "короткие волосы", "короткое афро", "каре", "каре с челкой", "волосы средней длины", "волосы средней длины с челкой", "афро средней длины", "длинные волосы", "длинные волосы с челкой", "длинное афро", "косы", "хвостики", "пучки", "косички от лица", "конский хвост", "пучок", "дреды", "афро косы"];
	let hair_colors = ["белый", "светло-серый", "серый", "черный", "холодный блонд", "пшеничный блонд", "светло-русый", "русый", "каштановый", "клубничный блонд", "нежно-розовый", "персиковый", "красный", "бордовый", "светло-рыжий", "рыжий", "темно-рыжий", "светло-желтый", "желтый", "салатовый", "зеленый", "болотный", "светло-голубой", "голубой", "темно-бирюзовый", "изумрудный", "светло-синий", "синий", "темно-синий", "лавандовый", "фиолетовый", "темно-фиолетовый", "светло-розовый", "фуксия", "баклажановый", "нет"];
	let clothes_style = ["нижнее белье", "кэжуал", "преппи", "вечернее платье в пол", "спортивный костюм", "свит-лолита", "готик-лолита", "первобытный", "пижама", "бальное платье", "слитный купальник", "бикини", "романтичный", "минимализм", "свадебное платье", "гранж", "классический", "коктейльное платье"];
	let temperaments = ["холерик", "сангвиник", "флегматик", "меланхолик"];
	let features = ["нет", "веснушки", "родинки", "шрам", "витилиго"];
	let names_en = ["Алана", "Алекс", "Александра", "Амели", "Андреа", "Анжелина", "Альма", "Астрид", "Ава", "Агнес", "Аделаида", "Айрис", "Аманда", "Анастейша", "Ариэль", "Ариана", "Арья", "Агата", "Аврора", "Беверли", "Бекка", "Бетти", "Бренда", "Бритни", "Брук", "Белла", "Биатрикс", "Биатрисса", "Брианна", "Барбара", "Бриджит", "Вивьен", "Вайолет", "Вероника", "Ванесса", "Венера", "Валери", "Венди", "Виктория", "Гарнет", "Гвен", "Глория", "Галатея", "Грейс", "Дарси", "Дженнис", "Дженифер", "Джерри", "Джессика", "Джина", "Джоан", "Джоди", "Джорджия", "Джордан", "Делайла", "Доминика", "Дестини", "Дорис", "Долорес", "Джуди", "Даниэль", "Дебра", "Джулиет", "Джейн", "Джилл", "Джулия", "Джун", "Дороти", "Ева", "Евгения", "Жаклин", "Жаннет", "Жозефина", "Изабелла", "Иви", "Ида", "Ирма", "Ирэн", "Кэролайн", "Кэнди", "Кэндис", "Кэт", "Кэтлин", "Кэтрин", "Кейт", "Келли", "Кендра", "Кимберли", "Клэр", "Кэмерон", "Клара", "Кларисса", "Клео", "Калисто", "Катарина", "Кессиди", "Камила", "Кассандра", "Лара", "Лаура", "Леа", "Лесли", "Ли", "Лиза", "Лилиан", "Лэрри", "Лэсси", "Лиззи", "Лиз", "Лолита", "Лола", "Лейла", "Лидия", "Лиллиан", "Линда", "Лойс", "Люси", "Мэрил", "Марта", "Меган", "Мерилин", "Миранда", "Мэг", "Мэддисон", "Магнолия", "Мэри", "Мэриэнн", "Молли", "Мисти", "Мадлен", "Маргарет", "Мия", "Моника", "Мэгги", "Мэй", "Микки", "Майки", "Наоми", "Натали", "Николь", "Нора", "Норма", "Нэнси", "Одри", "Опера", "Оливия", "Ола", "Октавия", "Памелла", "Патрисия", "Пегги", "Пенелопа", "Полли", "Поппи", "Пейдж", "Присцилла", "Рикки", "Рита", "Роза", "Рокси", "Розмари", "Рэйчел", "Роксана", "Рори", "Ребекка", "Ренесме", "Реджина", "Салли", "Саманта", "Сэнди", "Сара", "Стефани", "Сью", "Сьюзен", "Селестия", "Сабрина", "Стелла", "Стефания", "Софи", "Скарлет", "Теа", "Терра", "Тина", "Тиффани", "Тереза", "Трейси", "Урсула", "Флоренс", "Флора", "Фиона", "Ханна", "Хейли", "Холли", "Хелен", "Хилари", "Хизер", "Хлоя", "Челси", "Честити", "Шерил", "Шарлотта", "Шеррон", "Шерри", "Шер", "Шелли", "Ширли", "Эйприл", "Эмили", "Элизабет", "Эрнесса", "Эвелин", "Эклипса", "Эми", "Эбигейл", "Элис", "Энн", "Элеонора", "Эстер", "Эшли", "Эмма"];
	let names_jp = ["Ёшико", "Ёмико", "Ётсуха", "Азуми", "Азами", "Айка", "Айко", "Ай", "Аяно", "Аками", "Аки", "Акико", "Акира", "Амая", "Аматерасу", "Аои", "Аой", "Аризу", "Асами", "Асука", "Асэми", "Атсуко", "Ацуко", "Ая", "Аяка", "Аяко", "Аяме", "Аями", "Адзуса", "Акано", "Изуми", "Изанами", "Иоко", "Иоши", "Иошико", "Йоко", "Казуми", "Каэдэ", "Каяо", "Кёко", "Кей", "Кику", "Кими", "Кимико", "Кин", "Киоко", "Кохаку", "Кумико", "Казу", "Казуко", "Камеио", "Камеко", "Каори", "Каору", "Казуми", "Канаме", "Кагура", "Киса", "Канна", "Каори", "Кокоро", "Канаме", "Каэду", "Кагуя", "Мана", "Мари", "Мегуми", "Мидори", "Мизуки", "Миоко", "Мика", "Мики", "Микки", "Мико", "Мику", "Минами", "Минори", "Минако", "Мира", "Митсуко", "Мицуки", "Михо", "Мичи", "Мичико", "Миюки", "Мияко", "Моммо", "Момо", "Момоко", "Морико", "Мадока", "Мэзуми", "Мэзуко", "Мэй", "Майн", "Мэйко", "Маки", "Манами", "Марико", "Миса", "Мина", "Мисаки", "Минами", "Мион", "Мое", "Нана", "Нанако", "Наоки", "Наоми", "Нацуко", "Нацуки", "Нобуко", "Нори", "Нора", "Норико", "Нао", "Наоко", "Натсуко", "Натсуми", "Нагоми", "Нами", "Нэдзуко", "Отоме", "Ран", "Рейко", "Рей", "Рен", "Рика", "Рико", "Рин", "Риоко", "Рена", "Саки", "Сакура", "Сакэ", "Сетсуко", "Сора", "Сузу", "Сузуми", "Сумико", "Сайери", "Сакера", "Сакико", "Сацуко", "Сэчико", "Сидзука", "Сая", "Сатоко", "Саяка", "Томико", "Томоко", "Тоши", "Тошико", "Тсукико", "Такако", "Такара", "Тамико", "Тихиро", "Томое", "Ури", "Уми", "Умико", "Фуджи", "Фудзико", "Фумико", "Фуко", "Футабе", "Хана", "Ханако", "Харуки", "Харука", "Харуми", "Хидеко", "Хикари", "Хикару", "Хина", "Хината", "Хиро", "Хироко", "Хироми", "Хитоми", "Хотэру", "Хоши", "Химико", "Цубаки", "Цукаса", "Цубаса", "Чи", "Чинаса", "Чио", "Чиоко", "Чика", "Чико", "Чикако", "Чинатсу", "Чихару", "Чиэ", "Чиэса", "Чо", "Чоу", "Шайори", "Ши", "Шиджеко", "Шизука", "Шизуко", "Шика", "Шинджу", "Шион", "Эйко", "Эйка", "Эйми", "Эйуми", "Эми", "Эмико", "Эри", "Этсуко", "Юна", "Юй", "Юка", "Юки", "Юкико", "Юко", "Юми", "Юмико", "Юри", "Юно", "Яои", "Ясу", "Ясуко"]
	let names_my = ["Аврора", "Амброзия", "Аполлинария", "Артемида", "Астрея", "Афродита", "Беллона", "Валкирия", "Венера", "Веста", "Гальциона", "Геба", "Геенна", "Гела", "Гера", "Гестия", "Гея", "Гиада", "Гидра", "Грация", "Дафна", "Диана", "Дидона", "Диона", "Дриада", "Европа", "Елена", "Зинаида", "Злата", "Ида", "Идофея", "Изида", "Илифия", "Ирида", "Калипсо", "Кассандра", "Кера", "Клавдия", "Клио", "Лада", "Леля", "Леда", "Лидия", "Майя", "Мара", "Мегера", "Мельпомена", "Минерва", "Мнемозина", "Мойра", "Муза", "Немезида", "Ника", "Никса", "Нимфодора", "Нимфа", "Ора", "Парка", "Пенелопа", "Персефона", "Поликсена", "Психея", "Помона", "Ретра", "Рэя", "Селена", "Семирамида", "Серафима", "Сирена", "Терпсихора", "Тизифона", "Ундина", "Урания", "Федра", "Фемида", "Фетида", "Флора", "Фетида", "Фортуна", "Фурия", "Харита", "Хриса", "Церера", "Циана", "Цикада", "Цирцея", "Цитера", "Эвридика", "Эвмениды", "Эгида", "Эгина", "Эллада", "Геллада", "Эолия", "Эос", "Эрата", "Эхидна", "Эхо", "Юнона"]
	
	var chance = 0;
	var sumchance = 0;

	var race;
	if (document.getElementById("race_check").checked) {
		 race = Math.floor(Math.random() * races.length);
	}
	else {
		race = Math.floor(Math.random() * 4);
	}
			
	var height = 0;
	var eyes_color = Math.floor(Math.random() * eyes_colors.length);
	var hairstyle = 0;
	var hair_color = Math.floor(Math.random() * hair_colors.length);;
	var bodyfeat = race;
	var clothes = Math.floor(Math.random() * clothes_style.length);
	var temperament = Math.floor(Math.random() * temperaments.length);
	var	feature = Math.floor(Math.random() * 100);	

	//европиоид, вампир, ангел, демон
	if (race == 0 || race == 9 || race == 4 || race == 5){
		var height = Math.floor(Math.random() * 43 + 140);
		let chances = [];
		for (let i = 0; i < hairstyles.length; i++) {
			if (i == 0 || i == 1) chance = 10;
			else if (i == 3 || i == 8 || i == 11) chance = 20;
			else if (i == 18 || i == 19) chance = 30;
			else chance = 1000;
			chances.push(chance);
			sumchance = sumchance + chance;
		}
		let rand = Math.floor(Math.random() * sumchance) - 1;
		let j = 0;
		for (let i = chances[0]; i <= rand; i = i + chances[j]) {
			j++;
		}
		hairstyle = j;		
	}
	//негроид, метис
	else if (race == 1 || race == 3){
		var height = Math.floor(Math.random() * 40 + 150);
		let chances = [];
		for (let i = 0; i < hairstyles.length; i++) {
			if (i == 0 || i == 1) chance = 10;
			else chance = 100;
			chances.push(chance);
			sumchance = sumchance + chance;
		}
		let rand = Math.floor(Math.random() * sumchance) - 1;
		let j = 0;
		for (let i = chances[0]; i <= rand; i = i + chances[j]) {
			j++;
		}
		hairstyle = j;		
	}
	//орк
	else if (race == 8){
		var height = Math.floor(Math.random() * 50 + 170);
		let chances = [];
		for (let i = 0; i < hairstyles.length; i++) {
			if (i == 0 || i == 1) chance = 10;
			else chance = 100;
			chances.push(chance);
			sumchance = sumchance + chance;
		}
		let rand = Math.floor(Math.random() * sumchance) - 1;
		let j = 0;
		for (let i = chances[0]; i <= rand; i = i + chances[j]) {
			j++;
		}
		hairstyle = j;		
	}
	//азиат
	else if (race == 2){
		var height = Math.floor(Math.random() * 80 + 120);
		let chances = [];
		for (let i = 0; i < hairstyles.length; i++) {
			if (i == 0 || i == 1) chance = 10;
			else if (i == 3 || i == 8 || i == 11 || i == 18 || i == 19) chance = 20;
			else chance = 1000;
			chances.push(chance);
			sumchance = sumchance + chance;
		}
		let rand = Math.floor(Math.random() * sumchance) - 1;
		let j = 0;
		for (let i = chances[0]; i <= rand; i = i + chances[j]) {
			j++;
		}
		hairstyle = j;		
	}
	//джин, пришелец
	else if (race == 6 || race == 7){
		var height = Math.floor(Math.random() * 150 + 100);
		let chances = [];
		for (let i = 0; i < hairstyles.length; i++) {
			if (i == 0 || i == 1) chance = 10;
			else if (i == 3 || i == 8 || i == 11) chance = 20;
			else if (i == 18 || i == 19) chance = 30;
			else chance = 1000;
			chances.push(chance);
			sumchance = sumchance + chance;
		}
		let rand = Math.floor(Math.random() * sumchance) - 1;
		let j = 0;
		for (let i = chances[0]; i <= rand; i = i + chances[j]) {
			j++;
		}
		hairstyle = j;		
	}
	//фея
	else if (race == 10){
		var height = Math.floor(Math.random() * 100 + 30);
		let chances = [];
		for (let i = 0; i < hairstyles.length; i++) {
			if (i == 0 || i == 1) chance = 10;
			else if (i == 3 || i == 8 || i == 11 || i == 18 || i == 19) chance = 20;
			else chance = 1000;
			chances.push(chance);
			sumchance = sumchance + chance;
		}
		let rand = Math.floor(Math.random() * sumchance) - 1;
		let j = 0;
		for (let i = chances[0]; i <= rand; i = i + chances[j]) {
			j++;
		}
		hairstyle = j;		
	}
	else {
		height = Math.floor(Math.random() * 100 + 120);		
		hairstyle = Math.floor(Math.random() * hairstyles.length);		
	}

	if (hair_color == 35) hair_color = 0;
	if (hairstyle == 0) hair_color = 35;
	if (bodyfeat != 4 && bodyfeat != 5) bodyfeat = 0;

	if (feature < 70) feature = 0;
	else if (feature < 85) feature = 1;
	else if (feature < 95) feature = 2;
	else if (feature < 100) feature = 3;
	else feature = 4;
	
	document.getElementById("load_bg").style.display = "block";
	document.getElementById("load_lg").style.display = "block";

	if (document.getElementById("name_jp").checked){
		document.getElementById("text_name").innerHTML = names_jp[Math.floor(Math.random() * names_jp.length)];
	}
	else if (document.getElementById("name_my").checked){
		document.getElementById("text_name").innerHTML = names_my[Math.floor(Math.random() * names_my.length)];
	}
	 else {
		document.getElementById("text_name").innerHTML = names_en[Math.floor(Math.random() * names_en.length)];
	}
	

	document.getElementById("text").innerHTML =
	"<b>Раса: </b>" + races[race] +
	"<br><b>Рост: </b>" + height + " см." +
	"<br><b>Цвет глаз: </b>" + eyes_colors[eyes_color] +
	"<br><b>Цвет волос: </b>" + hair_colors[hair_color] +	
	"<br><b>Прическа: </b>" + hairstyles[hairstyle] +
	"<br><b>Стиль одежды: </b>" + clothes_style[clothes] +
	"<br><b>Темперамент: </b>" + temperaments[temperament] +
	"<br><b>Особенность: </b>" + features[feature];

	document.getElementById("race").style.zIndex = 0;
	document.getElementById("feature").style.zIndex = 1;
	document.getElementById("eyes").style.zIndex = 2;
	document.getElementById("bodyfeat").style.zIndex = 4;
	document.getElementById("clothes").style.zIndex = 5;

	if (hairstyle == 12) {
		document.getElementById("hair").style.zIndex = 103;
		document.getElementById("bodyfeat").style.zIndex = 104;
	}
	else document.getElementById("hair").style.zIndex = 3;	

	document.getElementById("race").src="generator/race/" + race + ".png";
	document.getElementById("feature").src="generator/feature/" + feature + ".png";
	document.getElementById("eyes").src="generator/eyes/" + eyes_color + ".png";
	document.getElementById("hair").src="generator/hair/" + hairstyle + "." + hair_color + ".png";
	document.getElementById("bodyfeat").src="generator/bodyfeat/" + bodyfeat + ".png";
	document.getElementById("clothes").src="generator/clothes/" + clothes + ".png";

	document.getElementById("load_bg").style.display = "none";
	document.getElementById("load_lg").style.display = "none";
}