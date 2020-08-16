import React, { useState, useCallback } from 'react';
import 'sanitize.css';

import { Map, Form } from './components';
import { UploadFileView } from './views';

import { Container } from './App.styles';

function App() {
  const [file, uploadFile] = useState();
  const [columnsOrder, setColumnsOrder] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const renderContent = useCallback(
    () => {
      switch (true) {
        case !file:
          return <UploadFileView uploadFile={uploadFile} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
        case !columnsOrder:
          return <Form fileName={file.name} rowsNum={file.data.length} setColumnsOrder={setColumnsOrder} uploadFile={uploadFile} />;
        default:
          return <Map columnsOrder={columnsOrder} file={file} />
      }
    }, [file, columnsOrder, errorMessage]
  );

  return (
    <Container>
      {renderContent()}
    </Container>
  );
}

export default App;
