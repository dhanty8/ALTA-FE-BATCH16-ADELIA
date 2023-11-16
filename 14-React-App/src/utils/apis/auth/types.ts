export interface Token {
  token: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface RegisterBody {
  full_name: string;
  email: string;
  password: string;
  role: string;
  address: string;
  phone_number: string;
}
