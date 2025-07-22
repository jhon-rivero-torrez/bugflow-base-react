// ProjectBoard.tsx
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Box, Typography, Modal } from '@mui/material';
import { Issue } from '../../types/issue';
import IssueEditForm from '../issue/isssueEditForm';
import IssueView from '../issue/issueView';
import IssueCard from './issueCard';

interface Props {
  issues: Issue[];
}

const columns = ['Open', 'In Progress', 'Closed'];

const columnStyles: Record<string, { bg: string }> = {
  Open: { bg: '#e3f2fd' },
  'In Progress': { bg: '#fff3e0' },
  Closed: { bg: '#e8f5e9' },
};

export default function ProjectBoard({ issues }: Props) {
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [editingIssue, setEditingIssue] = useState<Issue | null>(null);
  const [columnData, setColumnData] = useState<Record<string, Issue[]>>({
    Open: issues.filter(i => i.status === 'Open'),
    'In Progress': issues.filter(i => i.status === 'In Progress'),
    Closed: issues.filter(i => i.status === 'Closed'),
  });

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination || source.droppableId === destination.droppableId) return;

    const sourceCol = columnData[source.droppableId];
    const destCol = columnData[destination.droppableId];
    const [moved] = sourceCol.splice(source.index, 1);
    moved.status = destination.droppableId as Issue['status'];

    destCol.splice(destination.index, 0, moved);

    setColumnData({
      ...columnData,
      [source.droppableId]: [...sourceCol],
      [destination.droppableId]: [...destCol],
    });
  };

  const handleUpdateIssue = (updated: Issue) => {
    setColumnData(prev => {
      const newData = { ...prev };
      Object.keys(newData).forEach(col => {
        newData[col] = newData[col].filter(i => i.id !== updated.id);
      });
      newData[updated.status].push(updated);
      return newData;
    });
  };

  return (
    <Box display="flex" gap={2} p={2}>
      <DragDropContext onDragEnd={onDragEnd}>
  {columns.map((col) => (
  <Droppable droppableId={col} key={col}>
    {(provided) => (
      <Box
        ref={provided.innerRef}
        {...provided.droppableProps}
        key={col} // <-- Safe, still fine to repeat here
        flex={1}
        minHeight="70vh"
        bgcolor={columnStyles[col].bg}
        borderRadius={2}
        p={2}
      >
        <Typography variant="h6" mb={1}>{col}</Typography>

        {columnData[col].map((issue, idx) => (
          <Draggable draggableId={issue.id} index={idx} key={issue.id}>
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                key={issue.id} // 🔁 also safe here
                mb={1}
              >
                <IssueCard
                  key={issue.id}
                  issue={issue}
                  onView={() => setSelectedIssue(issue)}
                  onEdit={() => setEditingIssue(issue)}
                  onDelete={() => {
                    setColumnData(prev => {
                      const newData = { ...prev };
                      Object.keys(newData).forEach(col => {
                        newData[col] = newData[col].filter(i => i.id !== issue.id);
                      });
                      return newData;
                    });
                  }}
                />
              </Box>
            )}
          </Draggable>
        ))}

        {provided.placeholder}
      </Box>
    )}
  </Droppable>
))}

      </DragDropContext>

      <Modal open={!!selectedIssue || !!editingIssue} onClose={() => { setSelectedIssue(null); setEditingIssue(null); }}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{ transform: 'translate(-50%, -50%)', width: 600, bgcolor: 'background.paper', p: 3, borderRadius: 2 }}
        >
          {selectedIssue && (
            <IssueView
              issue={selectedIssue}
              onClose={() => setSelectedIssue(null)}
              onEdit={() => {
                setEditingIssue(selectedIssue);
                setSelectedIssue(null);
              }}
            />
          )}

          {editingIssue && (
            <IssueEditForm
              issue={editingIssue}
              onCancel={() => setEditingIssue(null)}
              onSubmit={(updated) => {
                handleUpdateIssue(updated);
                setEditingIssue(null);
              }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}
