import picPortfolio from '../../images/picPortfolio.svg'
import picPortfolio2 from '../../images/picPortfolio2.svg'
import picPortfolio3 from '../../images/picPortfolio3.svg'
import picPortfolio4 from '../../images/picPortfolio4.svg'
import picPortfolio5 from '../../images/picPortfolio5.svg'
// import picPortfolio6 from '../../images/picPortfolio6.svg'
import picPortfolio21 from '../../images/picPortfolio21.svg'

import { Link } from 'react-router-dom'

const PortfolioContent = () => {
    return (
        <div className="portfolio_content">
            <div className="content item1">
                <img src={picPortfolio} alt="" />
                <li>Мобильный контроль</li>
                <li>Сервис для работы с клиентами и партнерами</li>
            </div>
            <div className="content item2">
                <img src={picPortfolio3} alt="" />
                <li>Голосовое управление</li>
                <li>Сервис для работы по задачам</li>
            </div>
            <div className="content item3">
                <img src={picPortfolio4} alt="" />
                <li>Vroomgames</li>
                <li>Сервис для работы со списками заказов</li>
            </div>
            <div className="content item4">
                <img src={picPortfolio5} alt="" />
                <li>ATOL-бонус</li>
                <li>Мобильное приложение для профессионалов</li>
            </div>
            <div className="content item5">
                <img src={picPortfolio2} alt="" />
                <li>Prorab-x</li>
                <li>Мобильное приложение для строителей</li>
            </div>
            <div className="content item6">
                <img src={picPortfolio21} alt="" />
                <li>Актуаль</li>
                <li>Сайт промом игры</li>
            </div>
            <div className="content btn_portfolio item7">
                <Link to="/portfolio">Заказать проект</Link>
            </div>
            <div className="content btn_portfolio item8">
                <Link to="/portfolio">Портфолио</Link>
            </div>
        </div>
    )
}

export default PortfolioContent