import {useState} from 'react'

const Search = () => {
  const [searchValue, setSearchValue]=useState('')

  const[drink, setDrink]=useState({})

  const handleClick=() =>{
    if(searchValue === ''){
      alert('gg')
    }
    
    getDrink(searchValue)
  }

  function handleKeypress(e){
    if(e.keyCode===13 || e.which ===13){
      if(searchValue===''){
        alert('gg')
      }


      getDrink(searchValue)
     
    }
  }

  const handleRandomClick = ()=>{
    getRandomDrink()
  }

  const getDrink=async(searchValue)=>{
    const API_URL=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;

    try{
      const response = await fetch(API_URL)
      const data = await response.json()

      
        console.log(data.drinks[0].strDrink)
        setDrink(data.drinks[0])
        
        
    } catch(error){
      console.log(error)
    }    
  };

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

      {/* <div className='recipe-container'>
        <div className="find-drink-container">
          <input onChange={(event)=>setSearchValue(event.target.value)}
                onKeyPress={handleKeypress}
                placeholder='Name'/>
          <button onClick={handleClick}>GO</button>
          </div>

          <button className='random-bev-btn' onClick={handleRandomClick}>Random Beverage</button>
      </div> */}

      <div className='recipe-container-two'>
        <div className="find-drink-container">
          <img src={drink.strDrinkThumb} alt=''/>
          <input onChange={(event)=>setSearchValue(event.target.value)}
                onKeyPress={handleKeypress}
                placeholder='Name'/>
          <button onClick={handleClick}>GO</button>
          </div>

          <button className='random-bev-btn' onClick={handleRandomClick}>Random Beverage</button>
      </div>
    </>
  );
}
 
export default Search;