import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements'

const Week = props => {
  return (
    <TouchableOpacity  activeOpacity={0.8} onPress={props.onAddGoal.bind(this,props.weekDay)}>
      <View  style={styles.goalsItem}>
        <Text style={styles.goalsText}>{props.weekDay}</Text>
        <View style={styles.iconView}>
        <Icon iconStyle={{position:"absolute",left:95}} size="40" name="add" color="black"  />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Week;

const styles = StyleSheet.create({
  goalsItem: {
shadowRadius:10,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 40,
    marginBottom: 3,
    borderRadius: 8,
    backgroundColor: "#EEEFF1",
    flexDirection: "row",
    opacity:0.85
  },
  goalsText: {
      position:"absolute",
    color: "black",
    fontWeight: 'bold',
    fontSize:18
  },
  iconView:{
color:"red",
      backgroundColor:"red"
  }
});
