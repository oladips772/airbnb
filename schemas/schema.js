/** @format */
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import property from "./property";
import propertyImage from "./propertyImage";
import review from "./review";
import traveller from "./traveller";
import person from "./person";
import host from "./host";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    property,
    propertyImage,
    review,
    traveller,
    person,
    host
  ]),
});
