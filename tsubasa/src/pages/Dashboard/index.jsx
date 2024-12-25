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
import { CarouselDemo } from "./FlashcardWindow";

const Dashboard = () => {
  const [date, setDate] = React.useState(null);

  return (
    <div className="flex flex-col h-full w-full ">
      <div className="flex flex-grow ">
        <div className="flex flex-col basis-11/12 p-2">
          {/* Overview section */}
          <div className=" flex-grow mb-2 p-3">
            <h2 className="font-gilroy-medium uppercase text-xl pb-4">Overview</h2>
            {/* four stat card */}
            <div className="flex w-full justify-between gap-y-6 flex-wrap">
              {stats.map(({ name, value, icon : Icon }) => (
                <Card className="md:w-48 lg:w-56 xl:w-80">
                  <CardHeader className="flex-row p-3  items-center ">
                    <div className="bg-[#2d9cdb] rounded-md"><Icon color="white" className=" p-[1px]" /></div>
                    <CardTitle className="text-l pl-1">{name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl">{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Schedule */}
            <h2 className="font-gilroy-medium uppercase text-xl py-4">Schedule</h2>

          </div>

          
        </div>

        <div className="flex flex-col">
          {/* Calendar section */}
          <div className="mb-2 mt-2">
            <Week />
            <TextField />
          </div>

          {/* Flashcard section */}
          <h2 className="font-gilroy-medium uppercase text-xl py-4">flashcard</h2>
          <div className=" flex-grow mb-2"><CarouselDemo/></div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
