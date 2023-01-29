
const getAllTasks = (req, res)=>{
    res.send('All items are here')
}

const createTask = (req, res) =>{
    res.json(req.body)
}

const getTask = (req, res) =>{
    res.send({id:req.params.id})
}

const updateTask = (req,res)=>{
    res.send('updating task')
}

const deleteTask = (req, res)=>{
    res.send('deleting task')
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,

}