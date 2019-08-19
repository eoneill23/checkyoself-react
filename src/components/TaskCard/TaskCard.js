import React from 'react';
import './TaskCard.css'
 
const TaskCard = ({ taskCard, deleteCard }) => {
  let cardTasks = taskCard.tasks.map(task => {
    return (
      <li key={task.id}>
        <input type='checkbox' />
        {task.title}
      </li>
    )
  });
  return (
    <section className='card' key={taskCard.id}>
      <h3 className='cardHeader'>{taskCard.title}</h3>
        <ul className='cardList'>
          {cardTasks}
        </ul>
        <button 
          onClick={() => deleteCard(taskCard.id)}
          className='deleteCard'
        >
          Delete card
        </button>
    </section>
  );
}

export default TaskCard;