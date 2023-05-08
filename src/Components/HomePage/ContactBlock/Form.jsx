import { useState } from "react"
import InfoMessage from "../../Helpers/infoMessage"

const Form = ({submit, setSubmit}) => {

    const [name,setName] = useState(false)
    const [company,setCompany] = useState(false)
    const [email,setEmail] = useState(false)
    const [message,setMessage] = useState(false)

    const [stateInfo, setStateInfo] = useState(false)
    const [checker,setChecker] = useState(false)
    return(
        <div className="square_contactDo">
            <div className="title">
                <p>Связаться с нами</p>
                <p>Оставьте свою контактную информацию, и мы <br/> с радостью свяжемся с вами!</p>
            </div>
            <div className="input_container">
                <label className={!name.length && checker ? "borderInput" : "label"}>
                    <input type="text" placeholder="Имя " onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                </label>
                <label className={!company.length && checker ? "borderInput" : "label"}>
                    <input type="text" placeholder="Компания " onChange={(e)=>{
                    setCompany(e.target.value)
                }}/>
                </label>
                <label className={!email.length && checker ?  "borderInput" : "label"}>
                    <input type="e-mail" placeholder="Электронная почта " onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                </label>
                <label className={!message.length && checker ? "borderInput" : "label"}>
                    <textarea placeholder="Cообщение" onChange={(e)=>{
                    setMessage(e.target.value)
                }}></textarea>
                </label>
                <p> обязательные поля для заполнения</p>
            </div>
            <div className="button_container">
                <button type="submit" onClick={()=>{
                    if(name.length && company.length && email.length && message.length){
                        setSubmit(true)
                    } else {
                        setChecker(true)
                        setStateInfo(true)
                        setTimeout(() => {
                            setStateInfo(false)
                        }, 3500);
                    }
                }}>Отправить</button>
                <li>Нажимая на кнопку, вы соглашаетесь <br/> с Политикой конфидециальности</li>
            </div>
            {
                stateInfo ? <InfoMessage text={"заполните все обязательные поля"}></InfoMessage> : null
            }
        </div>
    )
}

export default Form