import './App.css';

function App() {
  const weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  const noOfProducts = 10


  const handleChange=(e)=>{
    var quantity = Number(e.target.value)
    if(isNaN(quantity)){
      document.getElementById('quantInput').classList.add('quantity')
      document.getElementById('errorDiv').style.display='block'
    }
    else{
      document.getElementById('quantInput').classList.remove('quantity')
      document.getElementById('errorDiv').style.display='none'
    }
  }

  return (
    <div className='Container'>
      <div className='Inputs'>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              --Select Product--
          </button>
          <ul className="dropdown-menu">
            {[...Array(noOfProducts)].map((e,i)=><li><a className='dropdown-item' key={i}>Product#{i+1}</a></li>)}
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              --Select Week Day--
          </button>
          <ul className="dropdown-menu">
            {weekDays.map((ele,i)=> <li key={i}><a className="dropdown-item">{ele}</a></li>)}
          </ul>
        </div>
        <input placeholder='Quantity'  id='quantInput' onChange={handleChange}/>
        <span id='errorDiv' className='error'>Quantity should be  natural number only</span>
        <button className='btn btn-primary'>Add</button>
      </div>
      <div className='RightDiv'>
        <div>
          
        </div>
        <button className='btn btn-primary'>Finish</button>
      </div>
    </div>
  );
}

export default App;
