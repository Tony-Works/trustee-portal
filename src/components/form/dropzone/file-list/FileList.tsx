import type { ReactElement } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { convertBytesToMb } from 'utils';

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  marginTop: '0.5rem',
  overflow: 'auto',
  maxHeight: '15rem',
});

const FileItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const FileSize = styled('span')({
  opacity: 0.8,
});

interface FileListProps {
  files: File[];
  onRemove: (filename: string) => void;
}

const FileList = (props: FileListProps): ReactElement => {
  const { files, onRemove } = props;

  return (
    <Container>
      {files.map((file) => {
        return (
          <FileItem key={file.name}>
            <Typography variant="body2">
              {file.name} <FileSize>({convertBytesToMb(file.size)} MB)</FileSize>
            </Typography>
            <IconButton
              size="small"
              color="error"
              aria-label={`delete ${file.name}`}
              onClick={() => {
                return onRemove(file.name);
              }}>
              <DeleteIcon />
            </IconButton>
          </FileItem>
        );
      })}
    </Container>
  );
};

export default FileList;
