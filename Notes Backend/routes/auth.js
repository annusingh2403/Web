const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { FiDatabase } = require('react-icons/fi');
const fetchuser = require('../middlewear/fetchuser');

const JWT_SECRET = 'thisisme';

// Route 1: Creating user using post: "api/auth/createuser". 

router.post('/createuser',[
    body('name','Enter a valid name').isLength({min: 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleat 5 characters').isLength({min: 5})
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
      let user = await User.findOne({email: req.body.email})
      console.log(user);
      if(user){
        return res.status(400).json({error: 'Sorry a user with this email already exists'})
      }

      const saltRound = 10;
      const salt = await bcrypt.genSaltSync(saltRound);
      const hash = await bcrypt.hashSync(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
      })

      const data = {
        user: {
            id: user.id
        }
      }

      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({authtoken});

      res.json(user);
      } catch(error){
          console.error(error.message);
          res.status(500).send('Internal server error')
      }
    })

// Route 2: Login user using post: "api/auth/login". 


    router.post('/login',[
      body('email','Please enter correct credentials').isEmail(),
      body('password','Password can not be blank').exists()
  ], async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {email, password} = req.body;

      try {
        let user = await User.findOne({email});
        if(!user){
          return res.status(400).json({error: 'Please enter correct credentials'})
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if(!comparePassword){
          return res.status(400).json({error: 'Please enter correct credentials'})
        }

        const data = {
            user: {
                id: user.id
            }
          }

        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({authtoken});
        

      } catch(error){
        console.error(error.message);
        res.status(500).send('Internal server error')
    }

      })


// Route 3: Get loggedin User Details using Post: "api/auth/getuser". 

	router.post('/getuser', fetchuser, async (req, res) => {
		try {
			userId = req.user.id;
			const user = await User.findById(userId).select('-password')
			res.send(user);	
		} catch (error) {
			console.error(error.message);
        	res.status(500).send('Internal server error')
		}
	})

    module.exports = router; 