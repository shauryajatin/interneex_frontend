import React, { useState } from 'react';
import Navbar from '../../comopnents/navbar';
import Footer from '../../comopnents/footer';
import Modal from '../../comopnents/atoms/modals/formModal';

const PrivacyPolicy = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return (
        <>
          <Navbar openModal={openModal} homeIcon={true} />
        <div className="bg-purple-100 p-6 text-left mx-10">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-4"><strong>Last Updated: Aug 15, 2024</strong></p>

            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="mb-4">
                This Privacy Policy relates to the collection, use, and disclosure of personal data, including special or sensitive personal data, by Interneex Software Services Private Limited and Interneex Technologies Pvt Ltd. (“Interneex“, “we“, or “our“). Personal Data is information relating to an individual (“you“ or “your“) as more fully defined herein below. Interneex is committed to protecting your privacy and ensuring that you have a secure experience on our website and while using our products and services (collectively, “Products“).
            </p>

            <p className="mb-4">
                This policy covers the Interneex website and all the subdomains under interneex.com. Please refer to the following link to read our terms of service <a href="/terms" className="text-blue-500 underline">Terms of Service</a>.
            </p>

            <h2 className="text-xl font-semibold mb-2">Applicability of the Policy</h2>
            <p className="mb-4">
                This policy shall apply to all information we collect through the Company Systems and/or in the course of your use of the services of Interneex. This policy does not apply to, nor does Interneex take any responsibility for, any information that is collected by any third party either using Company Systems or through any links on the Company Systems or through any of the advertisements or through BOTS.
            </p>

            <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
            <p className="mb-4">
                We will only collect information which you share with us. You can choose what information you want to share with us. We will collect your information only if you choose to share it through the Company Systems. We will collect the following information about you or related to your use of the Company’s Systems:
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li>Any personal or PII that you may submit or may be required to submit for registration and continued use of the Company Systems or receive the services by Interneex;</li>
                <li>Your name, title, gender, date of birth, email address, father’s name, telephone number (Home/work/mobile telephonic number), profile/display picture, login name, screen name, nickname, or handle, country/state/postcode or city of residence, postal or other physical address, name(s) of the school/university (including grades and graduation year),name(s) of the workplace, job position/designation (including salary), resume/CV, information related to social profiles, such as Facebook, Google, GitHub etc., IP addresses and other information collected passively (as further detailed in the “Passive Collection” section below), may be collected; and</li>
                <li>Any other information you may choose to further provide us, without limitation, any information to update your account and profile, if required, to fill out any forms, provide your feedback to surveys, write any articles on the Company Systems, or to use any features of Company Systems.</li>
            </ul>

            <p className="mb-4">
                We collect and/or process your Personal Data as a part of the following activities related to our Products:
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li>Account registration, use of certain Product features, creating or taking tests, generating reports based on information collected from use of our Products.</li>
                <li>Requesting service and support for our Products and providing such support, registering for an event, participating in an online survey, participating in discussion groups or forums.</li>
                <li>Registering for newsletter subscriptions, customizing the content you see as per relevance.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Processing your Personal Data</h2>
            <p className="mb-4">
                We will use your Personal Data only in accordance with this policy. To enable us to fulfill the contract between us for the services you have requested, we need to process your Personal Data for purposes including the following:
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li>Account registration.</li>
                <li>Use of our website.</li>
                <li>Creating or taking online tests.</li>
                <li>Generating reports based on information collected from use of our Products.</li>
                <li>Requesting service and support for our Products and providing such support.</li>
                <li>Registering for hackathons.</li>
                <li>Participating in discussion groups or forums.</li>
                <li>Customizing the content you see as per relevance.</li>
                <li>Referring your profile to relevant job opportunities.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Consent</h2>
            <p className="mb-4">
                Your decision to provide Personal Data to Interneex is at your sole discretion and is deemed obtained when you register and create your account on our Company Systems. Please note that you may not be able to access certain options, offers, and services if they require Personal Data that you have not provided. You can sign-up, and therefore consent, to receive email or newsletter communication from us. If you would like to discontinue receiving this communication, you can update your preferences by using the ‘Unsubscribe’ link at the end of such emails or by contacting us through email on support@interneex.com.
            </p>

            <h2 className="text-xl font-semibold mb-2">How do we use your information?</h2>
            <p className="mb-4">
                Interneex will use your Personal Data only in accordance with this policy. If you do not wish us to continue using your Personal Data in this manner you can request deactivation of your account from account settings.
            </p>

            <h2 className="text-xl font-semibold mb-2">How do we organize & store your data?</h2>
            <p className="mb-4">
                AWS Relational Database - Main database storing all User information.
                ElasticSearch - Indexed resumes. We use it to query on text written in a user's resume.
                Sentry - Used to monitor errors.
                New Relic - Stores server logs which are used in optimization of our services.
                S3 - Server logs and User resume files.
                Google Analytics - The third-party services described in this section enable Interneex to monitor and analyze Website and Service traffic.
            </p>

            <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
            <p className="mb-4">
                You have certain rights with respect to your Personal Data as mentioned below.
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>Access:</strong> You can request more information about the Personal Data we hold about you. You can also request a copy of the Personal Data.</li>
                <li><strong>Correction:</strong> If you believe that any Personal Data we are holding about you is incorrect or incomplete, you can request that we correct or supplement such data.</li>
                <li><strong>Objection:</strong> You can contact us to let us know that you object to the collection or use of your Personal Data for certain purposes.</li>
                <li><strong>Erasure:</strong> You can request that we delete some or all of your Personal Data from our systems.</li>
                <li><strong>Restrictions:</strong> You can always request us to deactivate your Interneex account to restrict further processing of your Personal Data.</li>
                <li><strong>Portability:</strong> You have the right to ask for a copy of your Personal Data in a machine-readable format.</li>
                <li><strong>Withdrawal of consent:</strong> If we are processing your Personal Data based on your consent, you have the right to withdraw your consent at any time.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Retention</h2>
            <p className="mb-4">
                Your data is retained with Interneex as long as you have an active account on the Company Systems. You can request that we delete some or all of your Personal Data from our systems. While this will be done within thirty (30) days from the date of such request, residual data may be saved in certain logs and this will be purged within a year after deleting your data. Once your data is deleted, you will no longer have an account with Interneex.
            </p>

            <h2 className="text-xl font-semibold mb-2">Passive Data collection</h2>
            <p className="mb-4">
                Interneex might automatically collect some data about you when you are using any of our products, using methods like cookies and other tracking technologies. Information automatically collected includes cookies, page views, geolocation data, IP(internet protocol) addresses, browser and OS(Operating System) type, ISP (Internet Service Provider), files viewed and downloaded from our websites, referral and exit pages and click stream data. Such data does not have an expiry date and we do not delete this data. This data is stored in the form of logs or in third party tracking and analytics software like Google Analytics, LinkedIn Insights etc.
            </p>

            <h2 className="text-xl font-semibold mb-2">We Use Cookies</h2>
            <p className="mb-4">
                Interneex uses cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
            </p>

            <h2 className="text-xl font-semibold mb-2">To whom we may disclose your Personal Data</h2>
            <p className="mb-4">
                The information you provide on the Company Systems may be disclosed by Interneex to its employees, agents, representatives, consultants, subsidiaries, affiliates, and third-party providers who require the information for the purposes of operating and maintaining the Company Systems.
            </p>

            <h2 className="text-xl font-semibold mb-2">Data Security</h2>
            <p className="mb-4">
                The information that you provide, subject to disclosure in accordance with this policy, shall be maintained in a safe and secure manner. Your information shall be protected, to a commercially reasonable extent, against unauthorized access, use, or disclosure.
            </p>

            <h2 className="text-xl font-semibold mb-2">Integration with Linked Websites and Third-Party Websites</h2>
            <p className="mb-4">
                Links to external, or third-party websites, may be provided solely for your convenience. Such links from us to an external website does not imply or mean that Interneex endorses or accepts any responsibility for the content or the use of such a website.
            </p>

            <h2 className="text-xl font-semibold mb-2">Third-party Ad Networks</h2>
            <p className="mb-4">
                Our Website may use third-party network advertisers to display advertisements about our Products on third-party websites, based on your visits to our site as well as other websites. This enables us and these third parties to target advertisements by displaying ads for our Products which might interest you.
            </p>

            <h2 className="text-xl font-semibold mb-2">Anonymized Information</h2>
            <p className="mb-4">
                Notwithstanding anything to the contrary in this policy, Interneex may use any information provided to Interneex in relation to or as part of the services in providing services to its other clients, and to develop and create reports, statistical analysis, and benchmarking analyses for its clients provided that such reports contain only anonymous, aggregated data and do not identify you by name.
            </p>

            <h2 className="text-xl font-semibold mb-2">Age Restrictions</h2>
            <p className="mb-4">
                You explicitly agree you are 18 years of age or older, unless represented by a parent or legal guardian. If Interneex determines that it is in possession of any information belonging to an individual below 18 years of age, it will delete the same without any notice to the individual to whom such information belongs to.
            </p>

            <h2 className="text-xl font-semibold mb-2">Update</h2>
            <p className="mb-4">
                This policy may be updated from time to time so we recommend that you regularly review this policy each time you return to our website.
            </p>
        </div>
        <Footer />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default PrivacyPolicy;
