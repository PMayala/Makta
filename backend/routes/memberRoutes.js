const express = require('express');
const {
  getMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
} = require('../controllers/memberController');
const router = express.Router();

router.get('/', getMembers);
router.get('/:member_id', getMemberById);
router.post('/', addMember);
router.put('/:member_id', updateMember);
router.delete('/:member_id', deleteMember);

module.exports = router;
