import React, { useEffect, useState } from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoDocument } from "react-icons/io5";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Deposit() {
    const [activeSection, setActiveSection] = useState('nead1');

    useEffect(() => {
        Aos.init();
    }, []);

    const handleChangeSection = (section) => {
        setActiveSection(section);
    }

    return (
        <>
            <div className="container-fluid" style={{ overflow: "hidden" }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bg2">
                            <h1 className="text-end me-5 text-primary" style={{ zIndex: "9877", paddingTop: "100px" }}>Recurring Deposit</h1>
                            <ul className="d-flex float-end" style={{ zIndex: "9877", paddingTop: "100px", listStyleType: "none" }}>
                                <li className="text-dark fs-4">Home</li>
                                <li className="text-dark fs-4 ms-4">Deposit</li>
                                <li className="text-success fs-4 me-5 ms-3">Recurring Deposit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-9">
                        <div className="info">
                            <h1 className="text-start text-primary">Recurring Deposit</h1>
                            <p className="fw-bold mt-2 fs-6" style={{ textAlign: "justify" }}>
                                Recurring deposit account is opened by those who want to save regularly for a certain period of time and earn a higher interest rate. In Recurring deposit account, a certain fixed amount is accepted every month for a specified period and the total amount is repaid with interest at the end of the particular fixed period.
                            </p>
                        </div>

                        <div className='row'>
                            <div className='col-md-12 p-4'></div>
                            <div className='col-md-12 header5_part1'>
                                <button className='btn btn-sm border mb-5 border-success ms-4' onClick={() => handleChangeSection('nead1')}><FaRegThumbsUp /> <span>Informations</span></button>
                                <button className='btn btn-sm border mb-5 border-success ms-4' onClick={() => handleChangeSection('nead2')}><GoArrowUpRight /> <span>% Interest Rate</span></button>
                                <button className='btn btn-sm border mb-5 border-success ms-4' onClick={() => handleChangeSection('nead3')}><IoDocument /> <span>Documents</span></button>
                            </div>
                            <div className='col-md-12 header5_part2' style={{ display: activeSection === 'nead1' ? 'block' : 'none' }} data-aos="fade-up">
                                <p style={{ textAlign: "justify" }}>A Recurring Deposit is a special kind of term-deposit offered by SAMATA, which helps people with salaried incomes to deposit a fixed amount each month and earn interest equivalent to the interest on Fixed Deposits or FDs.</p>
                            </div>
                            <div className='col-md-12 header5_part2' style={{ display: activeSection === 'nead2' ? 'block' : 'none' }} data-aos="fade-up">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className='bg-primary text-white'>Days/Month</th>
                                            <th className='bg-primary text-white'>Interest Rate (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Up to 24 months</td>
                                            <td>7%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-md-12 header5_part2' style={{ display: activeSection === 'nead3' ? 'block' : 'none' }} data-aos="fade-up">
                                <ul className='p-0 ps-2 mt-3' style={{ listStyleType: 'circle' }}>
                                    <li>Photograph</li>
                                    <li>Pan Card</li>
                                    <li>Aadhar Card</li>
                                </ul>
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
                            <button className="btn text-white btn-lg" style={{ background: "rgb(129,181,54)" }}>Send Now</button>
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
    )
}
