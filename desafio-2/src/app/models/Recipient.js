import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        rua: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        estado: Sequelize.STRING,
        cidade: Sequelize.STRING,
        cep: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Recipient;
