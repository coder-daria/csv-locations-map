import React, { useState, useCallback } from 'react';
import arrayMove from 'array-move';

import SortableList from './sortable-list/SortableList';

import {
  ActionButtons,
  Button,
  Container,
  Info,
  StyledForm,
  SuccessMessage,
} from './Form.styles';

const FIELDS_NAMES = ['state', 'city', 'zip', 'address', 'category'];

function Form({ setColumnsOrder, fileName, rowsNum, uploadFile }) {
  const [fields, setFields] = useState(FIELDS_NAMES);
  const [isSorting, toggleSorting] = useState(false);

  const onSubmit = useCallback(
    () => {
        setColumnsOrder(fields);
    }, [fields, setColumnsOrder]
  );

  const onSortEnd = useCallback(
    ({ oldIndex, newIndex }) => {
      const orderedItems = arrayMove(fields, oldIndex, newIndex);

      setFields(orderedItems);
      toggleSorting(false);
    }, [fields],
  );

  const onSortStart = useCallback(
    () => {
      toggleSorting(true);
    }, [],
  );

  const cancelForm = useCallback(
    () => {
      uploadFile();
    }, [uploadFile],
  );

  return (
    <Container>
      <StyledForm>
        <SuccessMessage>
          <span>{fileName}</span>
          <span>{rowsNum} rows uploaded</span>
        </SuccessMessage>
        <Info>
          <span>
            To display locations correctly, drag and drop below fields to their representative column headers.
          </span>
        </Info>
        <SortableList
          isSorting={isSorting}
          axis='x'
          items={fields}
          onSortStart={onSortStart}
          onSortEnd={onSortEnd}
        />
        <ActionButtons>
          <Button onClick={cancelForm}>Cancel</Button>
          <Button onClick={onSubmit}>Accept</Button>
        </ActionButtons>
      </StyledForm>
    </Container>
  );
}

export default Form;
