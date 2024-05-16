var attractionsMapShown = false;
var attractionsInfoShown = false;

function showAttractionsMap() {
    if (!attractionsMapShown) {
        // Показать карту достопримечательностей России
        document.getElementById("map").style.display = "block";
        attractionsMapShown = true;

        // Добавьте код для отображения меток достопримечательностей на карте
        // Используйте координаты из массива additionalAttractions
    } else {
        // Скрыть карту достопримечательностей России
        document.getElementById("map").style.display = "none";
        attractionsMapShown = false;
    }
}
function showAttractionsInfo() {
    if (!attractionsInfoShown) {
        var info = '';
        for (var i = 0; i < additionalAttractions.length; i++) {
            var attraction = additionalAttractions[i];
            var name = attraction.name;
            var description = attraction.description;
            var photo = attraction.photo;

            info += 'Название: ' + name + '\n';
            info += 'Описание: ' + description + '\n';
            if (photo) {
                info += 'Фото: ' + photo + '\n';
                info += 'Описание: ' + description + '\n';
            }
            info += '\n';
        }

        alert(info);
        attractionsInfoShown = true;
    } else {
        attractionsInfoShown = false;
    }
}
function openEmptyPage() {
    window.open("empty_page.html", "_blank");
}
var additionalAttractions = [
    {
        name:'Серафимовская церковь',
        description:' православный храм в Ростове-на-Дону. Принадлежит к Юго-Западному благочинию Ростовской-на-Дону епархии Русской православной церкви. Был построен в станице Гниловской между 1904―1911 годами по проекту архитектора Б. А. Райченкова.',
        coordinates:[47.209010, 39.689418],
        photo:'https://avatars.mds.yandex.net/get-altay/9837233/2a00000189c5144a028e1f9a29b35c43c365/L',
        wikipedia:'https://ru.wikipedia.org/wiki/Храм_Преподобного_Серафима_Саровского_(Ростов-на-Дону)',
        category: "interesting"
    },
    {
        name:'Театр Драмы им.М.Горького',
        description:'Ростовский академический театр драмы имени М. Горького — один из крупнейших театров Ростова-на-Дону. Его здание, определяющее облик Театральной площади, известно в архитектурном мире как поздний памятник конструктивизма.',
        coordinates:[47.228560, 39.744681],
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Здание_Ростовского_Государственного_Драматического_Театра_Имени_М._Горького_1.jpg/1599px-Здание_Ростовского_Государственного_Драматического_Театра_Имени_М._Горького_1.jpg',
        wikipedia:'https://ru.wikipedia.org/wiki/Ростовский_академический_академический_театр_драмы_им._М._Горького',
        category: "entertainment"
    },

    {
        name:'Ростовский зоопарк',
        description:'Ростовский зоопарк — один из крупнейших по территории зоопарков России (площадью почти 56,97 гектаров[2]), богатый своими традициями зоологический парк. Расположен в Ростове-на-Дону.',
        coordinates:[47.248984, 39.671666],
        photo:'https://avatars.dzeninfra.ru/get-zen_doc/3514290/pub_5f5de37c93cc6c72ff9d431c_5f5de4fbd709247317943486/scale_1200',
        wikipedia:'https://ru.wikipedia.org/wiki/Ростовский_зоопарк',
        category:"interesting"
    },
    {
        name:'Мемориал воинам-освободителям',
        description:'Возведён на центральной площади Ростова-на-Дону в честь освобождения города от нацистских войск. Торжественное открытие памятника состоялось 8 мая 1983 года[1]. Этот памятник установлен к 40-летию освобождения Ростова-на-Дону и напоминает жителям города и его гостям о трагедии военных лет.',
        coordinates:[47.226134, 39.745711],
        photo:'http://cdn.iportal.ru/news/99/preview/6b633becde813cfa5cd60a54de1e48d516839cb07_1920_1280_c.jpg',
        wikipedia:'https://ru.wikipedia.org/wiki/Стела_«Освободителям_Ростова»',
        category: "entertainment"
    },
    {
        name:'Набережная Ростова',
        description:'Улица в городе Ростов-на-Дону, начинается от бизнес-центра «Риверсайд-Дон» и заканчивается около причала ресторана Пирс. Проходит по правой стороне реки, а на левой стороне Дона находится так называемый Левбердон. Ежегодно на набережной проходит фестиваль реки Дон.',
        coordinates:[47.217160, 39.726838],
        photo:'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663107543_60-mykaleidoscope-ru-p-rostov-na-donu-dostoprimechatelnosti-vkont-62.jpg',
        wikipedia:'https://ru.wikipedia.org/wiki/Набережная_реки_Дон',
        category: "entertainment"
    },
    {
        name:'Донская библиотека',
        description:'Центральная библиотека Ростовской области, расположенная в городе Ростов-на-Дону. Старейшее книгохранилище юга России, была основана в 1886 году. Крупнейшая библиотека в Ростовской области и среди центральных библиотек субъектов Российской федерации. Её фонды насчитывают более пяти миллионов экземпляров.',
        coordinates:[47.228825, 39.726306],
        photo:'https://top7travel.ru/wp-content/uploads/2022/03/78y678a6y78vayva.jpg',
        wikipedia:'https://ru.wikipedia.org/wiki/Донская_государственная_публичная_библиотека',
        category: "entertainment"
    },
     {
        name: 'Красная площадь',
        description: 'Москва, Россия',
        coordinates: [55.753930, 37.620795],
        photo: 'https://kartinki.pics/pics/uploads/posts/2022-08/1660142737_51-kartinkin-net-p-krasnaya-ploshchad-kreml-krasivo-foto-53.jpg',
        category: "entertainment"

    },
    {
        name: 'Собор Василия Блаженного',
        description: 'Москва, Россия',
        coordinates: [55.752523, 37.623087],
        photo: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663450843_55-mykaleidoscope-ru-p-rossiya-sobor-vasiliya-blazhennogo-krasivo-60.jpg',
        category: "entertainment"
    },
    {
        name: 'Петропавловская крепость',
        description: 'Санкт-Петербург, Россия',
        coordinates: [59.950569, 30.316995],
        photo:'https://photocentra.ru/images/main78/787098_main.jpg',
        category: "sports"
    },
    {
        name: 'Волгоградская площадь',
        description: 'Волгоград, Россия',
        coordinates: [48.708048, 44.514758],
        photo:'https://cdn.fishki.net/upload/post/2020/09/04/3411953/20200826-104735.jpg',
        category: "entertainment"
    },
    {
        name: 'Эрмитаж',
        description: 'Санкт-Петербург, Россия',
        coordinates: [59.939095, 30.315868],
        photo:'https://api.neuro-holst.ru/api/v1/image/share/render/nMLowwerjoay',
        category: "entertainment"
    },
    {
        name: 'Байкальское озеро',
        description: 'Иркутская область, Россия',
        coordinates: [51.849581, 104.866951],
        photo:'https://sportishka.com/uploads/posts/2022-03/1646312194_54-sportishka-com-p-krasoti-baikala-turizm-krasivo-foto-56.jpg',
        category: "entertainment"
    }
]; 

var myMap;

ymaps.ready(function() {
    myMap = new ymaps.Map("map", {
        center: [47.235713, 39.701505],
        zoom: 12
    });
    addAdditionalAttractions(myMap);
});
function getAttractionDescription(name) {
    for (var i = 0; i < additionalAttractions.length; i++) {
        var attraction = additionalAttractions[i];
        if (attraction.name === name && attraction.description) {
            return attraction.description;
        }
    }
    return null;
}

function getPhotoForAttraction(name) {
    for (var i = 0; i < additionalAttractions.length; i++) {
        var attraction = additionalAttractions[i];
        if (attraction.name === name && attraction.photo) {
            return attraction.photo;
        }
    }
    return null;
}


function onCheckboxChange(category) {
  var checkbox = document.getElementById(category + 'Checkbox');
  var isChecked = checkbox.checked;

  myMap.geoObjects.each(function (geoObject) {
    if (geoObject.category === category) {
      geoObject.options.set('visible', isChecked);
    }
  });

  buildRoute(selectedAttractions, myMap); // Обновляем маршрут при изменении видимости меток
}

var excursionInProgress = false;
var selectedAttractions = [];
var route;

function addAdditionalAttractions(myMap) {
  var originalPresets = {};

  for (var i = 0; i < additionalAttractions.length; i++) {
    var attraction = additionalAttractions[i];
    var name = attraction.name;
    var description = attraction.description;
    var coordinates = attraction.coordinates;
    var photo = attraction.photo;
    var wikipedia = attraction.wikipedia;
    var category = attraction.category;

    var point = new ymaps.Placemark(coordinates, {
      balloonContentHeader: name,
      balloonContentBody: description
    }, {
      preset: 'islands#redDotIconWithCaption',
      iconCaptionMaxWidth: '250',
      iconCaptionWeight: 'bold'
    });

    originalPresets[point] = 'islands#redDotIconWithCaption';
    point.category = category;

    point.events.add('click', (event) => {
      if (excursionInProgress) {
        if (selectedAttractions.includes(event.get('target'))) {
          event.get('target').options.set('preset', originalPresets[event.get('target')]);
          var index = selectedAttractions.indexOf(event.get('target'));
          selectedAttractions.splice(index, 1);
        } else {
          event.get('target').options.set('preset', 'islands#blueDotIconWithCaption');
          selectedAttractions.push(event.get('target'));
        }

        var attraction = additionalAttractions.find(attr => attr.name === event.get('target').properties.get('balloonContentHeader'));
        if (attraction) {
          var modal = document.getElementById('attractionModal');
          var modalTitle = modal.querySelector('.modal-title');
          var modalBody = modal.querySelector('.modal-body');

          modalTitle.textContent = attraction.name;
          var descriptionElem = document.createElement('p');
          descriptionElem.textContent = attraction.description;
          modalBody.appendChild(descriptionElem);
        }
      }
    });

    if (photo || wikipedia) {
      var balloonContent = '<div>';
      if (photo) {
        balloonContent += '<img src="' + photo + '" width="200" height="150">';
      }
      if (description) {
        balloonContent += '<div>' + description + '</div>';
      }
      if (wikipedia) {
        balloonContent += '<div><a href="' + wikipedia + '">wikipedia.ru</a></div>';
      }
      balloonContent += '</div>';
      point.properties.set('balloonContentBody', balloonContent);
    }

    myMap.geoObjects.add(point);
  }
  var excursionInfo = null; // Переменная для хранения информации о последнем балуне

// Создание кнопок
var startButton = new ymaps.control.Button({
  data: { content: 'Начать экскурсию' },
  options: {
    selectOnClick: false,
    maxWidth: 200
  }
});
startButton.events.add('click', function () {
  excursionInProgress = true;
});

var customControl = new ymaps.control.Button({
  data: { content: 'Готово' },
  options: { selectOnClick: false }
});

var cancelButton = new ymaps.control.Button({
  data: { content: "Отменить экскурсию" },
  options: {
    selectOnClick: false,
    maxWidth: 200
  }
});

var descriptionButton = new ymaps.control.Button({
  data: { content: 'Описание экскурсии' },
  options: {
    selectOnClick: false,
    maxWidth: 200
  }
});

// Функция для отображения описания экскурсии
function showExcursionDescription() {
  var meetingPointCoordinates = [47.22603668262112, 39.7461798414588];
  var meetingPointProperties = {
    hintContent: 'Место сбора',
    balloonContent: 'Главная площадь Ростова'
  };
  var meetingPointOptions = {
    preset: 'islands#circleDotIcon',
    iconColor: '#00ff00'
  };
  var meetingPoint = new ymaps.Placemark(meetingPointCoordinates, meetingPointProperties, meetingPointOptions);

  myMap.geoObjects.add(meetingPoint);

  var excursionInfo = {
    name: 'Величие Ростова',
    description: 'Погрузитесь в эпоху величия и красоты древнего города Ростова, где слились культуры и традиции. Откройте перед собой фантастический мир истории, архитектуры и захватывающих легенд.',
    meetingPoint: 'Место сбора: главная площадь Ростова',
    meetingTime: 'Время сбора: 10:00',
    schedule: 'Расписание экскурсии: ежедневно в 10:30',
    attractions: selectedAttractions.map(function (attraction) {
      return {
        name: attraction.properties.get('balloonContentHeader'),
        description: attraction.properties.get('balloonContentBody')
      };
    }),
    time: '60 минут',
    route: 'Маршрут будет выведен на карте',
    author: 'Иван Иванович Иванов',
    authorPhoto: 'https://s12.stc.yc.kpcdn.net/share/i/12/10414451/wr-960.webp'
  };

  var content = '<div style="display: flex; flex-direction: column; align-items: center;">';
  content += '<h3>' + excursionInfo.name + '</h3>';
  content += '<p>' + excursionInfo.description + '</p>';
  content += '<p><b>Экскурсовод:</b> ' + excursionInfo.author + '</p>';
  content += '<img src="' + excursionInfo.authorPhoto + '" alt="Фото экскурсовода" style="width: 200px; height: 150px;">';
  content += '<p>' + excursionInfo.meetingPoint + '</p>';
  content += '<p>' + excursionInfo.meetingTime + '</p>';
  content += '<p>' + excursionInfo.schedule + '</p>';
  content += '<p><b>Продолжительность экскурсии:</b> ' + excursionInfo.time + '</p>';

  excursionInfo.attractions.forEach(function (attraction) {
    content += '<h4>' + attraction.name + '</h4>';
    content += '<p>' + attraction.description + '</p>';
  });

  content += '<p><b>Маршрут:</b> ' + excursionInfo.route + '</p>';
  content += '<div><button onclick="shareRoute()">Поделиться маршрутом</button></div>';
  content += '</div>';

  var center = myMap.getCenter();
  myMap.balloon.open(center, { contentBody: content });

  buildRoute(selectedAttractions, myMap);

  function shareRoute() {

    var shareUrl = 'https://yandex.ru/maps/39/rostov-na-donu/?from=api-maps&ll=39.708028%2C47.274515&mode=routes&origin=jsapi_2_1_79&pt=39.671666%2C47.248984~39.726306%2C47.228825~39.744681%2C47.22856~39.745711%2C47.226134~39.7461798414588%2C47.22603668262112~39.726838%2C47.21716~39.689418%2C47.20901~44.514758%2C48.708048~37.623087%2C55.752523~37.620795%2C55.75393&rtext=47.226037%2C39.746180~47.248984%2C39.671666~47.209010%2C39.689418~47.228825%2C39.726306~47.217160%2C39.726838~47.228560%2C39.744681~47.226134%2C39.745711&rtm=atm&rtt=auto&ruri=~~~~~~&z=12'; // Замените на фактическую URL-ссылку вашего маршрута
    var shareTitle = 'Маршрут экскурсии'; // Замените на фактический заголовок маршрута
    var shareDescription = 'Маршрут экскурсии: Величие Ростова'; // Замените на фактическое описание маршрута

    var vkUrl = 'https://vk.com/share.php?url=' + encodeURIComponent(shareUrl) + '&title=' + encodeURIComponent(shareTitle) + '&description=' + encodeURIComponent(shareDescription);
    var tgUrl = 'https://telegram.me/share/url?url=' + encodeURIComponent(shareUrl) + '&text=' + encodeURIComponent(shareTitle);
    var okUrl = 'https://connect.ok.ru/offer?url=' + encodeURIComponent(shareUrl) + '&title=' + encodeURIComponent(shareTitle);

    window.open(vkUrl, '_blank');
    window.open(tgUrl, '_blank');
    window.open(okUrl, '_blank');
  }
}

// Обработчик события открытия балуна
myMap.geoObjects.events.add('balloonopen', function (e) {
  excursionInfo = e.get('balloon').properties.get('balloonContent');
  console.log(excursionInfo); // Проверка значения excursionInfo
});

// Обработчик события закрытия балуна
myMap.geoObjects.events.add('balloonclose', function (e) {
  excursionInfo = e.get('target').properties.get('balloonContent');
  console.log(excursionInfo); // Проверка значения excursionInfo
});

// Добавление кнопок на карту (после создания карты)
myMap.controls.add(startButton, { float: 'left' });
myMap.controls.add(customControl, { float: 'left' });
myMap.controls.add(cancelButton, { float: 'left' });
myMap.controls.add(descriptionButton, { float: 'left' });

cancelButton.events.add("click", function() {
  excursionInProgress = false;
  selectedAttractions.forEach(function(attraction) {
    attraction.options.set('preset', originalPresets[attraction]);
  });
  if (route) {
    myMap.geoObjects.remove(route);
    route = null;
  }
  selectedAttractions = [];
});

myMap.controls.add(cancelButton, { float: "left" });

customControl.events.add('click', showExcursionDescription);

descriptionButton.events.add('click', showExcursionDescription);

myMap.controls.add(customControl, { float: 'left' });

document.getElementById('category1Checkbox').addEventListener('change', function () {
  onCheckboxChange('interesting');
});
document.getElementById('category2Checkbox').addEventListener('change', function () {
  onCheckboxChange('entertainment');
});
document.getElementById('category3Checkbox').addEventListener('change', function () {
  onCheckboxChange('sports');
});

buildRoute(selectedAttractions, myMap); // Добавляем маршрут при первоначальном создании

function buildRoute(attractions, myMap) {
  var routePoints = attractions.map(function (attraction) {
    return attraction.geometry.getCoordinates();
  });

  if (routePoints.length > 1) {
    // Добавляем фиксированную координату места сбора в маршрут
    routePoints.unshift([47.22603668262112, 39.7461798414588]);

    if (route) {
      myMap.geoObjects.remove(route);
      route = null;
    }

    ymaps.route(routePoints).then(function (result) {
      route = result;
      myMap.geoObjects.add(route);
    }, function (error) {

      console.log('Ошибка при построении маршрута: ' + error.message);
    });
  } else {
    console.log('Для построения маршрута необходимо выбрать не менее двух достопримечательностей.');
  }
    }
     }
