// import React from 'react';

// const Footer = () => {
//   return (
//     <footer style={{ backgroundColor: '#2D3748', color: 'white', padding: '16px', textAlign: 'center' }}>
//       <p>My Website. All rights reserved.</p>
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '8px' }}>
//         <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a>
//         <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Twitter</a>
//         <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a>
//       </div>
//     </footer>
//   );
// }

// export default Footer;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2D3748', color: 'white', padding: '16px', textAlign: 'center' }}>
      <p>My Website. All rights reserved.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '8px' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
      </div>
    </footer>
  );
}

export default Footer;

