const express = require("express");
const router =express.Router();
const {getDetail, getList, updateItem, createItem, deleteItem} = require('../controllers/video');

/* Lista de videos */
router.get("",getList );
router.get("/:id",getDetail );
router.post("", updateItem );
router.delete("/:id", deleteItem );
router.put("/:id", createItem );

module.exports =router;