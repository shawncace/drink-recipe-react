import margarita from '../images/margarita.jpg'
import bloodymary from '../images/bloodymary.jpg'
import mimosa from '../images/mimosa.jpg'
import oldfashioned from '../images/oldfashioned.jpg'
import manhattan from '../images/manhattan.jpg'

import { AppContext } from '../Context'
import { useContext} from 'react'




const Header = () => {
  const {searchValue,
    setSearchValue, setSearchStarted,
    getDrink, drink, setDrink}=useContext(AppContext)

    function imageClick(e){
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
          <img src={margarita} alt="margarita" />
          <div className='popular-drink-name'>Margarita</div>
        </div>

        <div onClick={imageClick}> 
          <img src={bloodymary} alt="bloody mary" />
          <div className='popular-drink-name'>Bloody Mary</div>
        </div>

        <div onClick={imageClick}>
          <img src={mimosa} alt="mimosa" />
          <div className='popular-drink-name'>Mimosa</div>
        </div>
        
        <div onClick={imageClick}>
          <img src={oldfashioned} alt="old fashioned" />
          <div className='popular-drink-name'>Old Fashioned</div>
        </div>
        
        <div onClick={imageClick}>
          <img src={manhattan} alt="manhattan" />
          <div className='popular-drink-name'>Manhattan</div>
        </div>
        

        </div>
      </div>
    </>
  );
}
 
export default Header;