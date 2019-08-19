import React from 'react';
import TaskCard from '../TaskCard/TaskCard.js';
import './TaskCardList.css'

const TaskCardList = ({ taskCards, deleteCard }) => {
  let tasks = taskCards.map(card => {
    return <TaskCard key={card.id} taskCard={card} deleteCard={deleteCard}/>
  });

  return (
    <main className='cardContainer' key={1}>
      {tasks}
    </main>
  )
}

export default TaskCardList;