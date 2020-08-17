import { useState, useCallback } from 'react';
import arrayMove from 'array-move';

const FIELDS_NAMES = ['state', 'city', 'zip', 'address', 'category'];

function useFormDetails({ setColumnsOrder, uploadFile }) {
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

  return {
    cancelForm,
    onSortStart,
    onSortEnd,
    isSorting,
    fields,
    onSubmit,
  };
};

export default useFormDetails;
