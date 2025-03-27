import { expect, test } from 'vitest'
import { QuestionsRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeRepository: QuestionsRepository = {
  async create() {},
}

test('Create a question', async () => {
  const createQuestionUseCase = new CreateQuestionUseCase(fakeRepository)

  const { question } = await createQuestionUseCase.execute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'conteúdo da pergunta',
  })

  expect(question.id).toBeTruthy()
})
