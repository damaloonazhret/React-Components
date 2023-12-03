export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  country: string;
  terms: boolean;
}

export interface ICountry {
  label: string;
  value: string;
}

export interface RootState {
  form: {
    uncontrolledFormData: Partial<FormData>;
    controlledFormData: Partial<FormData>;
    countries: ICountry[];
  };
}
