const MapPage = ()=>{
  return  (
    <section>
      <h1>Lägerkartan</h1>
      <p>Klicka på kartan så går det att zooma, ni skickas till en ny flik.</p>
      <a href="https://web.cdn.scouterna.net/uploads/sites/876/2025/06/lagerkarta-jpeg.jpg" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://web.cdn.scouterna.net/uploads/sites/876/2025/06/lagerkarta-jpeg.jpg" 
          alt="Lägerkarta" 
          style={{maxWidth: '100%', height: 'auto', display: 'block', margin: '2rem auto'}}
        />
      </a>
    </section>
    );
};

export default MapPage