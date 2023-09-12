import { Department } from "../department/department.models";

const departments: Department[] = [
    {id: "111", title: "Barber Studio 12", email: "john.doe@gmail.com", phone: "0973659087", address: "Svibody 7", status: "ACTIVE", userIds: ["1", "2"], clientIds: ["99"]},
    {id: "112", title: "Nail Studio First", email: "jane.doe@gmail.com", phone: "0973659088", address: "Heroiv 5", status: "ACTIVE", userIds: ["1"], clientIds: ["98"]},
    {id: "113", title: "Barber John Dnipro", email: "john.smith@gmail.com", phone: "0973659089", address: "Sumska 86", status: "ACTIVE", userIds: ["2", "3"], clientIds: ["97"]},
    {id: "114", title: "Hair Style Kharkiv", email: "jane.smith@gmail.com", phone: "0973659090", address: "Proskuri 136", status: "ACTIVE", userIds: ["4"], clientIds: ["96"]},
];

export default departments;