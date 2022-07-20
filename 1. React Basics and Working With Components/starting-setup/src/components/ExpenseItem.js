import "./ExpenseItem.css"; //importing css file

function ExpenseItem(props) {
  //props parameter contains all the attributes that are defined in the App.js component ExpenseItem

  const month = props.date.toLocaleString("en-US", { month: "long" }); //JavaScript function
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      {/* added className in the <div></div> */}
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      {/* output date as string bcoz expenseDate is an object, it will not be displayed directly */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* {}used to output dynamic data */}
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div> //one root element
  );
}

export default ExpenseItem;
