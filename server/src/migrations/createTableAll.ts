//? 모든 마이그레이션 파일을 한꺼번에 마이그레이트 해주는 명령어를 만드는 모듈
/**
 * @description exec - 새로운 프로세스를 생성하여 실행하는 node.js 내장 모듈
 */
import * as fs from 'fs';
import * as path from 'path'
import { exec } from 'child_process'; //? 새로운 프로세스를 생성하여 실행하는 node.js 내장 모듈
import * as util from 'util';//? 내장 모듈

/**
 * @description asyncExec - child_process 모듈의 exec을 이용해 반복문으로 프로세스를 생성할 때 
 * 동기로 파일을 순서대로 실행시켜야 하기 때문에 비동기를 동기로 바꿈
 */
const asyncExec = util.promisify(exec);

console.log(`
  --------------------------------------
          🐝 마이그레이션 start! 🐝
  --------------------------------------
`);

/**
 * @description migrationAllTable - 파일을 전부 읽고 ts-node 모듈로 마이그레이션 실행
 */
let migrationAllTable = async () => {
  let migrationFiles : string[] = [];

  fs.readdir(path.join(__dirname,"/tables"), async (err, files) => {
    if(err) console.log("err : ", err);

    if(files) {
      
      files.forEach(el => {
        migrationFiles.push(el);
      })

      for(let el of migrationFiles) {
        console.log("Migration File Name : ", el);
        
        const { stdout, stderr } = await asyncExec(`./node_modules/.bin/ts-node "${__dirname}/tables/${el}"`)
        
        if(stdout) console.log(stdout);

        if(stderr) console.error("Std Err : ",stderr);
      }
    }
  })
}
export default migrationAllTable