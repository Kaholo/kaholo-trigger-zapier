const { findTriggers } = require(`./helpers`);
const minimatch = require("minimatch");

async function webhookPost(req, res) {
  const key = req.headers["x-kaholo-key"];

  findTriggers(
    validateTrigger,
    [ key ],
    req, res,
    "webhookPost",
    key
  );
}

async function validateTrigger(trigger, [ key ]) {
  const keyPat = (trigger.params.find((o) => o.name === `keyPat`).value || "").trim();

  // Check if the key pattern was provided, and if so check it matches request
  if (keyPat && !minimatch(key, keyPat)) {
    throw `Not same key`;
  }

  return true;
}

module.exports = { 
  webhookPost
};