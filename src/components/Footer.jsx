import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const travelDestinations = [
  { name: 'BALI', image: '/images/bali.jpg', link: '/destinations/bali' },
  { name: 'DUBAI', image: '/images/dubai.jpg', link: '/destinations/dubai' },
  { name: 'SINGAPORE', image: '/images/singapore.jpg', link: '/destinations/singapore' },
  { name: 'THAILAND', image: '/images/thailand.jpg', link: '/destinations/thailand' },
  { name: 'ANDAMAN', image: '/images/andaman.jpg', link: '/destinations/andaman' },
  { name: 'INDIA', image: '/images/india.jpg', link: '/destinations/india' },
  { name: 'LADAKH', image: '/images/ladakh.jpg', link: '/destinations/ladakh' },
  { name: 'HONGKONG', image: '/images/hongkong.jpg', link: '/destinations/hongkong' },
  { name: 'SRILANKA', image: '/images/srilanka.jpg', link: '/destinations/srilanka' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>ABOUT THRILLOPHILIA</h4>
          <ul>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">WE ARE HIRING</a></li>
            <li><a href="#">THRILLOPHILIA REVIEWS</a></li>
            <li><a href="#">TERMS & CONDITIONS</a></li>
            <li><a href="#">PRIVACY POLICIES</a></li>
            <li><a href="#">COPYRIGHT POLICIES</a></li>
            <li><a href="#">SUPPORT</a></li>
            <li className="fraud-warning"><a href="#">BEWARE OF FRAUDS ⚠️</a></li>
          </ul>
        </div>

        <div className="vertical-line" />

        <div className="footer-section">
          <h4>FOR SUPPLIERS</h4>
          <ul>
            <li><a href="#">LIST YOUR ACTIVITIES</a></li>
          </ul>
          <h4>FOR BRANDS</h4>
          <ul>
            <li><a href="#">PARTNER WITH US</a></li>
            <li><a href="#">DESTINATION MARKETING</a></li>
          </ul>
        </div>

        <div className="vertical-line" />

        <div className="footer-section">
          <h4>FOR TRAVELLERS</h4>
          <ul>
            <li><a href="#">GIFT AN EXPERIENCE</a></li>
          </ul>
        </div>

        <div className="vertical-line" />

        <div className="footer-section destination-grid">
          <h4>TRAVEL DESTINATIONS</h4>
          <div className="destination-images">
            {travelDestinations.map((item, index) => (
              <a key={index} href={item.link} className="destination-card">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className='footer-bottom-line-logo'>
            <div className="horizontal-divider"></div>
            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="RRR Travels Logo" className="footer-logo" />
            <h5>RRR-Travels</h5>
            <div className="horizontal-divider"></div>
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        <p>© 2025 RRRTravels.com All rights reserved.</p>
        <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
      </div>
    </footer>
  );
};

export default Footer;
