export const EnvCompanyInfo = {
  name: process.env.NEX_PUBLIC_LANDING_COMPANY_NAME ?? "",
  phoneNumber: process.env.NEX_PUBLIC_LANDING_COMPANY_PHONE_NUMBER ?? "",
  address: {
    street: process.env.NEX_PUBLIC_LANDING_COMPANY_ADDRESS_STREET ?? "",
    city: process.env.NEX_PUBLIC_LANDING_COMPANY_ADDRESS_CITY ?? "",
    postalCode:
      process.env.NEX_PUBLIC_LANDING_COMPANY_ADDRESS_POSTAL_CODE ?? "",
    country: process.env.NEX_PUBLIC_LANDING_COMPANY_ADDRESS_COUNTRY ?? "",
  },
  email: process.env.NEX_PUBLIC_LANDING_COMPANY_EMAIL ?? "",
};
