
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component{

  render() {

    const col1Buttons = [
      ['7','8','9'],
      ['4','5','6'],
      ['1','2','3'],
      [',','0','=']
    ]

    const col2Buttons = [
      'C', '+', '-' , 'x' , '÷'
    ]

    return (
      <View style={styles.container}>

        <Text style={styles.display}>Display</Text>
        <Text style={styles.result}>Result</Text>

        <View style={styles.buttons}>
          <View style={styles.col1}>

            {col1Buttons.map( (line,ind) => 
              <View key={ind} style={styles.line}>
                {line.map ( op => 
                  <View key={op} style={styles.btn}>
                    <Text  style={styles.btnText}>{op}</Text>
                  </View> )}
              </View>)}

          </View>

          <View style={styles.col2}>
            {col2Buttons.map ( op => <View key={op} style={styles.btn}>
                <Text style={styles.btnText}>{op}</Text>
              </View> )}
          </View>

        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'stretch',
    justifyContent: 'center',
    
    
  },
  display : {
    backgroundColor : '#EFEFEF',
    flex : 1,
    fontSize : 80,
    textAlign : 'right',
    paddingTop : 30,
    paddingRight : 10
  },
  result : {
    flex : 0.5,
    backgroundColor : '#EFEFEF',
    fontSize : 20,
    textAlign : 'right',
    paddingRight : 10,
    paddingBottom : 10
  },
  buttons : {
    flex : 5,
    flexDirection : 'row'
  },

  col1 : {
    flex : 3,
    backgroundColor : 'grey'
  },
  line: {
    flexDirection : 'row',
    flex : 1
  },
  btn : {
    flex : 1,
    justifyContent : 'center'
  },
  btnText : {
    textAlign : 'center',
    fontSize : 50,
    
  },
  col2 : {
    flex : 1,
    backgroundColor : 'blue'
  }
});
