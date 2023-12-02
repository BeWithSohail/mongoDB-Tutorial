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
// db.collection.updateOne() :
// Updates at most a single document that match a specified filter even though multiple documents may match the specified filter.
// db.collection.updateMany()
// Update all documents that match a specified filter.
// db.collection.replaceOne()
// Replaces at most a single document that match a specified filter even though multiple documents may match the specified filter.

D - Delete
// db.collection.deleteOne()
// Delete at most a single document that match a specified filter even though multiple documents may match the specified filter.
// db.collection.deleteMany()
// Delete all documents that match a specified filter.
// db.collection.remove()
// Delete a single document or all documents that match a specified filter.


// in a nutshell
// Database Operations:
// show dbs: Show a list of all available databases.
// use <db_name>: Switch to a specific database or create a new one if it doesn't exist.
// db.dropDatabase(): Delete the current database.
// Collection Operations:
// show collections: List all collections in the current database.
// db.createCollection("<collection_name>"): Create a new collection.
// db.<collection_name>.drop(): Drop/delete a collection.
// db.<collection_name>.insertOne(<document>): Insert a single document into a collection.
// db.<collection_name>.insertMany([<documents>]): Insert multiple documents into a collection.
// db.<collection_name>.find(): Retrieve all documents from a collection.
// db.<collection_name>.find(<query>): Retrieve documents matching a specific query.
// db.<collection_name>.updateOne(<filter>, <update>): Update a single document in a collection.
// db.<collection_name>.updateMany(<filter>, <update>): Update multiple documents in a collection.
// db.<collection_name>.deleteOne(<query>): Delete a single document from a collection.
// db.<collection_name>.deleteMany(<query>): Delete multiple documents from a collection.
// Other Commands:
// db.stats(): Show database statistics.
// db.serverStatus(): Show the server status.
// db.getMongo(): Display the address and port of the current MongoDB instance.



                                  // CRUD Operations
C - Create 
R - Read
U - Update
D - Delete