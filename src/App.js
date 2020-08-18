import React, { useState, useCallback } from 'react';
import 'sanitize.css';

import { FileUpload, Form, MapGL } from './views';

import { Container } from './App.styles';

function App() {
  const [file, uploadFile] = useState();
  const [columnsOrder, setColumnsOrder] = useState();

  const resetData = useCallback(() => {
    uploadFile();
    setColumnsOrder();
  }, []);

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
        return (
          <MapGL
            columnsOrder={columnsOrder}
            file={file}
            resetData={resetData}
          />
        );
    }
  }, [file, columnsOrder, resetData]);

  return <Container> {renderContent()}</Container>;
}

export default App;
