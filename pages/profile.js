import React,{ Component } from 'react';
import { View,Text,TouchableOpacity,Image} from 'react-native';
import { styles } from '../UI'


export default class Profile extends Component 
{
    
       render()
       {
          const params = this.props.navigation.state.params;
           return(
               <View style={styles.con}>
                   <View style={styles.pane1}>
                      <Image style={styles.uimg} source={require('../assets/user.png')}/>
                       <Text style={styles.uname}>{params.fname} {params.lname}</Text>
                   </View>

                   <View style={styles.pp}>
                       <Text style={styles.txt}>
                           Welcome to your dashboard {params.fname} this is the place you can explore a whole
                           lots of fun 
                       </Text>
                       
                   </View>
                   <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Login")}} style={styles.back}>
                          <Text style={styles.btxt}>LogOut</Text>
                   </TouchableOpacity>
           
               </View>
           )
       }
}
