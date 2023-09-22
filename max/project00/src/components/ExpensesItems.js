function ExpensesItem() {
    const dates = new Date (2032, 3, 12);
    const assurance = 'PRIMES';
    const assuranceAmount = 204.43
    return (
      <section>
       <h1>hello</h1>
        <h1>{dates}</h1>
        <button>{assurance}</button>
        <h3>{assuranceAmount}</h3>
      </section>
    )
}
export default ExpensesItem