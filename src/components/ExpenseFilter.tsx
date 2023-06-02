import { useRef, useState } from "react";
import filterByCategory from "./../servicies/filterCategory";
import produce from "immer";

interface Props {
  expenseItems: {
    id: number;
    description: string;
    amount: number;
    category: string;
  }[];
  setExpenseItems: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        description: string;
        amount: number;
        category: string;
      }[]
    >
  >;
}

const ExpenseFilter = ({ expenseItems, setExpenseItems }: Props) => {
  const categoryRef = useRef<HTMLSelectElement>(null);

  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const filteredTable = filterByCategory(expenseItems, selectedCategory);
  let totalAmount = 0;
  filteredTable.map((item) => (totalAmount += item.amount));

  const handleCategoryChange = () => {
    if (categoryRef.current !== null)
      setSelectedCategory(categoryRef.current.value);
  };

  const handleDelete = (id: number) => {
    setExpenseItems(
      produce((expenseItems) => {
        expenseItems.splice(
          expenseItems.findIndex((todo) => todo.id === id),
          1
        );
      })
    );
  };

  return (
    <div className="mt-5">
      <select
        ref={categoryRef}
        className="form-select"
        onChange={handleCategoryChange}
      >
        <option value="All categories">All categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {filteredTable.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>${item.amount}.00</td>
              <td>{item.category}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>${totalAmount}.00</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseFilter;
