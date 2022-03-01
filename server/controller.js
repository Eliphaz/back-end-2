const housesDB = require('./db.json')
let houseIdCounter = 4

module.exports ={
    getHouses: (req,res) =>{
        res.status(200).send(housesDB)
    },
    deleteHouse: (req,res) =>{
        let {id} = req.params
        let index = housesDB.findIndex(house => +house.id === +id)
        housesDB.splice(index,1)
        res.status(200).send(housesDB)
    },
    createHouse: (req,res) =>{
        let newHouse = req.body
        newHouse.id = houseIdCounter
        newHouse.price = +newHouse.price
        housesDB.push(newHouse)
        houseIdCounter ++
        res.status(200).send(housesDB)
    },
    updateHouse: (req,res) =>{
        let {id} = req.params
        let {type} = req.body
        let index = housesDB.findIndex(house => +house.id === +id)
        if(type === 'minus' && housesDB[index].price < 9999){
            res.status(400).send('price is too low')
            console.log('price is too low')
        }else if(type === 'minus'){
            housesDB[index].price -= 10000
        }else if (type === 'plus'){
            housesDB[index].price += 10000
        }
        res.status(200).send(housesDB)
    }
}