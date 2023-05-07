
import PortfolioContent from './portfolioContent'
import PortfolioDesc from './portfolioDesc'
import { Link } from 'react-router-dom'

const Portfolio = () =>{
    return (
        <div className="portfolio__container">
            <PortfolioDesc/>
            <PortfolioContent/>
            <div className="btn_portfolio__container">
                    <Link to="/portfolio">Портфолио</Link>
                    <Link to="/portfolio">Закаать проект</Link>
            </div>
        </div>
    )
}

export default Portfolio