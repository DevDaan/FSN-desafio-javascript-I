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
    console.log(`Aluno ${nome} cadastrado com sucesso!`)
    console.log("")
}

// LISTANDO ALUNOS

const listarAlunos = () => {
    let contador = 0
    console.log(`Alunos cadastrados no sistema:`)
    for(aluno of alunosDaEscola){ 
        
        let curso = ""
        let cursoData=""
        let novoCurso = aluno.cursos


        if (novoCurso.length > 0){
            curso = novoCurso[0].nomeDoCurso;
            cursoData =  novoCurso[0].dataMatricula;
        }

        console.log("")
        console.log(`Aluno ${++contador}`)
        console.log(`Nome: ${aluno.nome}`)
        
        if(aluno.cursos == ""){
            console.log("Cursos: Nenhum curso encontrado em nossos registros!")
            console.log("Notas: N/A")

        }else{
            console.log(`Cursos:`)
            console.log(`   Nome do curso: ${curso}`)
            console.log(`   Data de matrícula: ${cursoData}`)
            console.log(`Notas: ${aluno.notas}`)
        }
        
        console.log(`Faltas: ${aluno.faltas}`)
        console.log("")
    }
}


// BUSCANDO UM ALUNO
const buscarAluno = nome => {
    // VARIÁVEIS PARA ARMAZENAR OS DADOS DO curso, RESOLVENDO O BUG DO "UNDEFINED"
    let temp = ""
    let curso = ""
    let dataMatricula = ""
    let tempAluno = ""

    let alunoEncontrado = []
    let contador = 0


    for(aluno of alunosDaEscola){

        if(aluno.nome == nome){
            alunoEncontrado.push(aluno)
            contador ++
            
            if(aluno.cursos != ""){
                temp = aluno
                tempAluno = aluno.cursos
                nomeCurso = tempAluno[0].nomeDoCurso
                data = tempAluno[0].dataMatricula
            }
        } 
    }



    if (contador <= 0 ){
        console.log("Aluno não encontrado")
    } else{
        console.log(`Número de aluno(s) encontrado(s): ${contador}`)
        for( aluno of alunoEncontrado){
            console.log("")
            console.log(`Aluno encontrado:`)
            console.log(`Nome: ${aluno.nome}`)
            if(aluno.cursos == ""){
                console.log("Cursos: Nenhum curso encontrado em nossos registros!")
            }else{
                console.log("Cursos:")
                console.log(`   Nome do curso: ${nomeCurso}`)
                console.log(`   Data de matrícula: ${data}`)
                console.log(`Notas: ${aluno.notas}`)
            }
            console.log(`Faltas: ${aluno.faltas}`)
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
        console.log(`AÇÃO NÃO PERMITIDA! ${aluno} não faz parte do quadro de alunos da escola! Tente novamente utilizando um aluno matriculado na instituição.`)
    }
    console.log("")
}


// APLICANDO FALTA PRO ALUNO
const aplicarFalta = (aluno) => {
    let contador = 0


    for(let i = 0; i < alunosDaEscola.length; i++){
        if(alunosDaEscola[i].nome === aluno){
            if(alunosDaEscola[i].cursos != ""){
                alunosDaEscola[i].faltas++
                console.log(`Falta atribuida ao aluno: ${alunosDaEscola[i].nome}`)
                contador++
            }else{
                console.log(`AÇÃO NÃO PERMITIDA! Não é possível aplicar uma falta para ${aluno} pois o mesmo não está matriculado em nenhum curso!`)
                contador++
            }
        }  
    }      
    

    if(contador <= 0 ){
        console.log(`AÇÃO NÃO PERMITIDA! ${aluno} não faz parte do quadro de alunos da escola!`)
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
                console.log(`Nota ${nota} atribuída com sucesso!`)
                contador++
            }else{
                console.log(`AÇÃO NÃO PERMITIDA! O aluno ${aluno} não está fazendo nenhum curso!`)
                contador++
            }
        }
    }
    if(contador <= 0){
        console.log(`AÇÃO NÃO PERMITIDA! ${aluno} não faz parte do quadro de alunos da escola!`)
    }
}


// APROVANDO UM ALUNO - PENDENTE!
const aprovarAluno = (aluno) => {
    
}







// TESTES DE VALIDAÇÃO


// adicionarAluno("Daniel")
// listarAlunos()
// matricularAluno("Daniel", "Santander Coders - By Digital House")
// buscarAluno("Daniel")
// aplicarFalta("Daniel")
// aplicarNota("Daniel", 10)
// buscarAluno("Daniel")



// //TENTANDO MATRICULAR UM ALUNO QUE NÃO ESTÁ CADASTRADO NA LISTA DE ALUNOS
// matricularAluno("Breno", "Machine Learning")

// //BUSCANDO UM ALUNO QUE NÃO FAZ PARTE DA ESCOLA
// buscarAluno("Breno")

// //APLICANDO FALTA A UM ALUNO QUE NÃO FAZ PARTE DA ESCOLA
// aplicarFalta("Breno")

// //APLICANDO FALTA A UM ALUNO QUE FAZ PARTE DA ESCOLA MAS NÃO ESTÁ MATRICULADO EM NENHUM CURSO
// aplicarFalta("Henrique")


// // APLICANDO NOTA A UM ALUNO QUE NÃO FAZ PARTE DA ESCOLA
// aplicarNota("Breno", 10)

// //APLICANDO NOTA A UM ALUNO QUE FAZ PARTE DA ESCOLA MAS NÃO ESTÁ MATRICULADO EM NENHUM CURSO
// aplicarFalta("Henrique")


