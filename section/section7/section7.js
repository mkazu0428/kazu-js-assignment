const character = { id: 1, name: "スライム", hp: 50 };

const addMP = (x) => {
  character.mp = x;
  return character;
};

const updateHP = () => {
  const h = character.hp;
  character.hp = h - 15;
  delete character.mp;
  return character;
};

const LookUpName = () => {
  return character.name;
};

module.exports = { character, addMP, updateHP, LookUpName };
