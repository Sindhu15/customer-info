const request = require("supertest");
const server = require('../app.js');

afterEach = () => {
    server.close();
    console.log("server closed");
}

describe("routes: index", () => {
    test("should respond as expected", async () => {
      const response = await request(server).get("/health");
      expect(response.status).toEqual(200);
      expect(response.type).toEqual("application/json");
    });
  });