import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';
import TodayFood from './components/TodayFood';


function App () {
    const [foods, setFoods] = useState(foodsJSON)
    const [todayFood, setTodayFood] = useState([]);

    const addNewFood = (newFood) => {
        const updatedFood = [newFood, ...foods]
        setFoods(updatedFood);
    }

    const handleInput = (input) => {
        if (input === '') {
          setFoods(foodsJSON);
        } else {
          setFoods(
            foodsJSON.filter((food) =>
              food.name.toLowerCase().includes(input.toLowerCase())
            )
          );
        }
      };

      const [isVisible, setVisible] = useState(false);
      const handleVisibility = () => {
        setVisible((isVisible) => !isVisible);
      };

      const addTodayFood = (today) => {
        const todayMenu = [...todayFood, today];
        setTodayFood(todayMenu);
      };

    return (
        <div className="App">

          <h1> IronNutrition</h1>

          <SearchBar handleInput={handleInput}/>

          <div className={isVisible ? 'block' : 'none'}> 
            <AddFood handleVisibility={handleVisibility} addNewFood={addNewFood} />
          </div>

           <button className={isVisible ? 'none' : 'block'} onClick={handleVisibility}>Add new food</button>


          {foods.map((food, index) =>{
            return (
                <FoodBox key={index} food = {food} addTodayFood={addTodayFood} />
             )  
        })}
        <TodayFood todayFood={todayFood} />

        </div>
    )
}

export default App;