import Table from 'components/table';
import { SchemeDocuments } from 'models';
import { ReactElement } from 'react';
import { columns, data } from './utils';

const SchemeDocumentsDetails = (): ReactElement => {
  return (
    <Table<SchemeDocuments>
      name="Cases Result"
      title="MPF Scheme A - Scheme Documents"
      columns={columns}
      data={data}
    />
  );
};

export default SchemeDocumentsDetails;
