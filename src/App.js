import React, { useContext, useState } from 'react';
import './App.css';
import Frame1 from './assets/img/portfolio/Frame1.jpg';
import Frame2 from './assets/img/portfolio/Frame2.jpg';
import Frame3 from './assets/img/portfolio/Frame3.jpg';
import Frame4 from './assets/img/portfolio/Frame4.jpg';
import Frame5 from './assets/img/portfolio/Frame5.jpg';
import Frame6 from './assets/img/portfolio/Frame6.jpg';
import Frame7 from './assets/img/portfolio/Frame7.jpg';
import Frame8 from './assets/img/portfolio/Frame8.jpg';
import Frame9 from './assets/img/portfolio/Frame9.jpeg';
import Frame10 from './assets/img/portfolio/Frame10.jpg';
import Frame11 from './assets/img/portfolio/Frame11.jpg';
import Frame12 from './assets/img/portfolio/Frame12.jpg';

import logo from './assets/img/portfolio/logo.png';
import axios from 'axios';

// Language Selector
// import { LanguageProvider } from './containers/Language';
import LanguageSelector from './components/LanguageSelector';
import { Text, LanguageContext } from './containers/Language';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_PLACE_ID = process.env.REACT_APP_PLACE_ID;
const API_URL = `https://www.google.com/maps/embed/v1/place?q=place_id:${API_PLACE_ID}&key=${API_KEY}&language=he`;

export default function App() {
    const { userLanguage } = useContext(LanguageContext);

    //ContactF
    const [data, setData] = useState({ name: '', email: '', phone: '', message: '', sent: false, buttonText: <Text tid="buttonTextSendMsgFirst" />, err: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();

        setData({
            ...data,
            buttonText: <Text tid="buttonTextIsSending" />
        })

        axios.post('/api/sendmail', data)
            .then(res => {
                if (res.data.result !== 'success') {
                    setData({
                        ...data,
                        buttonText: <Text tid="buttonTextFailed" />,
                        sent: false,
                        err: 'fail'
                    })
                    setTimeout(() => {
                        resetForm()
                    }, 6000)
                } else {
                    setData({
                        ...data,
                        sent: true,
                        buttonText: <Text tid="buttonTextMsgSent" />,
                        err: 'success'
                    })
                    setTimeout(() => {
                        resetForm();
                    }, 6000)
                }
            }).catch((err) => {
                setData({
                    ...data,
                    buttonText: <Text tid="buttonTextFailed" />,
                    err: 'fail'
                })
            })
    }

    const resetForm = () => {
        setData({
            name: '',
            email: '',
            phone: '',
            message: '',
            sent: false,
            buttonText: <Text tid="buttonTextSendMsg" />,
            err: ''
        });
    }

    return (
        <div className="body">
            <div id="page-top">
                {/* <!-- Navigation--> */}
                <nav class="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
                    <div class="container">
                        <a className="logo" href="#page-top" > <img src={logo} alt="LOGO" /> </a>

                        {/* <a class="navbar-brand js-scroll-trigger" href="#page-top">Raphael Frames & Art</a> */}
                        {/* <LanguageSelector /> */}
                        <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <Text tid="MenuToggleBtn" /><i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav">
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#services"><Text tid="OurServicesNav" /></a></li>
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio"><Text tid="GalleryNav" /></a></li>
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about"><Text tid="AboutUsNav" /></a></li>
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact"><Text tid="ContactUsNav" /></a></li>
                            </ul>
                        </div>
                        <LanguageSelector />
                    </div>

                </nav>
                {/* <!-- Masthead--> */}

                <header class="masthead bg-primary text-white text-center">
                    <div class="container d-flex align-items-center flex-column">
                        {/* <!-- Masthead Avatar Image--> */}
                        {/* <img class="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" />  */}
                        {/* <!-- Masthead Heading--> */}
                        <h3 className={userLanguage === 'en' ? 'weareEn' : 'weareHeb'}><Text tid="FirstHeader" /></h3>
                        <h1 className={userLanguage === 'en' ? 'HeaderEn' : 'HeaderHeb'}><Text tid="Header" /></h1>
                        {/* <!-- Icon Divider--> */}
                        <div class="divider-custom divider-light">
                            <div>

                                <p className={userLanguage === 'en' ? 'EnMode' : 'HebMode'}><Text tid="SubHeader" /></p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <a href="https://wa.me/972522604395" class="float" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-whatsapp my-float"></i>
                        </a>
                    </div>

                </header>

                {/* class="page-section bg-primary text-white mb-0" */}

                <section id="services">
                    <div className="services">
                        <h1><Text tid="OurServices" /></h1>
                        <div className="cen">
                            <div className="service">
                                 <i class="far fa-image"></i>
                                <h2><Text tid="OurServicesH1" /></h2>
                                <p><Text tid="OurServicesP1" /></p>
                            </div>

                            <div className="service">
                                <i class="fas fa-palette"></i>
                                <h2><Text tid="OurServicesH2" /></h2>
                                <p><Text tid="OurServicesP2" /></p>
                            </div>

                            <div className="service">
                                <i class="far fa-comments"></i>
                                <h2><Text tid="OurServicesH3" /></h2>
                                <p><Text tid="OurServicesP3" /></p>
                            </div>

                            <div className="service">
                                <i class="fas fa-crop-alt"></i>
                                <h2><Text tid="OurServicesH6" /></h2>
                                <p><Text tid="OurServicesP6" /></p>
                            </div>

                            <div className="service">
                                <i class="fas fa-camera-retro"></i>
                                <h2><Text tid="OurServicesH5" /></h2>
                                <p><Text tid="OurServicesP5" /></p>
                            </div>

                            <div className="service">
                                <i class="fas fa-user-tie"></i>
                                <h2><Text tid="OurServicesH4" /></h2>
                                <p><Text tid="OurServicesP4" /></p>
                            </div>
                        </div>
                    </div>

                </section>


                {/* <!-- Our Rooms Section--> */}
                <section class="page-section portfolio" id="portfolio">
                    <div class="container">
                        <div class="gallery">
                            <h1><Text tid="GalleryNav" /></h1>
                        </div>


                        <div class="divider-custom"> </div>

                        <div class="row justify-content-center">
                        
                            {/* <!-- Portfolio Item 1--> */}
                            <div class="col-md-6 col-lg-3 mb-3">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img class="Mimg-fluid" src={Frame1} alt="GalleryIMAGE" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 2--> */}
                            <div class="col-md-6 col-lg-3 mb-3">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img class="Mimg-fluid" src={Frame2} alt="GalleryImage" />
                                </div>
                            </div>         
                            {/* <!-- Portfolio Item 3--> */}
                            <div class="col-md-6 col-lg-3 mb-3">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img class="Mimg-fluid" src={Frame3} alt="GalleryImage " />
                                </div>
                            </div>
                            
                            {/* <!-- Portfolio Item 4--> */}
                            <div class="col-md-6 col-lg-3 mb-3">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Frame4} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 5--> */}
                            <div class="col-md-6 col-lg-3 mb-3">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Frame5} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 6--> */}
                            <div class="col-md-6 col-lg-3 mb-3">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Frame6} alt="GalleryImage" />
                                </div>
                            </div>
                            
                            
                            {/* <!-- Portfolio Item 7--> */}
                            <div class="col-md-6 col-lg-3 mb-3">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal7">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Frame7} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 8--> */}
                            <div class="col-md-6 col-lg-3 mb-3">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal8">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Frame8} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 9--> */}
                            <div class="col-md-6 col-lg-3 mb-3">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal9">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Frame9} alt="GalleryImage" />
                                </div>
                            </div>
                        
                         {/* <!-- Portfolio Item 10--> */}
                         <div class="col-md-6 col-lg-3 mb-3">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal10">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Frame10} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 11--> */}
                            <div class="col-md-6 col-lg-3 mb-3">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal11">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Frame11} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 12--> */}
                            <div class="col-md-6 col-lg-3 mb-3">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal12">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white" id="features"><i class="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={Frame12} alt="GalleryImage" />
                                </div>
                            </div>
                         
                     </div>
                    </div>
                </section>
                {/* <!-- About Section--> */}
                <section class="page-section bg-primary text-white mb-0" id="about">
                    <div class="container">


                        <div class="about">
                            <h1><Text tid="AboutUsNav" /></h1>
                        </div>


                        <div class="row">
                            <div className={userLanguage === 'en' ? 'EnAbout' : 'HebAbout'}>
                                <p><Text tid="AboutUsP" /><br /> <Text tid="AboutUsP2" /></p>
                            </div>

                        </div>

                    </div>
                </section>
                {/* <!-- Contact Section--> */}
                <section class="page-section" id="contact">
                    <div class="contact-head">
                        <h1><Text tid="ContactUsNav" /></h1>
                    </div>
                    {/* <div class="row"> */}
                    {/* <ContactForm/> */}
                    <div className="contactwrap">
                        <div className="contactin">
                            <h1><Text tid="ContactFormInfo" /></h1>

                            <span class="iContact">
                                <i class="fa fa-phone-alt" aria-hidden="true"></i>
                            </span>
                            <h2><Text tid="ContactFormInfoPhone" /></h2>
                            <p>02-6221442</p>
                            <p>052-2604395</p>

                            <span class="iContact">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                            <h2><Text tid="ContactFormInfoEmail" /></h2>
                            <p>Raphaeld442@gmail.com</p>

                            <span class="iContact">
                                <i class="fa fa-map-pin" aria-hidden="true"></i>
                            </span>
                            <h2><Text tid="ContactFormInfoAddress" /></h2>

                            <p><Text tid="ContactFormInfoAddress1" /> <br />
                                <Text tid="ContactFormInfoAddress2" />, <br />
                                <Text tid="ContactFormInfoAddress3" />.</p>
                        </div>

                        <div className="contactin">
                            <h1><Text tid="ContactFormHeader" /></h1>
                            <form>
                                <input required type="text" class="contactin-input" placeholder="Full Name / שם מלא" name="name" value={data.name} onChange={handleChange} />
                                <input required type="text" class="contactin-input" placeholder="Phone Number / מס' טלפון" name="phone" value={data.phone} onChange={handleChange} />
                                <input required type="text" class="contactin-input" placeholder="Email / דואר אלקטרוני" name="email" value={data.email} onChange={handleChange} />
                                <textarea placeholder="Message / תיבת טקסט" class="contactin-textarea" name="message" value={data.message} onChange={handleChange}></textarea>
                                <button type="submit" value="Submit" class="contactin-btn" onClick={formSubmit}>{data.buttonText}</button>
                            </form>
                        </div>


                        <div className="contactin">
                            <iframe title="Gmaps"  frameborder="0" loading="lazy" allowfullscreen width="100%" height="auto"
                           src={API_URL} ></iframe>  
                        </div>

                    </div>

                    {/* </div> */}

                </section>
                {/* <!-- Footer--> */}
                <footer class="footer text-center">
                    <div class="container">
                        <div class="row">
                            {/* <!-- Footer Hours--> */}
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="mb-1"><Text tid="FooterLeft1" /></h4>
                                <p class="lead mb-0" id="footerLeft">
                                    <Text tid="FooterLeft2" />
                                    <br />
                                    <Text tid="FooterLeft3" />
                                    <br />
                                    <Text tid="FooterLeft4" />
                                    <br />
                                    <Text tid="FooterLeft5" />

                                </p>
                            </div>
                            {/* <!-- Footer Social Icons--> */}
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="mb-4"><Text tid="FooterCenter" /></h4>
                                <a class="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/RaphaelFramesandArt" target="_blank" rel="noopener noreferrer"><i class="fab fa-fw fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="https://www.google.co.il/" target="_blank" rel="noopener noreferrer"><i class="fab fa-google"></i></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="mailto:Raphaeld442@gmail.com" target="_blank" rel="noopener noreferrer"><i class="far fa-envelope"></i></a>
                            </div>

                            {/* <!-- Footer About Text--> */}
                            <div class="col-lg-4">
                                <h4 class="mb-1"><Text tid="FooterRight1" /></h4>
                                <p class="lead mb-0"> <Text tid="FooterRight2" /> </p>
                                <p class="lead mb-0"> <Text tid="FooterRight3" /> </p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- Copyright Section--> */}
                <div class="copyright py-3 text-center text-white">
                    <div class="container">
                        <small> <span class="AccessibilitySpan"> <Text tid="AccessibilityP" /></span>  <br />
                     Copyright © NirArgil 2021 </small>
                    </div>
                </div>
                {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
                {/* <div class="scroll-to-top d-lg-none position-fixed">
                    <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
                </div> */}
                
                {/* <!-- Portfolio Modals--> */}
                {/* <!-- Portfolio Modal 1--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-1" id="portfolioModal1Label"><Text tid="Modal1Head" /></h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-3" src={Frame1} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5"> asdasdasd.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                   Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 2--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-1" id="portfolioModal2Label"> <Text tid="Modal2Head" /> </h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-3" src={Frame2} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-1"><Text tid="Modal2Head" /></p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 3--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-1" id="portfolioModal3Label"> <Text tid="Modal3Head" /> </h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-3" src={Frame3} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 4--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-1" id="portfolioModal4Label"> <Text tid="Modal4Head" /></h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-3" src={Frame4} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 5--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-1" id="portfolioModal5Label"> <Text tid="Modal5Head" /> </h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-3" src={Frame5} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 6--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-1" id="portfolioModal6Label"> <Text tid="Modal6Head" /> </h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-3" src={Frame6} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Portfolio Modal 7--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal7" tabindex="-1" role="dialog" aria-labelledby="portfolioModal7Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-1" id="portfolioModal7Label"> <Text tid="Modal7Head" /> </h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-3" src={Frame7} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Portfolio Modal 8--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal8" tabindex="-1" role="dialog" aria-labelledby="portfolioModal8Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-1" id="portfolioModal8Label"><Text tid="Modal8Head" /></h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-3" src={Frame8} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Portfolio Modal 9--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal9" tabindex="-1" role="dialog" aria-labelledby="portfolioModal9Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-1" id="portfolioModal9Label"><Text tid="Modal9Head" /></h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-3" src={Frame9} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">AAALorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                       Close Window
                                                  </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 10--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal10" tabindex="-1" role="dialog" aria-labelledby="portfolioModal10Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-1" id="portfolioModal10Label"><Text tid="Modal10Head" /></h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-3" src={Frame10} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">AAALorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                       Close Window
                                                  </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 11--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal11" tabindex="-1" role="dialog" aria-labelledby="portfolioModal11Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-1" id="portfolioModal11Label"><Text tid="Modal11Head" /></h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-3" src={Frame11} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">AAALorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                       Close Window
                                                  </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 12--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal12" tabindex="-1" role="dialog" aria-labelledby="portfolioModal12Label" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content">
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                            <div class="modal-body text-center">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 class="portfolio-modal-title text-secondary mb-1" id="portfolioModal12Label"><Text tid="Modal12Head" /></h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img class="img-fluid rounded mb-3" src={Frame12} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p class="mb-5">AAALorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button class="btn btn-primary" data-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                       Close Window
                                                  </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    );
}
