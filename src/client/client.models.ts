export class Client {
    id?: string;
    name?: string;
    email?: string;
    status?: string;
    accountId!: string;
    departmentIds: string[] = [];
    userIds: string[] = [];
}