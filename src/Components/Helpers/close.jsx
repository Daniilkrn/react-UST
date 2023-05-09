const Close = ({visibleBurger,setVisibleMenu}) => {
    
    function handlerSetMenu(){
        setVisibleMenu(!visibleBurger)
        document.body.style.overflow = "auto";
    }

    return (
        <div className="close" onClick={()=>handlerSetMenu()}>
            <span></span>
        </div>
    )
}

export default Close