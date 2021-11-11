import AppContextProvider 
 from "./Context";
import Header from "./components/Header";
import Search from "./components/Search";
import Favorites from "./components/Favorites";

function App() {
  
  
  return (
    <AppContextProvider>
      <div className='project-wrapper'>
        <Header />
        <Search />
        <Favorites />
      </div>
    </AppContextProvider>
    
  );
}

export default App;
