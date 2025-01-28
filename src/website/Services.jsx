import React from "react";

export default function Services(){
    return(
        <>
         <div className="container-fluid" style={{ overflow: "hidden" }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bg3">
                            <h1 className="text-end me-5 text-primary" style={{ zIndex: "9877", paddingTop: "100px" }}>Micro ATM</h1>
                            <ul className="d-flex float-end" style={{ zIndex: "9877", paddingTop: "100px", listStyleType: "none" }}>
                                <li className="text-dark fs-4">Home</li>
                                <li className="text-dark fs-4 ms-4">Services</li>
                                <li className="text-success fs-4 me-5 ms-3">Micro ATM</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-9">
                        <div className="info">
                            <h1 className="text-start text-primary">Micro ATM</h1>
                            <br/>
                            <h4 className="text-success fw-bold">Overview</h4>
                            <p className="text-secondary mt-2 fs-6" style={{ textAlign: "justify" }}>
                            Samata Patsanstha has launched the Micro ATM in Credit Society for the first time. Any bank account holder with the help of debit card can withdraw money from any branch at any time during business hours.<br/><br/>

Micro ATM solution enables the unbanked rural people to easily access micro banking services in a very costeffective manner at remote locations. Micro ATM enables online updating of transactions, thereby helping rural banking digitalization.Micro ATM is cost-effective. They support vernacular language display and voice with inbuilt biometric authentication that helps the banks to achieve total financial inclusion in real terms.
                            </p>
                        </div>

                       
                    </div>

                    <div className="col-md-3 col-12 p-3 bg-white shadow rounded">
                        <h3 className="text-center text-primary">Our Services</h3>
                        <hr />
                        <ul type="none">
                            <li className="mt-2 fw-bold">Mobile Banking</li>
                            <li className="mt-2 fw-bold">Money Transfer</li>
                            <li className="mt-2 fw-bold">Locker</li>
                            <li className="mt-2 fw-bold">Micro ATM</li>
                            <li className="mt-2 fw-bold">Paper Less Banking</li>


                        </ul>
                       
                    </div>
                </div>
            </div>
        
        </>
    )
}