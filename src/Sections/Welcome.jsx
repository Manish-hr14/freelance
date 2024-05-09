import React from 'react';
import './welcome.css'; // Import your CSS file

const ProductCard = ({ imgSrc, productName, oldPrice, newPrice }) => {
  return (
    <article className="card">
      <div className="card__img">
        <img src={imgSrc} alt={productName} />
      </div>
      <div className="card__name">
        <p>{productName}</p>
      </div>
      <div className="card__precis">
        <a href="#" className="card__icon"><ion-icon name="heart-outline"></ion-icon></a>
        <div>
          <span className="card__preci card__preci--before"></span>
          <span className="card__preci card__preci--now"></span>
        </div>
        <a href="#" className="card__icon"><ion-icon name="cart-outline"></ion-icon></a>
      </div>
    </article>
  );
}

const ProductList = () => {
  // Data for each card
  const cardsData = [
 
    {
      imgSrc: "https://i.postimg.cc/qR9cwft4/ambasdoor-removebg-preview.png",
      productName: "Ambassdor",
   
    },
   
  ];

  return (
    <main className="bd-grid">
      <h1>freelance dao is great</h1>
      {cardsData.map((card, index) => (
        <ProductCard
          key={index}
          imgSrc={card.imgSrc}
          productName={card.productName}
          oldPrice={card.oldPrice}
          newPrice={card.newPrice}
        />
      ))}
    </main>
  );
}

export default ProductList;
