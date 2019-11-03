export default class Dictionary {

    constructor() {
        return {
            custom: {
                email:{
                    required: () => "O campo Email não pode ser vazio",
                   
                },

                senha: {
                    required: () => "O campo Senha não pode ser vazio"
                },
                
                



            }
        }
    }
}