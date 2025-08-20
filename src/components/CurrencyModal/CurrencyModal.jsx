import React from 'react';
import './CurrencyModal.css';
import { IoMdClose } from 'react-icons/io';

const CurrencyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="currency-modal-overlay">
      <div className="currency-modal">
        <div className="currency-modal-header">
          <h3>Currency Picker</h3>
          <IoMdClose className="close-icon" onClick={onClose} />
        </div>
        <div class="devider">
          <hr class="horizontal-divider" />
        </div>
        <input
          type="text"
          placeholder="Search currency or country"
          className="currency-search-input"
        />

        <div className="currency-section">
          <h4>Most Common</h4>
          <ul className="currency-list">
            <li>
              <div className="currency-data">
                <div className='destination-flag-currency'>
                  <img src="https://flagcdn.com/us.svg" alt="USA" />
                  USD – $ 
                </div>
                <div className="destination-currency-name">
                  USD Dollar 
                </div>
              </div>
            </li>
            <li>
              <div className="currency-data">
                <div className='destination-flag-currency'>
                  <img src="https://flagcdn.com/in.svg" alt="India" />
                  INR – ₹
                </div>
                <div className="destination-currency-name">
                  Indian Rupee
                </div>
              </div>
            </li>
            <li>
              <div className="currency-data">
                <div className='destination-flag-currency'>
                  <img src="https://flagcdn.com/ae.svg" alt="UAE" />
                  AED – 
                </div>
                <div className="destination-currency-name">
                UAE Dirham 
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="currency-section">
          <h4>All Currencies</h4>
          <ul className="currency-list">
            <li>
              <div className='currency-data'>
                <div className='destination-flag-currency'>
                  <img src="https://flagcdn.com/gb.svg" alt="UK" />
                GBP – 
                </div>
                <div className="destination-currency-name">
                  British Pound
                </div>
              </div>
            </li>
            <li>
              <div className='currency-data'>
                <div className='destination-flag-currency'>
                  <img src="https://flagcdn.com/eu.svg" alt="Euro" />
                  EUR – 
                </div>
                <div className="destination-currency-name">
                  Euro
                </div>
              </div>
            </li>
            <li>
              <div className='currency-data'>
                <div className='destination-flag-currency'>
                  <img src="https://flagcdn.com/jp.svg" alt="Japan" />
                  JPY – 
                </div>
                <div className="destination-currency-name">
                  Japanese Yen
                </div>
              </div>
            </li>
            <li>
              <div className='currency-data'>
                <div className='destination-flag-currency'>
                  <img src="https://flagcdn.com/au.svg" alt="Australia" />
                  AUD – 
                </div>
                <div className="destination-currency-name">
                  Australian Dollar
                </div>
              </div>
            </li>
            <li>
              <div className='currency-data'>
                <div className='destination-flag-currency'>
                  <img src="https://flagcdn.com/ca.svg" alt="Canada" />
                  CAD – 
                </div>
                <div className="destination-currency-name">
                  Canadian Dollar
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CurrencyModal;
