import "./ExpenseItem.css"; //importing css file

function ExpenseItem(props) {
  //props parameter contains all the attributes that are defined in the App.js component ExpenseItem

  return (
    <div className="expense-item">
      {/* added className in the <div></div> */}
      <div>{props.date.toISOString()}</div>
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
