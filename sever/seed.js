const {faker} = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;

async function main(){
    const url = "mongodb://localhost://27017";
    const Client = new MongoClient(url);
    
}