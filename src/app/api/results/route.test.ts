/**
 * @jest-environment node
 */
import { GET } from "./route";
import { POST } from "./route";
import { DELETE } from "./route";

const request1: any = {
  method: "GET",
  url: "http://localhost:3000/api/results",
  destination: "",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  credentials: "same-origin",
  cache: "default",
  redirect: "follow",
  integrity: "",
  keepalive: false,
  isReloadNavigation: false,
  isHistoryNavigation: false,
};

it("should return data with status 200", async () => {
  const response = await GET(request1);
  //const body = await response.json();

  expect(response.status).toBe(200);
});

const request2: any = {
  method: "GET",
  url: "http://localhost:3000/api/results?name='hola'",
  destination: "",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  credentials: "same-origin",
  cache: "default",
  redirect: "follow",
  integrity: "",
  keepalive: false,
  isReloadNavigation: false,
  isHistoryNavigation: false,
};

it("should return data with status 200", async () => {
  const response = await GET(request2);
  //const body = await response.json();

  expect(response.status).toBe(200);
});

const request3: any = {
  method: "GET",
  url: "http://localhost:3000/api/results?escuela='CFPI PIRAMIDE'",
  destination: "",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  credentials: "same-origin",
  cache: "default",
  redirect: "follow",
  integrity: "",
  keepalive: false,
  isReloadNavigation: false,
  isHistoryNavigation: false,
};

it("should return data with status 200", async () => {
  const response = await GET(request3);
  //const body = await response.json();

  expect(response.status).toBe(200);
});

const request4: any = {
  method: "GET",
  url: "http://localhost:3000/api/results?year='2023'",
  destination: "",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  credentials: "same-origin",
  cache: "default",
  redirect: "follow",
  integrity: "",
  keepalive: false,
  isReloadNavigation: false,
  isHistoryNavigation: false,
};

it("should return data with status 200", async () => {
  const response = await GET(request4);
  //const body = await response.json();

  expect(response.status).toBe(200);
});

const request5: any = {
  method: "GET",
  url: "http://localhost:3000/api/results?especialidad='17.DESARROLLO WEB'",
  destination: "",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  credentials: "same-origin",
  cache: "default",
  redirect: "follow",
  integrity: "",
  keepalive: false,
  isReloadNavigation: false,
  isHistoryNavigation: false,
};

it("should return data with status 200", async () => {
  const response = await GET(request5);
  //const body = await response.json();

  expect(response.status).toBe(200);
});

const request6: any = {
  method: "GET",
  url: "http://localhost:3000/api/results?posicion='ORO'",
  destination: "",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  credentials: "same-origin",
  cache: "default",
  redirect: "follow",
  integrity: "",
  keepalive: false,
  isReloadNavigation: false,
  isHistoryNavigation: false,
};

it("should return data with status 200", async () => {
  const response = await GET(request6);
  //const body = await response.json();

  expect(response.status).toBe(200);
});

it("should return error with status 400", async () => {
  const requestObj = {
    json: async () => ({}),
  } as any;

  const response = await POST(requestObj);
  //const body = await response.json();

  expect(response?.status).toBe(400);
});

it("should return error with status 200", async () => {
  const requestObj = {
    json: async () => ({
      name: "Prueba",
      escuelaId: "1",
      especialidadId: "1",
      posicion: "ORO",
    }),
  } as any;

  const response = await POST(requestObj);
  //const body = await response.json();

  expect(response?.status).toBe(200);
});
