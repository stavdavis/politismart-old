import React from 'react';
import './newsletter-signup-form.css';

export default function NewsletterSignupForm(props) {
    return (
        <form className="user-login-form" onSubmit={(e) => e.preventDefault()}>
            <input className="signup-input first-name-field" type="text" name="firstname" placeholder="First name" required="required"/>
            <input className="signup-input last-name-field" type="text" name="lastname" placeholder="Last name" required="required"/>
            <input className="signup-input email-field" type="email" name="email" placeholder="Email" required="required"/>
            <input className="signup-submit-button" type="submit" value="Sign up" />
        </form> 
    );
}



