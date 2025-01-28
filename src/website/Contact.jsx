import React from "react";

export default function Contact(){
    return(
        <>

<div className="container-fluid" style={{ overflow: "hidden" }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bg4">
                            <h1 className="text-end me-5 text-primary" style={{ zIndex: "9877", paddingTop: "100px" }}>Head Offices</h1>
                            <ul className="d-flex float-end" style={{ zIndex: "9877", paddingTop: "100px", listStyleType: "none" }}>
                                <li className="text-dark fs-4">Home</li>
                                <li className="text-dark fs-4 ms-4">Contact</li>
                                <li className="text-success fs-4 me-5 ms-3">Head Offices</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


<div className="container border border-0 border-bottom border-secondary">
    <div className="row">
        <div className="col-md-4">
            <ul type="none" className="d-flex">
                <li><ion-icon name="phone-portrait-outline" style={{"color":"blue","font-size":"100px","margin-top":"40px"}}></ion-icon></li>

                <li>
                    <ul type="none" className="mt-5">
                        <li className="mt-5"><h5>TOLL-FREE NUMBER</h5></li>
                        <li><h6 className="text-primary text-center fs-5">7722010222</h6></li>

                    </ul>
                </li>
            </ul>

        </div>
        <div className="col-md-4">
        <ul type="none" className="d-flex">
                <li><ion-icon name="mail-outline" style={{"color":"blue","font-size":"100px","margin-top":"40px"}}></ion-icon></li>

                <li>
                    <ul type="none" className="mt-5">
                        <li className="mt-5"><h5>EMAIL US</h5></li>
                        <li><h6 className="text-primary text-center fs-5">info@samatapat.net</h6></li>

                    </ul>
                </li>
            </ul>
            
            </div>

            <div className="col-md-4">
            <ul type="none" className="d-flex">
                <li><ion-icon name="location-outline" style={{"color":"blue","font-size":"100px","margin-top":"40px"}}></ion-icon></li>

                <li>
                    <ul type="none" className="mt-5">
                        <li className="mt-5 text-center"><h5>REACH US</h5></li>
                        <li><h6 className="text-primary text-center fs-5">Samata Marg, kopargaon Dist-AhmedNagar 423601</h6></li>

                    </ul>
                </li>
            </ul>
            
            </div>
    </div>
</div>

<div  className="container mt-5">
    <div className="row">
        <div className="col-md-7">
            <form>
                <div className="row">
                <div className="col-md-6" >
                    <input type="text" className="form-control" style={{"height":"50px"}} placeholder="Full Name"/>

                </div>

                <div className="col-md-6" >
                <input type="number" className="form-control" style={{"height":"50px"}} placeholder="Phone Number"/>

                    
                </div>

                </div>

                <div className="row mt-5">
                <div className="col-md-12" >
                    <input type="text" className="form-control" style={{"height":"50px"}} placeholder="Email Address"/>

                </div>
                </div>


                <div className="row mt-5">
                <div className="col-md-12" >
                    <textarea type="text" className="form-control" placeholder="Message" style={{"height":"150px"}}></textarea>

                </div>
                </div>

                <div className="row mt-5">
                <div className="col-md-6" >
                 <button className="btn btn-lg text-white" style={{"background":"rgb(129,181,54)"}}>Send Message →</button>
                </div>
                </div>
               

            </form>

        </div>
        <div className="col-md-5">
        <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15081.919388148694!2d74.7377318!3d19.086594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcba7eba35693f%3A0xa20bf9b8f710bdf9!2sSamata%20Patsanastha!5e0!3m2!1sen!2sin!4v1726841492805!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
    </div>
</div>


<div className="container-fluid p-5 bg-primary mt-5">
        <div className="row p-5">
            <div className="col-md-2 text-center">
                <button className="btn btn-white border border-white rounded-0 text-white fw-bold">Chairman</button>

            </div>
            <div className="col-md-2 text-center">
            <button className="btn btn-white border border-white rounded-0 text-white fw-bold">Board Of Director</button>

                
            </div>
            <div className="col-md-2 text-center">
            <button className="btn btn-white border border-white rounded-0 text-white fw-bold">Our Vision</button>

            
            </div>

            <div className="col-md-2 text-center">
            <button className="btn btn-white border border-white rounded-0 text-white fw-bold">Our Value</button>

                
            </div>
            <div className="col-md-2 text-center">
            <button className="btn btn-white border border-white rounded-0 text-white fw-bold">finacial Position</button>

            
            </div>
            <div className="col-md-2 text-center">
            <button className="btn btn-white border border-white rounded-0 text-white fw-bold">Our Team</button>

            
            </div>

        </div>



        <div className="row">
            <div className="col-md-1">

            </div>
            <div className="col-md-1">

                
            </div>
            <div className="col-md-3 text-center">
            <button className="btn btn-white border border-white rounded-0 text-white fw-bold">Our Patners</button>

            
            </div>

            <div className="col-md-3 text-center">
            <button className="btn btn-white border border-white rounded-0 text-white fw-bold">Our Ventres</button>

                
            </div>
            <div className="col-md-2 text-center">
            <button className="btn btn-white border border-white rounded-0 text-white fw-bold">News And Update</button>

            
            </div>
            <div className="col-md-2 text-center">

            
            </div>

        </div>
    </div>
        
        </>
    )
}