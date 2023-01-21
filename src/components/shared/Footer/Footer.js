import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FooterData, SocialMedia } from './data';
import { Link } from 'react-router-dom';
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import './footer.scss'

const Footer = (props) => {

    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    return(
        <div className='shared-footer'>

            <div className="main-row">

                <div className="first-col">
                    <div className="top">
                        <Link to='/' className='logo-container'>
                            <div className="logo"></div>
                        </Link>
                        <h5><FormattedMessage id='footer-paragraph1' defaultMessage='Build your dream home with us.' /></h5>
                        <p><FormattedMessage id='PHONE' defaultMessage='PHONE' />: +383 48 771 188</p>
                        <p><FormattedMessage id='EMAIL' defaultMessage='EMAIL' />:  vvesasusuri@gmailcom</p>
                    </div>
                    <div className="links1">
                        {SocialMedia.map((props) => {
                            return(
                                <Link to={props.to}>{props.icon}</Link>
                            )
                        })}
                    </div>
                </div>
                
                <div className='all-footer-links'>
                    {FooterData.map((props) => {
                        return(
                            <div className="footer-list">
                                <h6>{props.category}</h6>
                                <div className="links">
                                    {props.links.map((l) => {
                                        return (
                                            <Link key={l.to} to={l.to} className="footer-item">
                                                {l.link}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="last-row">

                <p><FormattedMessage id='footer-paragraph2' defaultMessage='© 2022 Vesa Susuri  | ALL RIGHTS RESERVED' /></p>
     
                <SelectLanguage
                    setLanguage={props.setLanguage}
                    language={props.language}
                />
            </div>
        </div>
    )
};

export default Footer;
