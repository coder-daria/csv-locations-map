import React from 'react';
import 'sanitize.css';

import { Container, Button } from "./UploadFileView.styles";

function UploadFileView({ uploadFile }) {
  return (
    <Container>
      <Button onClick={uploadFile}>Upload file</Button>
    </Container>
  );
}

export default UploadFileView;
