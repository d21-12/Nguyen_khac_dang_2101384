import {useState} from 'react'

function Car(){
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
    const updateColor = () => {
        setCar(previousState => {
          return { ...previousState, color: "blue" }
        });
    }
    return (
        <>
          <h2>Show information of Car:</h2>
          <p>Brand: {car.brand}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
          <p>Color: {car.color}</p>
    
          {/* Nút để cập nhật màu xe */}
          <button onClick={updateColor}>Update color</button>
        </>
      );
}

  

export default Car
