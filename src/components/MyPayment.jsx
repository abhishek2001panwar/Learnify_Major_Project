// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// // Replace with your publishable key
// const stripePromise = loadStripe('pk_test_51PGeTPSCguAGryJcH45nFauGq9obRYhbOq2AwhUBAZmBGqFzxSk4JbCJpaAhn7QnMNFmZwHvQsBFBm9TpaaSj9qD009M1uswCo');

// const MyPayment = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState(null);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsProcessing(true);

//     const { error: backendError, clientSecret } = await fetch('/api/v1/payment/create-payment-intent', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ amount: 1000 }), // Amount in cents
//     }).then(res => res.json());

//     if (backendError) {
//       setError(`Backend error: ${backendError.message}`);
//       setIsProcessing(false);
//       return;
//     }
//     console.log(clientSecret);   

//     const payload = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (payload.error) {
//       setError(`Payment failed: ${payload.error.message}`);
//     } else {
//       setError(null);
//       setPaymentSuccess(true);
//     }

//     setIsProcessing(false);
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
//         <h2 className="text-2xl mb-6 text-center font-bold">Complete Payment</h2>
//         <div className="mb-6">
//           <CardElement className="p-3 border border-gray-300 rounded" />
//         </div>
//         <button
//           type="submit"
//           disabled={isProcessing || !stripe || !elements}
//           className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
//         >
//           {isProcessing ? 'Processing…' : 'Pay Now'}
//         </button>
//         {error && <div className="text-red-500 mt-3 text-center">{error}</div>}
//         {paymentSuccess && <div className="text-green-500 mt-3 text-center">Payment succeeded!</div>}
//       </form>
//     </Elements>
//   );
// };

// export default MyPayment;
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PGeTPSCguAGryJcH45nFauGq9obRYhbOq2AwhUBAZmBGqFzxSk4JbCJpaAhn7QnMNFmZwHvQsBFBm9TpaaSj9qD009M1uswCo');

const CheckoutButton = () => {
  const [sessionId, setSessionId] = useState(null);
  const handleClick = async () => {
    try {
      const response = await fetch('/api/v1/payment/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const session = await response.json();
      console.log('Session:', session); // Check the session object received
  
      if (!session.id) {
        throw new Error('Invalid session ID');
      }
  
      setSessionId(session.id);
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while processing payment.');
    }
  };
  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
};

const MyPayment = () => (
  <Elements stripe={stripePromise}>
    <CheckoutButton />
  </Elements>
);

export default MyPayment;
