import { useState, useEffect } from "react";
// img
import  ld from "../assets/App20 Dog/reactt.gif"
import er from "../assets/App20 Dog/some.gif"
// PreBuilt components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import axios from "axios";
// "https://dog.ceo/api/breeds/image/random"  ---Api
const TaskUi = () => {
// To store & change the API link
    const [data, setData] = useState([]);
// To store & change the error
    const [error, setError] = useState(false);
// To store & change the loading
    const [load, setLoad] = useState(true);
    
// Button to change img
    const dataFetch = () => {
// Fetch Api usin axios
    axios.get("https://dog.ceo/api/breeds/image/random")
// checks the response workin r not, snds parameter fr function
    .then((res) => { setData(res.data.message);})
          // console.log("response",res);
//error handling   
    .catch(() => setError(true))
// however it displays   
    .finally(() => setLoad(false));
  }

// This runs only once when the component loads (mount) 
  useEffect(() => {
     dataFetch()
  },[]);

  return (
      <>
          {load && <img src={ld} alt="loading" />}
          {error && <img src={er} alt="error" />}
{/* displays only if load & error is false */}
          {!load && !error &&
              <>
              <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="300"
                image={data}
                alt="Random Dog"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Random Dog Image
                </Typography>
              </CardContent>
            </Card>
      
            <Button variant="contained" color="primary"  onClick={dataFetch}>
           
              Click Me
              </Button>
              </>
          }
  
    </>
  );
};

export default TaskUi;
