import { useState } from 'react'
import './App.css'
import ProductInfo from './components/ProductInfo'
import Pass from './components/Pass';
import Fail from './components/Fail';

function App() {

  let [count , setCount] = useState(1)

  let [name, setName] = useState("");
  let [marks, setMarks] = useState("");
  let [grade, setGrade] = useState("");
  
  function incr() {

    if (count < 5) {
      setCount(count + 1)
    }

  }

  function decr() {
    
    if (count > 1) {
      setCount(count - 1)
    }
    
  }

  function handleMarksChange(e) {

    let value = e.target.value
    setMarks(value)

    if (value === "") {
      setGrade("");
      return;
    }

    let num = Number(value)

    if (num >= 90) setGrade("A");
    else if (num >= 80) setGrade("B");
    else if (num >= 70) setGrade("C");
    else if (num >= 60) setGrade("D");
    else if (num >= 50) setGrade("E");
    else setGrade("F");

  }


  let products = [
    {
      name: "AirPods",
      price: 5000,
      status: true,
    },
    {
      name: "Mobile",
      price: 25000,
      status: false,
    },
    {
      name: "Tablet",
      price: 35000,
      status: false,
    },
    {
      name: "Laptop",
      price: 46000,
      status: true,
    },
    {
      name: "Monitor",
      price: 55000,
      status: true,
    }
  ];

  let sortProdLowToHigh = [...products].sort((a , b) => a.price - b.price)
  let filterProducts = products.filter((prod) => prod.price > 45000).sort((a , b) => b.price - a.price)
  let filtProdStartA = products.filter((prod) => prod.name.toLowerCase().startsWith("a"))
  let topThreeExpProd = [...products].sort((a , b) => b.price - a.price).slice(0 , 3)
  
  let total = products.reduce((sum , acc) => sum + acc.price , 0)
  let average = total / products.length

  return(

    <div>

      <div>
        <h2>🎓 Grade & Result Checker</h2>

        Name : <input type="text" placeholder='Enter your name'
        value={name} onChange={(e) => setName(e.target.value)} />
        <br /><br />

        Marks : <input type="number" placeholder='Enter your marks'
        value={marks} onChange={handleMarksChange} />
        <br /><br />

        {
          grade && name && (
            <>
              { Number(marks > 40) ? (
                  <Pass name={name} color={"green"} grade={grade} />
                ) : (
                  <Fail name={name} color={"green"} grade={grade} />
                )
              }
            </>
          )
        }

      </div>


      <hr />

      {/* Counter App */}
      <div>
        <h3>Quantity : {count}</h3>
        <button onClick={incr} disabled={count === 5}>+</button>
        <button onClick={decr} disabled={count === 1}>-</button>

        {count === 5 && <p style={{ color: "red" }}>Limit reached (5 max)</p>}
      </div>

      <hr />

      {/* Product Handling Example 1 to 6 */}
      <div>
        <h2>Product Handling Example 1 to 6</h2>
        
        {/* Assignment #1 */}
        <div>
          <h4>1. Show all products by sorting on price (low high)</h4>
          
          {sortProdLowToHigh.map((prod , index) => (
            <ProductInfo key={index} product={prod} />
          ))}
        </div>

        <hr />

        {/* Assignment #2 */}
        <div>
          <h4>2. Show only those products whose price is greater than 45000, sorted by price (high to low)</h4>
          
          {filterProducts.map((prod , index) => (
            <ProductInfo key={index} product={prod} />
          ))}
        </div>

        <hr />

        {/* Assignment #3 */}
        <div>
          <h4>3. Show all products after increasing their price by 10%.</h4>

          {products.map((prod , index) => (
            <ProductInfo key={index} product={{...prod , price: Math.round(prod.price * 1.1)}} />
          ))}
        </div>

        <hr />

        {/* Assignment #4 */}
        <div>
          <h4>4. Show all products whose name starts with 'a' or 'A'</h4>
          
          {filtProdStartA.map((prod , index) => (
            <ProductInfo key={index} product={prod} />
          ))}
        </div>

        <hr />

        {/* Assignment #5 */}
        <div>
          <h4>5. Show top 3 most expensive products</h4>

          {topThreeExpProd.map((prod , index) => (
            <ProductInfo key={index} product={prod} />
          ))}
        </div>

        <hr />

        {/* Assignment #6 */}
        <div>
          <h4>6. Show all products with price labeled as (Below average or Above average)</h4>
        
          {products.map((prod , index) => (
            <ProductInfo key={index} product={prod} isAboveAvg={prod.price > average} />
          ))}
        </div>

      </div>

    </div>

  )

}

export default App