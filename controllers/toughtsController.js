const Tought = require('../models/Tought')
const User = require('../models/User')

const { Op } = require('sequelize')

module.exports = class toughtsController{

    static async showToughts(req,res) {

        var search = ''

        if(req.query.search){
            search = req.query.search
        }

        let order = 'DESC'

        if(req.query.order === 'old'){
            order = 'ASC'
        } else {
            order = 'DESC'
        }

        const toughtDates = await Tought.findAll({
            include: User,
            where: { 
                title: { [Op.like]: `%${search}%` }
             },
             order: [['createdAt', order]]
        })

        const values = toughtDates.map((result) => result.get({plain: true}))

        let toughtQty = values.length

        if(toughtQty === 0){
            toughtQty = false
        }

        res.render('toughts/home', { values, search, toughtQty })
    }
    static async dashboard(req,res){
        const userId = req.session.userid

        const user = await User.findOne({where: { id : userId }, include: Tought, plain: true})

        if(!user){
            res.redirect('/login')
        }

        const toughts = user.Toughts.map((result) => result.dataValues)

        var emptyToughts = false

        if(toughts.length == 0){
            emptyToughts = true
        }
        

        res.render('toughts/dashboard', {toughts, emptyToughts})
    }
    static createToughts(req,res){
        res.render('toughts/create')
    }
    static async createToughtsSave(req,res){

        const tought = {
            title: req.body.title,
            UserId: req.session.userid
        }

        try {
            await Tought.create(tought)
    
            req.flash('message', 'Pensamento criado com sucesso!')
            
            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })
        } catch (error) {
            console.log(`Erro toughtsController : ${error}`);
        }

    }

    static async remove(req,res){

        const id = req.body.id
        const UserId = req.session.userid

        
        try {
            await Tought.destroy({where: {id : id, UserId : UserId}})
    
            req.flash('message', 'Pensamento removido com sucesso!')
            
            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })
        } catch (error) {
            console.log(`Erro toughtsController : ${error}`);
        }

    }

    static async updateToughts(req,res){
        const id = req.params.id

        const tought = await Tought.findOne({where: {id : id}, raw: true})

        res.render('toughts/update', { tought })
    }

    static async updateToughtsSave(req,res){

        const id = req.body.id

        const tought = {
            title: req.body.title
        }

        try {
            await Tought.update(tought, {where: {id : id}})
    
            req.flash('message', 'Pensamento atualizado com sucesso!')
            
            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })
        } catch (error) {
            console.log(`Erro toughtsController : ${error}`);
        }
        
    }
}