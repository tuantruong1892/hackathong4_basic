import Notes from "./notes.model";

const createTable = () => {
  Notes.sync().then(() => {
    console.log("create notes");
  });
};
export default createTable;
