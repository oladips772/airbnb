/** @format */
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import property from "./property";
import propertyImage from "./propertyImage";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    property,
    propertyImage
  ]),
});
