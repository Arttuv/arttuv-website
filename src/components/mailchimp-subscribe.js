import React, { useState } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp';
import ReCAPTCHA from "react-google-recaptcha";

const MailchimpState = {
    ADVERTISE: "advertise",
    SHOW_CAPTCHA: "show_captcha",
    VERIFIED: "verified",
    FINISHED: "finished"
}

const MailchimpSubscribe = ({ siteTitle, small}) => {

    const [mailchimpState, setMailchimpState] = useState(MailchimpState.ADVERTISE);
    const [verified, setVerified ] = useState(false);
    const [email, setEmail] = useState("");
    const [result, setResult] = useState(null);
    
    const handleSubmit = async( event ) => {
        if( email.length > 0) {
            const result = await addToMailchimp(email, {});
            setResult(result);
            setMailchimpState(MailchimpState.FINISHED);
    
            console.log(result);    
        }
        event.preventDefault();
    }

    const handleChange = event => {
        setEmail( event.target.value );
    }

    const recaptchaCallback = value => {

        if( value === null ) {
            setMailchimpState(MailchimpState.ADVERTISE);
        } else {
            setMailchimpState(MailchimpState.VERIFIED);
        }
     }
    
    return (
        <>
        <div className="rssSubscribe">
            <h1>RSS</h1>
            <div>
                <p>
                <a href="arttuv.com/rss.xml">RSS Link</a>
                </p>
                <p>Yes, RSS still exists. Full text is provided in RSS so you'll never need to visit this site if you don't want to.</p>
            </div>
        </div>

        <div className="mailchimpSubscribe">
            <h1>Follow using Mailchimp</h1>
            <p>Emails are used only to provide updates on this website, not to deliver any kind of advertisements. Unfortunately you'll need to pass ReCaptcha to subscribe because of how the world works.</p>
            <p>
                We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a>
            </p>
            {mailchimpState === MailchimpState.ADVERTISE && (
                <p><a href="#footer" onClick={() => setMailchimpState(MailchimpState.SHOW_CAPTCHA)}>Verify</a> ReCaptcha to show the subscription form.</p>
            )}
            {mailchimpState === MailchimpState.SHOW_CAPTCHA && (
                <ReCAPTCHA className="reCaptchaContainer" sitekey="6LcjgvEUAAAAAJ-rYjKkLeWoLi1ThewAIyvNf5Ij" onChange={recaptchaCallback} size="normal"/>
            )}
            {mailchimpState === MailchimpState.VERIFIED && (
            <form onSubmit={handleSubmit} >
                <input type="email" placeholder="type your email" value={email} onChange={handleChange} />
                <h2>Marketing Permissions</h2>
                <p>Please confirm you would like to hear from Arttu Viljakainen by:</p>
                <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                <label class="checkbox subfield" for="gdpr_25193">Email
                    <input type="checkbox" id="gdpr_25193" name="gdpr[25193]" value="Y" class="av-checkbox gdpr" required/>
                </label>
                </fieldset>
                <input className="mailchimpSubscribeButton" type="submit" value="Subscribe" />
            </form>
            )}
            {result !== null && (
                <p>{result.msg}</p>
            )}
        </div>
        </>
    )
};
export default MailchimpSubscribe
