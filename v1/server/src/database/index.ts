import {MongoClient} from "mongodb";
import {Database} from "../lib/types";

const url = 'mongodb://localhost:27017';
const dbName = 'main';

export const connectDatabase = async (): Promise<Database> => {
    const client = await MongoClient.connect(url, {
        //useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("[mongodb]: Connected successfully to database");

    const db = client.db(dbName);

    return {
        listings: db.collection('test_listings')
    }
};