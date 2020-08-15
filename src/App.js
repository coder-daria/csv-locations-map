import React, { useState } from 'react';
import 'sanitize.css';

import { Map } from "./components";
import { UploadFileView } from "./views";

import { Container } from "./App.styles";

function App() {
  const [file, uploadFile] = useState();

  return (
    <Container>
      {file ? (
        <Map />
      ) : (
        <UploadFileView uploadFile={uploadFile} />
      )}
    </Container>
  );
}

export default App;
