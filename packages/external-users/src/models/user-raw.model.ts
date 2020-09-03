export interface UserRaw {
  data: dataModel;
  ad: adModel;
}

interface dataModel {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface adModel {
  company: string;
  url: string;
  text: string;
}
