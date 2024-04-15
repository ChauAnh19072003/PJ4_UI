import React, {Component} from "react";
import { Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="footer__wrapper">
                            <div className="footer__links-wrapper">
                                <ul className="footer__links">
                                    <li><Link to="/visitor" data-track-click="{&quot;category&quot;:&quot;Exit to Social Media&quot;,&quot;action&quot;:&quot;Exit&quot;,&quot;label&quot;:&quot;destination:Facebook Community, type:Link&quot;}">Community</Link>
                                    </li>
                                    <li><Link to="/visitor" data-track-click="{&quot;category&quot;:&quot;Exit to Social Media&quot;,&quot;action&quot;:&quot;Exit&quot;,&quot;label&quot;:&quot;destination:Facebook Page, type:Link&quot;}">Facebook</Link>
                                    </li>
                                    <li><Link to="/visitor" data-track-click="{&quot;category&quot;:&quot;Exit to Social Media&quot;,&quot;action&quot;:&quot;Exit&quot;,&quot;label&quot;:&quot;destination:Twitter, type:Link&quot;}">Twitter</Link>
                                    </li>
                                    <li><Link to="/visitor" data-track-click="{&quot;category&quot;:&quot;Exit to Social Media&quot;,&quot;action&quot;:&quot;Exit&quot;,&quot;label&quot;:&quot;destination:Instagram, type:Link&quot;}">Instagram</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer__links-wrapper">
                                <ul className="footer__links">
                                    <li><Link to="/visitor" data-track-click="{&quot;category&quot;:&quot;Exit to Blog&quot;,&quot;action&quot;:&quot;Exit&quot;,&quot;label&quot;:&quot;location:Footer&quot;}">Blog</Link></li>
                                    <li><Link to="/visitor">Contact us</Link></li>
                                    <li><Link to="https://files.spendee.com/terms-and-conditions/Terms%20of%20Use.pdf">Terms of use</Link></li>
                                    <li><Link to="https://files.spendee.com/terms-and-conditions/Privacy%20Policy.pdf">Privacy policy</Link></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="col-12 col-md-12 col-lg-4 text-center text-md-right">
                        <div className="store">
                            <Link to="/visitor" className="store__button store__button--apple" role="img"
                                aria-label="Get Spendee on App Store"
                                data-track-click="{&quot;category&quot;:&quot;Exit to Store&quot;,&quot;action&quot;:&quot;Exit&quot;,&quot;label&quot;:&quot;store:Apple, location:Footer&quot;}">
                                <svg xmlns="http://www.w3.org/2000/svg" id="AppStoreHover" viewBox="0 0 143 42">
                                    <path id="line" fill="#a6a6a6" d="M137.9 42H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5h132.9a5 5 0 0 1 5.1 5v32a5 5 0 0 1-5.1 5z" />
                                    <path id="path-1" fill="#283139" d="M137.9 41H5.1A4 4 0 0 1 1 37V5a4 4 0 0 1 4.1-4H138c2.2 0 4.1 1.8 4.1 4v32c-.1 2.2-1.9 4-4.2 4z" />
                                    <path id="hover" fillOpacity=".3" d="M137.9 41H5.1A4 4 0 0 1 1 37V5a4 4 0 0 1 4.1-4H138c2.2 0 4.1 1.8 4.1 4v32c-.1 2.2-1.9 4-4.2 4z" />
                                    <path id="logo" fill="#ffffff" d="M19.2 14.5c0-3.4 2.8-5 2.9-5.1a6 6 0 0 0-5-2.7c-2-.2-4.1 1.2-5.1 1.2-1.1 0-2.7-1.2-4.5-1.2A6.2 6.2 0 0 0 2 10.1c-2.4 4.1-.6 10.2 1.7 13.5C4.8 25.2 6.2 27 7.9 27c1.7-.1 2.4-1.1 4.4-1.1 2.1 0 2.7 1.1 4.4 1 1.8 0 3-1.6 4.1-3.3 1.3-1.9 1.9-3.7 1.9-3.8 0 0-3.5-1.3-3.5-5.3zm-3.4-10A5.9 5.9 0 0 0 17.2.2c-1.3.1-3 .9-4 2-.9 1-1.6 2.6-1.4 4.1 1.5.2 3-.7 4-1.8z" className="st3" transform="translate(12.7 6.3)" />
                                    <path id="text" fill="#ffffff" d="M12.3 14.2H9.9l-1.3-4.1H4l-1.3 4.1H.4L5 .2h2.8l4.5 14zM8.2 8.3L7 4.7l-.7-2.6-.7 2.6-1.2 3.6h3.8zM24 9a6 6 0 0 1-1.4 4.1 4 4 0 0 1-3.1 1.3c-1.3 0-2.3-.5-2.9-1.4v5.3h-2.3V7.4l-.1-3.3h2l.1 1.6a3.8 3.8 0 0 1 3.4-1.8c1.2 0 2.2.5 3 1.4A5 5 0 0 1 24 9zm-2.3.1c0-1-.2-1.8-.7-2.4-.5-.7-1.1-1-2-1-.6 0-1.1.2-1.5.5-.5.4-.7.8-.9 1.4l-.1.7V10c0 .7.2 1.3.7 1.9.5.5 1 .8 1.8.8s1.5-.3 2-1a5 5 0 0 0 .7-2.6zM35.6 9a6 6 0 0 1-1.4 4.1 4 4 0 0 1-3.1 1.3c-1.3 0-2.3-.5-2.9-1.4v5.3h-2.3V7.4l-.1-3.3h2l.2 1.6a3.8 3.8 0 0 1 3.4-1.8c1.2 0 2.2.5 3 1.4.8.9 1.2 2.2 1.2 3.7zm-2.3.1c0-1-.2-1.8-.7-2.4-.5-.7-1.1-1-2-1-.6 0-1.1.2-1.5.5-.5.4-.7.8-.9 1.4l-.1.7V10c0 .7.2 1.3.7 1.9.5.5 1 .8 1.8.8s1.5-.3 2-1 .7-1.5.7-2.6zm15.4 1.1c0 1.2-.4 2.2-1.2 2.9-.9.8-2.2 1.2-3.8 1.2-1.5 0-2.7-.3-3.6-.9l.5-1.9c1 .6 2.1.9 3.3.9.8 0 1.5-.2 2-.6.5-.4.7-.9.7-1.5s-.2-1-.6-1.4c-.4-.4-1-.7-1.9-1.1-2.5-.9-3.7-2.2-3.7-4 0-1.1.4-2.1 1.3-2.8.9-.7 2-1.1 3.4-1.1 1.3 0 2.3.2 3.2.7l-.6 1.8a6 6 0 0 0-2.7-.6c-.8 0-1.4.2-1.9.6-.4.3-.6.8-.6 1.3 0 .6.2 1 .6 1.4l2 1.1a7 7 0 0 1 2.7 1.7c.6.6.9 1.4.9 2.3zm7.4-4.4h-2.5v4.9c0 1.2.4 1.9 1.3 1.9l1-.1.1 1.7c-.4.2-1 .2-1.8.2-.9 0-1.6-.3-2.1-.8s-.8-1.4-.8-2.7V5.8H50V4.1h1.5V2.3l2.2-.7v2.5h2.5v1.7zM67.3 9c0 1.5-.4 2.8-1.3 3.8s-2.2 1.5-3.7 1.5-2.7-.5-3.6-1.5-1.3-2.2-1.3-3.7c0-1.6.5-2.8 1.4-3.8.9-1 2.1-1.5 3.7-1.5 1.5 0 2.7.5 3.6 1.5.8 1 1.2 2.2 1.2 3.7zm-2.3.1c0-.9-.2-1.7-.6-2.4-.5-.8-1.1-1.2-2-1.2-.9 0-1.6.4-2.1 1.2-.4.7-.6 1.5-.6 2.4 0 .9.2 1.7.6 2.4.5.8 1.2 1.2 2 1.2.9 0 1.5-.4 2-1.2.5-.6.7-1.5.7-2.4zm9.7-3L74 6a2 2 0 0 0-1.8.9c-.4.5-.6 1.2-.6 2v5.3h-2.3V7.3l-.1-3.2h2l.1 1.9h.1a3 3 0 0 1 1.1-1.6c.5-.4 1-.5 1.6-.5h.6v2.2zm10.1 2.6l-.1 1h-6.8a3 3 0 0 0 1 2.3c.6.5 1.3.7 2.2.7 1 0 1.9-.2 2.7-.5l.4 1.6a9 9 0 0 1-3.4.6 5 5 0 0 1-3.7-1.4 5 5 0 0 1-1.3-3.7c0-1.5.4-2.8 1.3-3.8a4.3 4.3 0 0 1 3.5-1.6c1.5 0 2.6.5 3.3 1.6.6.8.9 1.9.9 3.2zm-2.2-.6a3 3 0 0 0-.4-1.7 2 2 0 0 0-1.8-.9c-.7 0-1.3.3-1.8.9-.4.5-.6 1.1-.7 1.7h4.7z" className="st3" transform="translate(44.4 18.9)" />
                                    <path id="top" fill="#ffffff" d="M6.4 4.2C6.4 5.4 6 6.4 5.3 7c-.7.6-1.7.9-3 .9L.7 7.8V1L2.6.9c1.2 0 2.1.3 2.7.8.8.6 1.1 1.4 1.1 2.5zm-1.2 0c0-.8-.2-1.4-.6-1.8-.4-.4-1.1-.6-1.9-.6l-.9.1V7h.8c.8 0 1.5-.2 2-.7.4-.5.6-1.2.6-2.1zm7.4 1.1c0 .8-.2 1.4-.7 1.9-.5.5-1.1.8-1.8.8s-1.3-.2-1.7-.7c-.5-.6-.7-1.2-.7-1.9 0-.8.2-1.4.7-1.9.4-.5 1-.7 1.8-.7.7 0 1.3.2 1.8.7.4.4.6 1 .6 1.8zm-1.2 0c0-.5-.1-.8-.3-1.2-.2-.4-.6-.6-1-.6s-.8.2-1 .6l-.3 1.2c0 .5.1.8.3 1.2.2.4.6.6 1 .6s.8-.2 1-.6c.2-.3.3-.7.3-1.2zm9.5-2.4l-1.6 4.9h-1l-.6-2.1-.4-1.6-.4 1.6-.7 2.1h-1l-1.5-4.9h1.1l.6 2.4.3 1.6.4-1.6.7-2.4h.9l.7 2.3.4 1.6.3-1.6.6-2.3h1.2zm5.7 4.9h-1.1V5c0-.9-.3-1.3-1-1.3a1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8v2.9h-1.1V4.3 2.9h1l.1.8.6-.6c.3-.2.6-.3 1-.3.5 0 .9.1 1.2.4.4.4.6.9.6 1.6v3zm3.1 0h-1.1V.6h1.1v7.2zm6.5-2.5c0 .8-.2 1.4-.7 1.9-.5.5-1.1.8-1.8.8s-1.3-.2-1.7-.7c-.4-.5-.7-1.1-.7-1.8 0-.8.2-1.4.7-1.9.4-.5 1.1-.7 1.8-.7s1.3.2 1.8.7c.4.3.6.9.6 1.7zm-1.1 0c0-.5-.1-.8-.3-1.2-.2-.4-.6-.6-1-.6s-.8.2-1 .6c-.2.3-.3.7-.3 1.2s.1.8.3 1.2c.2.4.6.6 1 .6s.8-.2 1-.6c.2-.3.3-.7.3-1.2zm6.5 2.5h-1l-.1-.6c-.3.5-.8.7-1.5.7-.5 0-.9-.1-1.1-.4-.3-.3-.4-.6-.4-1 0-.6.3-1.1.8-1.4a4 4 0 0 1 2.1-.5v-.1c0-.7-.3-1-1-1a2 2 0 0 0-1.3.4l-.2-.7a3 3 0 0 1 1.7-.4c1.3 0 2 .7 2 2v1.8 1.2zm-1.2-1.7v-.8c-1.2 0-1.8.3-1.8 1l.2.6.6.2.7-.2.4-.6-.1-.2zm7.5 1.7h-1l-.1-.8c-.3.6-.8.9-1.6.9-.6 0-1.1-.2-1.5-.7-.4-.5-.6-1.1-.6-1.8 0-.8.2-1.4.6-1.9.4-.5.9-.7 1.5-.7.7 0 1.1.2 1.4.7V.6h1.1v5.9l.2 1.3zm-1.2-2.1v-.8-.3l-.4-.7a1 1 0 0 0-.7-.3c-.4 0-.7.2-1 .5-.2.3-.4.7-.4 1.3 0 .5.1.9.3 1.2.2.3.6.5 1 .5s.7-.1.9-.4c.2-.3.3-.6.3-1zm10.7-.4c0 .8-.2 1.4-.7 1.9-.5.5-1.1.8-1.8.8s-1.3-.2-1.7-.7c-.4-.5-.7-1.1-.7-1.8 0-.8.2-1.4.7-1.9.4-.6 1-.8 1.8-.8.7 0 1.3.2 1.8.7.3.4.6 1 .6 1.8zm-1.2 0c0-.5-.1-.8-.3-1.2-.2-.4-.6-.6-1-.6s-.8.2-1 .6c-.2.3-.3.7-.3 1.2s.1.8.3 1.2c.2.4.6.6 1 .6s.8-.2 1-.6c.2-.3.3-.7.3-1.2zm7.1 2.5h-1.1V5c0-.9-.3-1.3-1-1.3a1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8v2.9H59V4.3 2.9h1v.7l.6-.6c.3-.2.6-.3 1-.3.5 0 .9.1 1.2.4.4.4.6.9.6 1.6v3.1zm7.5-4.1h-1.2v2.4c0 .6.2.9.6.9l.5-.1v.8l-.9.1c-.4 0-.8-.1-1-.4-.2-.3-.4-.7-.4-1.3V3.7h-.7v-.8h.7v-1l1.1-.3v1.2h1.2l.1.9zm5.8 4.1h-1.1V5c0-.9-.3-1.3-1-1.3-.5 0-.9.3-1.1.8l-.1.4v3h-1.1V.6h1.1v3c.3-.5.8-.8 1.5-.8.5 0 .8.1 1.1.4.4.4.6.9.6 1.7v2.9zm6.1-2.7v.5h-3.3c0 .5.2.9.5 1.1.3.2.6.3 1.1.3l1.3-.2.2.8c-.5.2-1 .3-1.7.3-.8 0-1.4-.2-1.8-.7-.4-.5-.7-1.1-.7-1.8s.2-1.4.6-1.9c.4-.5 1-.8 1.7-.8s1.3.3 1.6.8c.3.5.5 1 .5 1.6zm-1.1-.3l-.2-.8a1 1 0 0 0-.9-.5c-.4 0-.7.1-.9.4-.2.2-.3.5-.3.9h2.3z"  className="st3" transform="translate(45.5 6.3)" />
                                </svg>
                            </Link>
                            <Link to="/visitor" className="store__button store__button--google" role="img" aria-label="Get Spendee on Play Store" data-track-click="{&quot;category&quot;:&quot;Exit to Store&quot;,&quot;action&quot;:&quot;Exit&quot;,&quot;label&quot;:&quot;store:Google, location:Footer&quot;}">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143 42">
                                    <path fill="#283139" d="M137.2 41.5H5.8a5.2 5.2 0 0 1-5.3-5.1V5.6C.5 2.8 2.9.5 5.8.5h131.5c2.9 0 5.3 2.3 5.3 5.1v30.8a5.4 5.4 0 0 1-5.4 5.1z" />
                                    <path id="hover" fillOpacity=".3" d="M137.2 41.5H5.8a5.2 5.2 0 0 1-5.3-5.1V5.6C.5 2.8 2.9.5 5.8.5h131.5c2.9 0 5.3 2.3 5.3 5.1v30.8a5.4 5.4 0 0 1-5.4 5.1z" />
                                    <path fill="#a6a6a6" d="M137.6 1c2.4 0 4.4 2 4.4 4.4v31.3c0 2.4-2 4.4-4.4 4.4H5.4A4.6 4.6 0 0 1 1 36.6V5.4C1 3 3 1 5.4 1h132.2zm.1-1H5.3A5.3 5.3 0 0 0 0 5.2v31.5C0 39.6 2.4 42 5.3 42h132.4c2.9 0 5.3-2.4 5.3-5.2V5.2c0-2.8-2.4-5.2-5.3-5.2z" />
                                    <path fill="#fff" stroke="#fff" strokeWidth=".7" d="M50.2 11.1c0 .9-.3 1.6-.8 2.1-.6.6-1.4.9-2.3.9a3.3 3.3 0 0 1-3.3-3.2c0-.9.3-1.7 1-2.3.6-.6 1.4-.9 2.3-.9.5 0 .9.1 1.3.3l1 .7-.6.5c-.4-.5-1-.7-1.7-.7s-1.2.2-1.7.7c-.5.5-.7 1.1-.7 1.8a2.4 2.4 0 0 0 2.4 2.5c.7 0 1.3-.2 1.8-.7.3-.3.5-.7.5-1.3h-2.3v-.8h3.1v.4zm4.9-2.6h-2.9v2h2.6v.8h-2.6v2h2.9v.7h-3.7V7.8h3.7v.7zm3.4 5.5h-.8V8.5H56v-.7h4.4v.8h-1.8V14zm5 0V7.8h.8V14h-.8zm4.4 0h-.8V8.5h-1.8v-.7h4.4v.8h-1.8V14zm10.1-.8c-.6.6-1.4.9-2.3.9-.9 0-1.7-.3-2.3-.9-.6-.6-.9-1.4-.9-2.3 0-.9.3-1.7.9-2.3.6-.6 1.4-.9 2.3-.9.9 0 1.7.3 2.3.9.6.6.9 1.4.9 2.3 0 .9-.3 1.7-.9 2.3zm-4.1-.5c.5.5 1 .7 1.7.7s1.3-.2 1.7-.7c.5-.5.7-1.1.7-1.8s-.2-1.3-.7-1.8c-.5-.5-1-.7-1.7-.7s-1.3.2-1.7.7c-.5.5-.7 1.1-.7 1.8s.2 1.3.7 1.8zm6.2 1.3V7.8h1l3.1 4.8V7.8h.8V14h-.9l-3.2-5.1V14h-.8z" />
                                    <path fill="#fff" d="M72.2 23.1a4.4 4.4 0 1 0 0 8.8c2.5 0 4.5-1.9 4.5-4.4 0-2.6-2-4.4-4.5-4.4zm0 7.1c-1.4 0-2.5-1.1-2.5-2.7s1.2-2.7 2.5-2.7c1.4 0 2.5 1.1 2.5 2.7s-1.2 2.7-2.5 2.7zm-9.9-7.1a4.4 4.4 0 1 0 0 8.8c2.5 0 4.5-1.9 4.5-4.4 0-2.6-2-4.4-4.5-4.4zm0 7.1c-1.4 0-2.5-1.1-2.5-2.7s1.2-2.7 2.5-2.7c1.4 0 2.5 1.1 2.5 2.7s-1.1 2.7-2.5 2.7zm-11.7-5.8v1.9h4.6c-.1 1-.5 1.8-1 2.4a5 5 0 0 1-3.5 1.4c-2.8 0-5-2.2-5-5s2.2-5 5-5a5 5 0 0 1 3.4 1.3l1.4-1.3a6.6 6.6 0 0 0-4.8-1.9c-3.9 0-7.1 3.1-7.1 6.9s3.2 6.9 7.1 6.9c2.1 0 3.7-.7 4.9-1.9a6 6 0 0 0 1.7-4.4l-.1-1.2h-6.6zm48 1.5c-.4-1-1.5-2.8-3.9-2.8-2.3 0-4.2 1.8-4.2 4.4 0 2.5 1.9 4.4 4.5 4.4 2.1 0 3.3-1.2 3.8-2l-1.5-1c-.5.7-1.2 1.2-2.2 1.2-1 0-1.7-.5-2.2-1.3l6-2.4-.3-.5zm-6.2 1.5c-.1-1.7 1.4-2.6 2.4-2.6.8 0 1.5.4 1.7.9l-4.1 1.7zm-4.9 4.3h2v-13h-2v13zm-3.2-7.6c-.5-.5-1.4-1-2.4-1a4.4 4.4 0 0 0-4.3 4.4c0 2.5 2.1 4.4 4.3 4.4 1.1 0 1.9-.5 2.4-1h.1v.6c0 1.7-.9 2.6-2.4 2.6-1.2 0-2-.9-2.3-1.6l-1.7.7a4.2 4.2 0 0 0 4 2.6c2.3 0 4.3-1.3 4.3-4.6v-7.9h-1.9v.8zM82 30.2c-1.4 0-2.5-1.1-2.5-2.7s1.1-2.7 2.5-2.7c1.3 0 2.4 1.1 2.4 2.7s-1 2.7-2.4 2.7zm25.9-11.5h-4.7v13h2v-4.9h2.8c2.2 0 4.3-1.6 4.3-4a4.3 4.3 0 0 0-4.4-4.1zm0 6.2h-2.8v-4.5h2.8c1.5 0 2.3 1.2 2.3 2.2 0 1.1-.8 2.3-2.3 2.3zm12.2-1.8c-1.4 0-2.9.6-3.5 2l1.8.7a2 2 0 0 1 1.8-1c1 0 2.1.6 2.1 1.7v.1c-.4-.2-1.1-.5-2.1-.5-1.9 0-3.8 1-3.8 2.9 0 1.7 1.5 2.9 3.3 2.9 1.3 0 2.1-.6 2.5-1.3h.1v1h1.9v-5c0-2.2-1.8-3.5-4.1-3.5zm-.2 7.1c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.4 2.1-1.4.9 0 1.3.2 1.8.4a2.5 2.5 0 0 1-2.4 2.1zm11.2-6.9l-2.3 5.6h-.1l-2.3-5.6h-2.1l3.5 7.9-2 4.4h2.1l5.4-12.2h-2.2zm-17.8 8.4h2v-13h-2v13z" />
                                    <g transform="translate(10.4 7.5)">
                                        <linearGradient id="google_a" x1="-226.4" x2="-227.7" y1="424.8" y2="424.1" gradientTransform="matrix(13.7029 0 0 26.0466 3114.6 -11039.5)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#00a0ff" />
                                            <stop offset="0" stopColor="#00a1ff" />
                                            <stop offset=".3" stopColor="#00beff" />
                                            <stop offset=".5" stopColor="#00d2ff" />
                                            <stop offset=".8" stopColor="#00dfff" />
                                            <stop offset="1" stopColor="#00e3ff" />
                                        </linearGradient>
                                        <path fill="url(#google_a)"
                                            d="M.7.8c-.4.3-.5.8-.5 1.5v23c0 .6.2 1.1.5 1.5l.1.1L13.9 14v-.3L.7.8z" />
                                    </g>
                                    <g transform="translate(23.9 15.5)">
                                        <linearGradient id="google_b" x1="-235.1" x2="-237.5" y1="444" y2="444" gradientTransform="matrix(10.772 0 0 8.8891 2544.2 -3941.4)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#ffe000" />
                                            <stop offset=".4" stopColor="#ffbd00" />
                                            <stop offset=".8" stopColor="orange" />
                                            <stop offset="1" stopColor="#ff9c00" />
                                        </linearGradient>
                                        <path fill="url(#google_b)"
                                            d="M4.7 10.2L.4 5.9v-.3l4.4-4.3.1.1L10 4.2c1.5.8 1.5 2.2 0 3l-5.2 2.9-.1.1z" />
                                    </g>
                                    <g transform="translate(10.6 6.4)">
                                        <linearGradient id="google_c" x1="-231.2" x2="-232.5" y1="438.8" y2="437.1" gradientTransform="matrix(17.688 0 0 13.365 4093.3 -5846.2)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#ff3a44" />
                                            <stop offset="1" stopColor="#c31162" />
                                        </linearGradient>
                                        <path fill="url(#google_c)"
                                            d="M18.1 19.2l-4.5-4.4-13.2 13c.5.5 1.3.6 2.2.1l15.5-8.7" />
                                    </g>
                                    <g transform="translate(10.6 20.7)">
                                        <linearGradient id="google_d" x1="-232.2" x2="-231.6" y1="426.3" y2="425.5" gradientTransform="matrix(17.688 0 0 13.3605 4093.3 -5681.2)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#32a071" />
                                            <stop offset=".1" stopColor="#2da771" />
                                            <stop offset=".5" stopColor="#15cf74" />
                                            <stop offset=".8" stopColor="#06e775" />
                                            <stop offset="1" stopColor="#00f076" />
                                        </linearGradient>
                                        <path fill="url(#google_d)" d="M18.1-3.9L2.6-12.5c-.9-.5-1.7-.4-2.2.1L13.6.5l4.5-4.4z" />
                                    </g>
                                </svg>
                            </Link>
                            <Link to="/visitor" className="store__button store__button--website"
                                data-track-click="{&quot;category&quot;:&quot;Go to App&quot;,&quot;action&quot;:&quot;Click&quot;,&quot;label&quot;:&quot;type:Login, location:Footer&quot;}">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143 42">
                                    <path fill="#a6a6a6" d="M137.9 42H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5h132.9a5 5 0 0 1 5.1 5v32a5 5 0 0 1-5.1 5z" />
                                    <path fill="#283139" d="M141.7 37a4 4 0 0 1-4.1 4H5a4.1 4.1 0 0 1-4.1-4V5A4 4 0 0 1 5 1h132.7c2.2 0 4.1 1.8 4.1 4l-.1 32z" />
                                    <path id="hover" fillOpacity=".3" d="M141.7 37a4 4 0 0 1-4.1 4H5a4.1 4.1 0 0 1-4.1-4V5A4 4 0 0 1 5 1h132.7c2.2 0 4.1 1.8 4.1 4l-.1 32z" />
                                    <path fill="#fff" d="M48 6.9v4.6c0 .5-.1 1-.3 1.4s-.6.7-1 .9-.9.3-1.5.3c-.9 0-1.6-.2-2.1-.7s-.7-1.1-.7-1.9V6.9h1.2v4.5c0 .6.1 1 .4 1.3s.7.4 1.3.4c1.1 0 1.7-.6 1.7-1.7V6.9h1zm5.3 5.6c0 .5-.2.9-.6 1.2s-.9.4-1.7.4a4 4 0 0 1-1.7-.3v-1a4 4 0 0 0 1.8.4c.7 0 1.1-.2 1.1-.6l-.1-.3-.4-.3-.7-.3c-.6-.2-1-.5-1.3-.7s-.3-.6-.3-.9c0-.5.2-.8.6-1.1s.9-.4 1.5-.4a4 4 0 0 1 1.8.4l-.4.9c-.6-.2-1.1-.4-1.5-.4-.6 0-.9.2-.9.5l.2.4 1 .5 1 .5c.2.2.4.3.4.5l.2.6zm3.6 1.6c-.8 0-1.5-.2-2-.7s-.7-1.2-.7-2c0-.9.2-1.6.7-2.1s1-.8 1.8-.8c.7 0 1.3.2 1.7.6s.6 1 .6 1.8v.6h-3.6c0 .5.2.9.4 1.2s.6.4 1.1.4l.9-.1.9-.3v.9l-.8.3-1 .2zm-.2-4.7c-.4 0-.7.1-.9.3s-.4.6-.4 1h2.5c0-.4-.1-.8-.3-1s-.6-.3-.9-.3zM64 14h-1.1V8.6H64V14zm-1.2-6.8l.2-.5.5-.2.5.2.2.5-.2.5c-.1.2-.3.2-.5.2l-.5-.2a.8.8 0 0 1-.2-.5zm4.9 6l.8-.1v.9H68l-.6.1c-1.1 0-1.6-.6-1.6-1.7V9.5h-.7V9l.8-.4.4-1.1h.7v1.2h1.5v.9H67v2.9l.2.6.5.1zm9.3-1.9c0 .9-.2 1.6-.7 2.1s-1.1.7-1.9.7c-.5 0-1-.1-1.3-.3-.4-.2-.7-.6-.9-1s-.3-.9-.3-1.5c0-.9.2-1.6.7-2.1s1.1-.7 1.9-.7c.8 0 1.4.3 1.9.8s.6 1.1.6 2zm-3.9 0c0 1.2.5 1.9 1.4 1.9.9 0 1.4-.6 1.4-1.9 0-1.2-.5-1.9-1.4-1.9-.5 0-.8.2-1 .5s-.4.8-.4 1.4zm10 2.7h-1.2v-3.3c0-.4-.1-.7-.3-.9s-.4-.3-.8-.3c-.5 0-.8.1-1.1.4s-.3.8-.3 1.4V14h-1.1V8.6h.9l.2.7h.1c.2-.3.4-.5.7-.6l1-.2c1.3 0 1.9.7 1.9 2V14zm3.3-5.4h1.2l1.1 3.1.3 1.2.2-.7 1.2-3.6h1.2l-2.3 6.1c-.4 1.1-1.1 1.7-2.1 1.7l-.7-.1v-.9l.6.1c.6 0 .9-.3 1.2-1l.2-.5-2.1-5.4zm11 2.7c0 .9-.2 1.6-.7 2.1s-1.1.7-1.9.7c-.5 0-1-.1-1.3-.3-.4-.2-.7-.6-.9-1s-.3-.9-.3-1.5c0-.9.2-1.6.7-2.1s1.1-.7 1.9-.7c.8 0 1.4.3 1.9.8s.6 1.1.6 2zm-3.9 0c0 1.2.5 1.9 1.4 1.9.9 0 1.4-.6 1.4-1.9 0-1.2-.5-1.9-1.4-1.9-.5 0-.8.2-1 .5s-.4.8-.4 1.4zm9 2.7l-.2-.7h-.1l-.7.6c-.3.2-.6.2-1 .2-.7 0-1.1-.2-1.5-.5s-.5-.8-.5-1.5V8.6h1.2v3.3c0 .4.1.7.3.9s.4.3.8.3c.5 0 .8-.1 1.1-.4.2-.3.3-.8.3-1.4V8.6h1.2V14h-.9zm5.3-5.5h.6l-.1 1.1-.5-.1c-.5 0-.8.1-1.1.4-.3.3-.4.7-.4 1.2V14h-1.1V8.6h.9l.2 1h.1l.7-.8c.3-.2.4-.3.7-.3zM54.1 32h-2.2l-2.1-7.2-.3-1.4-.2-1.2-.3 1.4-.3 1.3-2 7.2h-2.2L43 25.9l-1.6-6.1h2l1.7 7.1.6 3a47.8 47.8 0 0 0 .6-3l2-7.1h2l2 7.1.6 3 .6-3 1.7-7.1h2L54.1 32zm7 .2c-1.4 0-2.5-.4-3.3-1.2s-1.2-2-1.2-3.4c0-1.5.4-2.7 1.1-3.5s1.8-1.3 3.1-1.3c1.2 0 2.2.4 2.9 1.1s1.1 1.7 1.1 3V28h-6.1c0 .9.3 1.6.7 2.1.5.5 1.1.7 1.9.7l1.5-.2 1.5-.5v1.6l-1.4.5h-1.8zm-.3-8.1a2 2 0 0 0-1.5.6 3 3 0 0 0-.7 1.7h4.2c0-.8-.2-1.3-.5-1.7s-.9-.6-1.5-.6zm9.6-1.4c1.1 0 2 .4 2.7 1.2.6.8 1 2 1 3.5s-.3 2.7-1 3.5c-.6.8-1.5 1.3-2.7 1.3-1.2 0-2.1-.4-2.7-1.3h-.1l-.5 1.1h-1.5V19.1h2v5h.1c.5-1 1.4-1.4 2.7-1.4zm-.6 1.5c-.8 0-1.4.2-1.7.7-.3.5-.5 1.2-.5 2.3v.1c0 1.1.2 1.9.5 2.4.4.5.9.8 1.7.8.7 0 1.2-.3 1.6-.8s.5-1.3.5-2.4c.1-2-.6-3.1-2.1-3.1zm8.6-4.3H82c1.7 0 2.9.2 3.6.7s1.1 1.3 1.1 2.3c0 .7-.2 1.3-.5 1.8-.4.5-.9.8-1.6.9v.1c.9.2 1.5.5 1.9 1s.6 1.1.6 1.9c0 1.1-.4 1.9-1.1 2.6s-1.9.8-3.3.8h-4.4V19.9zm1.9 5h1.9c.8 0 1.4-.1 1.8-.4.4-.3.6-.7.6-1.3 0-.6-.2-1-.6-1.2-.4-.3-1.1-.4-2-.4h-1.7v3.3zm0 1.6v3.8h2.1c.8 0 1.5-.2 1.9-.5.4-.3.6-.8.6-1.5 0-.6-.2-1.1-.6-1.4-.4-.3-1.1-.5-2-.5h-2zm12.5-3.8l1 .1-.2 1.8-.9-.1c-.8 0-1.4.3-1.9.8s-.7 1.2-.7 2V32h-2v-9.2h1.5l.3 1.6h.1c.3-.5.7-1 1.2-1.3s1-.4 1.6-.4zm9.2 4.7c0 1.5-.4 2.7-1.2 3.5s-1.8 1.3-3.2 1.3c-.9 0-1.6-.2-2.3-.6s-1.2-.9-1.5-1.7c-.4-.7-.5-1.6-.5-2.5 0-1.5.4-2.7 1.1-3.5.8-.8 1.8-1.3 3.2-1.3 1.3 0 2.4.4 3.2 1.3s1.2 2 1.2 3.5zm-6.7 0c0 2.1.8 3.2 2.3 3.2 1.5 0 2.3-1.1 2.3-3.2s-.8-3.1-2.3-3.1c-.8 0-1.4.3-1.8.8s-.5 1.3-.5 2.3zm14.9 4.6l-1.2-4.3-.8-3.2h-.1l-.8 3.2-1.2 4.3H104l-2.6-9.2h2l1.2 4.5.6 2.9.3-1.4.3-1.2 1.4-4.8h2.1l1.4 4.8.3 1.2.2 1.3h.1l.6-2.9 1.2-4.5h2l-2.6 9.2h-2.3zm11.2-2.6c0 .9-.3 1.6-1 2.1s-1.6.7-2.8.7a6 6 0 0 1-2.9-.6v-1.7c1.1.5 2.1.7 3 .7 1.2 0 1.8-.4 1.8-1.1l-.2-.6c-.1-.2-.4-.3-.7-.5l-1.3-.6c-1.1-.4-1.8-.8-2.1-1.2s-.6-.9-.6-1.6c0-.8.3-1.4 1-1.8s1.5-.7 2.6-.7 2.1.2 3.1.7l-.6 1.5c-1-.4-1.8-.6-2.5-.6-1 0-1.5.3-1.5.9 0 .3.1.5.4.7l1.8.8 1.7.8c.4.2.6.5.8.8v1.3zm4.9 2.8c-1.4 0-2.5-.4-3.3-1.2-.8-.8-1.2-2-1.2-3.4 0-1.5.4-2.7 1.1-3.5.7-.9 1.8-1.3 3.1-1.3a4 4 0 0 1 2.9 1.1 4 4 0 0 1 1.1 3V28h-6.1c0 .9.3 1.6.7 2.1s1.1.7 1.9.7l1.5-.2 1.5-.5v1.6l-1.4.5h-1.8zm-.4-8.1c-.6 0-1.1.2-1.5.6s-.6 1-.7 1.7h4.2c0-.8-.2-1.3-.5-1.7a2 2 0 0 0-1.5-.6zm9.6-1.4l1 .1-.2 1.8-.9-.1c-.8 0-1.4.3-1.9.8s-.7 1.2-.7 2V32h-2v-9.2h1.5l.3 1.6h.1c.3-.5.7-1 1.2-1.3s1-.4 1.6-.4z" />
                                    <path fill="none" stroke="#fff" strokeMiterlimit="10" d="M33.6 20a12.6 12.6 0 1 1-25.2 0 12.6 12.6 0 0 1 25.2 0zm-5.4 0c0 6.9-3.2 12.6-7.2 12.6s-7.2-5.7-7.2-12.6S17 7.4 21 7.4s7.2 5.7 7.2 12.6zM21 7.4v25.1M33.6 20H8.4m2.7-7.2h19.7M10.2 26.3h21.5" />
                                </svg>
                            </Link>
                        </div>

                        <div className="store store-social">
                            <Link to="https://www.facebook.com" className="store-social__button store-social__button--facebook" data-track-click="{&quot;category&quot;:&quot;Exit to Social Media&quot;,&quot;action&quot;:&quot;Exit&quot;,&quot;label&quot;:&quot;destination:Facebook Page, type:Button&quot;}">Facebook</Link>
                            <Link to="https://twitter.com" className="store-social__button store-social__button--twitter" data-track-click="{&quot;category&quot;:&quot;Exit to Social Media&quot;,&quot;action&quot;:&quot;Exit&quot;,&quot;label&quot;:&quot;destination:Twitter, type:Button&quot;}">Twitter</Link>
                            <Link to="https://www.instagram.com" className="store-social__button store-social__button--instagram" data-track-click="{&quot;category&quot;:&quot;Exit to Social Media&quot;,&quot;action&quot;:&quot;Exit&quot;,&quot;label&quot;:&quot;destination:Instagram, type:Button&quot;}">Instagram</Link>
                        </div>

                    </div>

                    <div className="col-12 footer__copy">
                        <div className="text-center">
                            <small>
                                Copyright 2024 PROJECT a.s. | All Rights Reserved | Project is made with ❤ in VietNam by
                                Pikachu a.s.
                                iPhone is a trademark of Apple Inc. App Store is a service mark of Apple inc.
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer