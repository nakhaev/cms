import { User } from "../user/user.models";

export class Account {
    id!: String;
    title?: String;
    email?: String;
    status?: String;
    phone?: String;
    users?: [User];
}