import React, { useState } from "react";
import logo from "../assets/investment-calculator-logo.png";

export default function Calculations({ setYearlyData }) {
  const [formData, setFormData] = useState({
    currentSavings: "",
    yearlyContribution: "",
    expectedReturn: "",
    duration: "",
  });

  const handleChange = (identifier, value) => {
    console.log(value, "value");
    setFormData((prevState) => {
      return {
        ...prevState,
        [identifier]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const yearlyData = [];

    let currentSavings = formData.currentSavings;
    const yearlyContribution = formData.yearlyContribution;
    const expectedReturn = formData.expectedReturn / 100;
    const duration = formData.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings =
        Number(currentSavings) + yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log(yearlyData, "yearly data");
    setYearlyData(yearlyData);
  };
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="currentSavings"
              name="currentSavings"
              value={formData.currentSavings}
              onChange={(e) => handleChange("currentSavings", e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearlyContribution"
              name="yearlyContribution"
              value={formData.yearlyContribution}
              onChange={(e) =>
                handleChange("yearlyContribution", e.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expectedReturn"
              name="expectedReturn"
              value={formData.expectedReturn}
              onChange={(e) => handleChange("expectedReturn", e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}
