export class Department {
    id!: string;
    title?: string;
    email?: string;
    status?: string;
    address?: string;
    phone?: string;
    userIds: string[] = [];
    clientIds: string[] = [];
}