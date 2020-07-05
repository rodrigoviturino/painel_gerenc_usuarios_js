class UserController {

    constructor(formId, tbodyId){
        
        this.formEl = document.querySelector(formId);
        this.tableBody = document.querySelector(tbodyId);

        this.onSubmit();
    }

    // Método de enviar informações do Formulário
    onSubmit(){
        this.formEl.addEventListener('submit', (event) => {
            event.preventDefault();

            // Coletando informações do Formulário
            console.log(this.getValues());

            // Com as informações do Formulário, podemos adicionar na tabela
            // this.addLine(user);
        });
    }

    // Pegando valores do formulario
    getValues(){
        let user = {};
        console.log(this.formEl.elements);
        // Utilizando SPREAD para fazer iteração dos itens para usar o ForEach
        [...this.formEl.elements].forEach( (field) => {
            if(field.name == 'gender' && field.checked) {
                user[field.name] = field.value
            } else {
                user[field.name] = field.value
            }
        });
        
        let objectUser = new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin
        );
        
        // addLine(objectUser)
        
        return objectUser;
    }

    addLine(dataUser){
        let tr = document.createElement('tr');
    
        tr.innerHTML = `
            <td>
                <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"/>
            </td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>02/04/2018</td>
            <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat" >
                Editar
            </button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">
                Excluir
            </button>
            </td>
        `;
    
        this.tbodyId.appendChild(tr);
        // document.querySelector('#table-users')
    }

}