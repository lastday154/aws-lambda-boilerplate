"use strict";

const welcome = () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      fulfillmentText: "Welcome, How can I help you ?"
    })
  };
};

module.exports.fulfillment = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const result = body.queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  let response;
  const { displayName } = result.intent;
  console.log(`  Intent: ${displayName}`);

  switch (displayName) {
    case "Default Welcome Intent":
      response = welcome();
  }

  callback(null, response);
};
