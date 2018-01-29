import React from 'react';
import {shallow} from 'enzyme';

import NewsletterSignupForm from './newsletter-signup-form';

describe('<NewsletterSignupForm />', () => {
    it('Renders without crashing', () => {
        shallow(<NewsletterSignupForm />);
    });
    //Add more tests
});