import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';


function App () {
    const [foods, setFoods] = useState(foodsJSON)

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

    return (
        <div className="App">

        <AddFood addFood={addNewFood} />

        <SearchBar handleInput={handleInput}/>

        {foods.map((food, index) =>{
            return (
                <FoodBox key={index} food = {food} />
             )  
        })}
    
        </div>
    )
}

export default App;