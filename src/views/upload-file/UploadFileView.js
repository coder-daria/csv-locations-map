import React, { useCallback } from 'react';
import Papa from 'papaparse';

import { InputWrapper } from './UploadFileView.styles';

import { Container } from '../../shared/styles';

const validateFile = (file) => {
  if(!!file?.errors.length) {
    return 'Wrong file type. Please upload only csv file.';
  }

  if(file?.data.length > 20) {
    return 'The maximum row number exceeded. Provide less than 20 rows.';
  }

  const areMoveThanFiveColumns = file?.data.filter(columns => columns.length !== 5).length > 0;

  if(areMoveThanFiveColumns) {
    return 'The maximum columns number exceeded. Provide less than 20 columns.';
  }
}

const randomizeCoordinates = () => [Math.random() * 51.40, Math.random() * 14.87];

const getCoordinates = (data) => data.map(() => randomizeCoordinates());

function UploadFileView({ uploadFile, errorMessage, setErrorMessage }) {
  const handleFileUpload = useCallback(
    (e) => {
      const [file] = e.target.files;

      Papa.parse(file, {
        complete: (results) => {
          const errorMessage = validateFile(results);

          if(!errorMessage) {
            uploadFile({
              ...results,
              name: file.name,
              coordinates: getCoordinates(results.data),
            });
            setErrorMessage();
          } else {
            setErrorMessage(errorMessage);
          }
        },
      });
    }, [setErrorMessage, uploadFile]
  );

  return (
    <Container>
      <InputWrapper>
        <input type='file' onChange={handleFileUpload} placeholder={null} accept='.csv'/>
        Upload file
      </InputWrapper>
      <div>{errorMessage}</div>
    </Container>
  );
}

export default UploadFileView;
