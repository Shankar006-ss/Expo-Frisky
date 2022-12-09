import { Dimensions } from "react-native";

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;



export const Signup={
    WELCOME:"Welcome To Frisky",
    SIGNUP:"SignUp",
    SIGNIN:" Already a user?Login here",
    FORGOT_PASSWORD:"Forgot Password?",
    CREATE_ACCOUNT:"Create a New Account?",
    CHANGE_PASSWORD:"Change Password",
    FORGOTPASSWORD:"Forgot Password"

    
}
export const ErrorMessage={
   
   NAME:"Name is required",
   EMAIL:"Enter Valid Email",
   PASSWORD:"Password must be one upper,lowercase & 8digit",
   CONFIRMPASSWORD:"Password must be same",
   
}
export const color={
   WHITE:"#fff",
   BLUE:"#00BFFF",
   RED:"#ff0000",
   BLACK:"#000000"
   
   
   
}
