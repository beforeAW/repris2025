
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='footer'>

        {/* Bottom bar with copyright */}
        <div>
          <p>REPRIS2025 © {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;