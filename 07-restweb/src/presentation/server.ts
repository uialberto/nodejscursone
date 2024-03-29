
import express from 'express';
import path from 'path';

export class Server {

    private app = express();


    async Start(){

        
        //* Middlewares

        //* Public Folders

        this.app.use(express.static('public'));


        this.app.get('*',(req,res)=>{

            const indexPath = path.join(__dirname + '../../../public/index.html')
            res.sendFile(indexPath);
            return;
        });

        this.app.listen(8082, () => {
            console.log(`Server running on port ${8082}`);
        });

    }
}