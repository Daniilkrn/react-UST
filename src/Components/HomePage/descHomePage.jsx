import { Link } from "react-router-dom";
const DescHomePage = () => {
    return (
        <div className="homePage_background">
            <div className="desc__container">
                <div className="div">
                    <li>Студия разработки <br></br>программного обеспечения <br></br></li>
                    <li className="blue_li">с продуктовым мышлением</li>
                    <li className="desc_li">Мы создаем кроссплатформенные мобильные <br></br>приложения и веб-платформы и находим для них<br></br> лучшие решения.</li>
                    <Link to='' className="btn">Заказать проект</Link>
                </div>
                <div className="benefits_container">
                    <div className="benefits_item">
                        <li className="benefits_li">4+</li>
                        <li className="benefits_li">Год опыта</li>
                    </div>
                    <div className="benefits_item">
                        <li className="benefits_li">30+</li>
                        <li className="benefits_li">Завершенных проектов</li>
                    </div>
                    <div className="benefits_item">
                        <li className="benefits_li">4+</li>
                        <li className="benefits_li">Год опыта</li>
                    </div>
                    <div className="benefits_item">
                        <li className="benefits_li">4+</li>
                        <li className="benefits_li">Год опыта</li>
                    </div>   
                </div>
            </div>
        </div>
    )
} 

export default DescHomePage;