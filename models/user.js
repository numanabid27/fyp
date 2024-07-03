class User extends Model {
  static associate(models) {
    this.hasMany(models.Post);
  }
}