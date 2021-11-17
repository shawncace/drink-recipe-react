import { useState, useContext } from "react";
import { AppContext } from "../Context";

const Favorites = () => {
  const {searchValue,
    setSearchValue, searchStarted,setSearchStarted,
    drink, setDrink, getDrink, favoriteClick, favoriteDrinks}=useContext(AppContext)

  return (  
    <section className='fav-section'>
      
      <div className='section-title'>
        Favorites
      </div>
      
    

      <div className="favorites-container">
        {favoriteDrinks.map((drink)=>(
          <div className="img-container fav-img">
            <img src={drink.strDrinkThumb} alt='drink'/>
            <div>{drink.strDrink}</div>
          </div>
        
        
        ))}
        

        
      </div>

    </section>
  );
}
 
export default Favorites;