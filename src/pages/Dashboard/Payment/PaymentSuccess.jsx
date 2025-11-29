import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [paymentInfo, setPaymentInfo] = useState({});
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`).then((res) => {
        // console.log(res.data);
        setPaymentInfo({
          transactionId: res.data.transactionId,
          trackingId: res.data.trackingId,
        });
      });
    }
  }, [axiosSecure, sessionId]);

  return (
    <div>
      <h2 className="text-4xl">Payment Successful</h2>
      <p>Your Trancsaction ID : {paymentInfo.transactionId}</p>
      <p>Your Parcel Tracking ID : {paymentInfo.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
