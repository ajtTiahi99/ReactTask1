import { useEffect, useState } from 'react';
import './App.css';

function App() {
  //Constants
  const weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  const noOfProducts = 10

  const [product,setProduct] = useState('--Select Product--')
  const [weekDay,setWeekDay] = useState('--Select Weekday--')
  const [quantInput,setQuantInput] = useState(null)
  let [productsArr, setProductsArr] = useState([])
  let [quantityArr, setQuantityArr] = useState([])
  let [table,setTable] = useState({})
  

  //TO CHECK IF ALL INPUT FIELDS ARE FILLED
  // if(product!=='--Select Product--' && weekDay!=='--Select Week Day--' && quantInput!==null){
  //   document.getElementById('add').classList.remove('disabled')
  // }

  const handleQuantChange=(e)=>{
    //To check if the input is a number or a string
    const quantity  = Number(e.target.value)
    if(isNaN(quantity)){
      document.getElementById('quantInput').classList.add('quantity')
      document.getElementById('errorDiv').style.display='block'
    }
    else{
      document.getElementById('quantInput').classList.remove('quantity')
      document.getElementById('errorDiv').style.display='none'
      setQuantInput(quantity)
    }
  }

  const handleProductClick=(e)=>{
    setProduct(e.target.innerHTML)
  }

  const handleDayClick=(e)=>{
    setWeekDay(e.target.innerHTML) 
  }
  
  useEffect(() => {
    console.log("table before---------- ",table)
    console.log("productsArr before---------- ",productsArr);
    console.log("quantityArr before---------- ",quantityArr);
    console.log("quantInput before---------- ",quantInput);
  }, [])
  
  const handleAddition=()=>{
    //Adding contents to table
    setProductsArr((prev) => [...prev, product])
    setQuantityArr((prev) => [...prev, quantInput])
    if((!table.hasOwnProperty(weekDay))&&(weekDay!=='--Select Weekday--' )){
      var key = `${weekDay}`
      var value = {'products':productsArr,'quantity':quantityArr}
      table[key] = value    
    }
    
    //Resetting the values
    setProduct('--Select Product--')
    setWeekDay('--Select Weekday--')
    document.getElementById('quantInput').value=''
  }

  console.log("productsArr after---------- ",productsArr)
  console.log("quantityArr after---------- ",quantityArr)
  console.log("Quantity value after-------",quantInput)
  console.log("table after-------",table)

  return (
    <div className='Container'>
      <div className='Inputs'>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {product}
          </button>
          <ul className="dropdown-menu">
            {[...Array(noOfProducts)].map((e,i)=><li key={i}><a className='dropdown-item' onClick={handleProductClick}>Product#{i+1}</a></li>)}
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {weekDay}
          </button>
          <ul className="dropdown-menu">
            {weekDays.map((ele,i)=> <li key={i}><a className="dropdown-item" onClick={handleDayClick}>{ele}</a></li>)}
          </ul>
        </div>
        <div>
          <input placeholder='Quantity'  id='quantInput' onChange={handleQuantChange}/>
          <span id='errorDiv' className='error'>Quantity should be  natural number only</span>
        </div>
        <button className='btn btn-primary' id='add' type='submit' onClick={handleAddition}>Add</button>
      </div>
      <div className='Table'>
        <div className='TableContent'>
          <table className='border-none'>
            <thead>
              <tr>
                <th className="WeekDays">Weekdays</th>
                <th className="Products">Products</th>
                <th className="Quantity">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 2, Cell 1</td>
                <td>Row 2, Cell 2</td>
                <td>Row 2, Cell 3</td>
              </tr>
              <tr>
                <td>Row 2, Cell 1</td>
                <td>Row 2, Cell 2</td>
                <td>Row 2, Cell 3</td>
              </tr>
              <tr>
                <td>Row 3, Cell 1</td>
                <td>Row 3, Cell 2</td>
                <td>Row 3, Cell 3</td>
              </tr>
            </tbody>
            </table>
        </div>
        
        <button className='btn btn-primary disabled'>Finish</button>
      </div>
    </div>
  );
}

export default App;
