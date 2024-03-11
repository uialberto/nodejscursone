import { yarg } from './config/plugins/args.plugin'

// console.log(process.argv);
// console.log(yarg);

// console.log(yarg.b);

(async () => {
    await main();
    console.log('Fin programa');
})();

async function main(){
    //     
    console.log(yarg);
}