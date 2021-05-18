const express = require('express');
const app = express();


app.use(express.json());

// ROTA DEFINIDA NA PRIMEIRA AULA
app.get("/", (request, response) => {
	return response.json({message: 'Hello world - Cara de fuinha'});
});

// METODO GET :: Vai ler todos os Cursos
app.get("/courses", (request, response) => {
	return response.json(['Curso 1', 'Curso 2', 'Curso 3']);
});

// METODO POST :: Vai adicionar um novo Curso (Curso 4)
app.post("/courses", (request, response) => {
	return response.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4']);
});

// METODO PUT :: Vai Alterar um curso existente recebendo parametro :id (Alterar Curso 1 para Curso 6)
app.put("/courses/:id", (request, response) => {
	return response.json(['Curso 6', 'Curso 2', 'Curso 3', 'Curso 4']);
});

// METODO PATCH :: Vai Alterar (simples) um curso existente recebendo parametro :id (Alterar Curso 2 para Curso 7)
app.patch("/courses/:id", (request, response) => {
	return response.json(['Curso 6', 'Curso 7', 'Curso 3', 'Curso 4']);
});

// METODO DELETE :: Vai Alterar (simples) um curso existente recebendo parametro :id (Alterar Curso 2 para Curso 7)
app.delete("/courses/:id", (request, response) => {
	return response.json(['Curso 6', 'Curso 7', 'Curso 4']);
});

app.listen(3333);