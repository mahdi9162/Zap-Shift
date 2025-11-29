import React from 'react';
import { Link } from 'react-router';

const paymentCancel = () => {
  return (
    <div>
      <h2 className="text-4xl">Payment Cancenlled. please try again</h2>
      <Link to="/dashboard/my-parcels" className="btn bg-[#caeb66]">
        Try Again
      </Link>
    </div>
  );
};

export default paymentCancel;
