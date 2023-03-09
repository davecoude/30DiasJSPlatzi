function findFamousCats(cats) {
  // Tu código aquí 🤟🏻🔥

  const userCat = {
    names: [],
    count: 0,
  };

  for (let i = 0; i < cats.length; i++) {
    const element = cats[i];

    const totalFollowers = element.followers.reduce((a, b) => a + b);

    if (totalFollowers === userCat.count) {
      userCat.names.push(element.name);
    }

    if (totalFollowers > userCat.count) {
      userCat.names = [];
      userCat.names.push(element.name);
      userCat.count = totalFollowers;
    }
  }

  return userCat.names;
}
