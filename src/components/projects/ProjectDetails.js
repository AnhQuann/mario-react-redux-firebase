import React from 'react'

const ProjectDetails = (props) => {
  const { match } = props;
  const id = match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nostrum minus labore ipsa blanditiis modi! Magnam aspernatur officiis tempora nobis eum laborum magni dolore debitis doloremque omnis. Culpa, ad distinctio!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by NN</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
