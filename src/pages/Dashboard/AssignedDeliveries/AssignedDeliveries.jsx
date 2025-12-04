import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { refetch, data: parcels = [] } = useQuery({
    queryKey: ['parcels', user.email, 'driver_assigned'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`);
      return res.data;
    },
  });

  const handleDeliveryStatusUpdate = (parcel, status) => {
    const statusInfo = {
      deliveryStatus: status,
      riderId: parcel.riderId,
      trackingId: parcel.trackingId,
    };
    let message = `Parcel status is update with ${status.split('_').join(' ')}`;
    axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: 'top-end',
          title: 'success!',
          text: message,
          showConfirmButton: false,
          icon: 'success',
        });
      }
    });
  };

  return (
    <div>
      <h2>Parcels Pending Pickup: {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Parcel</th>
              <th>Sender Name</th>
              <th>Receiver Name</th>
              <th>Sender Mobile</th>
              <th>Receiver Phone</th>
              <th>Action</th>
              <th>Other Action</th>
              <th>Delivery Status</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.senderName}</td>
                <td>{parcel.receiverName}</td>
                <td>{parcel.senderPhone}</td>
                <td>{parcel.receiverPhone}</td>
                <td>
                  {parcel.deliveryStatus === 'driver_assigned' ? (
                    <>
                      <button onClick={() => handleDeliveryStatusUpdate(parcel, 'rider_arriving')} className="btn bg-[#caeb66] mr-4">
                        Accept
                      </button>
                      <button className="btn btn-warning">Reject</button>
                    </>
                  ) : (
                    <span>Delivery Accepted</span>
                  )}
                </td>
                <td>
                  {parcel.deliveryStatus === 'rider_arriving' && (
                    <button onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_picked_up')} className="btn bg-[#caeb66] mr-4">
                      Mark as Picked Up
                    </button>
                  )}
                  {parcel.deliveryStatus === 'parcel_picked_up' && (
                    <button onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_delivered')} className="btn bg-[#caeb66] mr-4">
                      Mark as Delivered
                    </button>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedDeliveries;
