import React from 'react';
import riderImg from '../../../assets/agent-pending.png';
import useAuth from '../../hooks/useAuth';
import { useForm, useWatch } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Rider = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const phoneNoPattern = /^(01)[3-9]\d{8}$/;
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((center) => center.region);
  const regions = [...new Set(regionsDuplicate)];
  const riderRegion = useWatch({ control, name: 'riderRegion' });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((center) => center.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleRiderApplication = (data) => {
    axiosSecure.post('/riders', data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: 'middle',
          title: `Congretulations ${data.riderName}!`,
          text: "Your Application Has Been Submitted. We'll reach to you in 7 days",
          icon: 'success',
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-10 lg:py-16">
        {/* Top heading */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#03373D]">Be a Rider</h1>
          <p className="mt-3 text-sm lg:text-base text-[#555555] max-w-2xl leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Content: form + image */}
        <div className="grid lg:grid-cols-[1.4fr_minmax(0,1fr)] gap-10 items-start bg-white rounded-xl shadow-lg px-6 lg:px-10 py-10">
          {/* Form */}
          <div>
            <h2 className="text-base font-semibold text-[#03373D] mb-6">Tell us about yourself</h2>

            <form onSubmit={handleSubmit(handleRiderApplication)} className="space-y-4">
              {/* Your Name */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#03373D]">Your Name</label>
                <input
                  {...register('riderName', { required: true })}
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8FA748]"
                  placeholder="Your Name"
                  defaultValue={user.displayName}
                />
              </div>

              {/* Driving License Number */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#03373D]">Driving License Number</label>
                <input
                  {...register('drivingLicense', { required: true })}
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8FA748]"
                  placeholder="Driving License Number"
                />
              </div>

              {/* Your Email */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#03373D]">Your Email</label>
                <input
                  {...register('riderEmail', { required: true })}
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8FA748]"
                  placeholder="Your Email"
                  defaultValue={user.email}
                />
              </div>

              {/* Region + District */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Region */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#03373D]">Your Region</label>
                  <select
                    {...register('riderRegion', { required: true })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#8FA748]"
                    defaultValue=""
                  >
                    <option disabled value="">
                      Pick a Region
                    </option>
                    {regions.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                {/* District */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#03373D]">Your District</label>
                  <select
                    {...register('riderDistrict', { required: true })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#8FA748]"
                    defaultValue=""
                  >
                    <option disabled value="">
                      Select Rider District
                    </option>
                    {districtsByRegion(riderRegion).map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* NID No */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#03373D]">NID No</label>
                <input
                  {...register('riderNID', { required: true })}
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8FA748]"
                  placeholder="NID"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#03373D]">Phone Number</label>
                <input
                  type="tel"
                  {...register('riderPhone', { required: true, pattern: phoneNoPattern, maxLength: 11, minLength: 11 })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8FA748]"
                  placeholder="Rider Phone No"
                />
                {errors.riderPhone?.type === 'required' && <p className="text-red-600 text-xs mt-1">Phone Number is Required</p>}
              </div>

              {/* Bike Brand Model and Year */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#03373D]">Bike Brand Model and Year</label>
                <input
                  {...register('bikeBrandModelYear', { required: true })}
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8FA748]"
                  placeholder="Bike Brand Model and Year"
                />
              </div>

              {/* Bike Registration Number */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#03373D]">Bike Registration Number</label>
                <input
                  {...register('bikeRegNo', { required: true })}
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8FA748]"
                  placeholder="Bike Registration Number"
                />
              </div>

              {/* Tell Us About Yourself */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#03373D]">Tell Us About Yourself</label>
                <textarea
                  {...register('tellYourself', { required: true })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:border-[#8FA748]"
                  placeholder="Tell Us About Yourself"
                  required
                />
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#caeb66] hover:bg-[#b8da57] text-sm font-semibold text-[#03373D] py-2.5 rounded-md transition-colors cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right side illustration */}
          <div className="flex justify-center">
            <img src={riderImg} alt="Courier Rider Illustration" className="max-w-xs w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rider;
