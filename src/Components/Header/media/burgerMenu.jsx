import { useState } from "react"
import BurgerMenuList from "./burgerMenuList"

const BurgerMenu = () => {
    const [visibleBurger,setVisibleMenu] = useState(false)

    return (
        <div className="burger_btn" onClick={()=>{
            setVisibleMenu(!visibleBurger)
            document.body.style.overflow = "hidden";
        }}>
            <span className="btn_span"></span>
            {
                visibleBurger ? <BurgerMenuList visibleBurger = {visibleBurger} setVisibleMenu = {setVisibleMenu}/> : null
            }
        </div>
    )
}

export default BurgerMenu