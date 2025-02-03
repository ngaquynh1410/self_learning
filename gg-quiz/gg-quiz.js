function createQuizFromJSON() {
    // Sample JSON data (replace this with your actual JSON)
    const jsonData = {
      "quizTitle": "API Quiz",
      "questions": [
        {
          "question": "API là viết tắt của cụm từ nào?",
          "type": "multipleChoice",
          "point": 10,
          "options": [
            { "content": "Advanced Programming Interface", "isCorrect": false },
            { "content": "Application Programming Interface", "isCorrect": true },
            { "content": "Automated Program Interaction", "isCorrect": false },
            { "content": "Applied Program Integration", "isCorrect": false }
          ]
        },
        {
          "question": "Chức năng chính của API là gì?",
          "type": "multipleChoice",
          "point": 10,
          "options": [
            { "content": "Thiết kế giao diện người dùng", "isCorrect": false },
            { "content": "Giúp các phần mềm giao tiếp với nhau", "isCorrect": true },
            { "content": "Quản lý hệ điều hành", "isCorrect": false },
            { "content": "Tạo cơ sở dữ liệu", "isCorrect": false }
          ]
        }
      ]
    };
  
    // Create a new Google Form and enable Quiz mode
    const form = FormApp.create(jsonData.quizTitle);
    form.setIsQuiz(true);  // Enable Quiz mode
  
    // Loop through each question in the JSON
    jsonData.questions.forEach(questionData => {
      let question;
  
      if (questionData.type === 'multipleChoice') {
        // Add multiple choice question
        question = form.addMultipleChoiceItem();
        question.setTitle(questionData.question);
        question.setChoices(
          questionData.options.map(option => question.createChoice(option.content, option.isCorrect))
        );
        question.setPoints(questionData.point);  // Assign points for correct answer
        
        // Set feedback for correct and incorrect answers
        const correctFeedback = FormApp.createFeedback()
          .setText("Correct!")  // Use setText() instead of setDisplayText()
          .build();
        
        const incorrectFeedback = FormApp.createFeedback()
          .setText("Incorrect!")  // Use setText() instead of setDisplayText()
          .build();
        
        question.setFeedbackForCorrect(correctFeedback);
        question.setFeedbackForIncorrect(incorrectFeedback);
  
        // Find the correct choice object
        const correctAnswer = questionData.correctAnswer;
        const correctChoice = question.getChoices().find(choice => choice.getValue() === correctAnswer);
  
        // Set the correct answer using setAnswers() on the QuizItem
        // if (correctChoice) {
        //   question.asQuizItem().setAnswers([question.createAnswer(correctChoice.getValue())]);
        // } else {
        //   Logger.log("Correct answer not found in options: " + correctAnswer);
        // }
        
      } else if (questionData.type === 'shortAnswer') {
        // Add short answer question
        question = form.addTextItem();
        question.setTitle(questionData.question);
        question.setPoints(questionData.point);  // Assign points for correct answer
        
        // Set the correct answer (case-insensitive)
        question.setRequired(true);
        question.setHelpText(`Correct Answer: ${questionData.correctAnswer}`);
        
      } else if (questionData.type === 'checkbox') {
        // Add checkbox question
        question = form.addCheckboxItem();
        question.setTitle(questionData.question);
        question.setChoices(
          questionData.options.map(option => question.createChoice(option.content, option.isCorrect))
        );
        question.setPoints(questionData.point);  // Assign points for correct answer
  
        // Set feedback for correct and incorrect answers
        const correctFeedback = FormApp.createFeedback()
          .setText("Correct!")  // Use setText() instead of setDisplayText()
          .build();
        
        const incorrectFeedback = FormApp.createFeedback()
          .setText("Incorrect!")  // Use setText() instead of setDisplayText()
          .build();
        
        question.setFeedbackForCorrect(correctFeedback);
        question.setFeedbackForIncorrect(incorrectFeedback);
  
      }
    });
  
    // Log the URL of the created form
    Logger.log('Form URL: ' + form.getPublishedUrl());
  }