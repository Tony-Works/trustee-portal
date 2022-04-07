import { ReactElement } from 'react';
import { SchemeInvestigation } from 'models';
import { columns, data } from './utils';
import Table from 'components/table';

const SchemeAuditInvestigation = (): ReactElement => {
  return (
    <>
      <Table<SchemeInvestigation>
        name="Cases Result"
        title="MPF Scheme Currently Under Audit / Investigation"
        columns={columns}
        data={data}
      />
    </>
  );
};

export default SchemeAuditInvestigation;
