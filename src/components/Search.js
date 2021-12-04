
import { AppContext } from '../Context'
import { useContext } from 'react'


const Search = () => {
  const {searchValue,
    setSearchValue, searchStarted,setSearchStarted,
    drink, setDrink, getDrink, favoriteClick,otherClick,toggleStar, setToggleStar}=useContext(AppContext)

 
  
  
  // function favoritedClick(){
  //   favoriteClick()
  //   setToggleStar(true)
  // }

  const handleClick=() =>{
    if(searchValue ===''){
      alert('Choose a drink')
      return
    }
    setToggleStar(false)
    getDrink(searchValue)
    setSearchStarted(true)
    setSearchValue('')
    setDrink([])
  }

  function handleKeypress(e){
    if(e.keyCode===13 || e.which ===13){
      if(searchValue===''){
        alert('Choose a drink')
        return
      }
      

      setToggleStar(false)
      getDrink(searchValue)
      setSearchStarted(true)
      setSearchValue('')
      setDrink([])
      
    }
  }

  const handleRandomClick = ()=>{
    getRandomDrink()
    setSearchStarted(true)
  }

  

  const getRandomDrink = async()=>{
    
    
    const API_URL='https://www.thecocktaildb.com/api/json/v1/1/random.php'

    try{
      const response = await fetch(API_URL)
      const data = await response.json()

      
        console.log(data.drinks[0].strDrink)
        setDrink({...drink, ...data.drinks[0]})
        
        
    } catch(error){
      console.log(error)
    }
    setToggleStar(false)
  }
  
  return (  
    <>
     <section className='search-section'>
      <div className='section-title title'>Search for a Drink
      </div>

      {!searchStarted ? ( 
      
      <div className='recipe-container'>
        <div className="find-drink-container">
          <input onChange={(event)=>setSearchValue(event.target.value)}
                  onKeyPress={handleKeypress}
                  placeholder='Name'/>
          <button className='go-btn' onClick={handleClick}>GO</button>
        </div>

            <button className='random-bev-btn' onClick={handleRandomClick}>Random Beverage</button>
        </div> 
        
        
        ):(

        <div className='recipe-container-two'>
        <img src={drink.strDrinkThumb} alt=''/>
        
        <div className="find-drink-container find-drink-container-mobile">
            <div className="drink-name">
              {drink.strDrink}
            </div>  
            <div className="drink-ingredients">
              <span>{drink.strIngredient1}</span>
              <span>{drink.strIngredient2}</span>
              <span>{drink.strIngredient3}</span>
              <span>{drink.strIngredient4}</span>
              <span>{drink.strIngredient5}</span>
              <span>{drink.strIngredient6}</span>
              <span>{drink.strIngredient7}</span>
              <span>{drink.strIngredient8}</span>
              <span>{drink.strIngredient9}</span>
            </div>
            <div className="drink-instructions">
              {/* {drink.strInstructions && drink.strInstructions.substring(0,150)+'...'} */}
              {drink.strInstructions}
            </div>
            
            <div className="input-and-btn">
              <div className='input-and-go-container'>
                
                <input onChange={(event)=>setSearchValue(event.target.value)}
                    value={searchValue}
                    onKeyPress={handleKeypress}
                    placeholder='Name'/>
                <button className='go-btn' onClick={handleClick}>GO</button>
                
                
              </div>
            
            <div className='random-btn-and-fav-btn'>
            <button className='random-bev-btn-two' onClick={handleRandomClick}>Random Beverage</button>
            
            {!toggleStar ? (<div>
        <i onClick={favoriteClick}
         className="far fa-star">
        </i>
      </div>)
      :
      (<div>
        <i onClick={otherClick} className="fas fa-star">
        </i>
      </div>)}

      </div>
            
        </div>
            
            
          </div>
          
            </div>
            
            )}
     </section> 
     
    </>
  );
}
 
export default Search;