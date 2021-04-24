export class User {

  /*les attributs placés dans le constructor avec public devant */
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public drinkPreference: string,
    public hobbies?: string[]
  ) {}
}
