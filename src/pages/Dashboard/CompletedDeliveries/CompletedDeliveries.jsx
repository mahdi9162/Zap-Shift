import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CompletedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ['parcels', user.email, 'driver_assigned'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel_delivered`);
      return res.data;
    },
  });

  const calculatePayout = (parcel) => {
    if (parcel.senderDistrict === parcel.receiverDistrict) {
      return parcel.cost * 0.4;
    } else {
      return parcel.cost * 0.6;
    }
  };

  return (
    <div>
      <h2 className="text-4xl">Completed Deliveries {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Parcel</th>
              <th>Pickup District</th>
              <th>Delivery District</th>
              <th>Cost</th>
              <th>Payout</th>
              <th>Action</th>
              <th>Delivery Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.senderDistrict}</td>
                <td>{parcel.receiverDistrict}</td>
                <td>{parcel.cost}</td>
                <td>{calculatePayout(parcel)}</td>
                <td>
                  <button className="btn bg-[#caeb66] mr-4">Cash Out</button>
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td>{parcel.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedDeliveries;
