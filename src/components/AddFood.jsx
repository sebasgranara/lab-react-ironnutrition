import React, {useState}  from "react";

function AddFood({handleVisibility, addNewFood}){
    const [name, setName] = useState("")
    const [calories, setCalories] = useState(0)
    // const [visible, setVisible] = useState(false)

    const handleNameInput = e => setName(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    
    const handleSubmit = (e) => {        
        e.preventDefault();
        const newFood = { name, calories };
        addNewFood(newFood)
    
    console.log("Submitted: ", newFood);
    setName('');
    setCalories(0)
  }
    // if(visible){
    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={handleNameInput}
            />
            <span>   </span>

            <label>Calories: </label>
            <input 
                type="number" 
                name="calories" 
                value={calories} 
                onChange={handleCaloriesInput}
            />
            <span>   </span>
            <button onClick={handleVisibility} type="submit">
                Add Food</button>
            {/* <button onClick={()=>setVisible(false)} type="submit">Add Food</button> */}
       
        </form>
    )
}
    // return(
    //     <button onClick={()=> setVisible(true)} type="submit">Add new Food</button>
      
    // )
// }

export default AddFood;