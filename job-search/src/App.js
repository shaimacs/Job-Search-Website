import NavBar from './Components/NavBar'
import CardsList from './Components/CardsList'
import Login from './Components/Login'
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddJob from './Components/AddJob'

function App() {
  // state to store list of jobs
  const [listOfJobs, setListOfJobs] = useState(() => []);
  const [path, setPath] = useState(() => '/');
  const [type, setType] = useState(() => '');

  const [tempList, setTempList] = useState(() => []);
  // const [Jobslocation, setJobslocation]= useState([]);
  const [jobsSearchList, setJobsSearchList] = useState(() => []);

  const [faves, setFaves] = useState(() => [])
  const [filter, setFilter] = useState(() => 'all')


  const [inputTitle, setInputTitle] = useState(() => '');
  const [companies, setCompanies] = useState(() => []);


  const [allow, setAllow] = useState(() => false);



  // delete fetch request
  const handleDelete = (id) => {
    axios.delete(`/api/jobs/delete-job/${id}`)
      .then(res => {
        let filterList = tempList.filter(item => item._id !== id);
        setListOfJobs(filterList);
        setTempList(filterList);
        handleFilterClick('del')
      })
      .catch(err => console.log('delete failed', err))
  }

  const handleEdit = (id, newData) => {
    console.log(id, newData);
    axios.put(`/api/jobs/update-job/${id}`, newData)
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

  const callAll = () => {
    changePath('/')
    setJobsSearchList([])
    handleFilterClick('all')
  }


  const callAllJobs = () => {
    // fetch get reqest to /jobs
    axios.get('/api/jobs/jobs')
      .then(res => {
        // store response date in state
        setTempList(res.data.jobs);
        setListOfJobs(res.data.jobs)
      }

      )
      .catch(err => {
        //if request fialed , log it to console
        console.log(err)
      })
  }

  const changePath = (path) => {
    setPath(prev => prev = path)
  }

  const fetchComanies = () => {
    axios.get('/api/companies/companies')
      .then(res => setCompanies(res.data.companies))
      .catch(err => console.log(err))
  }

  const loged = (user) => {
    setType(prev => prev = user)
    setAllow(prevAllow => prevAllow = true)
  }


  useEffect(() => {
    callAllJobs();
  }, [inputTitle,path])


  // will render only one time
  useEffect(() => {
    fetchComanies();
  }, [])


  /* if list is empty show no Jobs found, otherwise display list of jobs */
  let cardlist1 = ((filter === 'all' || filter === 'det' || filter === 'del' || filter === 'search') ? (jobsSearchList.length > 0) ?
    <CardsList type={type} handleFilterClick={(det) => handleFilterClick(det)} companies={companies} filter={filter} onDelete={(id) => handleDelete(id)} onEdit={handleEdit} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={jobsSearchList} />
    :
    <CardsList type={type} handleFilterClick={(det) => handleFilterClick(det)} companies={companies} filter={filter} onDelete={(id) => handleDelete(id)} onEdit={handleEdit} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={listOfJobs} />
    :
    <CardsList type={type} handleFilterClick={(det) => handleFilterClick(det)} filter={filter} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={faves} />)

  useEffect(() => {
    handleFilterClick('all')
    cardlist1 = ((filter === 'all' || filter === 'det' || filter === 'del' || filter === 'search') ? (jobsSearchList.length > 0) ?
      <CardsList type={type} handleFilterClick={(det) => handleFilterClick(det)} companies={companies} filter={filter} onDelete={(id) => handleDelete(id)} onEdit={handleEdit} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={jobsSearchList} />
      :
      <CardsList type={type} handleFilterClick={(det) => handleFilterClick(det)} companies={companies} filter={filter} onDelete={(id) => handleDelete(id)} onEdit={handleEdit} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={listOfJobs} />
      :
      <CardsList type={type} handleFilterClick={(det) => handleFilterClick(det)} filter={filter} setFave={() => setFave} faves={faves} onFaveToggle={handleFaveToggle} jobs={faves} />)
  }, [listOfJobs, jobsSearchList,path])

  return (
    <div >
      {allow === true && path === '/' ?
        <Router>
          <NavBar type={type} changePath={(p) => changePath(p)} handleFilterClick={(search) => handleFilterClick(search)} setJobsSearchList={setJobsSearchList} setListOfJobs={setListOfJobs} handleFilterClick={handleFilterClick} callAll={() => callAll()} setInputTitle={setInputTitle} handleChange={handleChange} />
          <Switch>
            <Route exact path="/">
              {cardlist1}
            </Route>
            <Route exact path="/add-job">
              <AddJob />
            </Route>
          </Switch>
        </Router>
        :
        allow === true && path === '/add-job' ?
          <AddJob changePath={(p) => changePath(p)}/>
          :
          <Login loged={(user) => loged(user)} ></Login>
      }
    </div>
  );
}
export default App;