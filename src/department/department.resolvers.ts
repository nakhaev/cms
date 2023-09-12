import * as departmentService from './department.service.js'

const departmentResolvers = {
    Query: {
        departments: () => departmentService.getDepartmentList(),
        // account: (parent, args, context, info) => {
        department: (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            return departmentService.getDepartmentById(id);
        }
      },
    // Mutation: {},
    // Subscription: {},
};

export default departmentResolvers;