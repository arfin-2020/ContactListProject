import { StyleSheet } from "react-native";
import colors from "../../../assets/themes/colors";

export default StyleSheet.create({
  inputContainer:{
    paddingVertical: 12,
  },
      wrapper:{
          height: 42,
          marginTop:5,
          borderWidth: 1,
          borderRadius: 5,   
          paddingHorizontal: 5,
          
         
      },
      input:{
        flex:1,
      },
      error:{
        color: colors.danger,
        marginTop: 4,
        fontSize: 12,
      }
})