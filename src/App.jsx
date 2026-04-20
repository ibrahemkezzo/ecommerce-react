import BtmHeader from "./component/header/BtmHeader"
import TopHeader from "./component/header/TopHeader"
import Home from "./page/home/Home"


function App() {


  return (
    <>
      <header>
        <TopHeader/>
        <BtmHeader/>
      </header>


      <Home/>
    </>
  )
}

export default App
