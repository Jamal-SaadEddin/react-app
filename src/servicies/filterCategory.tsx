function filterByCategory(expenseItems: object[], category: string) {
  if (category === "All categories") return expenseItems;
  return expenseItems.filter((item) => item.category === category);
}

export default filterByCategory;
