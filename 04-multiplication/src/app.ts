import { yarg } from './config/plugins/args.plugin'
import { ServerApp } from './presentation/server-app'

(async () => {
    await main();
    console.log('Fin programa');
})();

async function main(){
    //     
    // console.log(yarg);

    const 
    {
        b:base, 
        l:limit, 
        s:showTable, 
        n:fileName, 
        d:destination
    } = yarg;
    
    console.log(yarg);

    ServerApp.run({base,limit,showTable,fileName,destination});


}