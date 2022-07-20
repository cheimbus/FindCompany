import { Applicant } from "../../models/applicant";

console.log("Creating Applicant Table...");
const create_table_Applicant = async() => {
    await Applicant.sync({ alter : true })
    .then(() => {
        console.log("✅Success Create Applicant Table");
    })
    .catch((err:Error) => {
        console.log("❗️Error in Create Applicant Table : ", err);
    })
}
create_table_Applicant();