import "./css/ExpenseItem.css";

const ExpenseItem = (props) => {
  const date = props.date.split("/");
  const month = date[0];
  const day = (+date[1] + 1).toString();
  const year = date[2];

  function editHandler() {
    const date = props.date.split("/");
    const formatDate = `${date[2]}-${
      date[0].length !== 2 ? "0" + date[0] : date[0]
    }-${
      date[1].length !== 2
        ? "0" + (+date[1] + 1).toString()
        : (+date[1] + 1).toString()
    }`;
    props.setExpenseFormData({
      id: props.id,
      title: props.title,
      price: props.price,
      date: formatDate,
    });
  }

  function deleteHandler() {
    const expenseListArray = props.expenseListArr.filter(
      (item) => item.id !== props.id
    );
    props.setExpenseListArr(expenseListArray);
  }

  return (
    <li className="expense-item">
      <div className="date">
        <p className="month">{month.length !== 1 ? month : `0${month}`}</p>
        <p className="year">{year}</p>
        <p className="day">{day.length === 1 ? `0${day}` : day}</p>
      </div>
      <h3 className="title-main">
        {props.title} &nbsp; - &nbsp; ${props.price}
      </h3>
      <div className="actions">
        <button className="btn edit-btn" onClick={editHandler}>
          Edit
        </button>
        <button className="btn delete-btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
