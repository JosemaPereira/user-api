import assert from "assert";
import { mainRoute } from "../app/routes";
import { messageMock } from "./mocks/routes/main.routes";
import testServer from "./testServer";
describe("Main Routes", () => {
    const request = testServer(mainRoute);

    describe("GET /", () => {
        it("should respond with 200", (done) => {
            request.get("/").expect(200);
            done();
        });
    });

    describe("GET /", () => {
        it("should respond default message", (done) => {
            request.get("/").end((err, res) => {
                assert.deepEqual(res.body, messageMock);
            });
            done();
        });
    });
});