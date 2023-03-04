import { TableHeader, TableDateHeader } from "../../Common/utils/tableHeader";

type Props = {
  data: Array<{ [key: string]: unknown }>;
  windowSize: number;
};

const Table = ({ data, windowSize }: Props) => {
  console.log("windowSize", windowSize);
  return (
    <table className="w-full p-[1em]">
      <thead className="w-full">
        <tr className="text-left border-t-2 border-r-2 border-l-2 bg-cyan-400  border-cyan-500 w-full">
          {TableDateHeader?.map((items, index) => {
            return (
              <th
                key={index}
                className="border-t-2 border-r-2 border-l-2  border-cyan-500"
              >
                {items?.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <thead>
        <tr className="border-cyan-500 text-left">
          {TableHeader?.map((items) => {
            return (
              <th
                key={items?.name}
                className="border-l-2 border-r-2 bg-cyan-100 border-cyan-500 font-montesserat"
              >
                {items?.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((bodyItems, index) => {
          return (
            <tr key={index} className="border-l-2 border-r-2 border-cyan-500">
              {TableHeader?.map((tableItems) => {
                return (
                  <td
                    key={bodyItems[tableItems["accessor"]] as string}
                    className="border-l-2 border-b-2 border-cyan-500 font-montesserat capitalize"
                  >
                    {bodyItems[tableItems["accessor"]] as string}
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
