import DescHomePage from '../../Components/HomePage/descHomePage'
import InfoBlock from './infoBlock'
import Portfolio from './portfolio'
import Suggestions from './suggestions'
import Benefits from './benefits'
import Clients from './clients'
import ContactBlock from './ContactBlock/contactBlock'
import BgContactBlock from './ContactBlock/bgContactBlock'

const HomePage = () => {
    return (
        <div className="homePage_wrapper">
            <DescHomePage/>
            <InfoBlock/>
            <Suggestions/>
            <Portfolio/>
            <Benefits/>
            <Clients/>
            <ContactBlock/>
            <BgContactBlock/>
        </div>
    )
} 


export default HomePage