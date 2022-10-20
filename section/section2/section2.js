//consoleに何か出力してみましょう。
const tentative = [
  { userId: 1, id: 1, title: "hello world", body: "first letter." },
  { userId: 1, id: 2, title: "Dear Mr. Mike", body: "second body." },
  { userId: 30000, id: 3, title: "Special News!!", body: "third." },
  { userId: 123456, id: 4, title: "Trick Or Treat", body: "forth." },
  {
    userId: 123456,
    id: 5,
    title: "I'll invite you a party",
    body: "fifth message.",
  },
  {
    userId: 123456,
    id: 6,
    title: "I have a question",
    body: "this is a example message.",
  },
  {
    userId: 30000,
    id: 7,
    title: "Happy new Year!!",
    body: "this is a comment.",
  },
];

const userIdList = (array) => {
  userIdArray = [];
  array.forEach((currentValue) => {
    let x = currentValue["userId"];
    userIdArray.push(x);
  });
  idList = [];
  userIdArray.forEach((idNumber) => {
    let indexOfId = idList.indexOf(idNumber);
    if (indexOfId === -1) {
      idList.push(idNumber);
    }
  });
  return idList;
};

const test91 = userIdList(tentative);
console.log(test91);

const fixData = (hikisuu) => {
  let listOfIdAndDatas = [];

  idList.forEach((id) => {
    let userIdAndDatas = { userId: id };
    let datas = [];
    hikisuu.forEach((obj) => {
      if (obj.userId === id) {
        datas.push(obj);
        delete obj.userId;
      }
    });
    userIdAndDatas.datas = datas;
    listOfIdAndDatas.push(userIdAndDatas);
  });
  return listOfIdAndDatas;
};

console.log(fixData(tentative));
