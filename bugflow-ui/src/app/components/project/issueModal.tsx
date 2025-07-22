import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  priority: z.enum(['Low', 'Medium', 'High']),
  assignee: z.string().min(1),
  status: z.enum(['Open', 'In Progress', 'Closed']),
});

type FormData = z.infer<typeof schema>;

interface Props {
  open: boolean;
  onClose: () => void;
}

const IssueModal = ({ open, onClose }: Props) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Submit:', data);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Create / Edit Issue</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Title" {...register('title')} error={!!errors.title} helperText={errors.title?.message} />
          <TextField label="Description" {...register('description')} error={!!errors.description} helperText={errors.description?.message} multiline rows={3} />
          <TextField select label="Priority" {...register('priority')} error={!!errors.priority} helperText={errors.priority?.message}>
            {['Low', 'Medium', 'High'].map((opt) => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
          </TextField>
          <TextField label="Assignee" {...register('assignee')} error={!!errors.assignee} helperText={errors.assignee?.message} />
          <TextField select label="Status" {...register('status')} error={!!errors.status} helperText={errors.status?.message}>
            {['Open', 'In Progress', 'Closed'].map((opt) => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default IssueModal;
