import { ReactNode, createContext, useContext, useState } from "react";

export type Customer = {
  name: string;
  address: string;
  zipcode: string;
  city: string;
  email: string;
  phone: string;
  isCompany: boolean;
  companyName: string;
  companyDescription: string;
  typeOfApp: string;
  purposeApp: string;
  targetGroup: string;
  budgetDescription: string;
  extraDescription: string;
  dateCreated: Date;
};

type CustomerContextType = {
  customer: Customer;
  setCustomer: (newCustomer: Customer) => void;
  resetCustomer: () => void;
};

const CustomerContext = createContext<CustomerContextType | undefined>(
  undefined
);

export function CustomerProvider({ children }: { children: ReactNode }) {
  const [customer, setCustomer] = useState<Customer>({
    name: "",
    address: "",
    zipcode: "",
    city: "",
    email: "",
    phone: "",
    isCompany: false,
    companyName: "",
    companyDescription: "",
    purposeApp: "",
    typeOfApp: "",
    targetGroup: "",
    budgetDescription: "",
    extraDescription: "",
    dateCreated: new Date(),
  });

  const resetCustomer = () =>
    setCustomer({
      name: "",
      address: "",
      zipcode: "",
      city: "",
      email: "",
      phone: "",
      isCompany: false,
      companyName: "",
      companyDescription: "",
      purposeApp: "",
      typeOfApp: "",
      targetGroup: "",
      budgetDescription: "",
      extraDescription: "",
      dateCreated: new Date(),
    });

  return (
    <CustomerContext.Provider value={{ customer, setCustomer, resetCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomerContext(): CustomerContextType {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error(
      "to use customerContext you must place it inside CustomerProvider tagsen"
    );
  }
  return context;
}
