import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenseItems, setExpenseItems] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 5,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Eggs",
      amount: 10,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Electricity",
      amount: 100,
      category: "Utilities",
    },
    {
      id: 4,
      description: "Movies",
      amount: 15,
      category: "Entertainment",
    },
    {
      id: 5,
      description: "Milk",
      amount: 5,
      category: "Groceries",
    },
  ]);

  return (
    <div>
      <ExpenseList
        expenseItems={expenseItems}
        setExpenseItems={setExpenseItems}
      />
      <ExpenseFilter
        expenseItems={expenseItems}
        setExpenseItems={setExpenseItems}
      />
    </div>
  );
}

export default App;
