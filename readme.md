 Ссылка готовой верстки на хостинге - http://discoverservice.ru/ 
	Хостинг я взял самый бюджетный (у меня закончился*). И к моему удивлению, несмотря на то, что я за него заплатил,  под моей версткой многда появиляется рекламный баннер, надеюсь на ваше понимание.
p.s. Домен я покупал пол года назад для дипломного проекта, а так как диплом уже удачно получен, приспособил его для тестового.
   Cсылка на github - https://github.com/pupanaft/test 
Трудозатраты ~ 28 ч

	Первый день ~ 8 часов
Начал работать над настройкой сборщика. Поскольку этим я не занимался уже довольно долго, был ошибочно удивлен, когда всего за 20 минут смог всё настроить и запустить. Затем перешёл к верстке, и тут осознал, что scss и шрифты не работают. В итоге часа три сражался с Webpack. Потом продолжил работу над версткой и завершил её примерно до слайдера в рамках ширины для мобилки.

Второй день ~ 12 часов
Завершил верстку и адаптировал её под разные устройства. Я не знал, можно ли использовать готовое решение для слайдера, поэтому не применял библиотеку Swiper. В общем, за этот день я завершил верстку и написал весь JavaScript-код, кроме функционала отправки формы

	Третий день ~ 8 часов
Я  первый раз пробовал использовать php и из-за этого большую часть времени я провел, пытаясь разгадать загадку как заставить этот язык отправить электронное письмо?
Сначала я использовал бесплатный хостинг. На нём можно было создать почту для моего домена, но возникли сложности. Спустя пять часов размышлений\ответа от техподдержки я выяснил, что возможность создания почты есть, а функции отправки сообщений — нет. Тогда я оплатил месячный тариф и все время потратил на настройку отправки писем.

Отправка писем
я в первый раз использовал php поэтому не понимаю тонкостей и как сделать так чтобы на все почтовые сервисы отправлялиь писма. В процессе для проверки я использовал mail и понял что на конкретно mail.ru отправка писем не работает. yandex и gmail работают

Это мой первый опыт работы с PHP, поэтому не понимаю тонкости и нюансы языка, не знаю, как обеспечить отправку писем на все почтовые сервисы. Для тестирования я использовал функцию mail(), и заметил, что отправка на Mail.ru не работает, но исправить это у меня не вышло. Однако на Yandex и Gmail письма успешно доходят, но попадают в спам.
