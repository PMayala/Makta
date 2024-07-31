/* eslint-disable react/prop-types */
import Card from "../molecules/Card";

export default function StatsCards({ data }) {
  return (
    <div className="flex justify-between mt-10 w-full xl:w-4/5">
      {data.map((details, index) => (
        <Card key={index} data={details.data} name={details.name} />
      ))}
    </div>
  );
}
