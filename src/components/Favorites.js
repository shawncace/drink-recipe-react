import { useState } from "react";

const Favorites = () => {
  const[favoriteDrinks, setFavoriteDrinks] = useState([])

  return (  
    <>
      <div className='section-title'>
        Favorites
      </div>

      <div className="favorites-container">
        
      </div>

    </>
  );
}
 
export default Favorites;