import React from 'react';
import TransitionEffect from '../utils/TransitionEffect';

const TermsAndConditions = () => {
    return (
        <div className='w-full px-5 md:px-10 py-5 md:py-10 container mx-auto'>
            <TransitionEffect />
            <div className='flex items-start mb-6'>
                <h2 className='text-[28px] font-bold text-secondary'>Terms and Conditions</h2>
            </div>
            <div className='space-y-6 text-gray-700'>
                <p>Please read these terms and conditions carefully before using Our Service.</p>

                <h3 className='text-lg font-semibold'>Interpretation and Definitions</h3>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                <h3 className='text-lg font-semibold'>Definitions</h3>
                <ul className='list-disc pl-6 space-y-2'>
                    <li>Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.</li>
                    <li>Country refers to: Malaysia.</li>
                    <li>Company refers to Byon Biomedic Malaysia Sdn. Bhd., Malaysia.</li>
                    <li>Device means any device that can access the Service such as a computer, cellphone, or digital tablet.</li>
                    <li>Service refers to the Website.</li>
                    <li>Terms and Conditions mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                    <li>Website refers to Byon Biomedic, accessible from https://www.byonbiomedic.com.my.</li>
                    <li>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>

                <h3 className='text-lg font-semibold'>Acknowledgment</h3>
                <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms, then You may not access the Service.</p>

                <h3 className='text-lg font-semibold'>Links to Other Websites</h3>
                <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company is not responsible for any third-party services, their content, privacy policies, or practices.</p>

                <h3 className='text-lg font-semibold'>Termination</h3>
                <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>

                <h3 className='text-lg font-semibold'>Limitation of Liability</h3>
                <p>In no event shall the Company or its suppliers be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of the Service.</p>

                <h3 className='text-lg font-semibold'>Governing Law</h3>
                <p>The laws of Malaysia shall govern these Terms and Your use of the Service.</p>

                <h3 className='text-lg font-semibold'>Changes to These Terms and Conditions</h3>
                <p>We reserve the right to modify or replace these Terms at any time. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms.</p>

                <h3 className='text-lg font-semibold'>Contact Us</h3>
                <p>If you have any questions about these Terms and Conditions, You can contact us by email at info@byonbiomedic.com.</p>
            </div>
        </div>
    );
};

export default TermsAndConditions;