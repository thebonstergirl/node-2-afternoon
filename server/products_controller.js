module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db')
    db.create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl]).then((response)=> res.status(200).send(response)).catch(err=> res.status(500).send('Error'))},
    
    getOne: ( req, res, next) => {
        const db = req.app.get('db')

        db.read_product(req.params.id)
            .then(response => {
                res.status(200).send(response)
            }).catch(err => console.log(err))
    },
   
    getAll: (req, res, next) => {
        const db = req.app.get('db');

    db.read_products().then(response=> res.status(200).send(response)).catch(err=> {res.status(500).send('Error'), console.log('getAll isn\'t working')})},
   
    update: (req, res, next) => {
        const db = req.app.get('db')
    db.update_product([req.params.id, req.query.desc]).then((response)=> res.status(200).send(response)).catch(err=> res.status(500).send('Error'))},
    
    delete: (req, res, next) => {
        const db = req.app.get('db')
    db.delete_product(req.params.id).then((response)=>res.status(200).send(response)).catch(err=> res.status(500).send('Error'))}
}