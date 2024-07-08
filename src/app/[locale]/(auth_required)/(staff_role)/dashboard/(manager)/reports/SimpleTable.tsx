export default function SimpleTable({ data }: { data: any }) {
  return (
    <table className="min-w-full divide-y divide-gray-200 shadow-md">
      <thead className="bg-gray-50">
        <tr>
          {data.length > 0 && Object.keys(data[0]).map((key) => (
            <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row: any, index: number) => (
          <tr key={index}>
            {Object.values(row).map((value: any, i) => (
              <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {value instanceof Date ? value.toLocaleString() : value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}