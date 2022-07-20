import { Posts } from "../../models/post";

console.log("Creating Posts Table...");
const create_table_Posts = async() => {
    await Posts.sync({ alter : true })
    .then(() => {
        console.log("✅Success Create Posts Table");
    })
    .catch((err:Error) => {
        console.log("❗️Error in Create Posts Table : ", err);
    })
}
create_table_Posts();