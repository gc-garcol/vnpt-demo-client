import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Card from "./Card";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import * as actions from "rx-actions/TaskActionCreator";

const listStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: 8,
  width: 320
});

const CardList = (props: any) => {
  const cards = useSelector((state: any): any => {
    return state.taskReducer.ids.map((id: any) => {
      return {
        ...state.taskReducer.byIds[id],
        id
      };
    })
  }, shallowEqual)

  const dispatch = useDispatch();
  const onDragEnd = (result: any) => {
    if (result.destination) {
      const { id } = cards[result.source.index];
      dispatch(actions.moveCard(id, result.source.index, result.destination.index))
    }
  }

  return (
    <div className="com-cardlist">
      <DragDropContext onDragEnd={ onDragEnd } >
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={listStyle(snapshot.isDraggingOver)}
            >
              {
                cards?.map((card: any, index: any) => {
                  return card && <Card key={ card.id } data={ card } index={ index } />;
                })
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default CardList;