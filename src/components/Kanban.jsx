import React, { Component, PureComponent } from "react";
import KanbanList from "./KanbanList";
import { connect } from "react-redux";
import KanbanCreate from "./KanbanCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { sort } from "../actions";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


class Kanban extends PureComponent {
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h1 style={{ marginBottom: '10px'}}>Kanban</h1>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {lists.map((list, index) => (
                <KanbanList
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <KanbanCreate list />
            </ListsContainer>
          )}
        </Droppable>
        </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
    lists: state.lists
  });

export default connect(mapStateToProps)(Kanban);