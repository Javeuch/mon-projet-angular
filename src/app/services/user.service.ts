import { Subject } from "rxjs";
import { User } from "../models/User.model";

export class UserService {
  /*array privé d'objets de type personnalisé  User et un Subject */
  private users: User[] = [
    new User(
      'Will',
      'Alexander',
      'will@will.com',
      'jus d\'orange',
      ['coder', 'boire du café'])
];
  userSubject = new Subject<User[]>();

  /* méthode  emitUsers()  déclenche ce Subject  */
  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  /* méthode  addUser()  ajoute un objet  User  à l'array, puis déclenche le Subject */
  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
