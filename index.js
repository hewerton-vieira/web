const express = require('express')
const app = express()
const valorModel = require('./models/valorModel')
const jwt = require('jsonwebtoken')
const body = require('body-parser')
const {urlencoded} = require('body-parser')

app.get('/nomes/alunos', (req, res) => {
    let alunos = [
        {'nome': 'Joao', 'sobrenome':'Hewerton'},
        {'nome': 'Lorena', 'sobrenome':'Gonsalves'},
        {'nome': 'Valdir', 'sobrenome':'Roseno'},
        {'nome': 'Jose', 'sobrenome':'Lazaro'},
        {'nome': 'Debora', 'sobrenome':'Nascimento'},
    ]
    res.json(alunos)
})

app.get('/moeda/:valor', valorModel.obterValor)


app.listen(3000, () => {
    console.log('App funfando de boas')
})