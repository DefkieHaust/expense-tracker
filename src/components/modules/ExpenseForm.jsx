import "./css/ExpenseForm.css";

const ExpenseForm = ({
  expenseListArr,
  setExpenseListArr,
  expenseFormData,
  setExpenseFormData,
}) => {
  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  function inputChangeHandler(e) {
    setExpenseFormData({ ...expenseFormData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();

    if (expenseFormData.id === "") {
      setExpenseListArr([
        {
          id: generateUUID(),
          title: expenseFormData.title,
          price: expenseFormData.price,
          date: new Date(expenseFormData.date).toLocaleDateString(),
        },
        ...expenseListArr,
      ]);
    } else {
      expenseListArr[
        expenseListArr.findIndex((item) => item.id === expenseFormData.id)
      ] = {
        id: expenseFormData.id,
        title: expenseFormData.title,
        price: expenseFormData.price,
        date: new Date(expenseFormData.date).toLocaleDateString(),
      };
    }

    setExpenseFormData({
      id: "",
      title: "",
      price: "",
      date: "",
    });
  }

  return (
    <div className="expense-form">
      <h4>Add Expense</h4>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="expenseTitle">Expense</label>
          <input
            type="text"
            id="expenseTitle"
            placeholder="Add expense"
            name="title"
            value={expenseFormData.title}
            onChange={inputChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="expensePrice">Price</label>
          <input
            type="number"
            placeholder="99"
            name="price"
            value={expenseFormData.price}
            onChange={inputChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="expenseDate">Date</label>
          <input
            type="date"
            id="expenseDate"
            name="date"
            value={expenseFormData.date}
            onChange={inputChangeHandler}
            required
          />
        </div>

        <button className="btn" type="submit">
          {expenseFormData.id !== "" ? "Edit" : "Add"} Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
