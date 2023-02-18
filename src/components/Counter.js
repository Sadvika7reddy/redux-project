import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const counter=useSelector(state=>state.counter);
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {};
  const IncrementHandler=()=>{
    dispatch({type:'increment'})

  }
  const DecrementHandler=()=>{
    dispatch({type:'decrement'})

  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>{counter}</button>
    </main>
  );
};

export default Counter;
