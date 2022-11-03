import { useState } from 'react'
import ClientItem from './ClientItem/clientItem.jsx'

import clientIcon1 from '../../images/clients1.svg'
import clientIcon2 from '../../images/clients2.svg'
import clientIcon3 from '../../images/clients3.svg'
import clientIcon4 from '../../images/clients4.svg'
import clientIcon5 from '../../images/clients5.svg'

const Clients = () => {
    const [client,] = useState([
        {id:1, clientImage: clientIcon1},
        {id:2, clientImage: clientIcon2},
        {id:3, clientImage: clientIcon5},
        {id:4, clientImage: clientIcon4},
        {id:5, clientImage: clientIcon5},
        {id:6, clientImage: clientIcon5},
    ])

    const [clientR,] = useState(client)

    return (
        <div className="clients_wrapper">
            <div className="clients__container">
                <div className="clients_desc">
                    <li>Клиенты</li>
                </div>
                <div className="clients_content">
                    {
                        client.map(client=>
                            <ClientItem client = {client} key = {client.id} clientImage = {client.clientImage}/>
                        ) 
                    }
                    {
                        clientR.map(client=>
                            <ClientItem client = {client} key = {client.id} clientImage = {client.clientImage}/>).reverse()
                    }
                </div>
            </div>
        </div>
    )
}

export default Clients