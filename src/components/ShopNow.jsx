import React from 'react';
// import './ShopNow.css';

const ShopNow = () => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_Wz4eLIINa10Fop", // Replace with your Razorpay key
      amount: 59000, // Amount in paise (50000 paise = 500 INR)
      currency: "INR",
      name: "XYZ",
      description: "Test Transaction",
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#f71f1f",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="shop-now-container">
      <button className="shop-now-button" onClick={handlePayment}>
        Shop Now
      </button>
    </div>
  );
};

export default ShopNow;