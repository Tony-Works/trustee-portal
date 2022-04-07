export type Scheme = {
  requestDt: string;
  referenceNo: string;
  status: string;
  preparerId: string;
  supervisorId: string;
};

export type SchemeInformation = {
  fundEnName: string;
  fundChName: string;
  fundDesc: string;
  riskClass: string;
};

export type HistoryChangeRequest = {
  requestDt: string;
  referenceNo: string;
  effctiveDt: string;
  status: string;
  preparerId: string;
  supervisorId: string;
};
