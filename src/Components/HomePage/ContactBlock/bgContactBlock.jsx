import ColoredLine from "../items/line"
import socialSvg1 from "../../../images/social1.svg"
import SocialItem from "../socialItem/socialItem"
import { useState } from "react"
const BgContactBlock = () => {
    const [social,] = useState([
        {id:1,image: socialSvg1},
        {id:2,image: socialSvg1},
        {id:3,image: socialSvg1},
        {id:4,image: socialSvg1},
        {id:5,image: socialSvg1}
    ])
    return (
        <div className="content_wrapper">
            <div className="contactBlock__container">
                <div className="contactBlock_content">
                    <div className="square_content">
                        <div className="square">
                            <li>Есть идея?</li>
                            <li>У вас есть уже существующий проект, который вы хотите<br/> усовершенствовать? Вы хотите воплотить в жизнь 
                            смелую<br/> идею, но вам нужна помощь? Или вы вообще не знаете, с <br/>чего начать реализацию проекта? </li>
                            <ColoredLine color="#DDDDE2"/>
                            <div className="contact_countries">
                                <div className="contact_countries_item">
                                    <li >Словения</li>
                                    <li>contact@unionsmarttech.ru<br/>+421 494 539-852</li>
                                </div>
                                <div className="contact_countries_item">
                                    <li>Россия</li>
                                    <li>contact@unionsmarttech.ru<br/>+7 911 932-90-29</li>
                                </div>
                            </div>
                            <ColoredLine color="#DDDDE2"/>
                            <div className="social">
                                {
                                    social.map(social => <SocialItem key={social.id} social = {social.image}/>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="contact_Do">
                        <div className="square_contactDo">
                            <p>Связаться с нами</p>
                            <p>Оставьте свою контактную информацию, и мы <br/> с радостью свяжемся с вами!</p>
                            <div className="input_container">
                                <label><input type="text" placeholder="Имя "/></label>
                                <label><input type="text" placeholder="Компания "/></label>
                                <label><input type="e-mail" placeholder="Электронная почта "/></label>
                                {/* <label><input type="text" placeholder="Сообщение"/></label> */}
                                <label><textarea placeholder="Cообщение"></textarea></label>
                                <p> обязательные поля для заполнения</p>
                            </div>
                            <div className="button_container">
                                <button type="submit">Отправить</button>
                                <li>Нажимая на кнопку, вы соглашаетесь <br/> с Политикой конфидециальности</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default BgContactBlock