const utils = require("./utils");

/**
 * Transforms the chatito dataset from the intermediate representation to a Watson Assistant dataset. These are the arguments:
 *
 * @param {Object[]} items - array of chatito intermediate representation examples. e.g.: [{ text: "lights on", intent: "lightChange", entities: [{"start": 7, "end": 9, "value": "on", "entity": "switch"}] }]
 * @param {Object} definitions - the entity definitions with their intermediate representation abstract syntax three
 * @returns {Object}
 */
function watsonDatasetAdapter(items, definitions) {
    const noop = () => {};
    noop(definitions);
    const dataset = { name: "TestProject", intents:[] };
    items.forEach(item => {
        if (!dataset.intents.some( e => e.intent === item.action ) ) dataset.intents.push({intent: item.action, examples:[], description:null});
        dataset.intents.find(o => o.intent === item.action).examples.push({text: item.id});
    });
    return dataset;
}


module.exports = {
    adapter: watsonDatasetAdapter
};
