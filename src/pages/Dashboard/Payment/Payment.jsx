// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import { useParams } from 'react-router';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

// const Payment = () => {
//   const { parcelId } = useParams();
//   const axiosSecure = useAxiosSecure();
//   const { isLoading, data: parcel } = useQuery({
//     queryKey: ['parcels', parcelId],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/parcels/${parcelId}`);
//       return res.data;
//     },
//   });

//   if (isLoading) {
//     return (
//       <div>
//         <span className="loading loading-bars loading-xl"></span>
//       </div>
//     );
//   }

//   if (!parcel) {
//     return (
//       <div className="text-center p-20">
//         <h3 className="text-red-600 font-bold">Error: Parcel details not found!</h3>
//       </div>
//     );
//   }

//   const handlePayment = async () => {
//     const paymentInfo = {
//       parcelId: parcel._id,
//       parcelName: parcel.parcelName,
//       senderEmail: parcel.senderEmail,
//       cost: parcel.cost,
//     };

//     const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
//     window.location.href = res.data.url;
//   };

//   return (
//     <div>
//       <h2>
//         {' '}
//         please pay ${parcel.cost} for : {parcel.parcelName}
//       </h2>
//       <button onClick={handlePayment} className="btn btn-sm bg-[#caeb66]">
//         Pay
//       </button>
//     </div>
//   );
// };

// export default Payment;
