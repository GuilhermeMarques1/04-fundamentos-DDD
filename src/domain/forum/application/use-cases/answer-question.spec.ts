import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'

const fakeRepository: AnswersRepository = {
  async create() {},
}

test('Create an answer', async () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase(fakeRepository)

  const answer = await answerQuestionUseCase.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})
