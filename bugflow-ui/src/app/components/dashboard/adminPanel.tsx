// components/dashboard/AdminPanel.tsx
import { Box, Button, Stack, Typography } from '@mui/material';
import { JSX, useState } from 'react';
import CreateProjectForm from './createProjectForm';
import AssignOwnerForm from './assignOwnerForm';

const AdminPanel = (): JSX.Element => {
  const [showCreate, setShowCreate] = useState(false);
  const [showAssign, setShowAssign] = useState(false);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Admin Tools
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => setShowCreate(true)}>
          Create Project
        </Button>
        <Button variant="outlined" onClick={() => setShowAssign(true)}>
          Assign Owner
        </Button>
      </Stack>

      <CreateProjectForm open={showCreate} onClose={() => setShowCreate(false)} />
      <AssignOwnerForm open={showAssign} onClose={() => setShowAssign(false)} />
    </Box>
  );
};

export default AdminPanel;
