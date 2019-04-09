const Box = require('../models/Box')

class BoxController{
    async store(req, res){
        const box = await Box.create(req.body)
        return res.json(box)
    }

    // async store({ body: { title }}, res){
    //     const box = await Box.create({ title })
    //     return res.json(box)
    // }
}

module.exports = new BoxController()