import React from 'react'

export default function Output({ yearlyData }) {
console.log(yearlyData)
  return (
    
    <table className="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
    {yearlyData.map((data, index) => (
      <tr key={index}>
        <td>{data.year}</td>
        <td>{data.savingsEndOfYear}</td>
        <td>{data.yearlyContribution}</td>
        <td>{data.yearlyInterest}</td>
      </tr>
    ))}
    </tbody>
  </table>
  )
}
