import React from 'react';
import { func, string, number } from 'prop-types';

import SortableList from './sortable-list/SortableList';
import useFormDetails from './utils/use-form-details';

import { FORM_INFORMATION, BUTTON } from './constants';

import {
  ActionButtons,
  Button,
  Container,
  FormInfo,
  StyledForm,
  FileInformation,
} from './Form.styles';

const { ACCEPT, CANCEL } = BUTTON;

const SORTABLE_AXIS = 'x';

function Form({ setColumnsOrder, fileName, rowsNum, uploadFile }) {
  const {
    cancelForm,
    fields,
    isSorting,
    onSortEnd,
    onSortStart,
    onSubmit,
  } = useFormDetails({ setColumnsOrder, uploadFile });

  return (
    <Container>
      <StyledForm>
        <FileInformation>
          <span>{fileName}</span>
          <span>{`${rowsNum} rows uploaded`}</span>
        </FileInformation>
        <FormInfo>{FORM_INFORMATION}</FormInfo>
        <SortableList
          axis={SORTABLE_AXIS}
          isSorting={isSorting}
          items={fields}
          onSortEnd={onSortEnd}
          onSortStart={onSortStart}
        />
        <ActionButtons>
          <Button onClick={cancelForm}>{CANCEL}</Button>
          <Button onClick={onSubmit}>{ACCEPT}</Button>
        </ActionButtons>
      </StyledForm>
    </Container>
  );
}

Form.propTypes = {
  fileName: string.isRequired,
  rowsNum: number.isRequired,
  setColumnsOrder: func.isRequired,
  uploadFile: func.isRequired,
};

export default Form;
