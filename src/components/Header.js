import margarita from '../images/margarita.jpg'
import bloodymary from '../images/bloodymary.jpg'
import mimosa from '../images/mimosa.jpg'
import oldfashioned from '../images/oldfashioned.jpg'
import manhattan from '../images/manhattan.jpg'

const Header = () => {
  return (  
    <>
      <h1 className='header'>The Drinktionary</h1>

      <div className='pop-drink-wrapper'>
        <div>Popular Cocktails</div>
        <div className="img-container">
        
        <div className="drink">
          <img src={margarita} alt="margarita" />
          <div>Margarita</div>
        </div>

        <div className="drink">
          <img src={bloodymary} alt="bloody mary" />
          <div>Bloody Mary</div>
        </div>
        
        
        <img src={mimosa} alt="bloody mary" />
        <img src={oldfashioned} alt="bloody mary" />
        <img src={manhattan} alt="bloody mary" />

        </div>
      </div>
    </>
  );
}
 
export default Header;