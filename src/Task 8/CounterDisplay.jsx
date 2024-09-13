
// Dynamic child component that displays the counter
const CounterDisplay = ({ count }) => {
    console.log("CounterDisplay component rendered");
    return <p>Counter: {count}</p>;
};
  export default CounterDisplay