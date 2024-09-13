import React from "react";
import ReactDOM from "react-dom/client";

// import { ThemeProvider, createTheme } from '@mui/material/styles';

// // Create a theme instance if needed
// const theme = createTheme({
//   // Customize your theme here
// });

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import App from './Sample/App.jsx'
// import App1 from './props/App1.jsx'
// import App2 from './ConditionalRender/App2.jsx'
// import App3 from "./Click Event/App3.jsx"
// import App4 from "./UseState/App4.jsx"
// import App5 from "./List/App5.jsx"
import "./index.css";

// import App6 from './OnChange Event/App6'
// import App7 from './Task 1/App7'
import App8 from "./Task 2/App8"
// import App9 from "./Task 3/App9"
// import App10 from "./obj in useState/App10"
// import App11 from "./Task 4/App11"
// import App12 from './Task 5-card toggle/App12'
// import App13 from './ArrObj in Usestate/App13'
// import App14 from './UseEffect/App14'
// import App15 from "./UseEffect2/App15"
// import App16 from "./JSON-useEff/App16"
// import App17 from './UseEffect3-newsApi/App17'
// import App18 from "./UseRef Task/App18";
// import App19 from "./UseRef & UseState/App19"
// import App20 from "./Dog load Task/App20";
// import App21 from "./UseMemo/App21"
// import Component from "./UseMemo/Component";
// import App22 from "./Task 6 -Expense cal/App22"
// import App23 from "./Task 7- Counter/App23"
// import App24 from "./Task 8/App24";
// import App25 from "./Vd Game API/App25"

// import CompA from "./Props Drilling/ComponentA"
// import Context from "./UseContexts/ComponentA"

// import Profile from './Router Dynamic/Profile.jsx'
// import Pages from './Router Dynamic/Pages.jsx'

// import HomePage from './Router Static/HomePage'
// import Cate from "./Router Static/Cate"
// import Hobby from "./Router Static/Hobby"
// import About from './Router Static/About'
// import Contact from './Router Static/Contact'
// import NotFound from './Router Static/NotFound'
// const route=createBrowserRouter([
//   {
//     path:'/Pages',
//     element:<Pages/>,
//     children:[
//       {
//         path:"/Pages/:profileId",
//         element:<Profile/>
//       }
//     ]
//   },

//   {
//   path:'/',
//   element:<HomePage/>,
//   errorElement:<NotFound/>
// }
// {
//   path:'/Cate',
//   element:<Cate/>
// },{
//   path:"/Hobby",
//   element:<Hobby/>
// },{
//   path:"/About",
//   element:<About/>
// },{
//   path:"/Contact",
//   element:<Contact/>
// }

// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* Material Ui */}
{/* <ThemeProvider theme={theme}>
    <App20 />
    </ThemeProvider> */}
    

    {/* Router var */}
    {/* // <RouterProvider router={route}></RouterProvider> */}

    {/* UseContext */}
    {/* <Context/> */}

    {/* Props Drilling */}
    {/* <CompA/> */}

    {/* First Sample */}
    {/* <App /> */}

    {/* Props  */}
    {/* <App1/> */}

    {/* ConditionalRendering props*/}
    {/* <App2/> */}

    {/* onClick Event */}
    {/* <App3/> */}

    {/* UseState */}
    {/* <App4/> */}

    {/* Array List props*/}
    {/* <App5/> */}

    {/* onchange event useState*/}
    {/* <App6/> */}

    {/* Task1  props*/}
    {/* <App7/> */}

    {/* Task 2 usestate*/}
    <App8/>

    {/* Task 3 filter*/}
    {/* <App9/> */}

    {/* object in usestate */}
    {/* <App10/> */}

    {/* task 4 usestate btn */}
    {/* <App11/> */}

    {/* Task 5 useState card*/}
    {/* <App12/> */}

    {/* Arr & obj UseState */}
    {/* <App13/> */}

    {/* UseEffect window heigh & width*/}
    {/* <App14/> */}

    {/* useEffect color box */}
    {/* <App15/> */}

    {/* useEff JSON */}
    {/* <App16/> */}

    {/* API news */}
    {/* <App17 /> */}

    {/* UseRef Task */}
    {/* <App18/>*/}

    {/* UseRef and UseState */}
    {/* <App19/> */}

    {/* Axios Dog Loadin*/}
    {/* <App20/> */}
 
    {/* UseMemo */}
    {/* <Component/> */}
    {/* <App21/> */}

    {/* Task 6 -Expense cal useMemo*/}
    {/* <App22/> */}

    {/* Task 7 - Counter + - useCallback */}
    {/* <App23/> */}

    {/* Task 8- React.memo */}
    {/* <App24/> */}

    {/* videogame fetch API  */}
    {/* <App25/> */}
  </React.StrictMode>
);
