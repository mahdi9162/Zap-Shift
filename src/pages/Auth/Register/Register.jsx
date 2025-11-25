import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const { signUpWithEmail, setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const passValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|]).{8,15}$/;

  const handleRegisterForm = (data) => {
    signUpWithEmail(data.email, data.password)
      .then((res) => {
        const userProfile = res.user;
        setUser(userProfile);
        alert('register successfull');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <div>
        <h3 className="text-[#03373D] text-4xl font-bold">Create an Account</h3>
        <p className="text-[#03373D] mt-1.5 mb-8 text-sm">Register with ZapShift</p>
      </div>
      <form onSubmit={handleSubmit(handleRegisterForm)}>
        <fieldset className="fieldset gap-2.5">
          {/* Name */}
          <label className="label">Name</label>
          <input type="text" {...register('name', { minLength: 6, required: true })} className="input w-96" placeholder="Enter Your Name" />
          {errors.name?.type === 'required' && <p className="text-red-500 text-xs">Name is required.</p>}
          {errors.name?.type === 'minLength' && <p className="text-red-500 text-xs">Name must be at least 6 characters.</p>}
          {/* Email */}
          <label className="label">Email</label>
          <input type="email" {...register('email', { required: true })} className="input w-96" placeholder="Enter Your Email" />
          {errors.email?.type === 'required' && <p className="text-xs text-red-500">Email address is required.</p>}
          {/* Pass */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register('password', { required: true, minLength: 8, maxLength: 15, pattern: passValidation })}
            className="input w-96"
            placeholder="Enter Your Password"
          />
          {errors.password?.type === 'required' && <p className="text-red-500 text-xs">Password is required.</p>}
          {errors.password?.type === 'minLength' && <p className="text-red-500 text-xs">Password must be at least 8 characters.</p>}
          {errors.password?.type === 'maxLength' && <p className="text-red-500 text-xs">Password cannot exceed 15 characters.</p>}
          {errors.password?.type === 'pattern' && (
            <p className="text-red-500 text-xs">
              Password must include an uppercase letter, <br /> a lowercase letter, a number, and a special character.
            </p>
          )}
          <div>
            <button className="btn btn-neutral w-96 bg-[#caeb66] border-none text-black shadow-lg mt-4 ">Register</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Register;
