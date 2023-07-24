let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
  }
];

function showContact(contacts, index) {
  if (!(contacts instanceof Array)) {
    console.log("Error: Contacts should be an array.");
    return;
  }

  if (index >= 0 && index < contacts.length) {
    console.log(`Name: ${contacts[index].name}`);
    console.log(`Phone: ${contacts[index].phone}`);
    console.log(`Email: ${contacts[index].email}`);
  } else {
    console.log("Error: Invalid index.");
  }
}

function showAllContacts(contacts) {
  if (!(contacts instanceof Array)) {
    console.log("Error: Contacts should be an array.");
    return;
  }

  contacts.forEach((contact, index) => {
    console.log(`Contact ${index + 1}:`);
    console.log(`Name: ${contact.name}`);
    console.log(`Phone: ${contact.phone}`);
    console.log(`Email: ${contact.email}`);
    console.log("-----------------------");
  });
}

function addNewContact(contacts, name, phone, email) {
  if (!(contacts instanceof Array)) {
    console.log("Error: Contacts should be an array.");
    return;
  }

  if (!name || !phone || !email) {
    console.log("Error: New contact data is incomplete.");
    return;
  }

  const newContact = { name, phone, email };
  contacts.push(newContact);
}

// Example of use:
showContact(contacts, 1);
console.log("-----------------------");
showAllContacts(contacts);
console.log("-----------------------");
addNewContact(contacts, "John Doe", "123456789", "john@example.com");
showAllContacts(contacts);
