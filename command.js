// show dbs: Show a list of all available databases.
// use <db_name>: Switch to a specific database or create a new one if it doesn't exist.

C - Create 
// db.<collection_name>.insertOne(<document>): Insert a single document into a collection.
 
// Example 
/*
db.inventory.insertOne(
   { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )
*/

// db.<collection_name>.insertMany([<documents>]): Insert multiple documents into a collection.

R - Read
// db.<collection_name>.find(): Retrieve all documents from a collection.
// db.<collection_name>.find(<query>): Retrieve documents matching a specific query.
// db.<collection_name>.find(<query>): Retrieve documents matching a specific query.
// db.stats(): Show database statistics.
// db.serverStatus(): Show the server status.
// db.getMongo(): Display the address and port of the current MongoDB instance.


U - Update

  
C - Create 
R - Read
U - Update
D - Delete