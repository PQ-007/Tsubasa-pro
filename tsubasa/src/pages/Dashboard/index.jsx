"use client";
import * as React from "react";
import stats from "./stats";
import Week from "./Week";
import TextField from "./TextField";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  const [date, setDate] = React.useState(null);

  return (
    <div className="flex flex-col h-full w-full pr-1">
      <div className="flex flex-grow ">
        <div className="flex flex-col basis-11/12 p-2">
          {/* Overview section */}
          <div className=" flex-grow mb-2 p-3">
            <h2 className="font-gilroy-medium uppercase text-lg pb-4">Overview</h2>
            {/* four stat card */}
            <div className="flex justify-stretch gap-4">
              {stats.map(({ name, value, icon : Icon }) => (
                <Card className="w-[225px] ">
                  <CardHeader className="flex-row p-3  items-center ">
                    <div className="bg-blue-400 rounded-md"><Icon color="white" className=" p-[1px]" /></div>
                    <CardTitle className="text-xl pl-1">{name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl">{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* My Courses section */}
          <div className="bg-green-600 flex-grow mb-2">my-courses</div>
        </div>

        <div className="flex flex-col">
          {/* Calendar section */}
          <div className="mb-2 basis-1/4 pr-4">
            <Week />
            <TextField />
          </div>

          {/* Flashcard section */}
          <h2 className="font-gilroy-medium uppercase text-lg pb-4">flashcard</h2>
          <div className=" flex-grow mb-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
