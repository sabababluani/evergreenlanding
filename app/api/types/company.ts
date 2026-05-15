export interface LandingCompanyInfo {
  name: string;
  phoneNumber: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  email: string;
}

export interface FormattedCompanyInfo {
  name: string;
  address: string;
  email: string;
  phone: string;
}
