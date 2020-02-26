// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{ nomeDoCurso: "UX", dataMatricula: new Date}],faltas:0}]


// ADICIONANDO UM ALUNO

const adicionarAluno = (nome) => {
    let novoAluno = {
        nome: nome,
        notas: [],
        cursos: [],
        faltas: 0
    }

    alunosDaEscola.push(novoAluno)
    console.log(`Aluno cadastrado com sucesso!`)
}

// LISTANDO ALUNOS

const listarAlunos = () => {
    let contador = 0
    console.log(`Alunos cadastrados no sistema:`)


    for(aluno of alunosDaEscola){ 
        console.log(`Aluno ${++contador}`)
        console.log(`Nome: ${aluno.nome}`)
        if(aluno.cursos == ""){
            console.log("Cursos: Nenhum curso encontrado em nossos registros!")
        }else{
            console.log("Cursos:", aluno.cursos)
        }
        console.log(`Faltas: ${aluno.faltas}`)
        console.log("")
    }
    

}


// BUSCANDO UM ALUNO
const buscarAluno = nome => {

    let alunoEncontrado = []
    let contador = 0
    let indice = 0



    for(aluno of alunosDaEscola){
        if(aluno.nome == nome){
            alunoEncontrado.push(aluno)
            contador ++
        } 
    }
    
    
    if (contador <= 0 ){
        console.log("Aluno não encontrado")
    } else{
        console.log(`Número de aluno(s) encontrado(s): ${contador}`)
        for(let i of alunoEncontrado){
            console.log("")
            console.log(`Aluno encontrado:`)
            console.log(`Nome: ${i.nome}`)
            console.log("Cursos: ", i.cursos)
            console.log(`Faltas: ${i.faltas}`)
        }
    }
}


