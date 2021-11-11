import {useState} from 'react'
import { AppContext } from '../Context'
import { useContext } from 'react'

const Search = () => {
  const {searchValue,
    setSearchValue,
    drink, setDrink, getDrink}=useContext(AppContext)

  const [searchStarted, setSearchStarted]=useState(false)

  const handleClick=() =>{
    if(searchValue === ''){
      alert('gg')
    }
    
    getDrink(searchValue)
    setSearchStarted(true)
  }

  function handleKeypress(e){
    if(e.keyCode===13 || e.which ===13){
      if(searchValue===''){
        alert('gg')
      }


      getDrink(searchValue)
      setSearchStarted(true)
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
        setDrink(data.drinks[0])
        
        
    } catch(error){
      console.log(error)
    }
  }
  
  return (  
    <>
      <div className='section-title'>Search for a Drink
      </div>

      {!searchStarted ? ( <div className='recipe-container'>
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
       
       <div className="find-drink-container">
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
                  onKeyPress={handleKeypress}
                  placeholder='Name'/>
            <button className='go-btn' onClick={handleClick}>GO</button>
            </div>
          <button className='random-bev-btn-two' onClick={handleRandomClick}>Random Beverage</button>
          <div><i className="far fa-star"></i></div>
          </div>
          

          
          
        </div>
          </div>
          )}
          
    </>
  );
}
 
export default Search;