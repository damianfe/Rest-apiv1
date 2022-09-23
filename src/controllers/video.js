const getList = (req,res)=>{
res.send({data: "list"});
}
const getDetail = (req,res)=>{
res.send({data: "detail"});
}
const updateItem = (req,res)=>{
res.send({data: "update"});
}
const createItem = (req,res)=>{
res.send({data: "create"});
}
const deleteItem = (req,res)=>{
res.send({data: "delete"});
}
module.exports={getList,getDetail,updateItem,createItem,deleteItem};