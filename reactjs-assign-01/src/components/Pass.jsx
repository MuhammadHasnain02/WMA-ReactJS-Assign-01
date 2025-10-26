function Pass({ name = "Unkown", color = "green", grade }) {

  return (
    <div>
      <h3 style={{ color: color }}>✅ Congratulations Mr/Mrs {name}! You Passed</h3>
      <h3>Your Grade: <span style={{ color: color }}>{grade}</span></h3>
    </div>
  );

}

export default Pass;