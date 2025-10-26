function Fail({ name = "Unkown", color = "red", grade }) {

  return (
    <div>
      <h3 style={{ color: color }}>❌ Sorry Mr/Mrs {name}! You Failed</h3>
      <p>Your Grade: <span style={{ color: color }}>{grade}</span></p>
    </div>
    )

}

export default Fail;