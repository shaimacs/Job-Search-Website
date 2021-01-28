import React from 'react';
import JobDetails from './JobDetails'

const CardsList = (props) => {
    // const inputTest = [
    //     {
    //         title: 'test1',
    //         description: 'Des1',
    //         date: new Date(),
    //         city: 'C1',
    //         department: 'Dep1'
    //     },
    //     {
    //         title: 'test2',
    //         description: 'Des2',
    //         date: new Date(),
    //         city: 'C2',
    //         department: 'Dep2'
    //     },
    //     {
    //         title: 'test3',
    //         description: 'Des3',
    //         date: new Date(),
    //         city: 'C3',
    //         department: 'Dep3'
    //     },
    //     {
    //         title: 'test4',
    //         description: 'Des4',
    //         date: new Date(),
    //         city: 'C4',
    //         department: 'Dep4'
    //     },
    //     {
    //         title: 'test1',
    //         description: 'Des1',
    //         date: new Date(),
    //         city: 'C1',
    //         department: 'Dep1'
    //     },
    //     {
    //         title: 'test2',
    //         description: 'Des2',
    //         date: new Date(),
    //         city: 'C2',
    //         department: 'Dep2'
    //     },
    //     {
    //         title: 'test3',
    //         description: 'Des3',
    //         date: new Date(),
    //         city: 'C3',
    //         department: 'Dep3'
    //     },
    //     {
    //         title: 'test4',
    //         description: 'Des4',
    //         date: new Date(),
    //         city: 'C4',
    //         department: 'Dep4'
    //     },
    //     {
    //         title: 'test1',
    //         description: 'Des1',
    //         date: new Date(),
    //         city: 'C1',
    //         department: 'Dep1'
    //     },
    //     {
    //         title: 'test2',
    //         description: 'Des2',
    //         date: new Date(),
    //         city: 'C2',
    //         department: 'Dep2'
    //     },
    //     {
    //         title: 'test3',
    //         description: 'Des3',
    //         date: new Date(),
    //         city: 'C3',
    //         department: 'Dep3'
    //     },
    //     {
    //         title: 'test4',
    //         description: 'Des4',
    //         date: new Date(),
    //         city: 'C4',
    //         department: 'Dep4'
    //     }
    // ]
    // const allJobs = props.jobs.map((job) => {
    const inputTestres = props.jobs.map((job) => {
            return (
                <JobDetails job={job}/>
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