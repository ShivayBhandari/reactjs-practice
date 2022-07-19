import "./ExpenseItem.css"; //importing css file

function ExpenseItem() {
  return (
    <div className="expense-item">
      {/* added className in the <div></div> */}
      <div>March 28th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">11000</div>
      </div>
    </div> //one root element
  );
}

export default ExpenseItem;
