const Close = ({visibleBurger,setVisibleMenu}) => {
    
    function handlerSetMenu(){
        setVisibleMenu(!visibleBurger)
    }

    return (
        <div className="close" onClick={()=>handlerSetMenu()}>
            <span></span>
        </div>
    )
}

export default Close