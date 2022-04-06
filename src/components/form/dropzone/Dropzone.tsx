import type { ReactElement } from 'react';

import { toArray } from 'lodash';
import { useDropzone } from 'react-dropzone';
import { useController, useFormContext } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useMetaError } from 'hooks';
import { getFilenameWithoutExtension } from 'utils';

import FileList from './file-list';

const DropzoneContainer = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== 'hasError';
  },
})<{
  hasError: boolean;
}>(({ hasError, theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.25rem',
    padding: '2rem',
    backgroundColor: '#fafafa',
    cursor: 'pointer',
    border: `2px dashed ${hasError ? theme.palette.error.main : '#000'}`,
  };
});

const DropzoneContent = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '20% 100%',
  gridTemplateRows: 'repeat(2, 1fr)',
});

const UploadIcon = styled(AddCircleIcon, {
  shouldForwardProp: (prop) => {
    return prop !== 'hasError';
  },
})<{
  hasError: boolean;
}>(({ hasError, theme }) => {
  return {
    height: '3.5rem',
    width: '3.5rem',
    gridRow: '1 / 4',
    alignSelf: 'center',
    justifySelf: 'flex-end',
    marginRight: '0.5rem',
    color: hasError ? theme.palette.error.main : theme.palette.primary.main,
  };
});

const Title = styled(Typography)({
  fontSize: '1.25rem',
});

const PrimaryText = styled('span')(({ theme }) => {
  return {
    display: 'inline',
    fontSize: '1.25rem',
    color: theme.palette.primary.main,
  };
});

const SubTitle = styled(Typography)({
  color: '#000000',
  opacity: 0.45,
});

const ErrorMessage = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.error.main,
  };
});

interface DropzoneProps {
  name: string;
  multiple?: boolean;
  allowedExtensions?: string[];
  defaultValue?: File[] | File | null;
}

const Dropzone = (props: DropzoneProps): ReactElement => {
  const {
    name,
    multiple = true,
    defaultValue = [],
    allowedExtensions = ['.png', '.jpg', '.jpeg', '.pdf'],
  } = props;

  const { getValues, setValue, trigger } = useFormContext();

  const {
    fieldState,
    field: { onChange },
  } = useController({
    name,
    defaultValue: multiple ? defaultValue : null,
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple,
    onDrop: (files) => {
      return onChange(files);
    },
  });

  const { hasError, errorMessage } = useMetaError(fieldState);

  const rootProps = getRootProps();
  const selectedFiles = (getValues(name) as File[]) ?? [];
  const inputProps = getInputProps({
    onChange: (event) => {
      return onChange(toArray(event.target.files));
    },
  });

  const getSupportedFileTypes = (): string => {
    return allowedExtensions
      .map((extension) => {
        return getFilenameWithoutExtension(extension);
      })
      .join(', ');
  };

  const handleRemoveFile = (filename: string): void => {
    const filteredFiles = selectedFiles.filter((file) => {
      return file.name !== filename;
    });

    setValue(name, filteredFiles);
    trigger(name);
  };

  return (
    <>
      <DropzoneContainer {...rootProps} hasError={hasError}>
        <input {...inputProps} data-testid={name} accept={getSupportedFileTypes()} />
        <DropzoneContent>
          <UploadIcon hasError={hasError} />
          {isDragActive ? (
            <Title>Drop the files here...</Title>
          ) : (
            <Title>
              Drag and Drop here or <PrimaryText>Browse File</PrimaryText>
            </Title>
          )}
          <SubTitle>Supported File Types: {getSupportedFileTypes()}</SubTitle>
          {hasError ? (
            <ErrorMessage role="alert" aria-label={errorMessage}>
              {errorMessage}
            </ErrorMessage>
          ) : null}
        </DropzoneContent>
      </DropzoneContainer>
      <FileList files={selectedFiles} onRemove={handleRemoveFile} />
    </>
  );
};

export default Dropzone;
