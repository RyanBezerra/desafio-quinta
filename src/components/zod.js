import {z} from 'zod'

export const cepFormSchema = z.object({
    cep: z
    .string()
    .min(8, 'CEP deve ter 8 dígitos')
    .refine((value) => /^\d{5}\d{3}$/.test(value), {
        message: "CEP inválido, deve ter o formato 12345678",
    }),
})