import type { Column } from 'react-table';
import { BrochureAddendum } from 'models';

export const data: BrochureAddendum[] = [
  {
    nmDocs: 'Consolidated reports',
    vrsDocs: 'Consolidate Reports v3',
    upldDt: '15/12/2021',
    asOfDt: '-',
    effctvDt: '15/12/2021',
  },
  {
    nmDocs: 'Consolidated reports',
    vrsDocs: 'Consolidate Reports v3',
    upldDt: '15/12/2021',
    asOfDt: '-',
    effctvDt: '15/12/2021',
  },
];

export const columns: Column<BrochureAddendum>[] = [
  { Header: 'Name of Document', accessor: 'nmDocs' },
  { Header: 'Version of the Document', accessor: 'vrsDocs' },
  { Header: 'Upload Date', accessor: 'upldDt' },
  { Header: 'As of Date', accessor: 'asOfDt' },
  { Header: 'Effective Date', accessor: 'effctvDt' },
];
