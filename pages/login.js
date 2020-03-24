import React,{ Component } from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ActivityIndicator,Image } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import { styles } from '../UI'




export default class Login extends Component 
{
  constructor(){

    super();

      this.state = {
          username:'',
          password:'',
          usersData:'',
          loading: false, 
          disabled: false
      }

  }

  SendData = () => 
  {
      this.setState({ loading: true, disabled: true }, () =>
      {

        fetch('http://172.20.10.4/getreq/fetch.php',
        {
            method:'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
              
          
                uname:this.state.username,

                pass:this.state.password,


            })
          }).then((response)=>response.json()).then((resposJson) => {
                
                 this.setState({
                    usersData:resposJson
                 });
                 this.props.navigation.navigate("Profile",{...this.state.usersData});
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


          <Image style={styles.logo} source={require('../assets/logo.png')} />

          <View style={styles.shift}>
         
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
          
            <TouchableOpacity disabled = { this.state.disabled }
             onPress={this.SendData}
             style={styles.regbutt2}>
                   <Text style={styles.regtxt}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity disabled = { this.state.disabled }
             onPress={()=>{this.props.navigation.navigate('Registration')}}
             style={styles.regbutt}>
                   <Text style={styles.regtxt}>Register</Text>
            </TouchableOpacity>

            </View>
           
            {(this.state.loading)?(<ActivityIndicator/>):null}

             

          </View>
       )
  }



}






