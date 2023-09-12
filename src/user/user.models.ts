export class User {
    id?: string;
    name?: string;
    email?: string;
    status?: string;
    role?: string;
    accountId!: string;
    departmentIds: string[] = [];
    clientIds: string[] = [];
}