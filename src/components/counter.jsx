import { useState } from 'react';
import './counter.css';

const Counter = () => {
    const[count, setCount] = useState (0)

const handleIncrement = () => {
    setCount(count + 1) 

}

const handleDecrement = () => {
    setCount(count - 1)
}

const handleIncreaseTokenByTen = () =>{
    setCount(count + 10)
}

const handleResetButton = () =>{
    setCount(0)
}

    return(
        <>
        <span>
        {count}
        </span>

       <div className='parent-container'>
       <button onClick={handleIncrement}>Increase</button>
       <button onClick={handleDecrement}>Decrease</button> 
       <button onClick={handleIncreaseTokenByTen}>IncreaseTokenByTen</button>
       <button onClick={handleResetButton}>Reset Button</button>
       </div>
        </>
    )

};

export default Counter;