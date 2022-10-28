const User = require('../models/User')

const bcrypt = require('bcryptjs')

module.exports = class authControllers {

    static login(req, res) {
        res.render('auth/login')
    }
    static async loginPost(req,res){
        const {email, password} = req.body

        // find User
        const user = await User.findOne({where: {email : email}})

        if(!user){
            req.flash('message', 'Usuário não encontrado!')
            res.render('auth/login')
            return
        }

        // Check if password match
        const passwordCheck = bcrypt.compareSync(password, user.password)

        if(!passwordCheck){
            req.flash('message', 'Senha inválida!')
            res.render('auth/login')
            return
        }


            // Initialize session
            req.session.userid = user.id

            req.flash('message', 'Logado com sucesso!')
            req.session.save(() => {
                res.redirect('/')
            })

    }
    static register(req, res) {
        res.render('auth/register')
    }
    static async registerPost(req, res) {

        const { name, email, password, confirmpassword } = req.body

        // Password match validation
        if (password !== confirmpassword) {
            // message
            req.flash('message', 'As senhas não conferem, tente novamente!')
            res.render('auth/register')
            return;
        }

        // Check email
        const checkIfUserExists = await User.findOne({ where: { email: email } })

        if (checkIfUserExists) {
            req.flash('message', 'Email já cadastrado, tente outro!')
            res.render('auth/register')
            return;
        }

        // Password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            name: name,
            email: email,
            password: hashedPassword
        }

        try {
            const createUserId = await User.create(user)


            // Initialize session
            req.session.userid = createUserId.id

            req.flash('message', 'Cadastro realizado com sucesso!')
            req.session.save(() => {
                res.redirect('/')
            })

        } catch (error) {

            console.log(`Erro no authController : ${error}`);

        }
    }
    static logout(req,res){
        req.session.destroy()
        res.redirect('/login')
    }
}