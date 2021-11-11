import AppContextProvider 
 from "./Context";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  
  
  return (
    <AppContextProvider>
      <div className='project-wrapper'>
        <Header />
        <Search />
      </div>
    </AppContextProvider>
    
  );
}

export default App;
