import Mock from "mockjs";

const Random = Mock.Random;

Mock.mock("/api/user/login", "post", {
  status: Random.natural(10, 30),
  data: {
    name: Random.cname(), // 随机中文名
    clast: Random.clast(), // 模拟名字
    time: Random.time(), // 模拟时间
  },
});
