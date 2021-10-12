import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux';
import * as actions from "rx-actions/TaskActionCreator"
import "styles/components/Card.scss"

const colors = ['#b08dbb', '#f69ed0', '#fd8801', '#93ff4a', '#53b79b', '#dab98f', '#576a70']

const itemStyle = (isDragging: any, draggableStyle: any, id: any) => ({
  userSelect: "none",
  padding: 16,
  margin: `0 0 8px 0`,
  background: colors[id % colors.length],
  opacity: isDragging ? 0.8 : 1,
  ...draggableStyle
});


const Card = (props: any) => {
  const { data, index } = props;
  const { completed, id, content } = data;
  const dispatch = useDispatch();

  const deleteCard = () => {
    dispatch(actions.deleteCard(id));
  }

  return (
    // note: id must be not null or != 0
    <Draggable draggableId={ id + "_" } index={ index } > 
      {
        (provided, snapshot) => (
          <div
            ref={ provided.innerRef }
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={
              itemStyle(
                snapshot.isDragging,
                provided.draggableProps.style,
                id
              )
            }
          >
            <div className="card-container">
              <div className="row">
                <div className="col-8">
                  <p className="text">{ content }</p>
                </div>
                <div className="col-4 btn-func">
                  {/* <button className="btn btn-info">edit</button> */}
                  <button className="btn btn-danger" onClick={ deleteCard } >delete</button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </Draggable>
  )
}

export default Card;