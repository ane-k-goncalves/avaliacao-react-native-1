import { StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useActionSheet } from '@expo/react-native-action-sheet';
import { Stack, useRouter } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

export default function Menu() {
const { showActionSheetWithOptions } = useActionSheet();
const router = useRouter();
  
    const onPress = () => {
        const options = ['Sobre', 'Sair', 'Cancelar'];
        
        const cancelButtonIndex = 2;
    
        showActionSheetWithOptions({
          options,
          cancelButtonIndex
          
        }, (selectedIndex?: number) => {
          switch (selectedIndex) {
            case 0:
              router.replace('/sobre'); 
              break;
              case 1:
              router.replace('/login'); 
              break;
    
            case cancelButtonIndex:
              // Canceled
          }});
      }


    
      return (
     
        <Entypo.Button name="menu" color={"black"} style={styles.button} size={24} onPress={onPress}  />
    
      )
}   

const styles = StyleSheet.create ({
  button: {
    backgroundColor: "#3652AD",
    display: 'flex',
    justifyContent: 'center',
    
  },
  container: {
    width: 60,
   
  }
})