import {createContext, useState} from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [searchValue, setSearchValue]=useState('')
  const[drink, setDrink]=useState({})
  const [searchStarted, setSearchStarted]=useState(false)
  const[favoriteDrinks, setFavoriteDrinks] = useState([])
  
  const [toggleStar, setToggleStar]=useState(false)
 
  
  

  const getDrink=async(searchValue)=>{
    setDrink({isFav:true})
    const API_URL=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;

    try{
      const response = await fetch(API_URL)
      const data = await response.json()
        console.log(data.drinks)
        console.log(data.drinks[0].strDrink)
        
        
        setDrink({...drink, ...data.drinks[0]})
        
        
    } catch(error){
      console.log(error)
    };

    
  };

  const favoriteClick=()=>{
    setToggleStar(true)
    if(favoriteDrinks.some(drank=> drank.strDrink ===drink.strDrink)){
      alert('that is already in favs')
      return
    } 
    
    const id= Math.floor(Math.random()*1000)
    const isFav = true
    
    const test={...drink, id, isFav}
    const newDrink=[...favoriteDrinks, test] 
    setFavoriteDrinks(newDrink) 

    

    

  }

  const otherClick=()=>{
    setFavoriteDrinks(favoriteDrinks.filter((drank)=> drank.strDrink !== drink.strDrink))
    setToggleStar(false);
  }

  const favPicClick = (e)=>{
    getDrink(e.target.alt)
    setToggleStar(true);
    
    
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
        toggleStar,
        setToggleStar,
        otherClick
        
       
        // setIsFav
      }}>
        {props.children}
    </AppContext.Provider>
  );
}
 
export default AppContextProvider;