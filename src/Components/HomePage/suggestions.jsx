import suggItem1 from '../../images/Vector.svg'
import suggItem2 from'../../images/Vector2.svg'
import suggItem3 from'../../images/Vector3.svg'
import suggItem4 from'../../images/Vector4.svg'
import suggItem5 from'../../images/Vector5.svg'
import suggItem6 from '../../images/icon6.svg'
import linkArrow from '../../images/Arrow1.svg'


import { Link } from 'react-router-dom'

const Suggestions = () => {
    return (
        <div className="suggestions_block__container">
            <div className="desc_suggesions">
                <li>Наши предложения</li>
                <li id="2">Разработка полного цикла</li>
                <li>Мы можем разработать для вас любое индивидуальное решение. Наша компания<br/>обладает широкими возможностями для успешного создания технически-сложных<br/> систем.</li>
            </div>
            <div className="suggestions_content">
                <div className="suggestions item1">
                    <img src={suggItem4} alt="" />
                    <li>Программируем</li>
                    <li>Создаём расширяемую архитектуру, пишем <br/>чистый и стабильный код. Интегрируемся с <br/>технологиями заказчика.</li>
                </div>
                <div className="suggestions item2">
                    <img src={suggItem2} alt="" />
                    <li>Тестируем</li>
                    <li>Проводим ручное функциональное<br/> тестирование и пишем UI-автотесты. Готовим <br/>чек-листы и тест-кейсы.</li>
                </div>
                <div className="suggestions item3">
                    <img src={suggItem4} alt="" />
                    <li>Поддерживаем</li>
                    <li>Работаем по SLA. Следим за стабильностью <br/>работы приложения, обновляем под новые<br/> устройства и версии iOS и Android.</li>
                </div>
                <div className="suggestions item4">
                    <img src={suggItem4} alt="" />
                    <li>Анализируем</li>
                    <li>Пишем ТЗ для разработки, учитывая бизнес-<br/>процессы и технологии заказчика и <br/>потребности пользователей.</li>
                </div>
                <div className="suggestions item5">
                    <img src={suggItem5} alt="" />
                    <li>Прототипируем</li>
                    <li>Прорабатываем пользовательские сценарии,<br/> проектируем логику приложения, скечируем <br/>основные экраны.</li>
                </div>
                <div className="suggestions item6">
                    <img src={suggItem6} alt="" />
                    <li>Дизайним</li>
                    <li>Адаптируем фирменный стиль заказчика к <br/>гайдлайнам платформ. Рисуем удобные и<br/> понятные интерфейсы.</li>
                </div>
            </div>
            <div className="serv_link">
                <Link to="/services">
                    <li>Все услуги</li> 
                    <img src={linkArrow} alt="" />
                </Link>
            </div> 
        </div>
    )
} 

export default Suggestions;