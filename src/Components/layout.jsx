import React from "react";
import {Link,Outlet} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {MdOutlineLanguage} from 'react-icons/md'
import svgUnion from '../images/ImageUnion.svg'
import BurgerMenu from "./Header/media/burgerMenu";
import { useState, useEffect } from "react";
import SocialItems from "./HomePage/ContactBlock/socialItems";

import socialSvg1 from "../images/social1.svg"
import socialSvg2 from "../images/social2.svg"
import socialSvg3 from "../images/rsocial3.svg"
import socialSvg4 from "../images/social4.svg"

const Layout = () => {
    const [social,] = useState([
        {id:1,image: socialSvg1},
        {id:2,image: socialSvg2},
        {id:3,image: socialSvg3},
        {id:4,image: socialSvg4},
        {id:5,image: socialSvg1}
    ])
    const [itemsMenuDesktop, ] = useState([       
        {value: 'Главная', linkTo: '/',id:1},
        {value: 'Команда', linkTo: '/team',id:2},
        {value: 'Услуги', linkTo: '/services',id:3},
        {value: 'Карьера', linkTo: '/career',id:4},
        {value: 'Портфолио', linkTo: '/portfolio',id:5},
        {value: 'Контакты', linkTo: '/contacts',id:6},
    ])

    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerNonFix,setHeaderNonFix] = useState(true)


    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }

    useEffect(() => {
        if(scrollPosition >= 100){
            setHeaderNonFix(false)
          } else {
            setHeaderNonFix(true)
          }
          window.addEventListener('scroll', handleScroll, { passive: true });
          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
    }, [scrollPosition])
    

    return (
        <div className="layout_wrapper">
            <header className={headerNonFix ? "headerFix" : "header"}>
                <div className="header__container">
                    <Link to="/" className="logoLink">
                        <div className="logo_container">
                            <div className="union_icon">
                            <img src={svgUnion} alt="" />
                            </div>
                            <div className="desc-logo">
                                <h3>Union Smart Technology</h3>
                                <h4>Simple solutions for complex problems</h4>
                            </div>
                        </div>
                    </Link>
                    <div className="nav_link">
                            <div className="menu">
                                {
                                    itemsMenuDesktop.map(item => <Link to={item.linkTo} key={item.id} className="link">{item.value}</Link>) 
                                }
                                {
                                    itemsMenuDesktop.map(itemSpan => <span key={itemSpan.id}></span>)
                                }
                            </div>
                            <div className="search_lang-bar">
                                <MdOutlineLanguage size={32} color="#989AA9" className="language"/>
                                <span className="span-search_lang-bar"></span>
                                <BsSearch size={26} color="#989AA9" cla1ssName="search"/>
                            </div>
                    </div>
                    <BurgerMenu/>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="footer__container">
                        <div className="teams">
                            <div className="russian_team">
                                <li className="li_team">Российская команда</li>
                                <li className="li_team">contact@unionsmarttech.ru<br></br>
                            +7 911 932-90-29</li>
                                <li className="li_team">24 Entuziastov street,<br></br>Saint Petersburg, 191 119</li>
                                <li className="li_team">Разработка: студия ЯР</li>
                            </div>
                            <div className="slovak_team">
                                <li className="li_team">Словакская команда</li>
                                <li className="li_team">contact@unionsmarttech.ru<br></br>
                                +421 494 539-852</li>
                                <li className="li_team">24 Entuziastov street,<br></br>Saint Petersburg, 191 119</li>
                                
                            </div>
                        </div>
                        <div className="conf_political">
                            <ul>
                                <Link to='/' className="link">главная</Link>
                                <Link to='/team' className="link">Команда</Link>
                                <Link to='/services' className="link">Услуги</Link>
                            </ul>
                            <ul>
                                <Link to='/career' className="link">Карьера</Link>
                                <Link to='/portfolio' className="link">Портфолио</Link>
                                <Link to='/contacts' className="link">Контакты</Link>
                            </ul>
                            <ul>
                                <Link to='/' className="link">Facebook</Link>
                                <Link to='/' className="link">instagram</Link>
                                <Link to='/' className="link">Dribbble</Link>
                                <Link to='/' className="link">linkedin</Link>
                            </ul>
                        </div>
                        <div className="media_mobile_footer">
                            <div className="social_items">
                                <SocialItems social={social}/>
                            </div>
                            <div className="desc">
                                <li>Политка конфидециальности</li>
                                <li>Разработка: студия ЯР</li>
                            </div>
                        </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
