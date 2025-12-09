import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars() {
      return `$${budget.income}`;
    },
    getIncomeInEuros() {
      return `${budget.income} euros`;
    }
  };

  return fullBudget;
}
