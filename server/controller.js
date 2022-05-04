const houses = require("./db.json");

let houseId = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex((house) => {
            return house.id === +req.params.id;
        })
        houses.splice(index, 1);
        res.status(200),send(houses);
    },
    createHouse: (req, res) =>{
        // console.log(req.body); 
        let {address, price, imageURL} = req.body;

        let newHouse = {
            id: houseId,
            address: address,
            price: price,
            imageURL: imageURL
        }
        houses.push(newHouse);
        res.status(200).send(movies);
        houseId++;
    },
    updateHouse: (req, res) => {
        // console.log(req.params);
        // console.log(req.body)
        let {id} = req.params;
        let {type} = req.body;

        let index = houses.findIndex((houses) => {
            return house.id === +req.params.id;
        })
    },
}