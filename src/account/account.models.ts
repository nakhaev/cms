import { User } from "../user/user.models";

export class Account {
    id!: string;
    title?: string;
    email?: string;
    status?: string;
    phone?: string;
    users?: [User];
}