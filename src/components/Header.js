

import margarita from '../images/margarita2.png'
import bloodymary from '../images/bloodymary2.png'
import mimosa from '../images/mimosa2.png'
import oldfashioned from '../images/oldfashioned2.png'



import { AppContext } from '../Context'
import { useContext} from 'react'




const Header = () => {
  const {setSearchStarted,
    getDrink, setToggleStar, favoriteDrinks}=useContext(AppContext)

    function imageClick(e){
    if(favoriteDrinks.some(drank=> drank.strDrink ===e.target.alt)){
      setToggleStar(true)
    } else{
      setToggleStar(false)
    }
    
    getDrink(e.target.alt)
    
    setSearchStarted(true)
  }

  return (  
    <>
      <h1 className='header'>The Drinktionary</h1>
      
      <div className='pop-drink-wrapper'>
        <div className='title'>Popular Cocktails</div>
        
        <div className="img-container">
        
        <div onClick={imageClick}>
          <img src={margarita} alt="Margarita" />
          <div className='popular-drink-name'>Margarita</div>
        </div>

        <div onClick={imageClick}> 
          <img src={bloodymary} alt="Bloody Mary" />
          <div className='popular-drink-name'>Bloody Mary</div>
        </div>

        <div onClick={imageClick}>
          <img src={mimosa} alt="Mimosa" />
          <div className='popular-drink-name'>Mimosa</div>
        </div>
        
        <div onClick={imageClick}>
          <img src={oldfashioned} alt="Old Fashioned" />
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