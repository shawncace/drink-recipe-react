import { useState, useContext } from "react";
import { AppContext } from "../Context";

const Favorites = () => {
  const {searchValue,
    setSearchValue, searchStarted,setSearchStarted,
    drink, setDrink, getDrink, favoriteClick, favoriteDrinks, setIsFav, favPicClick}=useContext(AppContext)

  return (  
    <section className='fav-section'>
      
      <div className='section-title'>
        Favorites
      </div>
      
    

      <div className="favorites-container">
        {favoriteDrinks.map((drink)=>(
          <div className="img-container fav-img">
            <img src={drink.strDrinkThumb} 
                 alt={drink.strDrink}
                 onClick={favPicClick}
                 key={drink.id}
            />
            <div className='fav-drink-name'>{drink.strDrink}</div>
          </div>
        
        
        ))}
        

        
      </div>

    </section>
  );
}
 
export default Favorites;