 import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  /* Création d'un objet type FormGroup */
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  /* Méthode d'initialisation du formulaire avec méthode group() de FormBuilder
  On ajote les Validators pour vérifier les données */
  initForm() {
    this.userForm = this.formBuilder.group(
      {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array([])
      }
    );
  }

  /* Méthode de soumission du formulaire : récupère value et crée un nouvel objet
  ajoute utilisateur au service
  navigue vers  /users */
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  /* méthode qui retourne  hobbies  par la méthode  get()  sous forme de  FormArray */
  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  /* méthode qui permet d'ajouter un  FormControl  à  hobbies */
  onAddHobby() {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
}
}
