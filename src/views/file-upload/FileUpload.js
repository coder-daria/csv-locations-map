import React, { memo } from 'react';
import { func } from 'prop-types';

import useFileUpload from './utils/use-file-upload';

import { Container, StyledFileUpload, ErrorMessage } from './FileUpload.styles';

function FileUpload({ uploadFile }) {
  const { onUpload, errorMessage } = useFileUpload({ uploadFile });

  return (
    <Container>
      <StyledFileUpload>
        <span>Upload file</span>
        <input accept=".csv" type="file" onChange={onUpload} />
      </StyledFileUpload>
      <ErrorMessage isVisible={!!errorMessage}>{errorMessage}</ErrorMessage>
    </Container>
  );
}

FileUpload.propTypes = {
  uploadFile: func.isRequired,
};

export default memo(FileUpload);
