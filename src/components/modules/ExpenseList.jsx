import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({
  setExpenseFormData,
  expenseListArr,
  setExpenseListArr,
}) => {
  return (
    <ul className="expense-list list-unstyled">
      {expenseListArr.length > 0 ? (
        expenseListArr.map((expenseItem) => (
          <ExpenseItem
            key={expenseItem.id}
            id={expenseItem.id}
            title={expenseItem.title}
            price={expenseItem.price}
            date={expenseItem.date}
            setExpenseFormData={setExpenseFormData}
            expenseListArr={expenseListArr}
            setExpenseListArr={setExpenseListArr}
          />
        ))
      ) : (
        <h3 className="w-100 text-center">No Record Found!</h3>
      )}
    </ul>
  );
};

export default ExpenseList;
