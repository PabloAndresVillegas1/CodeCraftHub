const authMiddleware = require('../middleware/authMiddleware');
router.put('/:id', authMiddleware, userController.updateUserProfile);