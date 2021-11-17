import { useState } from "react";

const Favorites = () => {
  const[favoriteDrinks, setFavoriteDrinks] = useState([])

  return (  
    <section>
      
      <div className='section-title'>
        Favorites
      </div>
      
    

      <div className="favorites-container">
        
      </div>

    </section>
  );
}
 
export default Favorites;