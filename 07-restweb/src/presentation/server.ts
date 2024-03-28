
import express from 'express';

export class Server {

    private app = express();


    async Start(){

        
        //* Middlewares

        //* Public Folders

        this.app.use(express.static('public'));

        this.app.listen(8082, () => {
            console.log(`Server running on port ${8082}`);
        });

    }
}