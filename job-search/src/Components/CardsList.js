import React from 'react';
import JobDetails from './JobDetails'

const CardsList = (props) => {

    const inputTestres = props.jobs.map((job) => {
        return (
            <JobDetails
                type={props.type}
                handleFilterClick={(det) => props.handleFilterClick(det)}
                filter={props.filter}
                onDelete={(id) => props.onDelete(id)}
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