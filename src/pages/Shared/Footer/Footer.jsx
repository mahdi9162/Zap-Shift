import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { Link } from 'react-router';
import Container from '../../../components/Container/Container';
import linkedin from '../../../../assets/social/linkedin.svg';
import x from '../../../../assets/social/X.svg';
import facebook from '../../../../assets/social/facebook.svg';
import youtube from '../../../../assets/social/youtube.svg';

const Footer = () => {
  return (
    <Container>
      <footer className="footer gap-y-5 footer-horizontal footer-center px-28 py-20 rounded-4xl bg-[#0B0B0B]">
        <aside className="border-b-2 border-dashed border-[#03464D]/40 w-full pb-8">
          <Logo className={`text-white`}></Logo>
          <p className="font-bold text-[#DADADA] w-96">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          {/* <p>Copyright © {new Date().getFullYear()} - All right reserved</p> */}
        </aside>
        <div className="flex justify-center gap-5 text-[#DADADA] border-b-2 border-dashed border-[#03464D]/40 w-full pb-5">
          <Link>Services</Link>
          <Link>Coverage</Link>
          <Link>About Us</Link>
          <Link>Pricing</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
        </div>

        <div className="grid grid-flow-col items-center gap-5">
          <Link>
            <img src={linkedin} alt="" className="w-6 h-5 " />
          </Link>
          <Link>
            <img src={x} alt="" className="w-6 h-4" />
          </Link>
          <Link>
            <img src={facebook} alt="" className="w-6 h-6" />
          </Link>
          <Link>
            <img src={youtube} alt="" className="w-6 h-6" />
          </Link>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
