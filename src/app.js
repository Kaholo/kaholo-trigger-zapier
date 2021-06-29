const minimatch = require("minimatch");

async function webhookPost(req, res, settings, triggerControllers) {
  try { 
    const key = req.headers["x-kaholo-key"];
    if (!key){
      return res.status(400).send("Bad Kaholo Webhook Configuration");
    }
    triggerControllers.forEach(trigger => {
        const {keyPat} = trigger.params;
        if (keyPat && !minimatch(key, keyPat)) return;
        trigger.execute(`Zapier ${key}`, req.body);
    });
    res.status(200).send("OK");
  }
  catch (err){
    res.status(422).send(err.message);
  }

}

module.exports = { 
  webhookPost
};