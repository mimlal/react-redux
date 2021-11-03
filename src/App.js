import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from './redux/store'
import ItemContainer from "./components/ItemContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";
const App=()=>{

  return(
   <>
   <Provider store ={store}>
   <UserContainer/>
  {/*
  
    <ItemContainer cake/>
   <ItemContainer/>
   <HooksCakeContainer/>
   <CakeContainer/>
   <IceCreamContainer/>
   <NewCakeContainer/>
  */}
  </Provider>
   </>
  )
}

export default App;
