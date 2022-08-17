import { StatsProps } from '../interfaces'

export const Stats = ( { stats }:StatsProps) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-400">
        <table className="w-full text-sm text-left text-gray-800">
            <caption className='bg-neutral-900 text-slate-100 rounded-t-lg'>Stats</caption>
            <thead className="text-xs text-gray-700 uppercase">
                <tr className='grid grid-cols-6'>
                    <th scope="col" className="py-3 text-center border bg-red-400 border-slate-600">
                        HP
                    </th>
                    <th scope="col" className="py-3 text-center border bg-orange-400 border-slate-600">
                        ATTACK
                    </th>
                    <th scope="col" className="py-3 text-center border bg-yellow-300 border-slate-600">
                        DEFENSE
                    </th>
                    <th scope="col" className="py-3 text-center border bg-blue-400 border-slate-600 ">
                        SP.ATK
                    </th>
                    <th scope="col" className="py-3 text-center border bg-green-500 border-slate-600">
                        SP.DEF
                    </th>
                    <th scope="col" className="py-3 text-center border bg-pink-400 border-slate-600">
                        SPEED
                    </th> 
                </tr>
            </thead>
            <tbody className='rounded-b-lg'>
                <tr className="bg-slate-100 rounded-b-lg grid grid-cols-6">
                    {
                        stats.map( (stat, index) => (
                            <td key={ stat.stat.name  } className="max-w-2xl text-center py-1 text-xl font-light border border-slate-400 text-slate-900 md:text-lg">{ stat.base_stat } </td>
                        ))
                    } 
                </tr>
            </tbody>
        </table>
    </div>
  )
}