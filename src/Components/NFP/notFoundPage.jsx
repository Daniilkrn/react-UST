import {Link} from 'react-router-dom'

const NotFoundPage = () => {
    return (
       
            <div className='NFP'>
                    Not Found Page
                    <Link to='/' className='goHome_link'>Go home</Link>   
            </div>
       
        
    )
} 


export default NotFoundPage