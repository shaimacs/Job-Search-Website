import React from 'react';
import JobDetails from './JobDetails'

const CardsList = (props) => {
    
    // const allJobs = props.jobs.map((job) => {
    const inputTestres = props.jobs.map((job) => {
        return (
            <JobDetails
                filter={props.filter}
                onDelete={(id)=>props.onDelete(id)}
                onEdit={props.onEdit}
                onFaveToggle={() => props.onFaveToggle(job)}
                faves={props.faves}
                job={job}
                companies={props.companies}
            />

        )
    })
    return <div id='cardsContainer'>{inputTestres}</div>
}

export default CardsList;




// import React from 'react';
// import JobDetails from './JobDetails'
// const CardsList = ({jobs}) => {
//     // pass each job to JobDetail component.
//         return <div id='cardsContainer'>
//             {
//                 jobs.map(item => (
//                     <JobDetails job={item}/>
//                 ))
//             }
//         </div>
//     }
// export default CardsList;