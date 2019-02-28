import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form = {
    name: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  add(){
    if(!this.form.name){
      alert('Preencha todos os campos');
      return;
    }

    if(this.form.name.length < 3){
      alert('O nome precisa ter pelo menos 3 dígitos!');
      return;
    }

    this.userService.add(this.form).subscribe((data: any) => {
      alert('Usuário adicionado com sucesso!');
      this.router.navigate(['/']);
    }, this.handleHttpErrors);
  }

  handleHttpErrors(){
    alert('Ocorreu um erro!');
  }

}
