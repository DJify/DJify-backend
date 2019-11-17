var express = require('express');
var User = require('../models/user');

const userRouter = express.Router();

userRouter.route('/')