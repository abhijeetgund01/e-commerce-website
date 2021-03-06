import { Box,Button, Typography,styled  } from '@mui/material'
import React, { useState,useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginDialog from '../login/LoginDialog';


import { DataContext } from "../context/DataProvider";

 
const Wrapper =styled(Box)`
display:flex;
margin: 0 3% 0 auto;
 & > button, & > p, & > div {
    margin-right:30px;
    font-size:16px;
    align-items:center;
}
`;
const Container =styled(Box)`
display:flex

`;
const LoginButton =styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;

`;
const CustomButton = () => {

    const [open,setOpen] = useState(false);
    const {account} = useContext(DataContext);


  const openDialog= ()=>{
setOpen(true);
  }
    return (
            <Wrapper>
              {
                account ? <Typography style={{display:'flex'}}><AccountCircleIcon/>&nbsp;{account}</Typography> : 
                <LoginButton variant='contained' onClick={()=>openDialog()} >Login</LoginButton>

              }
                <Typography style={{marginTop:3,width:135}}>Become a seller</Typography>
                <Typography style={{marginTop:3,display:'flex'}}>More <ExpandMoreIcon/></Typography>
                <Container>
                    <ShoppingCartIcon/>
                    <Typography>
                    Cart
                    </Typography>
                </Container>
                <LoginDialog open={open} setOpen={setOpen}/>
            </Wrapper>
        )
}

export default CustomButton