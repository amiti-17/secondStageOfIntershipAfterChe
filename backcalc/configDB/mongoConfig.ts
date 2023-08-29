class MongoConfigClass {
    url: string;
    // user: string;
    // pwd: string;
    // port: number;
    slash: string;
    // dbName: string;
    uri: string;
    connect: boolean;

    constructor() {
        this.url = "mongodb://localhost:";
        // this.user = "username";
        // this.pwd = "password";
        // this.dbName = "mycalcexp";
        // this.port = 27017;
        this.slash = "/";
        this.uri = this.getUri();
        this.connect = false;
    }

    getUri() {
        const myUri: string =
            this.url + String(process.env.MONGO_PORT) + this.slash + process.env.DB;
        return myUri;
    }
}

const mongoConfig = new MongoConfigClass();

export default mongoConfig;
