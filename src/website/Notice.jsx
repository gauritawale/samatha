import React from "react";


export default function Notice(){
    return(
        <>
        <div className="container-fluid" style={{ overflow: "hidden" }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bg5">
                            <h1 className="text-end me-5 text-primary" style={{ zIndex: "9877", paddingTop: "100px" }}>Notice</h1>
                            <ul className="d-flex float-end" style={{ zIndex: "9877", paddingTop: "100px", listStyleType: "none" }}>
                                <li className="text-dark fs-4">Home</li>
                                <li className="text-dark fs-4 ms-4">Notice</li>
                                <li className="text-success fs-4 me-5 ms-3">Notice</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container" style={{ overflow: "hidden" }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="notice">
                            
                        </div>
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