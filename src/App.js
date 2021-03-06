import React, { useContext, useState } from 'react';
import './App.css';
import Frame1 from './assets/img/portfolio/Frame1.webp';
import Frame2 from './assets/img/portfolio/Frame2.webp';
import Frame3 from './assets/img/portfolio/Frame3.webp';
import Frame4 from './assets/img/portfolio/Frame4.webp';
import Frame5 from './assets/img/portfolio/Frame5.webp';
import Frame6 from './assets/img/portfolio/Frame6.webp';
import Frame7 from './assets/img/portfolio/Frame7.webp';
import Frame8 from './assets/img/portfolio/Frame8.webp';
import Frame9 from './assets/img/portfolio/Frame9.webp';
import Frame10 from './assets/img/portfolio/Frame10.webp';
import Frame11 from './assets/img/portfolio/Frame11.webp';
import Frame12 from './assets/img/portfolio/Frame12.webp';

import logo from './assets/img/portfolio/logo.png';
import axios from 'axios';

// Language Selector
import './i18next';
import { useTranslation } from "react-i18next";
import { LangContext } from './LangContext';

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_PLACE_ID = process.env.REACT_APP_PLACE_ID;
const API_URL = `https://www.google.com/maps/embed/v1/place?q=place_id:${API_PLACE_ID}&key=${API_KEY}&language=he`;

export default function App() {
    const { t } = useTranslation();
    const { currentLang, changeLanguage } = useContext(LangContext);

    //ContactF
    const [data, setData] = useState({ name: '', email: '', phone: '', message: '', sent: false, buttonText: <p>{t("buttonTextSendMsgFirst")}</p>, err: '' })

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
            buttonText: <p>{t("buttonTextIsSending")}</p>
        })

        axios.post('/api/sendmail', data)
            .then(res => {
                if (res.data.result !== 'success') {
                    setData({
                        ...data,
                        buttonText: <p>{t("buttonTextFailed")}</p>,
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
                        buttonText: <p>{t("buttonTextMsgSent")}</p>,
                        err: 'success'
                    })
                    setTimeout(() => {
                        resetForm();
                    }, 6000)
                }
            }).catch((err) => {
                setData({
                    ...data,
                    buttonText: <p>{t("buttonTextFailed")}</p>,
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
            buttonText: <p>{t("buttonTextSendMsg")}</p>,
            err: ''
        });
    }

    return (
        <div className="body">
            <div id="page-top">
                {/* <!-- Navigation--> */}
                <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
                    <div className="container">
                        <a className="logo" href="#page-top" > <img src={logo} alt="LOGO" /> </a>

                        {/* <a className="navbar-brand js-scroll-trigger" href="#page-top">Raphael Frames & Art</a> */}

                        <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            {t("MenuToggleBtn")}<i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">{t("ContactUsNav")}</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">{t("AboutUsNav")}</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">{t("GalleryNav")}</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#services">{t("OurServicesNav")}</a></li>
                            </ul>
                        </div>
                        <ToggleButtonGroup className="langBtn" onChange={() => changeLanguage('en')} aria-label="text formatting">
                            <ToggleButton aria-label="languages">

                                <span>{currentLang === '??????????' ? <p>Eng</p> : <p>??????????</p>}</span>

                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>

                </nav>
                {/* <!-- Masthead--> */}

                <header className="masthead bg-primary text-white text-center">
                    <div className="container d-flex align-items-center flex-column">

                        <h3 className={currentLang === 'en' ? 'weareEn' : 'weareHeb'}>{t("FirstHeader")}</h3>
                        <h1 className={currentLang === 'en' ? 'HeaderEn' : 'HeaderHeb'}>{t("Header")}</h1>
                        {/* <!-- Icon Divider--> */}
                        <div className="divider-custom divider-light">
                            <div>

                                <p className={currentLang === 'en' ? 'EnMode' : 'HebMode'}>{t("SubHeader")}</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <a href="https://wa.me/972522604395" className="float" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp my-float"></i>
                        </a>
                    </div>

                </header>

                {/* className="page-section bg-primary text-white mb-0" */}

                <section id="services">
                    <div className="services">
                        <h1>{t("OurServices")}</h1>
                        <div className="cen">
                            <div className="service">
                                <i className="far fa-image"></i>
                                <h2>{t("OurServicesH1")}</h2>
                                <p>{t("OurServicesP1")}</p>
                            </div>

                            <div className="service">
                                <i className="fas fa-palette"></i>
                                <h2>{t("OurServicesH2")}</h2>
                                <p>{t("OurServicesP2")}</p>
                            </div>

                            <div className="service">
                                <i className="far fa-comments"></i>
                                <h2>{t("OurServicesH3")}</h2>
                                <p>{t("OurServicesP3")}</p>
                            </div>

                            <div className="service">
                                <i className="fas fa-crop-alt"></i>
                                <h2>{t("OurServicesH6")}</h2>
                                <p>{t("OurServicesP6")}</p>
                            </div>

                            <div className="service">
                                <i className="fas fa-camera-retro"></i>
                                <h2>{t("OurServicesH5")}</h2>
                                <p>{t("OurServicesP5")}</p>
                            </div>

                            <div className="service">
                                <i className="fas fa-user-tie"></i>
                                <h2>{t("OurServicesH4")}</h2>
                                <p>{t("OurServicesP4")}</p>
                            </div>
                        </div>
                    </div>

                </section>


                {/* <!-- Our Rooms Section--> */}
                <section className="page-section portfolio" id="portfolio">
                    <div className="container">
                        <div className="gallery">
                            <h1>{t("GalleryNav")}</h1>
                        </div>


                        <div className="divider-custom"> </div>

                        <div className="row justify-content-center">

                            {/* <!-- Portfolio Item 1--> */}
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" id="features"><i className="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img loading="lazy" className="Mimg-fluid" src={Frame1} alt="GalleryIMAGE" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 2--> */}
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" id="features"><i className="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img loading="lazy" className="Mimg-fluid" src={Frame2} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 3--> */}
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" id="features"><i className="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img loading="lazy" className="Mimg-fluid" src={Frame3} alt="GalleryImage " />
                                </div>
                            </div>

                            {/* <!-- Portfolio Item 4--> */}
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" id="features"><i className="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img loading="lazy" className="img-fluid" src={Frame4} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 5--> */}
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" id="features"><i className="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img loading="lazy" className="img-fluid" src={Frame5} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 6--> */}
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" id="features"><i className="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img loading="lazy" className="img-fluid" src={Frame6} alt="GalleryImage" />
                                </div>
                            </div>


                            {/* <!-- Portfolio Item 7--> */}
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal7">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" id="features"><i className="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img loading="lazy" className="img-fluid" src={Frame7} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 8--> */}
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal8">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" id="features"><i className="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img loading="lazy" className="img-fluid" src={Frame8} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 9--> */}
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal9">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" id="features"><i className="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img loading="lazy" className="img-fluid" src={Frame9} alt="GalleryImage" />
                                </div>
                            </div>

                            {/* <!-- Portfolio Item 10--> */}
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal10">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" id="features"><i className="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img loading="lazy" className="img-fluid" src={Frame10} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 11--> */}
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal11">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" id="features"><i className="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img loading="lazy" className="img-fluid" src={Frame11} alt="GalleryImage" />
                                </div>
                            </div>
                            {/* <!-- Portfolio Item 12--> */}
                            <div className="col-md-6 col-lg-3 mb-3">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal12">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white" id="features"><i className="fas fa-expand-alt fa-5x"></i></div>
                                    </div>
                                    <img loading="lazy" className="img-fluid" src={Frame12} alt="GalleryImage" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!-- About Section--> */}
                <section className="page-section bg-primary text-white mb-0" id="about">
                    <div className="container">


                        <div className="about">
                            <h1>{t("AboutUsNav")}</h1>
                        </div>


                        <div className="row">
                            <div className={currentLang === 'en' ? 'EnAbout' : 'HebAbout'}>
                                <p>{t("AboutUsP")}<br /> {t("AboutUsP2")}</p>
                            </div>

                        </div>

                    </div>
                </section>
                {/* <!-- Contact Section--> */}
                <section className="page-section" id="contact">
                    <div className="contact-head">
                        <h1>{t("ContactUsNav")}</h1>
                    </div>

                    {/* <ContactForm/> */}
                    <div className="contactwrap">
                        <div className="contactin">
                            <h1>{t("ContactFormInfo")}</h1>

                            <span className="iContact">
                                <i className="fa fa-phone-alt" aria-hidden="true"></i>
                            </span>
                            <h2>{t("ContactFormInfoPhone")}</h2>
                            <p>02-6221442</p>
                            <p>052-2604395</p>

                            <span className="iContact">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                            <h2>{t("ContactFormInfoEmail")}</h2>
                            <p>Raphaeld442@gmail.com</p>

                            <span className="iContact">
                                <i className="fa fa-map-pin" aria-hidden="true"></i>
                            </span>
                            <h2>{t("ContactFormInfoAddress")}</h2>

                            <p>{t("ContactFormInfoAddress1")} <br />
                                {t("ContactFormInfoAddress2")}, <br />
                                {t("ContactFormInfoAddress3")}.</p>
                        </div>

                        <div className="contactin">
                            <h1>{t("ContactFormHeader")}</h1>
                            <form>
                                <input required type="text" className="contactin-input" placeholder="Full Name / ???? ??????" name="name" value={data.name} onChange={handleChange} />
                                <input required type="text" className="contactin-input" placeholder="Phone Number / ????' ??????????" name="phone" value={data.phone} onChange={handleChange} />
                                <input required type="text" className="contactin-input" placeholder="Email / ???????? ????????????????" name="email" value={data.email} onChange={handleChange} />
                                <textarea placeholder="Message / ???????? ????????" className="contactin-textarea" name="message" value={data.message} onChange={handleChange}></textarea>
                                <button type="submit" value="Submit" className="contactin-btn" onClick={formSubmit}>{data.buttonText}</button>
                            </form>
                        </div>


                        <div className="contactin">
                            <iframe title="Gmaps" frameBorder="0" loading="lazy" allowFullScreen width="100%" height="auto"
                                src={API_URL} ></iframe>
                        </div>
                    </div>

                </section>
                {/* <!-- Footer--> */}
                <footer className="footer text-center">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Footer Hours--> */}
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <h4 className="mb-1">{t("FooterLeft1")}</h4>
                                <p className="lead mb-0" id="footerLeft">
                                    {t("FooterLeft2")}
                                    <br />
                                    {t("FooterLeft3")}
                                    <br />
                                    {t("FooterLeft4")}
                                    <br />
                                    {t("FooterLeft5")}

                                </p>
                            </div>
                            {/* <!-- Footer Social Icons--> */}
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <h4 className="mb-4">{t("FooterCenter")}</h4>
                                <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/RaphaelFramesandArt" target="_blank" rel="noopener noreferrer"><i className="fab fa-fw fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social mx-1" href="https://www.google.co.il/" target="_blank" rel="noopener noreferrer"><i className="fab fa-google"></i></a>
                                <a className="btn btn-outline-light btn-social mx-1" href="mailto:Raphaeld442@gmail.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></a>
                            </div>

                            {/* <!-- Footer About Text--> */}
                            <div className="col-lg-4">
                                <h4 className="mb-1">{t("FooterRight1")}</h4>
                                <p className="lead mb-0"> {t("FooterRight2")} </p>
                                <p className="lead mb-0"> {t("FooterRight3")} </p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- Copyright Section--> */}
                <div className="copyright py-3 text-center text-white">
                    <div className="container">
                        <small> <span className="AccessibilitySpan"> {t("AccessibilityP")}</span>  <br />
                            Copyright ?? NirArgil 2021 </small>
                    </div>
                </div>

                {/* <!-- Portfolio Modals--> */}
                {/* <!-- Portfolio Modal 1--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 className="portfolio-modal-title text-secondary mb-1" id="portfolioModal1Label">{t("Modal1Head")}</h2>

                                            <img className="img-fluid rounded mb-3" src={Frame1} alt="GalleryImage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 2--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 className="portfolio-modal-title text-secondary mb-1" id="portfolioModal2Label"> {t("Modal2Head")} </h2>

                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img className="img-fluid rounded mb-3" src={Frame2} alt="GalleryImage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 3--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 className="portfolio-modal-title text-secondary mb-1" id="portfolioModal3Label"> {t("Modal3Head")} </h2>

                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img className="img-fluid rounded mb-3" src={Frame3} alt="GalleryImage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 4--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 className="portfolio-modal-title text-secondary mb-1" id="portfolioModal4Label"> {t("Modal4Head")}</h2>
                                            {/* <!-- Icon Divider--> */}
                                            {/* <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                <div className="divider-custom-line"></div>
                                            </div> */}
                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img className="img-fluid rounded mb-3" src={Frame4} alt="GalleryImage" />
                                            {/* <!-- Portfolio Modal - Text--> */}
                                            {/* <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button className="btn btn-primary" data-dismiss="modal">
                                                <i className="fas fa-times fa-fw"></i>
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
                <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 className="portfolio-modal-title text-secondary mb-1" id="portfolioModal5Label"> {t("Modal5Head")} </h2>

                                            <img className="img-fluid rounded mb-3" src={Frame5} alt="GalleryImage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 6--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 className="portfolio-modal-title text-secondary mb-1" id="portfolioModal6Label"> {t("Modal6Head")} </h2>

                                            <img className="img-fluid rounded mb-3" src={Frame6} alt="GalleryImage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Portfolio Modal 7--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal7" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal7Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 className="portfolio-modal-title text-secondary mb-1" id="portfolioModal7Label"> {t("Modal7Head")} </h2>

                                            <img className="img-fluid rounded mb-3" src={Frame7} alt="GalleryImage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Portfolio Modal 8--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal8" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal8Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 className="portfolio-modal-title text-secondary mb-1" id="portfolioModal8Label">{t("Modal8Head")}</h2>

                                            <img className="img-fluid rounded mb-3" src={Frame8} alt="GalleryImage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Portfolio Modal 9--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal9" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal9Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 className="portfolio-modal-title text-secondary mb-1" id="portfolioModal9Label">{t("Modal9Head")}</h2>

                                            <img className="img-fluid rounded mb-3" src={Frame9} alt="GalleryImage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 10--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal10" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal10Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 className="portfolio-modal-title text-secondary mb-1" id="portfolioModal10Label">{t("Modal10Head")}</h2>

                                            {/* <!-- Portfolio Modal - Image--> */}
                                            <img className="img-fluid rounded mb-3" src={Frame10} alt="GalleryImage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 11--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal11" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal11Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 className="portfolio-modal-title text-secondary mb-1" id="portfolioModal11Label">{t("Modal11Head")}</h2>

                                            <img className="img-fluid rounded mb-3" src={Frame11} alt="GalleryImage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Modal 12--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal12" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal12Label" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fas fa-times"></i></span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* <!-- Portfolio Modal - Title--> */}
                                            <h2 className="portfolio-modal-title text-secondary mb-1" id="portfolioModal12Label">{t("Modal12Head")}</h2>

                                            <img className="img-fluid rounded mb-3" src={Frame12} alt="GalleryImage" />

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
