import React, { useState, useCallback } from 'react';
import 'sanitize.css';

import { FileUpload, Form, MapGL } from './views';

import { Container } from './App.styles';

function App() {
  const [file, uploadFile] = useState();
  const [columnsOrder, setColumnsOrder] = useState();

  const renderContent = useCallback(() => {
    switch (true) {
      case !file:
        return <FileUpload uploadFile={uploadFile} />;
      case !columnsOrder:
        return (
          <Form
            file={file}
            setColumnsOrder={setColumnsOrder}
            uploadFile={uploadFile}
          />
        );
      default:
        return <MapGL columnsOrder={columnsOrder} file={file} />;
    }
  }, [file, columnsOrder]);

  return <Container> {renderContent()}</Container>;
}

export default App;
