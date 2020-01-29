const express = require('express')
const server = express()

server.use(express.json())

let projects = []


function checkProjectId(req, res, next){
  const {id} = req.params
  const foundProject = projects.find(project => project.id == id)
    if(!foundProject){
      res.status(200).json({error: "Project not found"})
    }
    req.project = foundProject
    return next()
}


server.use((req, res, next) => {
  console.count("Requisições")
  return next()
})

server.get('/projects', (req, res) => {
  res.json(projects)
})

server.post('/projects', (req, res) => {
  const newPost = req.body
  projects.push(newPost)
  res.json(projects)
})

server.post('/projects/:id/tasks', checkProjectId, (req, res) => {
    const {title} = req.body
    req.project.tasks.push(title)
    res.json(req.project)
})

server.put('/projects/:id', checkProjectId, (req, res) => {
  const {title} = req.body
  req.project.title = title
  res.json(req.project)
})

server.delete('/projects/:id', checkProjectId, (req, res) => {
  const {id} = req.params
  projects = projects.filter(project => project.id != id)
  res.json({message: "deleted"})
})

server.listen(3000)