//принятие данных с формы и отправка на сервер
const form = document.querySelector(".form-test-drive");

form.addEventListener("submit", (event) => {
  //метод предотвращающий перезагрузку страницы при отправке формы
  event.preventDefault();
  //создание объекта для сбора данных с формы
  let data = {};

  //сбор данных с формы циклом
  //деструктуризация - добыча необходимых свойств за один раз

  for (let { name, value } of form.elements) {
    if (name) {
      //заполняем наш объект data
      data[name] = value;
    }
  }
  //здесь должен быть  end point куда должны передаваться и сохраняться данные в БД
  //будем использовать сторонний сервис {json} placeholder
  //fetch('https://jsonplaceholder.typicode.com/todos/1') делает запрос к указанному адресу
  // и получает данные от него
  //данные GET получают данные POST отправляют
  //в метод fetch можем передать объект с настройками
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data), //передаем данные в свойство body наш объект
    //используем метод stringify , который отдает данные в виде строки
  })
    .then((response) => {
      //в response -объект, ответ от сервера, внутри есть
      //набор свойств
      //Headers, body , status: 200 при успешном запросе .которыми мы можем пользоваться

      //при успешной отправке posts данных сервер отдает ответ 201 и в условии обрабатываем его
      if (response.status === 200 || response.status === 201) {
        return response.json(); //метод json() для вывода читабельного вида
      } else {
        throw new Error(response.status);
      } //в  else исключаем ошибки
    })
    //метод then отработает тогда ,
    //когда данны полностью дойдут

    .then((data) => {
      alert("Спасибо, ваши данные отправлены! "); //здесь показывать модальные окна или редиректить на ругие страницы
      //далее очищаем форму после отправки от тех данных, которые ввел пользователь
      form.reset();
    })

    .catch((error) => {
      alert("Произошла ошибка " + error.message);
    }); //метод, который в параметр принимает саму ошибку
});
