import { useContext } from "react";
import { AppContext } from "../Context";

const Favorites = () => {
  const {favoriteDrinks, favPicClick}=useContext(AppContext)

  return (  
    <>
      {favoriteDrinks.length > 0 ? (
      <section className='fav-section'>
        
        <div className='section-title title'>
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
      ):null}
    </>
  );
  
}
 
export default Favorites;