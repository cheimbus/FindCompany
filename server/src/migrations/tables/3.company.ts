import { Company } from "../../models/company";

console.log("Creating Company Table...");
const create_table_Company = async() => {
    await Company.sync({ alter : true })
    .then(() => {
        console.log("✅Success Create Company Table");
    })
    .catch((err:Error) => {
        console.log("❗️Error in Create Company Table : ", err);
    })
}
create_table_Company();