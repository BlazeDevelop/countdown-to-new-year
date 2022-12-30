// Установите дату, на которую мы считаем обратно
var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

// Обновляйте обратный отсчет каждую секунду
var x = setInterval(function() {
  // Получите текущую дату и время
  var now = new Date().getTime();
  
  // Найдите расстояние между текущим временем и датой обратного отсчета
  var distance = countDownDate - now;
  
  // Расчет времени для дней, часов, минут и секунд
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Выведите результат в элемент с идентификатором "days"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // Если обратный отсчет завершен, отобразите анимацию и напишите некоторый текст
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-text").innerHTML = "С Новым 2023 Годом!";
    
    // Добавьте анимацию снега
    for (var i = 0; i < 100; i++) {
      var snow = document.createElement("div");
      snow.classList.add("snow");
      snow.style.left = Math.random() * 100 + "%";
      document.body.appendChild(snow);
    }
    
    // Добавьте анимацию фейерверка
    for (var i = 0; i < 50; i++) {
      var firework = document.createElement("div");
      firework.classList.add("fireworks");
      firework.style.left = Math.random() * 100 + "%";
      firework.style.top = Math.random() * 100 + "%";
      document.body.appendChild(firework);
    }
  }
}, 1000);
