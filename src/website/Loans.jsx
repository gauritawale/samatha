import React, { useEffect, useState } from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoDocument } from "react-icons/io5";
import Aos from 'aos';

export default function Loans() {
const [activeSection, setActiveSection] = useState('features');

useEffect(() => {
Aos.init();
}, []);

return (
<>
<div className="container-fluid" style={{ overflow: "hidden" }}>
<div className="row">
    <div className="col-md-12">
        <div className="bg2">
            <h1 className="text-end me-5 text-primary" style={{ zIndex: "9877", paddingTop: "100px" }}>Personal Loans</h1>
            <ul className="d-flex float-end" style={{ zIndex: "9877", paddingTop: "100px", listStyle: 'none' }}>
                <li className="text-dark fs-4">Home</li>
                <li className="text-dark fs-4 ms-4">Loan</li>
                <li className="text-success fs-4 me-5 ms-3">Personal Loans</li>
            </ul>
        </div>
    </div>
</div>
</div>

<div className="container">
<div className="row mt-4">
    <div className="col-md-9">
        <div className="info">
            <h1 className="text-start text-primary">Personal Loans</h1>
            <p className="fw-bold mt-2 fs-6" style={{ textAlign: "justify" }}>
                No matter why you need a personal loan, Samata Patsanstha can customize the offering for you...
            </p>
        </div>

        <div className="row">
            <div className="col-md-12 p-4"></div>
            <div className="col-md-12 header5_part1">
                <button className="btn btn-sm border mb-5 border-success ms-4" onClick={() => setActiveSection('features')}>
                    <FaRegThumbsUp /> <span>Features</span>
                </button>
                <button className="btn btn-sm border mb-5 border-success ms-4" onClick={() => setActiveSection('whoCanApply')}>
                    <GoArrowUpRight /> <span>Who can Apply?</span>
                </button>
                <button className="btn btn-sm border mb-5 border-success ms-4" onClick={() => setActiveSection('interestRate')}>
                    <GoArrowUpRight /> <span>% Interest Rate</span>
                </button>
                <button className="btn btn-sm border mb-5 border-success ms-4" onClick={() => setActiveSection('documents')}>
                    <IoDocument /> <span>Documents</span>
                </button>
            </div>

            <div className="col-md-12 header5_part2" data-aos="fade-up">
                {activeSection === 'features' && (
                    <p style={{ textAlign: "justify" }}> Personal loans help you meet your expected as well as unexpected cash requirements.
                    <ul className='mt-3'>
                        <li>Attractive Interest Rates</li>
                        <li>Documentation Made Easy</li>
                        <li>Quick Processing</li>
                        <li>Fulfill Your Every Need</li>


                    </ul>
                    </p>
                        
                )}
                {activeSection === 'whoCanApply' && (
                    <p style={{ textAlign: "justify" }}>Purpose: Personal needs such as Housing, Education, Medical Emergencies, Travel etc. </p>
                )}
                {activeSection === 'interestRate' && (
                <table className="table table-bordered">
                <thead>
                <tr>
                    <th className='bg-primary text-white'>Days/Month</th>
                    <th className='bg-primary text-white'>Interest Rate (%)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>12 Months to 36 Months</td>
                    <td>15%</td>
                </tr>
                </tbody>
                </table>                )}
                {activeSection === 'documents' && (
                    <ul className="p-0 ps-2 mt-3">
                        <li>Loan Application </li>
                        <li>Income Proof Applicant</li>
                        <li>Photograph</li>
                        <li>Pan Card</li>
                        <li>Aadhar Card</li>
                        <li>Two Guarantors with all above Documents</li>
                    </ul>
                )}
            </div>
        </div>
    </div>

    <div className="col-md-3 col-12 p-3 bg-white shadow text-center rounded">
        <h3 className="text-center text-primary">Enquire Now</h3>
        <hr />
        <form>
            <input type="text" placeholder="Name" className="form-control" />
            <br />
            <input type="email" placeholder="Email" className="form-control" />
            <br />
            <input type="number" placeholder="Phone" className="form-control" />
            <br />
            <input type="text" placeholder="City" className="form-control" />
            <br />
            <textarea placeholder="Message" className="form-control" style={{ height: "100px" }}></textarea>
            <br />
            <button className="btn text-white btn-lg" style={{ background: "rgb(129,181,54)" }}>
                Send Now
            </button>
        </form>
    </div>
</div>
</div>

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
);
}
