const request = require("supertest");
const app = require("./app");

test("returns a list of users", async() =>{
 const response = await request(app).get("/users")
 expect(response.status).toBe(200)
 expect(response.body).toEqual([
    {id: 1, name: "Alice"},
    {id: 2, name: "BOb"},
    {id: 3, name: "Ujunwa"},
 ]);

}, 30000); // optional Setting timeout to 30 seconds