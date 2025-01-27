import React from 'react';
import { XCircle } from 'lucide-react';

const WhatsAppModal = ({ isOpen, onClose, phoneNumber, message }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  // Encode the message to handle spaces and special characters
  const encodedMessage = encodeURIComponent(message);

  // Construct the WhatsApp URL
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <XCircle className="h-6 w-6" />
        </button>
        <h2 className="text-xl font-semibold text-center mb-4">Contact Us via WhatsApp</h2>
        <p className="text-center mb-4">Click the button below to chat with us on WhatsApp for more details.</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-500 text-white text-center font-bold py-2 rounded"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default WhatsAppModal;
