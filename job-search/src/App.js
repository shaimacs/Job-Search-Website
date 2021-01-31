import NavBar from './Components/NavBar'
import Card from './Components/Card'
import JobDetails from './Components/JobDetails'
import CardsList from './Components/CardsList'
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
function App() {
  // state to store list of jobs
  const [listOfJobs, setListOfJobs]= useState([]);
  const [faves, setFaves] = useState(() => [])
  const [filter, setFilter] = useState(() => 'all')
  const [Jobslocation, setJobslocation]= useState([]);
  const [inputTitle, setInputTitle] = useState('');


  const handleFilterClick = (filter) => {
    setFilter(prevFilter => prevFilter = filter)
}


  const handleFaveToggle = (job) => {
    const fave = faves.slice(0)
    const jobIndex = fave.indexOf(job)
    jobIndex === -1 ? fave.push(job) : fave.splice(jobIndex, 1)
    setFaves(prevFave => prevFave = fave)
}

const setFave = () => {
  setFaves(prevFave => prevFave = [])
}

  const handleChange = (e) => {
    setInputTitle(e);
}

const callAll=()=>{
  console.log('221211211')
  setJobslocation([])
  handleFilterClick('all')
}


const callAllJobs=()=>{
  // fetch get reqest to /jobs
  axios.get('http://localhost:5000/jobs')
  .then(res => {
    // store response date in state
    setListOfJobs(res.data.jobs)}
    )
  .catch(err => {
    //if request fialed , log it to console
    console.log(err)})
}
useEffect(() => {
  call()
}, [inputTitle])

  const call=()=>{
    axios({
      method: 'GET',
      url: 'http://localhost:5000/jobs-by-job-title',
      params: {
          'title': inputTitle,
      }
  }).then (res => setJobslocation(res.data.jobs))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    call()
  }, [inputTitle])


  // will render only one time
  useEffect(() => {
    callAllJobs()
  }, [])


  const cardlist1 = ((filter === 'all')?Jobslocation.length > 0 ? <CardsList setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={Jobslocation}/> : <CardsList setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={listOfJobs}/> : <CardsList setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={faves}/>)
  return (
    <div>
      {/* pass state as props to store data in it */}
      <NavBar handleFilterClick={handleFilterClick} callAll={()=>callAll()} fetchJobsByTitle={call} setInputTitle={setInputTitle} handleChange={handleChange}/>
      {/* if list is empty show no Jobs found, otherwise display list of jobs */}
      {cardlist1}
      {/* {Jobslocation.length > 0 ? <CardsList setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={Jobslocation}/> : <CardsList setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={listOfJobs}/>} */}
    </div>
  );
}
export default App;




// import React, { useState, useEffect } from 'react';
// import NavBar from './Components/NavBar'
// import Card from './Components/Card'
// import JobDetails from './Components/JobDetails'
// import CardsList from './Components/CardsList'
// import './App.css';

// function App() {
//   return (
//     <div className="App" id="main">
//       <NavBar />
//       <CardsList />
//     </div>
//   );
// }

// export default App;



// import NavBar from './Components/NavBar'
// import Card from './Components/Card'
// import JobDetails from './Components/JobDetails'
// import CardsList from './Components/CardsList'
// import './App.css';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// function App() {
//   // state to store list of jobs
//   const [listOfJobs, setListOfJobs] = useState([]);

//   const call = () => {
//     axios.get('http://localhost:5000/jobs')
//       // fetch get reqest to /jobs
//       .then(res => {
//         // store response date in state 
//         setListOfJobs(prevJobData => prevJobData = res.data.jobs)
//         console.log(listOfJobs,'hkhkhkhkhkhk')
//       }
//       )
//       .catch(err => {
//         //if request fialed , log it to console
//         console.log(err)
//       })
//   }
//   // will render only one time
//   useEffect(() => {
//     call()
    
//   }, [],console.log(listOfJobs,'7777777'))



//   return (
//     <div>
//       {/* pass state as props to store data in it */}
//       <NavBar />
//       {/* <NavBar setListOfJobs={setListOfJobs}/> */}
//       {/* if list is empty show no Jobs found, otherwise display list of jobs */}
//       {listOfJobs ? <CardsList jobs={listOfJobs} /> : <h1 className="heading">No Job Found....</h1>}
//     </div>
//   );
// }
// export default App;
