import {useState} from 'react'

const Search = () => {
  const [searchValue, setSearchValue]=useState('')

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

  const getDrink=async(searchValue)=>{
    const API_URL=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;

    try{
      const response = await fetch(API_URL)
      const data = await response.json()
        console.log(data.drinks[0].strDrink)
        
    } catch(error){
      console.log(error)
    }    
  };
  
  return (  
    <div className='recipe-container'>
      <input onChange={(event)=>setSearchValue(event.target.value)}
             onKeyPress={handleKeypress}/>
      <button onClick={handleClick}>Go</button>
    </div>
  );
}
 
export default Search;