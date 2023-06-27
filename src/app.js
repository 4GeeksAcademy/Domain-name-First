let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];

let domainList = document.getElementById("domainList");

for (let pronoun of pronouns) {
  for (let adjective of adjectives) {
    for (let noun of nouns) {
      let domainName = pronoun + adjective + noun + ".com";
      let listItem = document.createElement("li");
      listItem.textContent = domainName;
      domainList.appendChild(listItem);
    }
  }
}
