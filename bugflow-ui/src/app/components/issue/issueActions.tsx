import { CSSProperties, IconButton, Tooltip } from '@mui/material';
interface IssueActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

const iconStyle: CSSProperties = {
  width: 24,
  height: 24,
  objectFit: 'contain',
};

const IssueActions = ({ onEdit, onDelete }: IssueActionsProps) => {
  return (
    <>
      {onEdit && (
        <Tooltip title="Edit">
          <IconButton onClick={onEdit}>
            <img src="/assets/icons/edit.png" style={iconStyle} alt="Edit" />
          </IconButton>
        </Tooltip>
      )}
      {onDelete && (
        <Tooltip title="Delete">
          <IconButton onClick={onDelete}>
            <img
              src="/assets/icons/delete.png"
              style={iconStyle}
              alt="Delete"
            />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default IssueActions;
