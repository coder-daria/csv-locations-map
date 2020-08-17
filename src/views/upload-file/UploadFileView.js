import React, { memo } from 'react';

import { Container } from '../../shared/styles';

import { useFileUpload } from './utils';

import { StyledFileUpload } from './UploadFileView.styles';

function UploadFileView({ uploadFile }) {
  const { onUpload, errorMessage } = useFileUpload({ uploadFile });

  return (
    <Container>
      <StyledFileUpload>
        <label>Upload file</label>
        <input accept='.csv'  type='file' onChange={onUpload} />
      </StyledFileUpload>
      <div>{errorMessage}</div>
    </Container>
  );
}

export default memo(UploadFileView);
