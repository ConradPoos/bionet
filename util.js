const charactersUpTo = (input, expect) => {
  let i;
  input = input.toLowerCase();
  expect = expect.toLowerCase();
  for (i = 0; i < expect.length; i++) {
    if (input[i] !== expect[i]) break;
  }
  return i;
};
module.exports.queryMember = (query, guild) => {
  let characters = 0;
  let member = guild.members.sort((member1, member2) => {
    let member1Score = Math.max(charactersUpTo(query, member1.user.tag), charactersUpTo(query, member1.displayName));
    let member2Score = Math.max(charactersUpTo(query, member2.user.tag), charactersUpTo(query, member2.displayName));
    characters = Math.max(characters, member1Score, member2Score);
    return member1Score - member2Score;
  }).last();
  if (characters < 4) return false;
  return member;
};
module.exports.clockify = seconds => {
  let h = Math.floor(seconds / 3600);
  let m = (Math.floor(seconds / 60) % 60);
  let s = (seconds % 60);
  if ((m + "").length === 1) m = `0${m}`;
  if ((s + "").length === 1) s = `0${s}`;
  return ((h > 0) ? `${h}:${m}:${s}` : `${m}:${s}`);
};


