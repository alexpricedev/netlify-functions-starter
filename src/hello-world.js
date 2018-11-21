require("dotenv").config();

import { statusCodes, headers } from "../constants";

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: statusCodes.OK,
    headers,
    body: `${process.env.MESSAGE}, again`
  });
};
