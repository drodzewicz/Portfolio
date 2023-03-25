import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import experiences from "./experiences";
import skills from "./skills";
import contact from "./contact";
import education from "./education";
import project from "./project";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([ skills, project, education, experiences, contact]),
});
