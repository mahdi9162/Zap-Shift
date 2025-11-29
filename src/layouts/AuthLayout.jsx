import React from 'react';
import Login from '../pages/Auth/Login/Login';
import Container from '../components/Container/Container';
import { Outlet } from 'react-router';
import authImage from '../../assets/authImage.png';
import Logo from '../components/Logo/Logo';

const AuthLayout = () => {
  return (
    <Container>
      <section className="mt-5">
        <Logo></Logo>
        <div className="my-10 flex justify-between items-center shadow-xl pl-10 rounded-3xl overflow-hidden h-[700px] ">
          <div className="flex-1 ">
            <Outlet></Outlet>
          </div>
          <figure className="flex-1 bg-[#FAFDF0] h-full flex justify-center items-center">
            <img src={authImage} alt="Auth Image" />
          </figure>
        </div>
      </section>
    </Container>
  );
};

export default AuthLayout;
