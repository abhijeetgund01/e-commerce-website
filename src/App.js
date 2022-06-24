import { Box } from "@mui/material";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import DataProvider from "./context/DataProvider";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import HomeScreen from "./screens/HomeScreen";
// import Logo from "./images/flipkart.png"
// import Plus from "./images/plus.png"
// import ProductScreen from "./screens/ProductScreen";

function App() {
  return (

      <DataProvider>
        <Header/>
        
        <Box style={{marginTop:14}}>
        <Home/>
        </Box>
      </DataProvider>







    // <BrowserRouter>
    //       <div className="header">
           
    //           <div className="header__first">
    //           <a href="/"><img width={75} src={Logo} alt="flipcart_logo" className="logo"/></a>
    //           <a href="/" className="plus">Explore &nbsp;
    //             <span className="plusColor">Plus</span>
    //             <img width={14} src={Plus} alt="plus"/>
    //           </a>
    //           </div>
    //           <div className="header__second">
    //             <input placeholder="Search for products" className="search_product" />
    //             <SearchIcon  />
    //           </div>
    //           <div className="header__third">
    //             <button>Login</button>
    //             </div>
    //             <div className="header__four">
    //               <span style={{color:"#fff"}}>More</span>
    //               <ExpandMoreIcon style={{color:"#fff"}} />
    //             </div>
    //             <div className="header__five">
    //               <ShoppingCartIcon style={{color:"#fff"}} />
    //               <p style={{color:"#fff"}}>Cart</p>
    //             </div>

    //     </div>
        
    //     <main>
    //       <Routes>
    //         <Route path="/" element={<HomeScreen />} />
    //         <Route path="/product/:slug" element={<ProductScreen />} />
    //       </Routes>
    //     </main>
     
    // </BrowserRouter>

  );
}

export default App;
