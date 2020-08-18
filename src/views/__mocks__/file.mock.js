export const DATA = [
  ['Poland', 'Wroclaw', 'Igielna 19', '321', 'Opera'],
  ['France', 'Paris', '20 Rue Vaneau', '6431', 'Opera'],
  ['Spain', 'Madrid', 'Camino Viejo', '28109', 'Cinema'],
];

export const FILE = {
  data: DATA,
  errors: [],
};

export const FILE_WITH_EMPTY_FIELDS = {
  ...FILE,
  data: [['Poland', '', 'Igielna 19', '', '']],
};

export const FILE_WITH_TOO_MANY_ROWS = {
  ...FILE,
  data: [...DATA, ...DATA, ...DATA, ...DATA, ...DATA, ...DATA, ...DATA],
};

export const FILE_WITH_INCORRECT_COLUMNS_NUM = {
  ...FILE,
  data: [['Poland', 'Wroclaw', 'Igielna 19']],
};

export const INCORRECT_FILE = {
  ...FILE,
  errors: [{
      message: 'Trailing quote on quoted field is malformed',
  }],
};
