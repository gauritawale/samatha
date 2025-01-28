import React from "react";
export default function Careers(){
    return(

        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <div className="container-fluid" style={{ overflow: "hidden" }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bg5">
                            <h1 className="text-end me-5 text-primary" style={{ zIndex: "9877", paddingTop: "100px" }}>Careers</h1>
                            <ul className="d-flex float-end" style={{ zIndex: "9877", paddingTop: "100px", listStyleType: "none" }}>
                                <li className="text-dark fs-4">Home</li>
                                <li className="text-dark fs-4 ms-4">Careers</li>
                                <li className="text-success fs-4 me-5 ms-3">Careers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                <p className="fs-6"><span style={{"fontWeight":"bold"}}>Current Opening : </span><a href="#">Click here</a> for More details</p>

                </div>   
            </div>



            <div className="row">
                <div className="col-md-12 text-center mt-5">
                <div class="list mt-5">
    <ul className="d-flex flex-column flex-md-row ms-3 ms-md-5 list-unstyled">
        <li className="ms-0 ms-md-5 mb-4 mb-md-0 text-center">
            <span className="text-white p-2 pb-1 pt-1 border border-white rounded-circle" style={{"background":"rgb(129,181,54)"}}>1</span>
            <div className="line1 d-none d-md-block"></div>
            <p className="mt-3 mt-md-4">Which job role &amp; location<br/> excites you?</p>
        </li>
        <li className="ms-0 ms-md-5 mb-4 mb-md-0 text-center">
            <span className="bg-secondary text-white p-2 pb-1 pt-1 border border-white rounded-circle">2</span>
            <div className="line2 d-none d-md-block"></div>
            <p className="mt-3 mt-md-4">Could you tell us about<br/> yourself?</p>
        </li>
        <li className="ms-0 ms-md-5 text-center">
            <span className="bg-secondary text-white p-2 pb-1 pt-1 border border-white rounded-circle">3</span>
            <p className="mt-3 mt-md-4">How can we get in touch<br/> with you?</p>
        </li>
    </ul>
</div>


                </div>    
            </div>
        </div>


        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4"></div>

                <div className="col-md-4">
                    <form>
                        <label>Job Position</label><br/><br/>
                        <select className="form-control">
                            <option>Branch Manager</option>
                            <option>Assistant Branch Manager</option>
                            <option>Jr Officer</option>
                            <option>Sr Officer</option>
                            <option>Jr Officer for Gold Loan</option>
                            <option>Sr Officer for Gold Loan</option>
                            <option>Cashier</option>
                            <option>Receptionist</option>
                            <option>HR Manager</option>
                            <option>Loan Officer</option>
                            <option>Recovery Officer</option>
                        </select><br/>

                        <label>Job Location</label><br/>
                        <hr/>
                        <div>
                        <input type="radio" id="branch" name="location" value="Branch" className="ms-5"/>
                        <label for="branch" className="me-5 ms-1">Branch</label>

                        <input type="radio" id="gold-loan-counter" name="location" value="Gold Loan Counter"/>
                        <label for="gold-loan-counter" className="ms-1">Gold Loan Counter</label>
                    </div>

                    <br/><br/>
                    <label>Select Branch:</label>

                    <select className="form-control">
                            <option>Kopargaon</option>
                            <option>Shirdi</option>
                            <option>Shrirampur</option>
                            <option>Yeola</option>
                            <option>Pune</option>
                            <option>Gandhi Chowk</option>
                            <option>Nashik Road</option>
                            <option>Premdan Chowk</option>
                            <option>Vaijapur</option>
                            <option>Rahuri</option>
                            <option>Ahemednagar</option>
                        </select><br/><br/>

                        <button className="btn btn-lg text-white" style={{"background":"rgb(129,181,54)"}}>Continue</button>




                    </form>
                </div>

                <div className="col-md-4"></div>

            </div>

        </div >


        <div className="container-fluid p-5 bg-primary mt-4">
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