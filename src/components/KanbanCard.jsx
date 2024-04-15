import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KanbanForm from "./KanbanForm";
import { editCard, deleteCard } from "../actions";
import { connect } from "react-redux";
import KanbanButton from "./KanbanButton";
import { useSpring, animated } from "react-spring";

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const EditButton = styled(EditIcon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(DeleteIcon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const KanbanCard = React.memo(({ text, id, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 400 }
  });

  const closeForm = e => {
    setIsEditing(false);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const saveCard = e => {
    e.preventDefault();

    dispatch(editCard(id, listID, cardText));
    setIsEditing(false);
  };

  const handleDeleteCard = e => {
    dispatch(deleteCard(id, listID));
  };

  const renderEditForm = () => {
    return (
      <KanbanForm text={cardText} onChange={handleChange} closeForm={closeForm}>
        <KanbanButton onClick={saveCard}>Save</KanbanButton>
      </KanbanForm>
    );
  };

  const renderCard = () => {
    return (
      <animated.div style={props}>
        <Draggable draggableId={String(id)} index={index}>
          {provided => (
            <CardContainer
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onDoubleClick={() => setIsEditing(true)}
            >
              <Card>
                <EditButton
                  onMouseDown={() => setIsEditing(true)}
                  fontSize="small"
                >
                  edit
                </EditButton>
                <DeleteButton fontSize="small" onMouseDown={handleDeleteCard}>
                  delete
                </DeleteButton>

                <CardContent>
                  <Typography>{text}</Typography>
                </CardContent>
              </Card>
            </CardContainer>
          )}
        </Draggable>
      </animated.div>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
});

export default connect()(KanbanCard);
