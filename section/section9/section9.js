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

module.exports = { userIdList, fixData };
