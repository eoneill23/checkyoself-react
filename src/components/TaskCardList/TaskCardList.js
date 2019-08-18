import React from 'react';
import TaskCard from '../TaskCard/TaskCard.js'

const TaskCardList = ({ taskCards }) => {
  let tasks = taskCards.map(card => {
    return <TaskCard taskCard={card}/>
  });

  return (
    <main>
      {tasks}
    </main>
  )
}

export default TaskCardList;