
const createOne = (req,res) => {
    const db = req.app.get('db'),
        { name, price, image_url } = req.body;


    db.createOne_coffee( name, price, image_url )
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(`CREATEoNE: ${error}`))
}

const getAll = (req,res) => {
    const db = req.app.get('db');

    db.getAll_coffee()
        .then(response => res.status(200).json(response))
        .catch(error => res.status(500).send(`GETaLL: ${error}`))
}

const updateOne = (req,res) => {
    const db = req.app.get('db'),
        { id, name, price, image_url } = req.body;

    db.updateOne_coffee( id, name, price, image_url )
        .then(response => res.status(200).json(response))
        .catch(error => res.status(500).send(`UPDATEoNE: ${error}`))
}

// fix deleteOne
const deleteOne = (req,res) => {
    const db = req.app.get('db'),
        { id } = req.params;

    db.deleteOne_coffee( id )
        .then(() => res.sendStatus(200))
        .catch(error => res.status(500).send(`DELETEoNE: ${error}`))

        // TypeError: app.use() requires a middleware function 
}

const getOne = (req,res) =>{
    const db = req.app.get('db'),
        { id } = req.params;

    db.getOne_coffee( id )
        .then(response => res.status(200).json(response))
        .catch(error => res.status(500).send(`GEToNE: ${error}`))
}






module.exports = {
    createOne,
    getAll,
    updateOne,
    deleteOne,
    getOne
}