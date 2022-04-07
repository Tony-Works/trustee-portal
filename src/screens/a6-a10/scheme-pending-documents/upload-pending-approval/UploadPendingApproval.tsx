import { ReactElement } from 'react';

import { SchemeApproval } from 'models';
import { columns, data } from './utils';
import Table from 'components/table';

const UploadPendingApproval = (): ReactElement => {
  return (
    <Table<SchemeApproval>
      name="Cases Result"
      title="Upload New Scheme Documents"
      columns={columns}
      data={data}
    />
  );
};

export default UploadPendingApproval;
