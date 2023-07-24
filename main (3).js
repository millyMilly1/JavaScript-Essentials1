let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

let sortContacts = function(contacts, sortBy) {
    if (contacts instanceof Array) {
        switch (sortBy) {
            case 'name':
                contacts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'phone':
                contacts.sort((a, b) => a.phone.localeCompare(b.phone));
                break;
            case 'email':
                contacts.sort((a, b) => a.email.localeCompare(b.email));
                break;
            default:
                console.log("Invalid sort option. Available options: name, phone, email");
        }
    }
}

// Example usage:
sortContacts(contacts, 'name');
showAllContacts(contacts);



