import margarita from '../images/margarita.jpg'
import bloodymary from '../images/bloodymary.jpg'
import mimosa from '../images/mimosa.jpg'
import oldfashioned from '../images/oldfashioned.jpg'
import manhattan from '../images/manhattan.jpg'

const Header = () => {
  return (  
    <>
      <h1 className='header'>The Drinktionary</h1>

      <div className='test-wrapper'>
        <div>Pop drinks</div>
        <div className="img-container">
          <img src={margarita} alt="marg" />
          <img src={margarita} alt="marg" />
          <img src={margarita} alt="marg" />
        </div>
      </div>


      
      
    </>
  );
}
 
export default Header;

{/* <div className='pop-drink-wrapper'>
      <div>Popular Cocktails</div>
      <div className="popular-drink-container">
        
        
        <img src={margarita} alt="margarita" />
        <img src={bloodymary} alt="bloody mary" />
        <img src={mimosa} alt="bloody mary" />
        <img src={oldfashioned} alt="bloody mary" />
        <img src={manhattan} alt="bloody mary" />

      </div>
      </div> */}