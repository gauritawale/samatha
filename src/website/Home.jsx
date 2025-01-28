import React, { useEffect } from 'react'
import { FaRegThumbsUp } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoDocument } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import Aos from 'aos';



export default function Home() {

  useEffect(() => {
    Aos.init();
})

var changeneed1 = () => {
    document.getElementById("nead1").style.display = "block";
    document.getElementById("nead2").style.display = "none";
    document.getElementById("nead3").style.display = "none";
}
var changeneed2 = () => {
    document.getElementById("nead2").style.display = "block";
    document.getElementById("nead1").style.display = "none";
    document.getElementById("nead3").style.display = "none";
}
var changeneed3 = () => {
    document.getElementById("nead3").style.display = "block";
    document.getElementById("nead1").style.display = "none";
    document.getElementById("nead2").style.display = "none";
}
  return (
    <>
      <div
        className="container-fluid"
        style={{ background: "rgb(255,255,255)" }}
      >
        <div className="row">
          <div className="col-md-9 col-12">
            <div
              id="carouselExampleControlsNoTouching"
              className="carousel slide"
              data-bs-touch="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://www.samatapat.com/admin/uploads/slider/slidup660d0cea25788.jpg"
                    className="d-block img-fluid img-thumbnail w-100 rounded p-2"
                    style={{ height: "430px" }}
                    alt="Slider 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.samatapat.com/admin/uploads/slider/n865b0f27016f7d.jpg"
                    className="d-block img-fluid img-thumbnail w-100 rounded p-2"
                    style={{ height: "430px" }}
                    alt="Slider 2"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-md-3 col-12 p-3 bg-white shadow text-center rounded">
            <h5 className="text-center">
              What are you looking <br /> for?
            </h5>
            <hr />
            <form>
              <label>Select Loan</label>
              <select className="form-control">
                <option>Personal Loan</option>
                <option>Vehicle Loan</option>
                <option>Gold Loan</option>
                <option>Term Deposits</option>
                <option>Savings</option>
                <option>Daily Deposits</option>
                <option>Mobile Banking</option>
                <option>Locker</option>
              </select>
              <br />
              <input type="text" placeholder="Full Name" className="form-control" />
              <br />
              <input type="email" placeholder="Email" className="form-control" />
              <br />
              <input type="number" placeholder="Phone" className="form-control" />
              <br />
              <button
                className="btn text-white btn-lg"
                style={{ background: "rgb(129,181,54)" }}
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
      <section className="container mt-3">
  <h2 className="text-center heading fontWeight700">Our Services</h2>
  <div id="serviceCarousel" className="carousel slide mt-3" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="row p-3">
          <div className="col-md-3">
            <div className="sliderItem text-center shadow p-2 rounded">
              <img src="https://www.samatapat.com/admin/uploads/service/personal-loan-samatapat654f08df32fb0.jpg" className="d-block img-fluid img-thumbnail w-100" alt="Personal Loan"/>
              <h4 className="sub_heading">Personal Loan</h4>
              <a href="#" className="btnSmall mb-2 text-white btn btn-sm" style={{"background":"rgb(129,181,54)"}}>Read More</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="sliderItem text-center shadow p-2 rounded">
              <img src="https://www.samatapat.com/admin/uploads/service/term-deposit-samatapt654f091678a68.jpg" className="d-block img-fluid img-thumbnail w-100" alt="NEFT/RTGS" />
              <h4 className="sub_heading">NEFT/RTGS</h4>
              <a href="#" className="btnSmall mb-2 text-white btn btn-sm" style={{"background":"rgb(129,181,54)"}}>Read More</a>
            </div>
          </div>



          <div className="col-md-3">
            <div className="sliderItem text-center shadow p-2 rounded">
              <img src="https://www.samatapat.com/admin/uploads/service/personal-loan-samatapat654f08df32fb0.jpg" className="d-block img-fluid img-thumbnail w-100" alt="NEFT/RTGS" />
              <h4 className="sub_heading">NEFT/RTGS</h4>
              <a href="#" className="btnSmall mb-2 text-white btn btn-sm" style={{"background":"rgb(129,181,54)"}}>Read More</a>
            </div>
          </div>


          <div className="col-md-3">
            <div className="sliderItem text-center shadow p-2 rounded">
              <img src="https://www.samatapat.com/admin/uploads/service/mobile-banking654f0886432fa.jpg" className="d-block img-fluid img-thumbnail w-100" alt="NEFT/RTGS" />
              <h4 className="sub_heading">NEFT/RTGS</h4>
              <a href="#" className="btnSmall mb-2 text-white btn btn-sm" style={{"background":"rgb(129,181,54)"}}>Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="row">
          <div className="col-md-3">
            <div className="sliderItem text-center shadow p-2 rounded">
              <img src="https://www.samatapat.com/admin/uploads/service/elocaker654f0850f0e13.jpg" className="d-block img-fluid img-thumbnail w-100" alt="Personal Loan"/>
              <h4 className="sub_heading">Personal Loan</h4>
              <a href="#" className="btnSmall mb-2 text-white btn btn-sm" style={{"background":"rgb(129,181,54)"}}>Read More</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="sliderItem text-center shadow p-2 rounded">
              <img src="https://www.samatapat.com/admin/uploads/service/saving654f08f67348a.jpg" className="d-block img-fluid img-thumbnail w-100" alt="NEFT/RTGS" />
              <h4 className="sub_heading">NEFT/RTGS</h4>
              <a href="#" className="btnSmall mb-2 text-white btn btn-sm" style={{"background":"rgb(129,181,54)"}}>Read More</a>
            </div>
          </div>



          <div className="col-md-3">
            <div className="sliderItem text-center shadow p-2 rounded">
              <img src="https://www.samatapat.com/admin/uploads/service/personal-loan-samatapat654f08df32fb0.jpg" className="d-block img-fluid img-thumbnail w-100" alt="NEFT/RTGS" />
              <h4 className="sub_heading">NEFT/RTGS</h4>
              <a href="#" className="btnSmall mb-2 text-white btn btn-sm" style={{"background":"rgb(129,181,54)"}}>Read More</a>
            </div>
          </div>


          <div className="col-md-3">
            <div className="sliderItem text-center shadow p-2 rounded">
              <img src="https://www.samatapat.com/admin/uploads/service/saving654f08f67348a.jpg" className="d-block img-fluid img-thumbnail w-100" alt="NEFT/RTGS" />
              <h4 className="sub_heading">NEFT/RTGS</h4>
              <a href="#" className="btnSmall mb-2 text-white btn btn-sm" style={{"background":"rgb(129,181,54)"}}>Read More</a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    
    <button className="carousel-control-prev btn  rounded-circle p-3" style={{"height":"50px","width":"50px","background":"rgb(129,181,54)","margin-top":"100px"}} type="button" data-bs-target="#serviceCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next rounded-circle p-3" style={{"height":"50px","width":"50px","background":"rgb(129,181,54)","margin-top":"100px"}} type="button" data-bs-target="#serviceCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>

        <section>
          <div className="container mt-3">
            <div className="row text-center">
              <h2>Gold Loan</h2>
              <p>Avail Gold loan at a truly unparalleled rate of interest to overcome financial exigenies.</p>
            </div>
            <div className="row mt-3">
              {[
                { img: "deal654f0ee26d389.png", title: "Hassle free documentation" },
                { img: "loan654f0ed05e778.png", title: "Speedy sanction & Disbursal" },
                { img: "safe-box654f0ebfbdd8c.png", title: "Safety of Gold ornaments" },
                { img: "prepayment654f0e96ddfbc.png", title: "Zero prepayment charges" },
              ].map((feature, idx) => (
                <div key={idx} className="col-md-3 col-6">
                  <div className="loanItem">
                    <div className="iconLoan">
                      <img
                        src={`https://www.samatapat.com/admin/uploads/gold_loan_benefit/${feature.img}`}
                        className="img-fluid border border-primary rounded-circle p-4 ms-3"
                        alt={feature.title}
                      />
                    </div>
                    <h6 className="small_heading ms-2 fontWeight600">{feature.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-md-5 col-12">
                <div className="leftAboutHome mt-5">
                  <div className="innerLeftAbout">
                    <img
                      src="https://www.samatapat.com/admin/uploads/homepage/aboutimg6548b80ce9135.jpg"
                      alt="About Us"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-12">
                <div className="rightAboutHome mt-5">
                  <h4 className="heading fontWeight700 text-uppercase">ABOUT US</h4>
                  <p className="mt-2 title text-primary">
                    All-round progress of Samata Civil Co-operative Credit Institutions:
                  </p>
                  <p>
                  With a view to meet the financial needs of the small traders in Kopargaon town, Samata was established on 11 May 1986 in a premises of 10 by 15 feet on Shivaji Road with a share capital of Rs 1 lakh, deposits of Rs 3 lakh and 700 members to bring equality among the small traders of the taluka Civic Cooperative Credit Institution was established. Since the inception of Samata, maintaining the principles of co-operation on the basis of co-operative principles, in the initial four years till 1991, the institution had attained the deposits of Rs.1 crore. After that, under the guidance of Chairman Omprakash Dadappaalias Kaka Koyate and Board of Directors of Samata Credit Union, Samata is taking the graph of financial progress higher without looking back. Today, Samata Credit Union has 21 extended gold loan counters with 13 branches and has a network of Samata Credit Union all over Maharashtra. Samata Patsanstha has 67,982 members through 16 branches and 23 gold loan extensions counter,extended cells as on 24 May 2022. While disbursing Rs. 665 crore 81 lakh deposits and disbursing loans of Rs 497 crore, it has crossed the milestone of Rs 1,200 crore combined business                  </p>
                  <a href="https://www.samatapat.com/about.php" className="linkBtn">
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      <div className='container-fluid bg-light pt-5 pb-5 header5'>
                <div className='row'>
                    <div className='col-md-12 p-4'>
                        <h1>All you need to know</h1>
                    </div>
                    <div className='col-md-12 header5_part1'>
                        <button className='btn btn-sm border   border-success ms-4' onClick={changeneed1}><FaRegThumbsUp />  <span>Features</span> </button>
                        <button className='btn btn-sm border   border-success ms-4' onClick={changeneed2}><GoArrowUpRight />  <span>Eligibility</span> </button>
                        <button className='btn btn-sm border   border-success ms-4' onClick={changeneed3}><IoDocument />  <span>Documents</span> </button>
                    </div>
                    <div className='col-md-12 header5_part2' id='nead1' data-aos="fade-up">
                        <ul type="none" className='p-0 ps-2 mt-3'>
                            <li>Hassle free documentation</li>
                            <li>Speedy sanction & Disbursal of loans</li>
                            <li>Safety of Gold Ornaments</li>
                        </ul>
                    </div>
                    <div className='col-md-12 header5_part2' id='nead2' data-aos="fade-up">
                        <ul type="none" className='p-0 ps-2 mt-3'>
                            <li>
                                The applicant must be true owner of the gold ornaments and jewellery to be pledged with the bank.
                            </li>
                            <li>
                                Min Age: 21 years while applying.
                            </li>
                            <li>
                                Max Age: Max: 60 years at loan maturity.
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-12 header5_part2' id='nead3' data-aos="fade-up">
                        <ul type="none" className='p-0 ps-2 mt-3'>
                            <li>Duly filled form</li>
                            <li>Income Proof Of Applicant</li>
                            <li>KYC Documents</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container-fluid mt-5 mb-5 header6'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center' style={{ fontFamily: 'Times New Roman, Times, serif' }}>Videos</h1>
                    </div>
                    <div className='col-md-3 header_part1' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='card card-body p-0'>
                            <img src='https://img.youtube.com/vi/4yoVpCAgNqE/hqdefault.jpg' className='w-100' />
                            <a href='https://youtu.be/4yoVpCAgNqE?si=Hhf73RBXPJufZL7G' target='_blank'><FaYoutube /></a>
                            <h5 style={{ fontFamily: 'Times New Roman, Times, serif' }} className='ps-2'>Don't be tempted by high interest rates, insist on...</h5>
                        </div>
                    </div>
                    <div className='col-md-3 header_part1' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='card card-body p-0'>
                            <img src='https://img.youtube.com/vi/E29HIuhI5RM/hqdefault.jpg' className='w-100' />
                            <a href='https://youtu.be/4yoVpCAgNqE?si=Hhf73RBXPJufZL7G' target='_blank'><FaYoutube /></a>
                            <h5 style={{ fontFamily: 'Times New Roman, Times, serif' }} className='ps-2'>Don't be tempted by high interest rates, insist on...</h5>
                        </div>
                    </div>
                    <div className='col-md-3 header_part1' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='card card-body p-0'>
                            <img src='https://img.youtube.com/vi/tesVToUx-l4/hqdefault.jpg' className='w-100' />
                            <a href='https://youtu.be/4yoVpCAgNqE?si=Hhf73RBXPJufZL7G' target='_blank'><FaYoutube /></a>
                            <h5 style={{ fontFamily: 'Times New Roman, Times, serif' }} className='ps-2'>Don't be tempted by high interest rates, insist on...</h5>
                        </div>
                    </div>
                    <div className='col-md-3 header_part1' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='card card-body p-0'>
                            <img src='https://img.youtube.com/vi/DYGGIL3ialA/hqdefault.jpg' className='w-100' />
                            <a href='https://youtu.be/4yoVpCAgNqE?si=Hhf73RBXPJufZL7G' target='_blank'><FaYoutube /></a>
                            <h5 style={{ fontFamily: 'Times New Roman, Times, serif' }} className='ps-2'>Don't be tempted by high interest rates, insist on...</h5>
                        </div>
                    </div>

                    <div className='col-md-12 header6_part2 text-center'>
                        <button className='btn btn-lg text-lg mt-5 text-white' style={{"background":"rgb(129,181,54)"}}>VIEW ALL VIDEOS</button>
                    </div>
                </div>
            </div>


    </>
  );
}
