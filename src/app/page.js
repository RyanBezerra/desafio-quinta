'use client'
import {zodResolver} from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { cepFormSchema } from '@/components/zod';

export default function Home() {

  const {
    register,
    handleSubmit,
    formState: {errors},

  } = useForm ({
    resolver: zodResolver(cepFormSchema)
  })

  const router = useRouter()

  function onSubmit(data){
    console.log(data)
    router.push(`/cep/${data.cep}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#1f2937]">
      <div>
        <h1 className="text-white text-center font-bold text-2xl py-4">Buscador de CEP</h1>
        <form className="flex flex-col gap-y-8 items-center" onSubmit={handleSubmit(onSubmit)}>

          <input type="text" className="w=1/2 p-2 rounded-lg text-center font-bold text-lg" {...register("cep")}></input>

          {errors.cep && <p className="text-red-500 text-center font-bold">{(errors.cep.message)}</p>}

          <button type = "submit" className="bg-blue-700 px-8 py-3 rounded-lg font-bold text-white text-lg hover:bg-blue-800 transition-all duration-300 ease-in-out">Buscar</button>
        </form>
      </div>
    </main>
  );
}
