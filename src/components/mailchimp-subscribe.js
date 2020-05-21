import React, { useState } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp';
import ReCAPTCHA from "react-google-recaptcha";

const MailchimpSubscribe = ({ siteTitle, small}) => {
          
    return (
        <>
            <div className="rssSubscribe">
                <h1>Follow the updates on this site</h1>
                <div>
                    <a href="/rss.xml">All posts RSS link</a>
                    <p>Yes, RSS still exists \o/ Full text is provided in RSS so you'll never need to visit this site if you don't want to.</p>
                </div>
            </div>

            <div className="mailchimpSubscribe">
                <h2>Follow using Mailchimp</h2>
                <p>Emails are used only to provide updates on this website, not to deliver any kind of advertisements.</p>
                <p>Go to the Mailchimp <a href="http://eepurl.com/g130PD" target="_blank" rel="noopener noreferrer">subscribtion form</a>.</p>
            </div>
        </>
    )
};
export default MailchimpSubscribe
