import React,{ Component } from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ActivityIndicator,Platform } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';



export default class Registration extends Component 
{
  constructor(){

    super();

      this.state = {
          firstname:'',
          lastname:'',
          username:'',
          password:'',
          telephone:'',
          loading: false, 
          disabled: false
      }

  }

  SendData = () => 
  {
      this.setState({ loading: true, disabled: true }, () =>
      {

        fetch('http://172.20.10.4/getreq/api.php',
        {
            method:'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
              
                fname:this.state.firstname,

                lname:this.state.lastname,

                uname:this.state.username,

                pass:this.state.password,

                tel:this.state.telephone

            })
          }).then((response)=>response.json()).then((resposJson) => {
                 alert(resposJson);
                 this.setState({loading:false,disabled:false})
          }).catch((error)=>{
                 alert(error);
                 console.log(error);
                 this.setState({loading:false,disabled:false})

          });
       });
  }




    


  // render items 
  render()
  {
       return(
          <View style={styles.container}> 

             
             <Hoshi 
               label="firstname"
               onChangeText={(data)=>this.setState({firstname:data})}
               style={styles.input}
               borderColor={"royalblue"}
             />
             <Hoshi 
               label="lasttname"
               onChangeText={(data)=>this.setState({lastname:data})}
               style={styles.input}
               borderColor={"royalblue"}

             />
             <Hoshi 
             label="username"
              onChangeText={(data)=>this.setState({username:data})}
              style={styles.input}
              borderColor={"royalblue"}

             />
             <Hoshi 
               label="password"
               onChangeText={(data)=>this.setState({password:data})}
               style={styles.input}
               borderColor={"royalblue"}

             />
             <Hoshi 
               label="telephone"
               onChangeText={(data)=>this.setState({telephone:data})}
               style={styles.input}
               borderColor={"royalblue"}

             />
            <TouchableOpacity disabled = { this.state.disabled }
             onPress={this.SendData}
             style={styles.regbutt}>
                   <Text style={styles.regtxt}>Register</Text>
            </TouchableOpacity>

            {(this.state.loading)?(<ActivityIndicator/>):null}

             

          </View>
       )
  }



}






const styles = StyleSheet.create({
     input:{
      backgroundColor:"#fff",
      borderColor:"#b76c94",
      marginTop:10
     },
     container:{
       padding:10
     },
     regbutt:{
         height:50,
         width:300,
         alignSelf:'center',
         backgroundColor:'royalblue',
         borderRadius:5,
         marginTop:40
     },
     regtxt:{
         color:'white',
         fontSize:25,
         alignSelf:"center",
         marginTop:14
     }

})