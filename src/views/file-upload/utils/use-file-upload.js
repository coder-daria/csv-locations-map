import { useState, useCallback } from 'react';
import Papa from 'papaparse';

import { getCoordinates, validateFile } from '.';

function useFileUpload({ uploadFile }) {
  const [errorMessage, setErrorMessage] = useState();

  const handleUpload = useCallback(
    ({
      target: {
        files: [selectedFile],
      },
    }) => {
      Papa.parse(selectedFile, {
        complete: results => {
          const error = validateFile(results);

          if (error) {
            setErrorMessage(error);
            return;
          }

          uploadFile({
            ...results,
            name: selectedFile.name,
            coordinates: getCoordinates(results.data),
          });
        },
      });
    },
    [uploadFile],
  );

  return {
    onUpload: handleUpload,
    errorMessage,
  };
}

export default useFileUpload;
