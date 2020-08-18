const { freeze } = Object;

const ERROR_MESSAGE = freeze({
  INCORRECT_ROW_ITEMS: "Incorrect columns' number. Your file should contain 5 columns.",
  INCORRECT_ROWS_NUM: 'Incorrect numbers of rows. Provide less than 20 rows.',
  INCORRECT_FILE: 'Perhaps the file is empty or has a incorrect type.',
  EMPTY_FIELDS: 'The file cannot contain empty fields.',
});

const {
  INCORRECT_FILE,
  INCORRECT_ROW_ITEMS,
  INCORRECT_ROWS_NUM,
  EMPTY_FIELDS,
} = ERROR_MESSAGE;

const EMPTY_STRING = "";
const REQUIRED_ROW_FIELDS = 5;

function validateFile(selectedFile) {
  if(selectedFile.errors.length) {
    const [{ message }] = selectedFile.errors;
    return `${message}. ${INCORRECT_FILE}`;
  }

  if(selectedFile.data.length > 20) {
    return INCORRECT_ROWS_NUM;
  }

  for(let i = 0; i < selectedFile.data.length; i++) {
    const rowFields = selectedFile.data[i];
    const emptyField = rowFields.find(field => field === EMPTY_STRING);

    if(emptyField === EMPTY_STRING) {  
      return EMPTY_FIELDS;
    }
  
    if(rowFields.length !== REQUIRED_ROW_FIELDS) {
      return INCORRECT_ROW_ITEMS;
    }
  }
}

export default validateFile;
