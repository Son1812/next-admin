import { StringToBoolean } from "class-variance-authority/types";

export interface UserList {
  id: string;
  name: string;
  email: string;
  project: string;
  role: string;
  status: string;
}

export interface FormSearch {
  project: string;
  status: string;
  groupId: string;
  keyword: string;
}

export interface ListGroup {
  id: string;
  groupName: string;
}

export interface ListProject {
  id: string;
  projectName: string;
}

export interface CreateUser {
  projectId: string,
  username: string,
  email: string,
  groupId: string,
  status:boolean
}