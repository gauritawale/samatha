import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Deposit from "./Deposit.jsx";
import Loans from "./Loans.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import Notice from "./Notice.jsx";
import Carrers from "./Carrers.jsx";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'



export default function App(){
    return(
        <>


        
<Router>
        <Navbar></Navbar>

            <Routes>

        <Route path='/' element={<Home></Home>}> </Route>

        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/deposit' element={<Deposit></Deposit>}> </Route>
        <Route path='/loans' element={<Loans></Loans>}> </Route>
        <Route path='/services' element={<Services></Services>}> </Route>
        <Route path='/contact' element={<Contact></Contact>}> </Route>
        <Route path='/notice' element={<Notice></Notice>}> </Route>
        <Route path='/careers' element={<Carrers></Carrers>}> </Route>









            </Routes>
            <Footer></Footer>



        </Router>


        </>
    )
}