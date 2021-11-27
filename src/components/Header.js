import margarita from '../images/margarita.jpg'
import bloodymary from '../images/bloodymary.jpg'
import mimosa from '../images/mimosa.jpg'
import oldfashioned from '../images/oldfashioned.jpg'
import manhattan from '../images/manhattan.jpg'

import margarita2 from '../images/margarita2.png'
import bloodymary2 from '../images/bloodymary2.png'
import mimosa2 from '../images/mimosa2.png'
import oldfashioned2 from '../images/oldfashioned2.png'



import { AppContext } from '../Context'
import { useContext} from 'react'




const Header = () => {
  const {searchValue,
    setSearchValue, setSearchStarted,
    getDrink, drink, setDrink, setToggleStar, favoriteDrinks}=useContext(AppContext)

    function imageClick(e){
    //BUG: if the popular drink is already in favoriteDrinks array and you click on the image from the Popular Drinks section rather than the Favorites section then the star is not toggled correctly. 

    setToggleStar(false)

    getDrink(e.target.alt)
    
    setSearchStarted(true)
    
    
    
  }

  return (  
    <>
      <h1 className='header'>The Drinktionary</h1>
      
      <div className='pop-drink-wrapper'>
        <div>Popular Cocktails</div>
        
        <div className="img-container">
        
        <div onClick={imageClick}>
          <img src={margarita2} alt="Margarita" />
          <div className='popular-drink-name'>Margarita</div>
        </div>

        <div onClick={imageClick}> 
          <img src={bloodymary2} alt="Bloody Mary" />
          <div className='popular-drink-name'>Bloody Mary</div>
        </div>

        <div onClick={imageClick}>
          <img src={mimosa2} alt="Mimosa" />
          <div className='popular-drink-name'>Mimosa</div>
        </div>
        
        <div onClick={imageClick}>
          <img src={oldfashioned2} alt="Old Fashioned" />
          <div className='popular-drink-name'>Old Fashioned</div>
        </div>
        
        {/* <div onClick={imageClick}>
          <img src={manhattan} alt="manhattan" />
          <div className='popular-drink-name'>Manhattan</div>
        </div> */}
        

        </div>
      </div>
    </>
  );
}
 
export default Header;