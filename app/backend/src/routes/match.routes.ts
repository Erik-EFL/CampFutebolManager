import { Router } from 'express';
import MatchController from '../Controllers/matcher.controller';

const matcher = Router();

const match = new MatchController();

matcher.patch('/:id/finish', (req, res) => match.patch.update.finisMatch(req, res));
matcher.patch('/:id', (req, res) => match.patch.update.updateMatch(req, res));
matcher.get('/', (req, res) => match.get.all(req, res));
matcher.post('/', (req, res) => match.post.create(req, res));

export default matcher;
