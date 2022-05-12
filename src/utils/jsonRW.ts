import fs from "fs";

export const readJson = (file: string) => {
  let rawdata = fs.readFileSync(file);
  return rawdata.toJSON;
};

export const writeJson = (file: string, data: object) => {
  fs.writeFileSync(file, JSON.stringify(data));
};
