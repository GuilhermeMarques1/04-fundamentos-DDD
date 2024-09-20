import { expect, it } from "vitest";
import { Slug } from "./slug";

it('Should be able to create a slug from text', () => {
  const slug = Slug.createFromText(" An example test title_slug ---- ")

  expect(slug.value).toEqual("an-example-test-title-slug")
})
