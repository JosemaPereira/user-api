export interface UserRaw {
  data: DataModel;
  ad: AdModel;
}

interface DataModel {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface AdModel {
  company: string;
  url: string;
  text: string;
}
