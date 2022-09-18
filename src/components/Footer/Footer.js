import { Fragment } from "react"

const Footer = () => {
    return (
        <Fragment>
            <footer className="padding-top-100px padding-bottom-70px background-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 sm-mb-30px">
                            <div className="logo margin-bottom-10px"><img src="/img/logo-1.png" alt="" /></div>
                            <div className="text-grey-2  font-weight-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .</div>
                            <ul className="list-inline text-left margin-tb-20px margin-lr-0px text-white">
                                <li className="list-inline-item"><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a className="youtube" href="#"><i className="fab fa-youtube"></i></a></li>
                                <li className="list-inline-item"><a className="linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>
                                <li className="list-inline-item"><a className="google" href="#"><i className="fab fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a className="rss" href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4  col-md-4 sm-mb-30px">
                            <ul className="footer-menu-2 row margin-0px padding-0px list-unstyled">
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Home</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Featured</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Feedback</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Ask a Question</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Team</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Maintenance</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Get a Quote</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4  col-md-4 sm-mb-30px">
                            <ul className="footer-menu-2 row margin-0px padding-0px list-unstyled">
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Home</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Featured</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Feedback</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Ask a Question</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Team</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Maintenance</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Get a Quote</a></li>
                                <li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Contact Us</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
            <div className="padding-tb-10px background-main-color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-white margin-tb-15px text-center text-lg-left">
                                Cook Note | @2018 All copy rights reserved
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-inline text-lg-right text-center margin-lr-0px margin-tb-15px text-white">
                                <li className="list-inline-item margin-lr-8px"><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item margin-lr-8px"><a className="facebook" href="#"><i className="fab fa-youtube"></i></a></li>
                                <li className="list-inline-item margin-lr-8px"><a className="facebook" href="#"><i className="fab fa-linkedin"></i></a></li>
                                <li className="list-inline-item margin-lr-8px"><a className="facebook" href="#"><i className="fab fa-google-plus"></i></a></li>
                                <li className="list-inline-item margin-lr-8px"><a className="facebook" href="#"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item margin-lr-8px"><a className="rss" href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;