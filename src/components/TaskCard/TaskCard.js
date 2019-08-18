import React from 'react';
 
const TaskCard = ({ taskCard }) => {
  let cardTasks = taskCard.tasks.map(task => {
    return (
      <li>{task.title}</li>
    )
  });
  return (
    <section className='card'>
      <h3>{taskCard.title}</h3>
      <section>
        <ul>
          {cardTasks}
        </ul>
      </section>
    </section>
  );
}

export default TaskCard;