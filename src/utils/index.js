export const dateFormat = (unformatDate) => {
  let date = new Date(unformatDate);
  let formatted_date =
    date.getDate().toString().padStart(2, "0") +
    "/" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    date.getFullYear();
  return formatted_date;
};

export const setupProfile = {
  annualIncome: {
    value: "",
  },
  basicInfoDisclaimerChecked: {
    value: "",
  },
  birthCityCode: {
    value: "",
  },
  birthStateCode: {
    value: "",
  },
  city: {
    value: "",
  },
  cnic: {
    value: "",
    type: "Numeric",
    limit: 13,
    label: "CNIC Number",
  },
  cnicExpiryDate: {
    value: "",
  },
  cnicIssueDate: {
    value: "",
  },
  mailingCity: {
    value: "",
  },
  pakResident: {
    value: "",
  },
  Religion: {
    value: "",
  },

  Occupation: {
    value: "",
  },
  rpqDisclaimerChecked: {
    value: "",
  },
  crsDisclaimerChecked: {
    value: "",
  },
  fatcaDisclaimerChecked: {
    value: "",
  },
  docUploadDisclaimerChecked: {
    value: "",
  },
  kycDisclaimerChecked: {
    value: "",
  },
  retirementAge: {
    value: "",
  },
};

export const transactionDetail = {
  taxPaidCountry: {
    value: "",
  },
  taxResCountryOtherThanPak: {
    value: "",
  },
  otherTaxResCountry: {
    value: "",
  },
  taxIdentificationNumber: {
    value: "",
  },
  expTurnoverInAccType: {
    value: "",
  },
  expTurnoverInAccAmount: {
    value: "",
  },
  expectedInvestmentAmount: {
    value: "",
  },
};

export const employementDetails = {
  employerName: { value: "" },
  employerDesignation: { value: "" },
  employerNatureOfBusiness: { value: "" },
  employerProfession: { value: "" },
};

export const nomineeDetail = {
  name: {
    value: "",
    type: "Alphabets",
    limit: 100,
    label: "Name",
  },
  guardianName: {
    value: "",
    type: "Alphabets",
    limit: 100,
    label: "Guardian Name",
  },
  cnic: { value: "", type: "NumericWithHypen", limit: 15, label: "CNIC No" },
  email: { value: "", type: "Alphanumeric", limit: 25, label: "Email" },
  mailingAddress: {
    value: "",
    type: "Alphanumeric",
    limit: 500,
    label: "Residential Address",
  },
  phone: { value: "", type: "Numeric", limit: 16, label: "Phone" },
  relationship: { value: "" },
};

export const riskProfile = {
  schemeCode: { value: "" },
  assetAllocation: { value: "" },
  mediumvolatilityBalance: { value: "" },
  lowvolatilityBalance: { value: "" },
  lowervolatilityBalance: { value: "" },
};

export const employmentDetail = {
  employerName: { value: "" },
  employerDesignation: { value: "" },
  employerNatureOfBusiness: { value: "" },
  employerProfession: { value: "" },

};

export const uploaddocumentsdetail = {
  idDocType: { value: "" },
  idDocFrontCopy: { value: "" },
  idDocBackCopy: { value: "" },
  SourceofIncomeCopy: { value: "" },
  nomineeCnicCopy: { value: "" },
  w8FormCopy: { value: "" },
  businessEmpProofCopy: { value: "" },
  digitalSignCopy: { value: "" },
  utilityBillCopy: { value: "" },
};

export const alphabetRegex = (value) => {
  return /^[a-zA-Z]*$/.test(value);
};

export const limitRegex = (value, min, max) => {
  let regex = new RegExp(`/^.{${min},${max}}$/`);
  let newregex = new RegExp(regex.toString().slice(3, -3));
  return newregex.test(value);
};
export const cnicRegex = (value, min, max) => {
  let regex = new RegExp(`^[0-9]{5}-[0-9]{7}-[0-9]$`);
  return regex.test(value);
};
