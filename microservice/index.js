const { send } = require("micro");
const url = require("url");
const level = require("level");

const db = level("visits.db", {
  valueEncoding: "json"
});

module.exports = async function(request, response) {
  const { pathname } = url.parse(request.url);

  console.log(`pathname ${pathname}`);
  try {
    const currentVisits = await db.get(pathname);
    // console.log(`currentVisits ${currentVisits}`)
    await db.put(pathname, currentVisits + 1);
    // console.log(`after put}`)
  } catch (error) {
    // console.log(`catch (error)`)
    // console.log(error)
    if (error.notFound) await db.put(pathname, 1);
  }

  send(response, 200, `This page has ${await db.get(pathname)} visits!`);
};
