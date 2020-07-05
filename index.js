// let gender = document.querySelectorAll('[name="gender"]:checked');
// console.log(gender);

let fields = document.querySelectorAll('#form-user-create [name]');
let user = {};
let form = document.querySelector('#form-user-create');

function addLine(user){
    let tr = document.createElement('tr');

    tr.innerHTML = `
        <tr>
            <td>
            <img
                src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"/>
            </td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.admin}</td>
            <td>02/04/2018</td>
            <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat" >
                Editar
            </button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">
                Excluir
            </button>
            </td>
        </tr>
    `;

    let table = document.querySelector('#table-users').appendChild(tr);
    return table;
}


form.addEventListener('submit', function(event){
    event.preventDefault();

    fields.forEach( (field) => {
        if(fields.name == 'gender' && field.checked) {
            user[field.name] = field.value
        } else {
            user[field.name] = field.value
        }
    });

    addLine(user);
})