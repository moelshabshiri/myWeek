import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, StatusBar, Stack, ImageBackground, Image } from "react-native";
import GoalItem from './Components/GoalItem'
import GoalInput from "./Components/GoalInput";
import Week from "./Components/Week";
import Header from "./Components/Header";
import { getStatusBarHeight } from 'react-native-status-bar-height';

//jc main, ai: other
export default function App() {
 
  const [courseGoals, setcourseGoals] = useState([]);
  const [isAddMode, setIsAddMode]=useState(false);
  const [weekDay, setweekDay]=useState('hi');


  const addGoalHandler = (Goaltitle, weekDay) => {
    if(Goaltitle.length===0)
    return;
    setcourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: Goaltitle, day:weekDay}]);
    setIsAddMode(false);
  };

  const removeGoalHandler = Goalid => {
    setcourseGoals(currentGoals => 
      {
        return currentGoals.filter((goal)=> goal.key!==Goalid); 
      });
  };

  const cancelGoal= () => {
    setIsAddMode(false);
  };

  const weekDayHandler= weekday =>
  {
    setweekDay(weekday);
    setIsAddMode(true);
  };
  const filteritems = () =>
  {
    return goal.item.value;
  };
  const MyStatusBar =() => (
    <View style={styles.statusBar}>
      <StatusBar  backgroundColor={"red"}  />
    </View>
  );

  return (
    <View>
<View style={styles.statusBar}></View>


    
    <ImageBackground source={require('./assets/red2.jpg')} style={styles.screen}>
    <Header title="MY WEEKLY SCHEDULE" />

      <GoalInput visible={isAddMode} weekDay={weekDay} onAddGoal={addGoalHandler} cancel={cancelGoal} />
      <View style={styles.imageView}>
      <Image
          style={{width: 100, height: 45}}
          source={require('./assets/PaliKeyOriginalStore3.png')}
        />
        </View>
      <View style={styles.goalsView}> 
    
    <ScrollView>
      <Week weekDay='SUNDAY'  onAddGoal={weekDayHandler}/>
      <FlatList data={courseGoals.filter((goal)=> goal.day==='SUNDAY')}  renderItem={((goal)=> <GoalItem id={goal.item.key} onDelete={removeGoalHandler} Goalitem={goal.item.value} /> )} />
      <Week weekDay="MONDAY" onAddGoal={weekDayHandler}/>
      <FlatList data={courseGoals.filter((goal)=> goal.day==='MONDAY')}  renderItem={((goal)=> <GoalItem id={goal.item.key} onDelete={removeGoalHandler} Goalitem={goal.item.value} /> )} />
      <Week weekDay="TUESDAY" onAddGoal={weekDayHandler}/>
      <FlatList data={courseGoals.filter((goal)=> goal.day==='TUESDAY')}  renderItem={((goal)=> <GoalItem id={goal.item.key} onDelete={removeGoalHandler} Goalitem={goal.item.value} /> )} />
      <Week weekDay="WEDNESDAY" onAddGoal={weekDayHandler}/>
      <FlatList data={courseGoals.filter((goal)=> goal.day==='WEDNESDAY')}  renderItem={((goal)=> <GoalItem id={goal.item.key} onDelete={removeGoalHandler} Goalitem={goal.item.value} /> )} />
      <Week weekDay="THURSDAY" onAddGoal={weekDayHandler}/>
      <FlatList data={courseGoals.filter((goal)=> goal.day==='THURSDAY')}  renderItem={((goal)=> <GoalItem id={goal.item.key} onDelete={removeGoalHandler} Goalitem={goal.item.value} /> )} />
      <Week weekDay="FRIDAY" onAddGoal={weekDayHandler}/>
      <FlatList data={courseGoals.filter((goal)=> goal.day==='FRIDAY')}  renderItem={((goal)=> <GoalItem id={goal.item.key} onDelete={removeGoalHandler} Goalitem={goal.item.value} /> )} />
      <Week weekDay="SATURDAY" onAddGoal={weekDayHandler}/>
      <FlatList data={courseGoals.filter((goal)=> goal.day==='SATURDAY')}  renderItem={((goal)=> <GoalItem id={goal.item.key} onDelete={removeGoalHandler} Goalitem={goal.item.value} /> )} />
      </ScrollView>

      </View>
      
    
    </ImageBackground>
    
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    
    alignItems: 'center',
    justifyContent: 'flex-start',
  
    position: 'relative',
      width:'100%',
      height:'100%',
     // backgroundColor:"green"
  },
  statusBar: {
    height: getStatusBarHeight(),
    color:'red',
    backgroundColor:'#AE0E10'
  },



    goalsView:{
      height:"65%",
      alignItems: 'center',
      position: 'relative', 
      bottom:'2%'
       
    },

    goalsText:{
      color:"white", 
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      marginBottom: 1,
      backgroundColor:"red",
      
    },
    addGoalButton:
    {
      position: 'relative',
      bottom:-30,
      left:0,
    },
    imageView:{
      // borderRadius:15,
      height:'7%',
      alignContent:'center',
       alignItems:'center',
     //  width:'12%',
       backgroundColor:'#EEEFF1',
       
       justifyContent: 'center',
       bottom:'-72%',
       borderRadius:15,
       //:50,
       padding:7,
       opacity:0.8


   }

});
