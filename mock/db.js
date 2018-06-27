const Mock = require("mockjs");
const Random = Mock.Random;

module.exports = function() {
  const data = {
    database: [], // 定义接口名称为database
    users: {
      list: [],
      amount: 90
    }, // 所有用户
    permissions: [],
  };

  Random.extend({
    permission: function() {
      const permissions = ["hospital.director", "hospital.department", "medical.record.search", "medical.record.view"];
      return this.pick(permissions);
    }
  });

  const images = [1, 2, 3].map(x =>
    Random.image("200*100", Random.color(), Random.word(2, 6))
  );

  Array.from({ length: 10 }).map((item, idx) => {
    data.database.push({
      id: idx + 1,
      name: Random.cname(),
      permission: Random.permission() + "," + Random.permission(),
      created_by: Random.cname(),
      updated_by: Random.cname(),
      created_at: Random.date("yyyy-MM-dd HH:mm:ss"),
      updated_at: null
    });
  });

  data.users.title = [
    {
      title: "用户名",
      key: "name"
    },{
        title: "用户姓名",
        key: "cname"
      },
    {
      title: "权限名称",
      key: "permission"
    },
    {
      title: "查看课室",
      key: "department"
    },
    {
      title: '角色名称',
      key: 'role'
    }
  ];
  Array.from({ length: 10 }).map((item, idx) => {
    data.users.list.push({
      id: idx + 1,
      cname: Random.cname(),
      name: Random.name(),
      permission: Random.cword(4, 6),
      // department: [
      //   {
      //     name: Random.cword(4, 6),
      //     id: Random.integer(1, 50)
      //   },
      //   {
      //     name: Random.cword(4, 6),
      //     id: Random.integer(1, 50)
      //   }
      // ],
      // role: [
      //   {
      //     name: Random.cword(4, 6),
      //     id: Random.integer(1, 50)
      //   },
      //   {
      //     name: Random.cword(4, 6),
      //     id: Random.integer(1, 50)
      //   }
      // ]
    });
  });

  Array.from({ length: 4 }).map(() => {
    data.permissions.push({
      title: Random.cword(4, 5),
      slug: Random.permission(),
      desc: Random.cword(10, 16),
    });
  });
  // 动态生成数据
  // for (let idx = 0; idx < 10; idx++) {
  //     const content = Random.cparagraph(0, 10);

  //     data.database.push({
  //         id: idx,
  //         title: Random.cword(8, 20),
  //         desc: content.substr(0, 40),
  //         images: images.slice(0, Random.integer(1, 3))
  //     })
  // }
  return data;
};
