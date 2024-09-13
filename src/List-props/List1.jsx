import propType from "prop-types"

const List1 = (props) => {
    const appItm=props.Items
    const appCatg=props.Category

    // const fruit=["Sweet Tooth","Things","Hilda","Nefa at Peace"]
    const animalList=appItm.map((animals)=> (<li key={animals.id}> {animals.name}:<b>{animals.cal}</b></li>))
    
  return (
    <>
      {/* <p>array:{fruit}</p> */}
      <h1>{appCatg}</h1>
      <ol>{animalList}</ol>
    </>
  )
}

List1.propType = {
  Category: propType.string,
  Items: propType.array,
};

List1.defaultProps = {
  Category: "Default",
  Items: [],
};
export default List1
// fruits.sort((a, b) => b.name.localeCompare(a.name));

// fruits.sort((a, b) => b.calories - a.calories);

// fruits.sort((a, b) => a.calories - b.calories);

// const lowCal = fruits.filter((fruit) => fruit.calories < 50);

// const highCal = fruits.filter((fruit) => fruit.calories > 50);