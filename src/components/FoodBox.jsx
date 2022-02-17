import React from "react";
import 'bulma/css/bulma.css';

function FoodBox ({food, addTodayFood}){

    // const [name, calories, image, quantity] = food
    // console.log(food)

    const handleTodayFood = () => {
      addTodayFood({
        name: food.name,
        calories: food.calories,
        quantity: food.quantity,
      });
    };

    return (
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} alt=""/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" defaultValue={food.quantity} />
        </div>
        <div className="control">
          <button className="button is-info" onClick={handleTodayFood}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>

    )
}

export default FoodBox;