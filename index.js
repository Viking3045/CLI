const contacts  = require("./contacts");
const yargs = require("yargs")
const { hideBin } = require("yargs/helpers");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
          const listContacts = await contacts.listContacts();
          return console.log(listContacts);
   

    case "get":
       const getContactById = await contacts.getContactById(id);
          return console.log(getContactById);
     

      case 'add':
          const newContacts = await contacts.addContact({ name, email, phone });
          return console.log(newContacts);

      case 'remove':
          const removeContacts = await contacts.removeContact(id);
          return console.log(removeContacts);
    default:
      return  console.warn('\x1B[31m Unknown action type!');
    // default:
    //   console.warn('\x1B[31m Unknown action type!');
  }
}

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);