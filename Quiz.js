class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // escreva aqui o código para ocultar os elementos da questão
    question.hide()
    // escreva o código aqui para mudar a cor de fundo
    background("yellow")
    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz
    fill("black")
    textSize(30)
    text("Resultado do Questionário",340,50)
    text("-------------------------",340,80)
    // chame getContestantInfo () aqui
    Contestant.getPlayerInfo()
    // escreva a condição para verificar se contestantInfor não é indefinido
    if(allContestants !== undefined){
      fill("Blue");
      textSize(20);
      text("Jogador que respondeu a resposta correta é destacado na cor verde ",130,230);
      var displayAnswers = 3

      for (var cont in allContestants){
        var correctAnswer = "2"
        if (correctAnswer == allContestants[cont].answer) {
          fill("green")
        } else {
          fill("red")
        }
        displayAnswers += 7
        text(allContestants[cont].name+":"+allContestants[cont].answer,250,260)
      }
    }
    // escreva aqui o código para adicionar uma nota

    // escreva o código para destacar o competidor que respondeu corretamente
    
  }

}
