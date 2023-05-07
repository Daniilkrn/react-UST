import { useState } from "react"
import { Link } from "react-router-dom"

const DesktopMenuList = () => {

    const [itemsMenuDesktop, ] = useState([       
        {value: 'Главная', linkTo: '/',id:1},
        {value: 'Команда', linkTo: '/team',id:2},
        {value: 'Услуги', linkTo: '/services',id:3},
        {value: 'Карьера', linkTo: '/career',id:4},
        {value: 'Портфолио', linkTo: '/portfolio',id:5},
        {value: 'Контакты', linkTo: '/contacts',id:6},
    ])

    return (
        <div className="desktop_menu_list">
            {
                itemsMenuDesktop.map(item => <Link to={item.linkTo} key={item.id} className="link">{item.value}</Link>)
            }
        </div>
    )
}

export default DesktopMenuList