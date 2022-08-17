import { TypesProps } from '../interfaces'

export const Types = ( { types }:TypesProps ) => {
  return (
    <div className="my-4 overflow-x-auto rounded-b-lg">
        <table className="w-full text-sm text-left text-gray-800">
            <caption className='bg-neutral-900 text-slate-100 rounded-t-lg'>Type(s)</caption>
            <thead className="text-xs text-gray-700 uppercase">
            </thead>
            <tbody className='rounded-b-lg'>
                <tr className="bg-slate-200 rounded-b-lg">
                    <td className="flex flex-row py-2 px-6 border border-slate-400">
                        {
                            types.map( ({ type }) => (
                                <span key={ type.name } className='rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-red-500'>#{ type.name }</span>
                            ))
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    </div> 
  )
}
