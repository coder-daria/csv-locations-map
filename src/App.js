import React, { useState, useCallback } from 'react';
import 'sanitize.css';

import { MapGL, Form } from './components';
import { UploadFileView } from './views';

import { Container } from './App.styles';

function App() {
  const [file, uploadFile] = useState();
  const [columnsOrder, setColumnsOrder] = useState();

  const renderContent = useCallback(
    () => {
      switch (true) {
        case !file:
          return <UploadFileView uploadFile={uploadFile} />
        case !columnsOrder:
          return <Form fileName={file.name} rowsNum={file.data.length} setColumnsOrder={setColumnsOrder} uploadFile={uploadFile} />;
        default:
          return <MapGL columnsOrder={columnsOrder} file={file} />
      }
    }, [file, columnsOrder]
  );

  return (
    <Container>
      {renderContent()}
    </Container>
  );
}

export default App;
