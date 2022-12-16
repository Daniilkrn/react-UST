
import Layout from './Components/layout';
import './scss/App.scss'
import '../src/scss/HomePage.scss'
import '../src/scss/media.scss'
import {Route,Routes} from 'react-router-dom'
import Team from './Components/team/Team';
import HomePage from './Components/HomePage/HomePage'
import Serv from './Components/Serv/Serv';
import Contacts from './Components/Contacts/contacts';
import Portfolio from './Components/Portfolio/portfolio';
import Career from './Components/Career/Career';
import NotFoundPage from './Components/NFP/notFoundPage';
import { useEffect, useRef } from 'react';

function App() {

  const menuRef = useRef(null)

  // const isScrollingEnabled = true

  // function scrollingFn (e){
  //   if(isScrollingEnabled) return;

  //   e.preventDefault()
  // }

  // useEffect(()=>{
  //   const contentWrapper = menuRef.current

  //   contentWrapper.addEventListener('wheel',scrollingFn)

  //   return () => contentWrapper.removeEventListener('wheel',scrollingFn)

  // })

  return (
    <div className="App" ref={menuRef}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
          <Route path="/services" element={<Serv/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/career" element={<Career/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
