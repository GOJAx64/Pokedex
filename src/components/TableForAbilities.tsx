import { TableForAbilitiesProps } from '../interfaces'

export const TableForAbilities = ( { abilities }:TableForAbilitiesProps ) => {
  return (
    <div className="my-4 overflow-x-auto rounded-b-lg">
        <table className="w-full text-sm text-left text-gray-800">
            <caption className='bg-neutral-900 text-slate-100 rounded-t-lg'>Abilities</caption>
            <thead className="text-xs text-gray-700 uppercase">
            </thead>
            <tbody className='rounded-b-lg'>
                <tr className="bg-slate-200 rounded-b-lg">
                    <td className="grid grid-cols-3 py-4 gap-3 border border-slate-400">
                      {
                          abilities.map( (ability) => (
                              <p key={ ability.ability.name  } className="max-w-2xl text-justify capitalize text-xl font-light text-slate-900 mx-auto md:text-lg"> { ability.ability.name } </p>
                          ))
                      }
                    </td>
                </tr>
            </tbody>
        </table>
    </div> 
  )
}
