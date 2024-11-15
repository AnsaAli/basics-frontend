const { createContext } = require("react");

const dataUsingContext = createContext([
    dummyData = 'Dummy data using useContext hook',
    newName = 'Default'
]);

export default dataUsingContext;