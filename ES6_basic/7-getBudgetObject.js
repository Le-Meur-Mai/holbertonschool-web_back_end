export default function getBudgetObject(income, gdp, capita) {
  const budget = {};
  budget.income = income;
  budget.gdp = gdp;
  budget.capita = capita;

  return budget;
}
