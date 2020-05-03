import React, { useState } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "gatsby"

const MailchimpState = {
    ADVERTISE: "advertise",
    SHOW_CAPTCHA: "show_captcha",
    VERIFIED: "verified",
    FINISHED: "finished"
}

const MailchimpSubscribe = ({ siteTitle, small}) => {

    const [mailchimpState, setMailchimpState] = useState(MailchimpState.ADVERTISE);
    const [email, setEmail] = useState("");
    const [consent, setConsent] = useState("N");
    const [result, setResult] = useState(null);
    
    const handleSubmit = async( event ) => {
        event.preventDefault();

        if( email.length > 0) {
            var fields = {};
            fields['gdpr[25193]'] = consent;
            
            const result = await addToMailchimp(email, fields);
            setResult(result);
            setMailchimpState(MailchimpState.FINISHED);
    
            console.log(result);    
        }
    }

    const handleChange = event => {
        setEmail( event.target.value );
    }

    const handleChangeConsent = event => {
        setConsent( event.target.value );
    }

    const recaptchaCallback = value => {

        if( value === null ) {
            setMailchimpState(MailchimpState.ADVERTISE);
        } else {
            setMailchimpState(MailchimpState.VERIFIED);
        }
     }

     function createMarkup(result) {
        return {__html: result.msg};
      }
          
    return (
        <>
        <div className="rssSubscribe">
            <h1>RSS</h1>
            <div>
                <p>
                    <a href="/rss.xml">RSS Link</a>
                </p>
                <p>Yes, RSS still exists \o/ Full text is provided in RSS so you'll never need to visit this site if you don't want to.</p>
            </div>
        </div>

        <div className="mailchimpSubscribe">
            <h1>Follow using Mailchimp</h1>
            <p>Emails are used only to provide updates on this website, not to deliver any kind of advertisements. Unfortunately you'll need to pass ReCaptcha to subscribe because of how the world works.</p>
            <p>
                We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a>
            </p>
            {mailchimpState === MailchimpState.ADVERTISE && (
                <p><a href="#footer" onClick={() => setMailchimpState(MailchimpState.SHOW_CAPTCHA)}>Verify ReCaptcha</a> to show the subscription form.</p>
            )}
            {mailchimpState === MailchimpState.SHOW_CAPTCHA && (
                <ReCAPTCHA className="reCaptchaContainer" sitekey="6LcjgvEUAAAAAJ-rYjKkLeWoLi1ThewAIyvNf5Ij" onChange={recaptchaCallback} size="normal"/>
            )}
            {mailchimpState === MailchimpState.VERIFIED && (
            <form onSubmit={handleSubmit} >
                <input type="email" placeholder="type your email" value={email} onChange={handleChange} />
                <h2>Marketing Permissions</h2>
                <p>Please confirm you would like to hear from Arttu Viljakainen by:</p>
                <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                <label className="checkbox subfield" htmlFor="gdpr_25193">Email
                    <input type="checkbox" id="gdpr_25193" name="gdpr[25193]" value="Y" onChange={handleChangeConsent} className="av-checkbox gdpr" required/>
                </label>
                </fieldset>
                <input className="mailchimpSubscribeButton" type="submit" value="Subscribe" />
            </form>
            )}
            {mailchimpState === MailchimpState.FINISHED && (
                <p className="mailchimpResponse" dangerouslySetInnerHTML={createMarkup(result)}></p>
            )}
        </div>
        </>
    )
};
export default MailchimpSubscribe
