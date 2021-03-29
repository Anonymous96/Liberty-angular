var faker = require('faker')

var database = { distributions: [] }

for (var i = 1; i <= 10; i++) {
    database.distributions.push({
        id: i,
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        gender: faker.name.gender(),
        birthdate: '',
        imageUrl: 'https://source.unsplash.com/1600x900/?product',
        passportType: '',
        documentSeries: '',
        passportNumber: '',
        releaseDate: '',
        validDate: '',
        persNumber: '',
        issuedBy: '',
        contactType: '',
        contactInfo: '',
        addressType: '',
        address: '',
        parentId: a,
        recommendedDistributors: [''],
    })
    database.products.push({
        id: i,
        productCode: '',
        productName: '',
        productPrice: '',
    })
}

console.log(JSON.stringify(database))
