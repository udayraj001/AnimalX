// src/Qr.jsx
import React from 'react';
import QRCode from 'qrcode.react';
import './Qr.css';

const QRCodeComponent = ({ value }) => (
  <div className="qr-code-wrapper">
    <QRCode
      value={value}
      size={300}
      bgColor={"#ffffff"}
      fgColor={"#000000"}
      level={"H"}
      includeMargin={true}
    />
    <div className="qr-code-overlay">animalx</div>
  </div>
);

const Qr = ({ userId }) => {
  const qrValue = `https://google.com/user/${userId}`;

  return (
    <>
    <div className="qr-container">
      <QRCodeComponent value={qrValue} />
      
    </div>
 
    </>
  );
};

export default Qr;
