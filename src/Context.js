import {createContext, useState} from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [searchValue, setSearchValue]=useState('')
  const[drink, setDrink]=useState({})
  const [searchStarted, setSearchStarted]=useState(false)
  const[favoriteDrinks, setFavoriteDrinks] = useState([])
  
 
  
  

  const getDrink=async(searchValue)=>{
    setDrink({isFav:true})
    const API_URL=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;

    try{
      const response = await fetch(API_URL)
      const data = await response.json()

        console.log(data.drinks[0].strDrink)
        
        
        setDrink({...drink, ...data.drinks[0]})
        
        
    } catch(error){
      console.log(error)
    }    
  };

  const favoriteClick=()=>{
    const id= Math.floor(Math.random()*1000)
    const isFav = true
    
    const test={...drink, id, isFav}
    const newDrink=[...favoriteDrinks, test] 
    setFavoriteDrinks(newDrink) 

    

  }

  const favPicClick = (id)=>{
    setFavoriteDrinks(favoriteDrinks.filter((drink)=> drink.id !== id))
  }

 

  

  
  
  return (  
    <AppContext.Provider
      value={{
        drink,
        searchValue,
        searchStarted,
        favoriteDrinks,
        setDrink,
        setSearchValue,
        setSearchStarted,
        setFavoriteDrinks,
        getDrink,
        favoriteClick,
        favPicClick,
        
        
       
        // setIsFav
      }}>
        {props.children}
    </AppContext.Provider>
  );
}
 
export default AppContextProvider;