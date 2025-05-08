/**
 * @jest-environment node
 */
import { GET } from "./route";
import { POST } from "./route";

it("should return data with status 200", async () => {
  const response = await GET();
  //const body = await response.json();

  expect(response.status).toBe(200);
});

it("should return added data with status 201", async () => {
  const requestObj = {
    // Como nombre debe ser unique, se pone la fecha actual
    json: async () => ({ name: Date.now().toString() }),
  } as any;

  const response = await POST(requestObj);
  //const body = await response.json();

  expect(response.status).toBe(201);
});

it("should return error with status 400", async () => {
  const requestObj = {
    json: async () => ({}),
  } as any;

  const response = await POST(requestObj);
  //const body = await response.json();

  expect(response.status).toBe(400);
});
