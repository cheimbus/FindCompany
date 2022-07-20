import { Users } from "../../models/user";

console.log("Creating Users Table...");
const create_table_users = async() => {
    await Users.sync({ alter : true })
    .then(() => {
        console.log("✅Success Create users Table");
    })
    .catch((err:Error) => {
        console.log("❗️Error in Create users Table : ", err);
    })
}
create_table_users();