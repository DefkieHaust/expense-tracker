import { useEffect, useState } from "react";
import ExpenseForm from "../modules/ExpenseForm";
import ExpenseList from "../modules/ExpenseList";

const Main = () => {
  const [expenseListArr, setExpenseListArr] = useState(() => {
    let list = localStorage.getItem("list");
    return list ? JSON.parse(list) : [];
  });

  const [expenseFormData, setExpenseFormData] = useState({
    id: "",
    title: "",
    price: "",
    date: "",
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(expenseListArr));
  }, [expenseListArr]);

  return (
    <main>
      <ExpenseForm
        expenseListArr={expenseListArr}
        setExpenseListArr={setExpenseListArr}
        expenseFormData={expenseFormData}
        setExpenseFormData={setExpenseFormData}
      />
      {/* <ExpenseFilter /> */}
      <ExpenseList
        setExpenseFormData={setExpenseFormData}
        expenseListArr={expenseListArr}
        setExpenseListArr={setExpenseListArr}
      />
    </main>
  );
};

export default Main;
