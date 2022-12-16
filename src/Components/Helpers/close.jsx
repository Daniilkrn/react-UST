const Close = ({visibleBurger,setVisibleMenu}) => { 
    return (
        <div className="close" onClick={()=>setVisibleMenu(!visibleBurger)}>
            <span></span>
        </div>
    )
}

export default Close