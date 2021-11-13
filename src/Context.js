import {createContext, useState} from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [searchValue, setSearchValue]=useState('')
  const[drink, setDrink]=useState({})
  const [searchStarted, setSearchStarted]=useState(false)
  

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
  
  return (  
    <AppContext.Provider
      value={{
        drink,
        searchValue,
        setDrink,
        setSearchValue,
        setSearchStarted,
        getDrink
      }}>
        {props.children}
    </AppContext.Provider>
  );
}
 
export default AppContextProvider;