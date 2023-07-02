const express = require("express");
const router = express.Router();
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists with the provided email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered." });
    }

    // User does not exist, proceed with registration
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.send('User registered successfully');
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }); // Check if user with provided email exists
    if (user) {
      if (user.password === password) {
        if (user.isAdmin) {
          // Admin login successful, send success response
          return res.json({ isAdmin: true, redirectTo: '/admin' });
          
        } else {
          // Regular user login successful, send user details
          const currentUser = {
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            _id: user._id,
          };
          return res.json(currentUser);
        }
      } else {
        return res.status(400).json({ message: 'Incorrect password' });
      }
    } else {
      return res.status(400).json({ message: 'User not found. Please register first.' });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
