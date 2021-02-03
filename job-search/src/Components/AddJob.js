import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom'
import NavBar from './NavBar'

const AddJob = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [company, setCompany] = useState('Aramco');
    const [Department, setDeparment] = useState('');
    const [date, setDate] = useState('');
    const [summary, setSummary] = useState('');
    const [EmploymentType, setEmploymentType] = useState('');
    const [Description, setDescription] = useState('');
    const [skill, setSkill] = useState('');

    const onHandleSubmit = (e) => {
        const newJob = {
            title,
            location,
            company,
            Department,
            date,
            summary,
            EmploymentType,
            Description: Description.split('\n'),
            skills: skill.split('\n'),
        }
        axios.post('/api/jobs/add-job', newJob)
            .then(res => {
                if (res.status == 200) {
                    alert('job added');
                    // history.push('/');
                    props.changePath('/')
                } else {
                    alert('job not added')
                }
            })
            .catch(err => console.log('error in add job', err))
    }

    return (
        <div>
            <NavBar id='nav1' />
            <div id='navAdd' className="container add-job-wrapper">
                <div className="row mx-0">
                    <div
                        className="form bg-light border-rounded p-1 w-50 mx-auto my-2">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" placeholder="Title" ref={register({ required: "password Massage" })}
                                onChange={(e) => setTitle(e.target.value)} value={title}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location" className="text-capitalize">location</label>
                            <input type="text" className="form-control" placeholder="Location" ref={register({ required: true })}
                                onChange={(e) => setLocation(e.target.value)} value={location}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Company" className="text-capitalize">Company</label>
                            <select ref={register({ required: true })} class="form-control" onChange={(e) =>
                                setCompany(e.target.value)} value={company}>
                                <option value="Aramco">Aramco</option>
                                <option value="Sabic">Sabic</option>
                                <option value="Sasref">Sasref</option>
                                <option value="Tafeel">Tafeel</option>
                                <option value="SAMACO">SAMACO</option>
                                <option value="CEPCO">CEPCO</option>
                                <option value="RCC">RCC</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Department" className="text-capitalize">Department</label>
                            <input type="text" className="form-control" placeholder="Department" ref={register({ required: true })}
                                onChange={(e) => setDeparment(e.target.value)} value={Department}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date" className="text-capitalize">date</label>
                            <input type="date" className="form-control" placeholder="date" ref={register({ required: true })}
                                onChange={(e) => setDate(e.target.value)} value={date}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="summary" className="text-capitalize">summary</label>
                            <input type="text" className="form-control" placeholder="summary" ref={register({ required: true })}
                                onChange={(e) => setSummary(e.target.value)} value={summary}
                            />
                        </div>
                        <div class="form-group">
                            <label for="EmploymentType">EmploymentType</label>
                            <select class="form-control" onChange={(e) =>
                                setEmploymentType(e.target.value)} value={EmploymentType}>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                            </select>
                        </div>
                        <div class="form-group" ref={register({ required: true })}>
                            <label ref={register({ required: true })} for="Description">Description</label>
                            <textarea class="form-control" rows="3" ref={register({ required: true })}
                                onChange={(e) => setDescription(e.target.value)} value={Description}></textarea>
                        </div>
                        <div class="form-group">
                            <label for="Skill">skills</label>
                            <textarea class="form-control" rows="3" ref={register({ required: true })}
                                onChange={(e) => setSkill(e.target.value)} value={skill}></textarea>
                        </div>
                        <button className="btn btn-block btn-primary" onClick={handleSubmit(onHandleSubmit)}>Add Job</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddJob;