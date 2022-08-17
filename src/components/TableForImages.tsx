import { TableForImagesProps } from '../interfaces'

export const TableForImages = ( { sprites, name }:TableForImagesProps) => {
  return (
    <>
        <div className="overflow-x-auto rounded-lg border border-slate-400 mb-2">
            <table className="w-full text-sm text-left text-gray-800">
                <caption className='bg-neutral-900 text-slate-100 rounded-t-lg'>More Images</caption>
                <thead className="text-xs text-gray-200 uppercase">
                    <tr className='grid grid-cols-4'>
                        <th scope="col" className="py-3 text-center border bg-sky-700 border-slate-600">
                            Default
                        </th>
                        <th scope="col" className="py-3 text-center border bg-sky-700 border-slate-600">
                            Back 
                        </th>
                        <th scope="col" className="py-3 text-center border bg-sky-500 border-slate-600">
                            Shyny Font
                        </th>
                        <th scope="col" className="py-3 text-center border bg-sky-500 border-slate-600 ">
                            Shyny Back
                        </th>
                    </tr>
                </thead>
                <tbody className='rounded-b-lg'>
                    <tr className="bg-slate-100 rounded-b-lg grid grid-cols-4">
                        <td className="py-0.5 text-center border border-slate-400">
                            <img src={ sprites.front_default } className='mx-auto' alt={ name } />
                        </td>
                        <td className="py-0.5 text-center border border-slate-400">
                            <img src={ sprites.back_default }  className='mx-auto' alt={ name } />
                        </td>
                        <td className="py-0.5 text-center border border-slate-400">
                            <img src={ sprites.front_shiny }   className='mx-auto' alt={ name } />
                        </td>
                        <td className="py-0.5 text-center border border-slate-400">
                            <img src={ sprites.back_shiny }    className='mx-auto' alt={ name } />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}
