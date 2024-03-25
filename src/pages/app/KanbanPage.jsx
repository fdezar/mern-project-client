import { useState, useEffect } from 'react';
import kanbanService from '../../services/kanban.service.js';
import kanbanItemsService from '../../services/card.service.js';

const KanbanPage = () => {
  const [kanbans, setKanbans] = useState([]);
  const [newKanbanTitle, setNewKanbanTitle] = useState('');
  const [newKanbanItemText, setNewKanbanItemText] = useState('');

  useEffect(() => {
    loadKanbans();
  }, []);

  const loadKanbans = async () => {
    try {
      const response = await kanbanService.getAllKanbans();
      setKanbans(response.data);
    } catch (error) {
      console.error('Error fetching kanbans:', error);
    }
  };

  const createKanban = async () => {
    try {
      await kanbanService.createKanban({ title: newKanbanTitle });
      setNewKanbanTitle('');
      loadKanbans();
    } catch (error) {
      console.error('Error creating kanban:', error);
    }
  };

  const createKanbanItem = async (kanbanParent) => {
    try {
      await kanbanItemsService.createKanbanItem({
        title: newKanbanItemText,
        kanbanParent: kanbanParent
      });
      setNewKanbanItemText('');
      loadKanbans();
    } catch (error) {
      console.error('Error creating kanban item:', error);
    }
  };

  return (
    <div>
      <h1>Kanban Board</h1>
      <div>
        <input
          type="text"
          value={newKanbanTitle}
          onChange={(e) => setNewKanbanTitle(e.target.value)}
          placeholder="Enter Kanban title"
        />
        <button onClick={createKanban}>Create Kanban</button>
      </div>
      {kanbans.map((kanban) => (
        <div key={kanban._id}>
          <h3>{kanban.title}</h3>
          <ul>
            {kanban.kanbanItems.map((item) => (
              <li key={item._id}>{item.title}</li>
            ))}
          </ul>
          <div>
            <input
              type="text"
              value={newKanbanItemText}
              onChange={(e) => setNewKanbanItemText(e.target.value)}
              placeholder="Enter Kanban item text"
            />
            <button onClick={() => createKanbanItem(kanban._id)}>Add Kanban Item</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanPage;

// import React from "react";

// import { Row, Col, Card, CardBody } from "reactstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

// import { generateQuoteMap } from "./dnd/mockData";

// import Board from "./dnd/board/Board";

// function KanbanPage() {
//     const data = {
//         medium: generateQuoteMap(100),
//         large: generateQuoteMap(500)
//       };
    
//       return (
//         <>
//           <Row className="justify-content-center text-center">
//             <Col xs={12}>
//               <Card>
//                 <CardBody>
//                   <h2>React DnD Testing</h2>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
    
//           <Board initial={data.medium} withScrollableColumns />
//         </>
//       );
// }

// export default KanbanPage;

