import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Issue } from '../../types/issue';

interface IssueEditFormProps {
  issue: Issue;
  onCancel: () => void;
  onSubmit: (updated: Issue) => void;
}

const IssueEditForm = ({ issue, onCancel, onSubmit }: IssueEditFormProps) => {
  const { register, handleSubmit } = useForm<Issue>({
    defaultValues: issue,
  });

  const onSave = (data: Issue) => {
    onSubmit({ ...issue, ...data });
  };

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <TextField
        label="Title"
        fullWidth
        margin="normal"
        {...register('title')}
      />
      <TextField
        label="Description"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        {...register('description')}
      />
      <TextField
        label="Assignee"
        fullWidth
        margin="normal"
        {...register('assignee')}
      />

      <Box display="flex" justifyContent="flex-end" gap={1} mt={2}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit" variant="contained">Save</Button>
      </Box>
    </form>
  );
};

export default IssueEditForm;
