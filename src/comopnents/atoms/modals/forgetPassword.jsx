import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../utils/constants';

const ForgotPasswordModal = ({ toggleModal }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}/forgotPassword`, { email });
            setMessage(response.data.message);
            setError('');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to send reset email.');
            setMessage('');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
                <form onSubmit={handleForgotPassword}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Send Reset Link
                    </button>
                </form>
                {message && <p className="mt-4 text-green-500">{message}</p>}
                {error && <p className="mt-4 text-red-500">{error}</p>}
                <button
                    className="mt-4 w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
                    onClick={toggleModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
