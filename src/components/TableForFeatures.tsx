import { TableForFeaturesProps } from '../interfaces';

export const TableForFeatures = ( { weight, height, baseExperience }:TableForFeaturesProps ) => {
  return (
    <div className="overflow-x-auto rounded-b-lg">
        <table className="w-full text-sm text-left text-gray-800">
            <caption className='bg-neutral-900 text-slate-100 rounded-t-lg'>Features</caption>
            <thead className="text-xs text-gray-700 uppercase">
                <tr>
                    <th scope="col" className="py-3 text-center border bg-slate-300 border-slate-400">
                        Height
                    </th>
                    <th scope="col" className="py-3 text-center border bg-slate-300 border-slate-400">
                        Weight
                    </th>
                    <th scope="col" className="py-3 text-center border bg-slate-300 border-slate-400">
                        Base Experience
                    </th>
                </tr>
            </thead>
            <tbody className='rounded-b-lg'>
                <tr className="bg-slate-100 rounded-b-lg">
                    <td className="py-4 text-center border border-slate-400">
                        { height }
                    </td>
                    <td className="py-4 text-center border border-slate-400">
                        { weight }
                    </td>
                    <td className="py-4 text-center border border-slate-400">
                        { baseExperience }
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
