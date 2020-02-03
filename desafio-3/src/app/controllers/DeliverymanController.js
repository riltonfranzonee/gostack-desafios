import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const deliverymens = await Deliveryman.findAll({
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });
    return res.json(deliverymens);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    // check if the email is already registered
    const isRegistered = await Deliveryman.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (isRegistered) {
      return res
        .status(400)
        .json({ error: 'The email provided is already registered' });
    }

    const deliveryman = await Deliveryman.create(req.body);

    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string(),
      email: Yup.string().email(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const deliveryman = await Deliveryman.findByPk(req.body.id);

    // check if the admin wants to change to an email that is alerady registered
    const isRegistered = await Deliveryman.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (isRegistered) {
      return res
        .status(400)
        .json({ error: 'The email provided is already registered' });
    }

    const updatedDeliveryman = await deliveryman.update(req.body);

    return res.json(updatedDeliveryman);
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'You must provide a valid deliveryman ID' });
    }

    await Deliveryman.destroy({
      where: {
        id: req.body.id,
      },
    });

    return res.json({ ok: 'User was succesfully deleted' });
  }
}

export default new DeliverymanController();
