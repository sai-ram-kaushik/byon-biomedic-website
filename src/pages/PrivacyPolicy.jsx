import React from 'react';
import TransitionEffect from '../utils/TransitionEffect';

const PrivacyPolicy = () => {
    return (
        <div className='w-full px-5 md:px-10 py-5 md:py-10 container mx-auto'>
            <TransitionEffect />
            <div className='flex items-start mb-6'>
                <h2 className='text-[28px] font-bold text-secondary'>Privacy Policy</h2>
            </div>
            <div className='space-y-6 text-gray-700'>
                <p>This Privacy Policy governs the manner in which byonbiomedic collects, uses, maintains, and discloses information collected from users (each, a "User") of the www.byonbiomedic.com website ("Site"). This privacy policy applies to the Site and all services offered by byonbiomedic.</p>

                <h3 className='text-lg font-semibold'>Personal Identification Information</h3>
                <p>We may collect personal identification information from Users in various ways, including, but not limited to, when Users visit our site, register on the site, respond to a survey, fill out a form, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us.</p>

                <h3 className='text-lg font-semibold'>Non-Personal Identification Information</h3>
                <p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer, and technical information about Users' means of connection to our Site, such as the operating system and the Internet service providers utilized.</p>

                <h3 className='text-lg font-semibold'>Web Browser Cookies</h3>
                <p>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies, or to alert them when cookies are being sent.</p>

                <h3 className='text-lg font-semibold'>How We Use Collected Information</h3>
                <ul className='list-disc pl-6 space-y-2'>
                    <li>To improve customer service</li>
                    <li>To personalize user experience</li>
                    <li>To improve our Site</li>
                    <li>To send periodic emails</li>
                </ul>

                <h3 className='text-lg font-semibold'>How We Protect Your Information</h3>
                <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>

                <h3 className='text-lg font-semibold'>Sharing Your Personal Information</h3>
                <p>We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information.</p>

                <h3 className='text-lg font-semibold'>Third Party Websites</h3>
                <p>Users may find advertising or other content on our Site that links to sites and services of our partners, suppliers, advertisers, and other third parties. We are not responsible for the practices employed by websites linked to or from our Site.</p>

                <h3 className='text-lg font-semibold'>Changes to This Privacy Policy</h3>
                <p>Byon Biomedic has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site.</p>

                <h3 className='text-lg font-semibold'>Your Acceptance of These Terms</h3>
                <p>By using this Site, you signify your acceptance of this policy. If you do not agree, please do not use our Site. Your continued use of the Site following the posting of changes will be deemed your acceptance of those changes.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;