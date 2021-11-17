import { useState } from "react";

const Favorites = () => {
  const[favoriteDrinks, setFavoriteDrinks] = useState([])

  return (  
    <section className='fav-section'>
      
      <div className='section-title'>
        Favorites
      </div>
      
    

      <div className="favorites-container">
        <div className="fav-img">

        </div>

        <div className="fav-img">
          
        </div>

        <div className="fav-img">
          
        </div>
      </div>

    </section>
  );
}
 
export default Favorites;