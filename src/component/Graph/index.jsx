import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Reaction count",
      data: [50, 40, 30, 32, 50, 35],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["rgb(42, 177, 187)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "18px",
          fontFamily: "inherit",
          fontWeight: 700,
        },
      },
      categories: ["like", "love", "haha", "wow", "sad", "angry"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "18px",
          fontFamily: "inherit",
          fontWeight: 600,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function Example(props) {
  // const [data, setData] = useState({});
  //setData(props.data);
  let arr = [];
  console.log(props.data);
  arr.push(props.data?.like_reactions?.summary?.total_count);
  arr.push(props.data?.love_reactions?.summary?.total_count);
  arr.push(props.data?.haha_reactions?.summary?.total_count);
  arr.push(props.data?.wow_reactions?.summary?.total_count);
  arr.push(props.data?.sad_reactions?.summary?.total_count);
  arr.push(props.data?.angry_reactions?.summary?.total_count);
  console.log("Arrr", arr);
  if (arr[0]) {
    chartConfig.series[0].data = arr.slice(0, 6);
  }
  //chartConfig.series[0].data = arr[0] ? arr.slice(0, 6) : [];
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <Square3Stack3DIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h3" color="blue-gray">
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
              Reactions Count
            </span>
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          ></Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
