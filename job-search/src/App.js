import NavBar from './Components/NavBar'
import CardsList from './Components/CardsList'
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddJob from './Components/AddJob'

function App() {
  // state to store list of jobs
  const [listOfJobs, setListOfJobs]= useState([]);

  const [tempList, setTempList]= useState([]);
  // const [Jobslocation, setJobslocation]= useState([]);
  const [jobsSearchList, setJobsSearchList]= useState([]);

  const [faves, setFaves] = useState(() => [])
  const [filter, setFilter] = useState(() => 'all')

  
  const [inputTitle, setInputTitle] = useState('');
  const [companies, setCompanies] = useState([]);
  


// delete fetch request
const handleDelete = (id) => {
  axios.delete(`http://localhost:5000/delete-job/${id}`)
  .then(res => {
    let filterList = tempList.filter(item => item._id !== id);
    console.log(filterList,'test delete')
    setListOfJobs(filterList);
  })
  .catch(err => console.log('delete failed', err))
}

const handleEdit = (id, newData) => {
  console.log(id, newData);
  axios.put(`http://localhost:5000/update-job/${id}`, newData)
  .then(res => {
    let editItem = listOfJobs.find(item => item._id === id);
    editItem.title = newData.title;
    editItem.Description = newData.Description;

    let newList = listOfJobs.map(item => item._id !== id ? item : editItem);
    setListOfJobs(newList);
  })
  .catch(err => console.log('edit failed', err));
}
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
  // setJobslocation([])
  setJobsSearchList([])
  handleFilterClick('all')
  // callAllJobs()

}


const callAllJobs=()=>{
  // fetch get reqest to /jobs
  axios.get('http://localhost:5000/jobs')
  .then(res => {
    // store response date in state

    setTempList(res.data.jobs);
    setListOfJobs(res.data.jobs)
  }

    )
  .catch(err => {
    //if request fialed , log it to console
    console.log(err)})
}

// useEffect(() => {
//   call()
// }, [inputTitle])

// useEffect(() => {
//   call()
// }, [inputTitle])

const fetchComanies = () => {
  axios.get('http://localhost:5000/companies')
  .then(res =>{console.log(res); setCompanies(res.data.companies)})
  .catch(err => console.log(err))
}

  // const call=()=>{
  //   axios({
  //     method: 'GET',
  //     url: 'http://localhost:5000/jobs-by-job-title',
  //     params: {
  //         'title': inputTitle,
  //     }
  // }).then (res => setJobslocation(res.data.jobs))
  //     .catch(err => console.log(err))
  // }
  

  useEffect(() => {
    // call()
    callAllJobs();
  }, [inputTitle,listOfJobs])


  // will render only one time
  useEffect(() => {
    // callAllJobs();
    // getLogo()
    fetchComanies();
    
  }, [])


/* if list is empty show no Jobs found, otherwise display list of jobs */
      // {Jobslocation.length > 0 ? <CardsList onDelete={handleDelete} onEdit={handleEdit} jobs={Jobslocation}/> : <CardsList jobs={listOfJobs} onEdit={handleEdit} onDelete={handleDelete}/>}

  // const cardlist1 = ((filter === 'all')?Jobslocation.length > 0 ? 
  // <CardsList companies={companies} filter={filter} onDelete={handleDelete} onEdit={handleEdit} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={Jobslocation}/> 
  // : 
  // <CardsList companies={companies} filter={filter} onDelete={handleDelete} onEdit={handleEdit} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={listOfJobs}/> 
  // :
  // <CardsList filter={filter} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={faves}/>)
  


  const cardlist1 = ((filter === 'all')?(jobsSearchList.length > 0)?
  <CardsList companies={companies} filter={filter} onDelete={(id)=>handleDelete(id)} onEdit={handleEdit} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={jobsSearchList}/>
  :
  <CardsList companies={companies} filter={filter} onDelete={(id)=>handleDelete(id)} onEdit={handleEdit} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={listOfJobs}/>
  :
  <CardsList filter={filter} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={faves}/>)

  return (
    <div>
      {/* pass state as props to store data in it */}
      {/* <NavBar setJobsSearchList={setJobsSearchList} setListOfJobs={setListOfJobs} handleFilterClick={handleFilterClick} callAll={()=>callAll()}  fetchJobsByTitle={call} setInputTitle={setInputTitle} handleChange={handleChange}/> */}
      {/* <NavBar setJobsSearchList={setJobsSearchList} setListOfJobs={setListOfJobs} handleFilterClick={handleFilterClick} callAll={()=>callAll()}  setInputTitle={setInputTitle} handleChange={handleChange}/> */}
      {/* <NavBar handleFilterClick={handleFilterClick} callAll={()=>callAll()} fetchJobsByTitle={call} setInputTitle={setInputTitle} handleChange={handleChange}/> */}
      {/* if list is empty show no Jobs found, otherwise display list of jobs */}
      {/* {cardlist1} */}
      {/* <CardsList  companies={companies} onDelete={handleDelete} onEdit={handleEdit} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={listOfJobs}/> */}

      {/* {Jobslocation.length > 0 ? <CardsList setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={Jobslocation}/> : <CardsList setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={listOfJobs}/>} */}
      <Router>
      <NavBar setJobsSearchList={setJobsSearchList} setListOfJobs={setListOfJobs} handleFilterClick={handleFilterClick} callAll={()=>callAll()}  setInputTitle={setInputTitle} handleChange={handleChange}/>
        <Switch>
          <Route exact path="/">
          {cardlist1}
          </Route>
          <Route exact path="/add-job">
            <AddJob/>
          </Route>
        </Switch>
      </Router>
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
