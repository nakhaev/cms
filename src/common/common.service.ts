import * as accountService from '../account/account.service.js';
import * as userService from '../user/user.service.js';
import * as clientService from '../client/client.service.js';
import * as departmentService from '../department/department.service.js';
import * as clientHistoryService from '../clientHistory/clientHistory.service.js';
import c from 'config';

export const signUp = async (input: any) => {
    try {
        input.status = 'NEW';
        // create account
        const account = await accountService.createAccount(input);
        if (!account) {
            throw new Error('Account not created');
        }
    
        // create department
        const newDepartment = {
            title: input.title,
            accountId: account._id,
            email: input.email,
            phone: input.phone,
            address: input.address,
            status: 'NEW',
        };
        const department = await departmentService.createDepartment(newDepartment);
        if (!department) {
            throw new Error('Department not created');
        }
    
        // create user
        const newUser = {
            name: input.name,
            email: input.email,
            password: input.password,
            phone: input.phone,
            role: 'ADMIN',
            status: 'NEW',
            accountId: account._id,
            departments: [department._id]
        };
    
        const user = await userService.createUser(newUser);
        if (!user) {
            throw new Error('User not created');
        }
    
        console.log('user', user);
        console.log('department', department);
        // update department with userId
        department.users?.push(user._id);
        await departmentService.updateDepartment(department._id.toString(), department);
    
        return account;
    } catch(error) {
        throw new Error('Failed to sign Up: ' + error);
    }
}