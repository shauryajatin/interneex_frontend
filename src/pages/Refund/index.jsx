import React, { useState } from 'react';
import Navbar from '../../comopnents/navbar';
import Footer from '../../comopnents/footer';
import Modal from '../../comopnents/atoms/modals/formModal';

const CancellationRefundPolicy = () => {
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
        <div className="bg-purple-100 p-6 text-left px-20">
            <h1 className="text-2xl font-bold mb-4">Cancellation/Refund Policy</h1>

            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="mb-4">
                At Interneex, we strive to ensure customer satisfaction with our products and services. However, we understand that there may be occasions where you may need to cancel an order or request a refund. This policy outlines the process for cancellations and refunds.
            </p>

            <h2 className="text-xl font-semibold mb-2">Cancellation Policy</h2>
            <p className="mb-4">
                You can cancel your order at any time before it has been shipped. To cancel your order, please contact our customer support team at support@interneex.com. Once the order is shipped, it cannot be canceled, and you may need to follow the refund policy outlined below.
            </p>

            <h2 className="text-xl font-semibold mb-2">Refund Policy</h2>
            <p className="mb-4">
                If you are not satisfied with your purchase, you may request a refund within 30 days of receiving the product. The product must be in its original condition and packaging to qualify for a refund. To initiate a refund, please contact our customer support team at support@interneex.com with your order details and reason for the return.
            </p>

            <h2 className="text-xl font-semibold mb-2">Non-Refundable Items</h2>
            <p className="mb-4">
                Certain items are non-refundable, including but not limited to:
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li>Downloadable software products</li>
                <li>Gift cards</li>
                <li>Services that have been fully delivered</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Processing Refunds</h2>
            <p className="mb-4">
                Once we receive your returned item, we will inspect it and notify you of the status of your refund. If approved, the refund will be processed, and a credit will automatically be applied to your original method of payment within a certain number of days, depending on your card issuer’s policies.
            </p>

            <h2 className="text-xl font-semibold mb-2">Late or Missing Refunds</h2>
            <p className="mb-4">
                If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company; it may take some time before your refund is officially posted. If you’ve done all of this and you still have not received your refund, please contact us at support@interneex.com.
            </p>

            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p className="mb-4">
                If you have any questions about our Cancellation/Refund Policy, please contact us at:
            </p>
            <p className="mb-4">
                Email: support@interneex.com
            </p>
        </div>
        <Footer />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default CancellationRefundPolicy;
