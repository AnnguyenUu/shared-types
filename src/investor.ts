export interface BankInformation {
  countryId: string;
  bankName: string;
  swiftCode: string;
  branchAddress: string;
  accountNumber: string;
}

export interface Investor {
  email: string;
  username: string;
  fullName: string;
  countryId: string;
  password: string;
  bankInformation: BankInformation;
}
