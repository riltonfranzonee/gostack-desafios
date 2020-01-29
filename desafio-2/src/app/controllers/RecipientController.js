import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }

  async update(req, res) {
    const { id } = req.body;
    const recipient = await Recipient.findByPk(id);

    // para o admin atualizar os dados ele deve fornecer um id válido
    if (!id || !recipient) {
      return res.status(401).json({ error: 'Provide a valid recipient Id' });
    }

    const updatedRecipient = await recipient.update(req.body);
    return res.json(updatedRecipient);
  }
}

export default new RecipientController();
