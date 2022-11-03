import svgUnion from '../../images/unsplash_VBNb52J8Trk.svg'
const InfoBlock = () => {
    return (
        <div className="inoBlock_Wrapper">
            <div className="info_block__container">
                <div className="desc_infoBlock">
                    <li>О нас</li>   
                </div> 
                <div className="content">
                    <img src={svgUnion}/>
                    <div className="content_block">
                        <ul>
                            <li>Почему UST?</li>
                            <li>К услугам наших клиентов разработка <br/>программного обеспечения на заказ<br/>, проектирование пользовательских <br/>интерфейсов, создание сайтов (в том числе на <br/>основе индивидуальной CMS) и их поддержка. </li>
                            <li>Мы также предлагаем услугу IT-консалтинга — <br/>налаживание работы любых информационно-<br/>аналитических систем и онлайн-решений <br/>компании для большей эффективности бизнес-процессов.</li>
                            <li>Сегодня компания «Union Smart Technology»<br/> имеет представительства с умелыми project‑менеджерами в РФ и Словакии. </li>
                            <li> Такая география позволяет привлекать <br/>наиболее ответственных и квалифицированных <br/>программистов и живо реагировать на<br/> потребности заказчиков со всего света,<br/> сохраняя комфортный уровень цен.</li>
                        </ul>
                        <div className="buttons_container">
                            <a href="">Вакансии</a>
                            <a href="">Читать далее</a>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    )
} 

export default InfoBlock;