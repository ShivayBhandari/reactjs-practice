import "./ExpenseItem.css"; //importing css file

function ExpenseItem() {
  const expenseDate = new Date(2022, 2, 28); //regular JavaScript
  const expenseTitle = "Car Insurance";
  const expenseAmount = 11000;

  return (
    <div className="expense-item">
      {/* added className in the <div></div> */}

      <div>{expenseDate.toISOString()}</div>
      {/* output date as string bcoz expenseDate is an object, it will not be displayed directly */}

      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        {/* {}used to output dynamic data */}

        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div> //one root element
  );
}

export default ExpenseItem;
