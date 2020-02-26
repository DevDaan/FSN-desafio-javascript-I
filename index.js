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
    console.log("")
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
            console.log("Notas: N/A")
        }else{
            console.log("Cursos:", aluno.cursos)
            console.log(`Notas: ${aluno.notas}`)
        }
        
        console.log(`Faltas: ${aluno.faltas}`)
        console.log("")
    }
    
    console.log("")
}


// BUSCANDO UM ALUNO
const buscarAluno = nome => {

    let alunoEncontrado = []
    let contador = 0

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
    console.log("")
}


// MATRICULANDO UM ALUNO EM UM CURSO
const matricularAluno = (aluno, curso) => {
    let contador = 0
    let temp = {
        nomeDoCurso: "",
        dataMatricula: ""
    }


    for(let i = 0; i < alunosDaEscola.length; i++){
        if(alunosDaEscola[i].nome == aluno){
            temp.nomeDoCurso = curso
            temp.dataMatricula = new Date
            alunosDaEscola[i].cursos.push(temp)
            console.log(`O aluno ${alunosDaEscola[i].nome} foi matriculado no curso: ${curso}`)
            contador ++
        }
    }

    if(contador <= 0){
        console.log("AÇÃO NÃO PERMITIDA! Não é possível cadastrar um aluno que não faz parte da nossa escola. Tente novamente utilizando um aluno matriculado na instituição.")
    }
    console.log("")
}


// APLICANDO FALTA PRO ALUNO
const aplicarFalta = (aluno) => {
    let contador = 0;
    for(let i = 0; i < alunosDaEscola.length; i++){
        if(alunosDaEscola[i].nome === aluno){
            if(alunosDaEscola[i].cursos != ""){
                alunosDaEscola[i].faltas++
                console.log(`Falta atribuida ao aluno: ${alunosDaEscola[i].nome}`)
                contador++
            }
        }  
    }      
    
    if(contador <= 0){
        console.log("AÇÃO NÃO PERMITIDA! Não é possível aplicar falta à um aluno que não está fazendo nenhum curso!")
    }
    console.log("")
}

// APLICANDO UMA NOTA PRO ALUNO
const aplicarNota = (aluno, nota) => {
    let contador = 0
    let temp = []
    for(let i = 0; i < alunosDaEscola.length; i++){
        if(alunosDaEscola[i].nome === aluno){
            if(alunosDaEscola[i].cursos != ""){
                temp.push(nota)
                alunosDaEscola[i].notas.push(temp)
                console.log(`Nota atribuída com sucesso! Dados atualizados do aluno: `)
                console.log(`Nome do Aluno: ${alunosDaEscola[i].nome}`)
                console.log("Cursos: ", alunosDaEscola[i].cursos)
                console.log(`Notas do aluno: ${alunosDaEscola[i].notas}`)
                console.log(`Faltas do aluno: ${alunosDaEscola[i].faltas}`)
                contador++
            }
        }
    }
    if(contador <= 0){
        console.log("AÇÃO NÃO PERMITIDA! Não é possível atribuir uma nota à um aluno que não está fazendo nenhum curso ou que não faz parte da escola!")
    }
}



// APROVANDO UM ALUNO
const aprovarAluno = (aluno) => {
    
}

// TESTES DE VALIDAÇÃO 
// adicionarAluno("Daniel Vieira")
// matricularAluno("Daniel Vieira", "Santander Coders - Digital House")
// listarAlunos()
