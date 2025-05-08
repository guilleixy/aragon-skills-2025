/**
 * @jest-environment node
 */
import { POST } from "./route";

it("should return error with status 400", async () => {
  const requestObj = {
    json: async () => ({}),
  } as any;

  const response = await POST(requestObj);
  //const body = await response.json();

  expect(response.status).toBe(400);
});

it("should return error with status 401", async () => {
  const requestObj = {
    json: async () => ({ username: "admin", password: "1234" }),
  } as any;

  const response = await POST(requestObj);
  //const body = await response.json();

  expect(response.status).toBe(401);
});

it("should return error with status 200", async () => {
  const requestObj = {
    json: async () => ({ username: "admin", password: "1234" }),
  } as any;

  const response = await POST(requestObj);
  //const body = await response.json();

  expect(response.status).toBe(200);
});
