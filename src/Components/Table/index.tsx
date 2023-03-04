import React from "react";

type Props = {};

const header = [
  { name: "Date (mm/dd/yyyy)" },
  { name: "Temp (F)" },
  { name: "Description" },
  { name: "Main" },
  { name: "Pressure" },
  { name: "Humidity" },
];

const Body = [
  { name: "Date" },
  { name: "Temp" },
  { name: "Description" },
  { name: "Main" },
  { name: "Pressure" },
  { name: "Humidity" },
];

const Table = ({}: Props) => {
  return (
    <table className="w-full p-[1em]">
      <thead>
        <tr className="border-t-2  border-cyan-500 text-left">
          {header?.map((items) => {
            return (
              <th
                key={items?.name}
                className="border-t-2 border-l-2 border-r-2 bg-cyan-100 border-cyan-500 font-montesserat"
              >
                {items?.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr className="border-l-2 border-r-2 border-cyan-500">
          {Body?.map((items) => {
            return (
              <td
                key={items?.name}
                className="border-l-2 border-b-2 border-cyan-500 font-montesserat"
              >
                {items?.name}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
