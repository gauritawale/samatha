import React from "react";

export default function Footer(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 bg-dark text-white p-5">
                    <div className="row">
                        <div className="col-md-3">
                            <h2 className="ms-3 mb-3">Quick Links</h2>
                            <ul type="square">
                                <li>About Us</li>
                                <li>Our Ventures</li>
                                <li>News & Updates</li>
                                <li>Contact Us</li>
                                <li>Career</li>

                            </ul>

                        </div>

                        <div className="col-md-3">
                        <h2 className="ms-3 mb-3">Products</h2>

                        <ul type="square">
                                <li>Savings Deposit</li>
                                <li>Fixed Deposit</li>
                                <li>Daily Deposit Scheme</li>
                                <li>Recuring Deposit</li>
                                <li>Gold Loan</li>
                                <li>Personal Loan</li>
                                <li>Vehical Loan</li>

                            </ul>
                            
                        </div>

                        <div className="col-md-3">
                        <h2 className="ms-3 mb-3">Head Offices</h2>

                        <ul type="none">
                                <li><ion-icon name="location" style={{"color":"rgb(131,184,52)","font-size":"20px","margin-top":"2px"}}></ion-icon>Samata Marg, kopargaon Dist-AhmedNagar 423601</li>
                                <li className="mt-3"><ion-icon name="call" style={{"color":"rgb(131,184,52)","font-size":"20px","margin-top":"2px"}}></ion-icon>(02423) 225555.</li>
                                <li className="mt-3"><ion-icon name="mail" style={{"color":"rgb(131,184,52)","font-size":"20px","margin-top":"2px"}}></ion-icon>Call Center No :7722010222.</li>
                               

                            </ul>
                            
                        </div>

                        <div className="col-md-3">
                        <h2 className="ms-3 mb-3">Newsletter</h2>

                        <input type="email" placeholder="E-Mail" className="p-1 ps-3 pe-3 bg-white border border-none rounded" style={{"outline":"none"}}
                        / >


                            <div className="icon d-flex mt-4">
                            <ion-icon name="logo-facebook" className="text-white" style={{"font-size":"25px","cursor":"pointer","margin-left":"15px"}}></ion-icon>
                            <ion-icon name="logo-instagram" className="text-white" style={{"font-size":"25px","cursor":"pointer","margin-left":"15px"}}></ion-icon>
                            <ion-icon name="logo-twitter" className="text-white" style={{"font-size":"25px","cursor":"pointer","margin-left":"15px"}}></ion-icon>
                            </div>
                            
                        </div>

                    </div>

                </div>

                <div className="row" style={{"background-color":"rgb(52,57,149)"}}>
                    <div className="col-md-12">
                        <p style={{"background-color":"rgb(52,57,149)","color":"white","textAlign":"center"}}>© Copyright - Samatapat 2024 All rights reserved.</p>
                    </div>
                </div>
                

            </div>
        </div>
        </>
    )
}