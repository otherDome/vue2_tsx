export interface  modelnavlist {
  name: string;
  icon: string;
  urlID: string;
  path: string;
  pathname: string;
  development: boolean;
  navlist: Navlist[];
}


interface Navlist {
  name: string;
  icon: string;
  urlID: string;
  path: string;
  pathname: string;
  development: boolean;
  navlist: any;
}
