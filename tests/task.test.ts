import request from 'supertest';
import app from '../src/app';

describe("Task API", () => {
  it("should create task", async () => {
    const res = await request(app).post('/tasks').send({
      id: "1",
      title: "Test",
      description: "Test"
    });

    expect(res.statusCode).toBe(200);
  });

  it("should get tasks", async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
  });
});