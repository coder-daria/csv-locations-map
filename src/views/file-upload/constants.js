const { freeze } = Object;

export const ERROR_MESSAGE = freeze({
  EMPTY_FIELDS: 'The file cannot contain empty fields.',
  INCORRECT_FILE: 'Perhaps the file is empty or has a incorrect type.',
  INCORRECT_ROW_ITEMS: "Incorrect columns' number. Your file should contain 5 columns.",
  INCORRECT_ROWS_NUM: 'Incorrect numbers of rows. Provide less than 20 rows.',
});
