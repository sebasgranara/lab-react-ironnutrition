// import React,{useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import foodsJSON from './foods.json';
// import FoodBox from './components/FoodBox';
// import AddNewFood from './components/AddNewFood';
// import TodaysFoods from './components/TodaysFoods';

// function App() {
//   const [foods, setFoods] = useState(foodsJSON);
//   const [todaysFoods, setTodaysFoods] = useState([]);
   
//   return (
//     <div className="App">
//       <TodaysFoods data={todaysFoods}/>
//       <AddNewFood setState={setFoods}/>
//       <input type="text" onChange={
//         (e)=> {
//           const currentValue= e.currentTarget.value;
//           if(!currentValue){
//             setFoods([...foodsJSON]);
//             return;
//           }
//           const regex= new RegExp(`${currentValue.toLowerCase()}`);
          
//           const filter=foods.filter(
//             (food)=>{
//               return regex.test(food.name.toLowerCase())
//             }
//           )
//           setFoods([...filter]);
//         }
//       }/>
//       {foods.map((food,i)=>{
//         return(
//           <FoodBox key={i} {...food} onClick={({name,calories,quantity})=>{
//             setTodaysFoods(prev=>[...prev,{name,calories:calories*quantity,quantity}]);
//           }}/>
//         )
//       })}
//     </div>
//   );
// }

// export default App;
