import './App.css';
import React, {useEffect, useState} from 'react'
import {HashRouter as Router, Swich, Route, Link, Switch} from 'react-router-dom'

function App() {

  const [list, setList] = useState([])

useEffect(()=>{

fetch('https://jsonplaceholder.typicode.com/users')
.then((result)=>{return result.json()})
.then((data)=>{setList(data)})

})

  return (
    <div className="App">

{list.map((e)=>{
return <h1>{e.company.name}</h1>
})}

<Router>
  <Link to='/'>Home</Link>
  <Link to='page2'>2</Link>
  <Switch>
    <Route exact path='/' component={()=>{return <h1>Home page</h1>}}/>
    <Route exact path='/page2' component={()=>{return <h1>Page 2</h1>}}/>
  </Switch>
</Router>

    </div>
  );
}

export default App;
