import {createContext, useState} from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [searchValue, setSearchValue]=useState('')
  const[drink, setDrink]=useState({})
  const [searchStarted, setSearchStarted]=useState(false)
  const[favoriteDrinks, setFavoriteDrinks] = useState([])

  
  

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

  const favoriteClick=()=>{
    const newDrink=[...favoriteDrinks, drink] 
    setFavoriteDrinks(newDrink)
    
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
        favoriteClick
      }}>
        {props.children}
    </AppContext.Provider>
  );
}
 
export default AppContextProvider;