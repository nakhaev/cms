import * as accountService from '../account/account.service.js';
import * as userService from '../user/user.service.js';
import * as clientService from '../client/client.service.js';
import * as departmentService from '../department/department.service.js';
import * as clientHistoryService from '../clientHistory/clientHistory.service.js';

export const signUp = async (input: any) => {
    input.status = 'NEW';
    // create account
    const account = await accountService.createAccount(input);
    if (!account) {
        throw new Error('Account not created');
    }

    // create department
    const newDepartment = {
        name: 'Default Department',
        accountId: account.id
    };
    const department = await departmentService.createDepartment(newDepartment);
    if (!department) {
        throw new Error('Department not created');
    }

    // create user
    const newUser = {
        // name: input.name,
        email: input.email,
        password: input.password,
        role: 'ADMIN',
        status: 'NEW',
        accountId: account.id,
        departments: [department.id]
    };
    const user = await userService.createUser(newUser);
    if (!user) {
        throw new Error('User not created');
    }

    return account;
}