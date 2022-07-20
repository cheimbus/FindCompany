import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from "cors";
import indexRouter from "./router/index";
import migrationAllTable from "./migrations/createTableAll";

dotenv.config();

const app = express();

/**
 * @function migrationAllTable - migrations -> tables안에 있는 파일들을 전부 훑어서 모델 매핑
 */
migrationAllTable();


/**
 * @description - 미들웨어
 */
app.use(cors({ 
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "OPTION", "PUT", "DELETE", "PATCH"] }));

app.use(express.json());

/**
 * @description - 라우터
 */
app.use("/", indexRouter);

/**
 * @description - 서버
 */
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
    console.log(`🐥서버가 ${app.get("port")}로 열렸습니다!`)
})
app.listen(3000);