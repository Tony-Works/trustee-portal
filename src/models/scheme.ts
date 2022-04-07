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

export type SchemeInvestigation = {
  audit: string;
  referenceNo: string;
  dateCmm: string;
  endDtAudt: string;
  status: string;
  preparer: string;
  supervsor: string;
};

export type SchemeUpload = {
  nmDocs: string;
  vrsDocs: string;
  asOfDt: string;
  effctvDt: string;
};

export type SchemeDocuments = {
  nmDocs: string;
  vrsDocs: string;
  asOfDt: string;
  effctvDt: string;
  status: string;
  preparer: string;
  supervsor: string;
};

export type SchemeApproval = {
  nmDocs: string;
  vrsDocs: string;
  asOfDt: string;
  effctvDt: string;
  preparer: string;
};

export type BrochureAddendum = {
  nmDocs: string;
  vrsDocs: string;
  upldDt: string;
  asOfDt: string;
  effctvDt: string;
};
