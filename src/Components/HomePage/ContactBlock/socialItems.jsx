import SocialItem from "../socialItem/socialItem"

const SocialItems = ({social}) => {
    return(
        <>
            {
                social.map(social => <SocialItem key={social.id} social={social.image}/>)
            }
        </>
    )
}

export default SocialItems