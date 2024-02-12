import express from "express";

const testRouter = express.Router();

testRouter.get("/admin", function (_req, res) {
  try {
    res.json({
      staus: 200,
      message: "GET 성공",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("server error");
  }
});

export default testRouter;
