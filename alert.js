var value = prompt('Кто пришел?', '');
if (value == "админ") {
  var password = prompt('Пароль?', '');
  if (password == "Чёрный Властелин") {
  	alert("Добро пожаловать!");
} else if (password == null) {
	alert("Вход отменён");
}else{
	alert('Пароль неверен');
} 
} else if (value == null) {
	alert("Вход отменён");
} else {
  alert( "Я вас не знаю" );
}