import { TableHeader, TableDateHeader } from "../../Common/utils/tableHeader";

type Props = {
  data: Array<{ [key: string]: unknown }>;
  windowSize: number;
};

const Table = ({ data, windowSize }: Props) => {
  const resStructureHeader = (data: Array<{ [key: string]: unknown }>) => {
    if (windowSize <= 650 && data.length > 0) {
      const newData = data?.slice(0, 2).map((items) => {
        return {
          ...items,
          name:
            items["accessor"] === "date"
              ? "Date (mm/dd/yyyy)"
              : items["accessor"] === "temp"
              ? "Temperature (F)"
              : items["name"],
        };
      });

      return newData;
    } else {
      return data;
    }
  };

  const SliceArray = (data: Array<{ [key: string]: unknown }>) => {
    const result = windowSize <= 650 ? data.slice(0, 2) : data;

    return result;
  };

  const sliceTableHeader = (data: Array<{ [key: string]: unknown }>) => {
    const result = windowSize <= 650 ? data.slice(0, 0) : data;

    return result;
  };

  return (
    <table className="w-full p-[1em]">
      <thead className="w-full">
        <tr className="text-left border-t-2 border-r-2 border-l-2 bg-cyan-400  border-cyan-500 w-full">
          {sliceTableHeader(TableDateHeader)?.map((items, index) => {
            return (
              <th
                key={index}
                className="border-t-2 border-r-2 border-l-2  border-cyan-500"
              >
                {items?.name as string}
              </th>
            );
          })}
        </tr>
      </thead>
      <thead>
        <tr className="border-cyan-500 text-left">
          {resStructureHeader(TableHeader)?.map(
            (items: { [key: string]: unknown }) => {
              return (
                <th
                  key={items?.name as string}
                  className="border-l-2 border-r-2 bg-cyan-100 border-cyan-500 font-montesserat"
                >
                  {items?.name as string}
                </th>
              );
            }
          )}
        </tr>
      </thead>
      <tbody>
        {SliceArray(data)?.map((bodyItems, index) => {
          return (
            <tr key={index} className="border-l-2 border-r-2 border-cyan-500">
              {SliceArray(TableHeader)?.map((tableItems) => {
                return (
                  <td
                    key={bodyItems[tableItems["accessor"] as string] as string}
                    className="border-l-2 border-b-2 border-cyan-500 font-montesserat capitalize"
                  >
                    {bodyItems[tableItems["accessor"] as string] as string}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
