import rocket from "../../../images/rocket.svg"

const Confirm = ({submit, setSubmit}) => {
    return (
        <div className="rocket">
            <div className="img_rocket">
                <img src={rocket} alt="rocket" />
                <li>Ваша заявка сформирована и <br/>отправлена ​​нашему менеджеру</li>
            </div>
            <div className="actions">
                <p onClick={()=>setSubmit(false)}>Вернуться на сайт</p>
                <p onClick={()=>setSubmit(false)}>Отмена</p>
            </div>
        </div>
    )
}

export default Confirm