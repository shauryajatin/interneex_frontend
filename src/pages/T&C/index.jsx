import React, { useState } from 'react';
import Navbar from '../../comopnents/navbar';
import Modal from '../../comopnents/atoms/modals/formModal';
import Footer from '../../comopnents/footer';

const TermsAndConditions = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="bg-purple-100  ">
         <Navbar openModal={openModal} homeIcon={true} />
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-lg px-30 text-left">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Terms of Service</h2>
        <p className="mb-4">
          Welcome! Thank you for your interest in Interneex!
          These Terms of Service (the “ToS”) apply with respect to the usage of the Platform (defined hereinafter) and the services offered by Interneex Technologies Pvt Ltd (“Interneex”, “we”, or “us”). These Terms of Service shall apply to mobile apps, WhatsApp groups, Facebook groups, Instagram pages, email/SMS/phone communications, and other communication forums/media hosted by Interneex, which shall be deemed to be part of the Platform. You are deemed to have accepted these ToS upon usage of Interneex Services. Your acceptance of the same will irrevocably and unconditionally bind you to comply with and abide by all the obligations and conditions stipulated herein.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Updation of Terms</h2>
        <p className="mb-4">
          These ToS may be updated, amended, modified, or revised by us from time to time. Each such update or modification to the ToS will be communicated to you via email, through the Website, or any other medium. Your continued use of Interneex Services after any such changes shall constitute your consent to such changes.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Service(s) Provided to Users</h2>
        <p className="mb-4">
          Interneex allows its users to access various training programs and resources designed by Interneex for undergraduates and professionals. Interneex reserves the right to add, change, suspend, or discontinue all or any part of its services at any time. Your continued use of Interneex Services following the posting of any changes constitutes your acceptance of those changes.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Access to Interneex Resources</h2>
        <p className="mb-4">
          During your time with Interneex, you will have access to multiple resources that help you learn better. Access policies may vary across resources. We guarantee access to all recordings till 6 months post-completion of your last mandatory session with Interneex, subject to the terms herein.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Course Pause & Reset Feature</h2>
        <p className="mb-4">
          Our programs’ pace and workload can be varied by the learners as per their needs. We have enabled a “Pause” feature through which a learner may opt to pause their program for up to 3 months. During this pause period, access to previous recordings and doubt resolution will be available.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Program Change</h2>
        <p className="mb-4">
          Interneex allows a one-time program change within 180 days from the date of the first session of the relevant program. Any program change requested after this period will incur additional fees.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Support</h2>
        <p className="mb-4">
          Interneex offers online support tools. Registered users can reach us on our priority helpline number available on their dashboard. Any suggestions by Interneex regarding use of the Platform shall not be construed as a warranty.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Withdrawal and Refund Policy</h2>
        <p className="mb-4">
          You may opt out of or withdraw from programs and seek a refund for the fees paid, provided the request is made within the refund window specified. Refunds will be processed through NEFT/IMPS/RTGS, and relevant documentation will be required to verify your credentials before processing.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Termination</h2>
        <p className="mb-4">
          Interneex reserves the right to suspend or terminate your access to the Platform and services with or without notice in cases of breach of the ToS or any suspicious activity. All provisions of the ToS which by their nature should survive termination shall survive termination.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Registration and Account Integrity</h2>
        <p className="mb-4">
          You are responsible for maintaining the accuracy and security of the information provided during registration. You agree to notify Interneex immediately of any unauthorized use of your account.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Use of Your Information and User Data</h2>
        <p className="mb-4">
          All User Data that you create, transmit, or submit while using Interneex Services should only be information that you own or have the right to use. We may use the above information as per our Privacy Policy and in accordance with applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Links and Services</h2>
        <p className="mb-4">
          We use multiple third-party service providers in order to provide you with Interneex Services. By using the Platform, you expressly release Interneex from any liability arising from your use of any third-party website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Content Ownership and Copyright Conditions of Access</h2>
        <p className="mb-4">
          The Platform and its content, including all text, graphics, and software, are owned and controlled by Interneex. Your use of Interneex content in any manner not specified in these ToS will be a violation of copyright and other intellectual property rights.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold Interneex harmless from all liabilities, losses, claims, and expenses that arise from your use or misuse of the Platform and/or Interneex Services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Limitation of Liability</h2>
        <p className="mb-4">
          TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL INTERNEEX BE LIABLE FOR ANY LOST PROFITS, DATA LOSS, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE PLATFORM OR SERVICES.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Governing Law</h2>
        <p className="mb-4">
          These ToS shall be governed by and construed in accordance with the laws of India. All claims and disputes arising under or in connection with these ToS shall be subject to the exclusive jurisdiction of the courts at Bengaluru, India.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Payments</h2>
        <p className="mb-4">
          Full payment for enrolment in a program is required at the time of registration unless otherwise agreed in writing. Interneex does not store any of your credit card information and partners with payment gateways for processing payments.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Miscellaneous</h2>
        <p className="mb-4">
          If any provision of these ToS is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, so that the ToS will otherwise remain in full force and effect. These ToS are personal to you and are not assignable or transferable by you.
        </p>

        <p className="mt-6">
          If you have any questions or concerns regarding these Terms and Conditions, please contact us at support@interneex.com.
        </p>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
