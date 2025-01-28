import React from "react"

export default function About(){
  
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                   
                <div className="bg">
                    <h1 className="text-end  text-primary" style={{"z-index":"9877","padding-top":"100px","margin-right":"70px"}}>About</h1>
                    <ul type="none" className="d-flex float-end " style={{"z-index":"9877","padding-top":"100px"}}>
                        <li className="text-dark fs-4 me-3">Home</li>
                        <li className="text-success fs-4  me-5">About</li>


                    </ul>




                    </div>

                </div>
            </div>
        </div>


        <div className="container">
        <div className="row">
                <div className="col-md-12 mt-4">
                        <h4 className="text-primary  text-start">About Samata Patsanstha.</h4>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-md-6 mt-5">
                        <p className="fw-bold"m style={{"textAlign":"justify"}}>
                            {/* {da && da.description} */}
                        </p>
                </div>

                <div className="col-md-6">
                       {/* <img src={da &&  da.about_image} className="w-100"/> */}
                </div>
            </div>


        </div>


    <div className="container-fluid p-5 bg-primary">
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