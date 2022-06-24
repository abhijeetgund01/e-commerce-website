import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState,useContext } from "react";
import { authenticateSignup } from "../service/api";
import { DataContext } from "../context/DataProvider";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 80%;
  width: 29%;
  padding: 46px 35px;
  & > p,
  & > h5 {
    color: #fff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 700;
  cursor: pointer; ;
`;

const accountInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subheading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues ={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  phone:''
}
const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [signup,setSignup] = useState(signupInitialValues);
  const {setAccount} = useContext(DataContext);
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup);
  }; 

  const outputChange = (e) => {
      setSignup({...signup,[e.target.name]:e.target.value});
  };
  const signupUser = async () => {
   let response = await authenticateSignup(signup);
   console.log(response);
   if(!response)return;
   handleClose();
   setAccount(signup.firstname);
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subheading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Email/Mobile Number"
              ></TextField>
              <TextField variant="standard" label="Enter Password"></TextField>
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                name="firstname"
                label="Enter First Name"
                onChange={(e) => outputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                name="lastname"
                label="Enter Last Name"
                onChange={(e) => outputChange(e)}
              ></TextField>
              <TextField variant="standard" name="username" label="Enter Username"  onChange={(e) => outputChange(e)}></TextField>
              <TextField variant="standard" name="email" label="Enter Email" onChange={(e) => outputChange(e)}></TextField>
              <TextField variant="standard" name="password" label="Enter Password" onChange={(e) => outputChange(e)}></TextField>
              <TextField variant="standard" name="phone"label="Enter Phone" onChange={(e) => outputChange(e)}></TextField>
              <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
              <CreateAccount>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
