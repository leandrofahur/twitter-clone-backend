import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
  async create(request: Request, response: Response) {
    try {
      const { username, email } = request.body;
      const usersRepository = getCustomRepository(UsersRepository);

      const userAlreadyExists = await usersRepository.findOne({ email });

      if (userAlreadyExists) {
        return response.status(400).json({
          error: 'User already exists!',
        });
      }

      const user = usersRepository.create({
        username,
        email,
      });

      await usersRepository.save(user);

      return response.status(201).json(user);
    } catch (error) {
      console.error(error.message);
      response.status(500).json({
        error: 'Server error!',
      });
    }
  }

  async findPostsByUser(request: Request, response: Response) {
    try {
      const userRepository = getCustomRepository(UsersRepository);
      const userPosts = await userRepository.find({
        relations: ['posts'],
      });

      return response.status(201).json(userPosts);
    } catch (error) {
      console.error(error.message);
      response.status(500).json({
        error: 'Server error!',
      });
    }
  }

  async findByUsername(request: Request, response: Response) {
    try {
      const { username } = request.params;
      const usersRepository = getCustomRepository(UsersRepository);
      const user = await usersRepository.findOne({
        where: {
          username,
        },
      });

      if (!user) {
        return response.status(400).json({
          error: 'User does not exists',
        });
      }

      return response.status(201).json(user.id);
    } catch (error) {
      console.error(error.message);
      response.status(500).json({
        error: 'Server error!',
      });
    }
  }
}

export { UserController };
