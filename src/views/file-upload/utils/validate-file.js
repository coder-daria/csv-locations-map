const { freeze } = Object;

const ERROR_MESSAGE = freeze({
  WRONG_FILE_TYPE: 'Wrong file type. Please upload only csv file.',
  MAX_ROWS_NUM_EXCEEDED: 'The maximum row number exceeded. Provide less than 20 rows.',
  MAX_COLS_NUM_EXCEEDED: 'The maximum columns number exceeded. Provide less than 20 columns.',
});

const {
  WRONG_FILE_TYPE,
  MAX_ROW_NUM_EXCEEDED,
  MAX_COLS_NUM_EXCEEDED,
} = ERROR_MESSAGE;

function validateFile(selectedFile) {
  if(!!selectedFile?.errors.length) {
    return WRONG_FILE_TYPE;
  }

  if(selectedFile?.data.length > 20) {
    return MAX_ROW_NUM_EXCEEDED;
  }

  const areMoveThanFiveColumns = selectedFile?.data.filter(columns => columns.length !== 5).length > 0;

  if(areMoveThanFiveColumns) {
    return MAX_COLS_NUM_EXCEEDED;
  }
}

export default validateFile;
