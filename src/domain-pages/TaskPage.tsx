import React, { useEffect } from "react";
import AddCard from "domain-components/AddCard";
import CardList from "domain-components/CardList";
import { useDispatch } from "react-redux";
import * as cardActions from "rx-actions/TaskActionCreator"
import "styles/pages/TaskPages.scss"

const TaskPage = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem('taskId', props.match.params.taskId);
    dispatch(cardActions.fetchTask()) 
  })
  
  return (
    <div className="taskpage">
      <AddCard />
      <CardList />
    </div>
  );
}

export default TaskPage;