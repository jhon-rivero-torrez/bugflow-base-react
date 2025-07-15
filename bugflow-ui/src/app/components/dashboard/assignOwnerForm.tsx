import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { JSX } from 'react';

const schema = z.object({
  projectId: z.string().min(1),
  ownerUsername: z.string().min(1),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  open: boolean;
  onClose: () => void;
}

const AssignOwnerForm = ({ open, onClose }: Props): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log('Assign owner:', data);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Assign Project Owner</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Project ID"
          margin="normal"
          {...register('projectId')}
          error={!!errors.projectId}
          helperText={errors.projectId?.message}
        />
        <TextField
          fullWidth
          label="Owner Username"
          margin="normal"
          {...register('ownerUsername')}
          error={!!errors.ownerUsername}
          helperText={errors.ownerUsername?.message}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Assign
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AssignOwnerForm;
