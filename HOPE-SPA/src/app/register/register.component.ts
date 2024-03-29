import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   model: any = {};
  constructor(private accountService: AccountService, private alertify: AlertifyService ) { }

  ngOnInit() {
  }
  register() {
    this.accountService.register(this.model).subscribe(() => {
      this.alertify.message('Вас зареєстровано');
    }, error => this.alertify.error(error));
  }
  cancel() {
    console.log('cancelled');
  }

}
