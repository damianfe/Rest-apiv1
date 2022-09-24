const express = require("express");
const router =express.Router();
const {getDetail, getList, updateItem, createItem, deleteItem} = require('../controllers/video');
const {checkSession} =require("../middlewares/origin");
/* Lista de videos */
router.get("",getList );

router.get("/:id",getDetail );

router.post("", updateItem );

router.delete("/:id", checkSession,deleteItem );

router.put("/:id", createItem );

module.exports =router;