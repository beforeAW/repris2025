const MenuPage = ()=>{
  return  (
    <div>
      <section>
        <h1>Lägrets meny under lägret</h1>
        <h2>Meny</h2>
        <ul className="menu-list">
          <li><strong>Lördag 26/7</strong></li>
            <li>Lunch</li>
            <li>Festivalburgare med Bröd</li>
            <li>Middag</li>
            <li>"Rekodelig" Pasta med kalkonsås</li>
          <li><strong>Söndag 27/7</strong></li>
            <li>Lunch</li>
            <li>Helge Con Carne</li>
            <li>Middag</li>
            <li>Galen Kycklinggryta / Kycklingwook Nudlar</li>
          <li><strong>Måndag 28/7</strong></li>
            <li>Lunch</li>
            <li>Jamboree-Falafel / Köttbullar Tortilla Grönsaker</li>
            <li>Middag</li>
            <li>"Gullmarnsfisk" Potatis Filsås</li>
          <li><strong>Tisdag 29/7</strong></li>
            <li>Lunch</li>
            <li>Potatis, lökadoppa, bacon, alt. Kolbulle eller rårakor</li>
            <li>Middag</li>
            <li>Fläskkarré i sötsur sås, ris Ananas</li>
          <li><strong>Onsdag 30/7</strong></li>
            <li>Lunch</li>
            <li>Ölandias Scoutwrap (grillad korv i tortillas, med mos/potats o tillbehör)</li>
            <li>Middag</li>
            <li>Tidstypisk Köttfärssås, Pasta</li>
          <li><strong>Torsdag 31/7</strong></li>
            <li>Lunch</li>
            <li>Legendarisk Kräm eller Potatis o Purjolökssoppa, Smörgås</li>
            <li>Middag</li>
            <li>"Naturlig" Falukorv (stroganof) ris, alt risotto a la Natura</li>
          <li><strong>Fredag 1/8</strong></li>
            <li>Lunch</li>
            <li>Fjäderfä från klockupproret med Columbus Pasta</li>
            <li>Middag</li>
            <li>Tacobuffe från Sagoluffen</li>
        </ul>
      </section>
      <section>        <a
          href="/src/assets/kokbok-repris-2025.pdf"
          className="menu-pdf-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          📖 Se hela kokboken (PDF)
        </a></section>
    </div>
  );
};

export default MenuPage