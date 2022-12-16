
import { useState, Link} from "react";
import Close from "../../Helpers/close";

const BurgerMenuList = ({visibleBurger,setVisibleMenu, ref}) => {
    console.log(ref);
    const [itemsMenu, ] = useState([       
        {value: 'Главная', linkTo: '/',id:1},
        {value: 'Команда', linkTo: '/team',id:2},
        {value: 'Услуги', linkTo: '/services',id:3},
        {value: 'Карьера', linkTo: '/career',id:4},
        {value: 'Портфолио', linkTo: '/portfolio',id:5},
        {value: 'Контакты', linkTo: '/contacts',id:6},
    ])

    return (
        <div className={visibleBurger ? "burger_menu_list modal" : "burger_menu_list"} onClick={(e)=>e.stopPropagation()}>
            <div className="close_container">
                <Close visibleBurger = {visibleBurger} setVisibleMenu = {setVisibleMenu}></Close>           
            </div>     
            <div className="burgers_nav_link">
                {
                    itemsMenu.map(item => <a className="link" key={item.id} href={item.linkTo}>{item.value}</a>)
                }
            </div>
        </div>
    )
}

export default BurgerMenuList 