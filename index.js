module.exports = function gta(og, sg) {
  if (!og || !sg) {
    throw new Error('GIVE ME VALUES PLZ');
  }
  return (og - sg) * 131;
};
