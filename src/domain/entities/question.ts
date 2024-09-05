import { randomUUID } from "node:crypto"

export class Question {
  public id: string
  public title: string
  public content: string

  constructor(name: string, content: string, id?: string) {
    this.title = name
    this.content = content
    this.id = id ?? randomUUID()
  }
}