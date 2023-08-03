import convertInKebabCase from '@/utils/convertInKebabCase';
import extractStringFromHTML from '@/utils/extractStringFromHTML';
import * as zod from 'zod';

export const schemaCreatePost = zod.object({
  head: zod
    .object({
      title: zod
        .string()
        .nonempty('O título é requirido!')
        .min(5, 'O título deve conter no minimo 5 caracteres!')
        .max(60, 'O título deve conter no maximo 60 caracteres!'),
      description: zod.string().nonempty('A descrição é requirido!')
    })
    .required(),
  route: zod
    .object({
      name: zod
        .string()
        .nonempty('O nome da rota é requirido!')
        .min(5, 'O nome da rota deve conter no minimo 5 caracteres!')
        .max(50, 'O nome da rota deve conter no maximo 60 caracteres!')
        .transform((value) => convertInKebabCase(value))
    })
    .required(),
  content: zod
    .object({
      html: zod
        .string()
        .refine(
          (value) => !!extractStringFromHTML(value),
          'É necessário que escreva o conteudo do post!'
        )
        .refine(
          (value) => extractStringFromHTML(value).length > 150,
          'É necessário que o post tenha no minimo 150 caracteres!'
        )
    })
    .required()
});
