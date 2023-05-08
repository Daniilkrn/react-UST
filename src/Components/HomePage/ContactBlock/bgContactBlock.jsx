import ColoredLine from "../items/line"
import socialSvg1 from "../../../images/social1.svg"
import socialSvg2 from "../../../images/social2.svg"
import socialSvg3 from "../../../images/rsocial3.svg"
import socialSvg4 from "../../../images/social4.svg"
import { useState } from "react"
import SocialItems from "./socialItems"
import Confirm from "./confrim"
import Form from "./Form"

const BgContactBlock = () => {

    const [social,] = useState([
        {id:1,image: socialSvg1},
        {id:2,image: socialSvg2},
        {id:3,image: socialSvg3},
        {id:4,image: socialSvg4},
        {id:5,image: socialSvg1}
    ]);

    const [submit, setSubmit] = useState(false);

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
                                <SocialItems social={social}/>
                            </div>
                        </div>
                    </div>
                    <div className="contact_Do">
                        {
                            submit ? <Confirm submit={submit} setSubmit={setSubmit}/> : <Form submit={submit} setSubmit={setSubmit}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default BgContactBlock