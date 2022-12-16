import { useState } from "react"
import BurgerMenuList from "./burgerMenuList"

const BurgerMenu = ({}) => {
    const [visibleBurger,setVisibleMenu] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    if(visibleBurger){
        
    }

    return (
        <div className="burger_btn" onClick={()=>{
            setVisibleMenu(!visibleBurger)
            setIsScroll((e)=>console.log(e))
        }}>
            <span className="btn_span"></span>
            {
                visibleBurger ? <BurgerMenuList visibleBurger = {visibleBurger} setVisibleMenu = {setVisibleMenu}/> : ''
            }
        </div>
    )
}

export default BurgerMenu