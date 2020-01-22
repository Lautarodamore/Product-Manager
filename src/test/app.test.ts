import server from "./../server";
import request from "supertest";

describe("Type Product service -> GetAll Method", () => {
  test("Si realizo una peticion a todos los tipo de producto, el statusCode deberia ser 200", async done => {
    const response = await request(server).get("/api/v1/type-product");
    expect(response.status).toBe(200);
    done();
  });
});

describe("Type Product service -> Create Method", () => {
  test("Si realizo una peticion para crear un tipo de producto, el statusCode deberia ser 200", async done => {
    const response = await request(server)
      .post("/api/v1/type-product")
      .send({
        id: 3,
        descripcion: "Una buena descripcion!"
      });
    expect(response.status).toBe(200);
    done();
  });
});

describe("Type Product service -> Delete Method", () => {
  test("Si realizo una peticion para eliminar un tipo de producto, el statusCode deberia ser 200", async done => {
    const response = await request(server).delete("/api/v1/type-product/3");
    expect(response.status).toBe(200);
    done();
  });
});

describe("Type Product service -> Update Method", () => {
  test("Si realizo una peticion para eliminar un tipo de producto, el statusCode deberia ser 200", async done => {
    const response = await request(server).patch("/api/v1/type-product/4");
    expect(response.status).toBe(500);
    done();
  });
});
