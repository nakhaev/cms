import * as accountService from '../account/account.service.js';
import * as userService from '../user/user.service.js';
import * as clientService from '../client/client.service.js';
import * as departmentService from '../department/department.service.js';
import * as clientHistoryService from '../clientHistory/clientHistory.service.js';

export const signUp = async (input: any) => {
    // create account
    const account = await accountService.createAccount(input);
    // create department
    // create user
    return account;
}