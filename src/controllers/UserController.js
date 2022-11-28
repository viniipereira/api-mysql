
/*  

28/11/2022

AUTOR : JOAO PEDRO CARVALHO E VINICIUS DOMINGUES PEREIRA

CLASSE PARA CONTROLAR O USUARIO AQUI É FEITO O CRUD NO BANCO COMO INSEÇÃO , REMOÇÃO , ATUALIZAÇÃO E DELETE

UTILIZA COMO MODELO A CLASSE USUARIO QUE ESTÁ EM SRC/MODELS/USUARIO.JS

*/


const db = require("../database/connection.js")

class UserController {
    novoUsuario(req,res) {
          //METODO PARA CADASTRAR UM USUARIO NO BANCO , SENDO PASSADO NO CORPO DA REQUISIÇÃO UM JSON NO FORMATO
  // ESPERADO
        const{nome,data_criacao} = req.body
        db.insert({nome,data_criacao}).table('usuario').then(data=>{
            console.log(data)
            res.json({message:'feito novo user!'})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUsuarios(req,res) {
          // BUSCA TODOS OS USUARIO NO BANCO E RETORNA EM FORMATO JSON NO CORPO DA RESPOSTA
        db.select("*").table("usuario").then(usuarios=>{
            res.json(usuarios)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmUsuario(req,res) {
        console.log(req.params)
        const id = req.params.id
 //FAZ UM SELECT POR ID DE USUARIO E  RETORNA UM USUARIO ESPECIFICO SENDO PASSADO O ID COMO PARAMETRO NA ROTA /USUARIO/:ID
        db.select("*").table("usuario").where({id_usuario:id}).then(usuarios=>{
            res.json(usuarios)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarUsuario(req,res) {
        const id = req.params.id
        const dados = req.body
//PROCURA O OBJETO A SER MODIFICADO PELO ID E ATUALIZA O REGISTRO INTEIRO 
        db.where({id_usuario:id}).update(dados).table('usuario').then(usuario=>{
            res.json({mensagem:'atualizado com sucesso'})
        }).catch(error=>{
            console.log(error)
        })
    }

    removerUsuario(req,res) {
        const id = req.params.id
        // METODO PARA EXCLUSÃO DE USUARIO POR ID
        db.where({id_usuario:id}).del().table('usuario').then(usuario=>{
            res.json({mensagem:"removido com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }

    verificarUsuario(req,res) {
       var id= req.body.id;
       var senha = req.body.senha;
        db.select("*").table("usuario").where({id_usuario:id}).then(usuarios=>{
            
            if(usuarios[0].bloqueio == 1) {
               return res.sendFile(__dirname + '/html/usuario-bloqueado.html')
            }else if(usuarios[0].senha === senha) {
                
                return res.sendFile(__dirname + '/html/pagina-controle.html')
            }
            res.sendFile(__dirname + '/html/nao-logado.html')
        }).catch(error=>{
            console.log(error)
        })


        
    }

    
}

module.exports = new UserController();