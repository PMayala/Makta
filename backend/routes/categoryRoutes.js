const express = require('express');
const {
  getCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');
const router = express.Router();

router.get('/', getCategories);
router.get('/:category_id', getCategoryById);
router.post('/', addCategory);
router.put('/:category_id', updateCategory);
router.delete('/:category_id', deleteCategory);

module.exports = router;
