"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useFrameSDK } from "~/hooks/useFrameSDK";
import { tracks } from "~/lib/constants";

export default function Frame() {
  const { isSDKLoaded } = useFrameSDK();
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  
  const currentTrack = tracks[currentTrackIndex];

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
  };

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[300px] mx-auto py-2 px-2">
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
          <CardTitle className="text-center">90s Retro Music</CardTitle>
          <CardDescription className="text-white/80 text-center">
            Classic dance hits from the 90s
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-full aspect-square bg-black/10 rounded-md flex items-center justify-center overflow-hidden">
              <img 
                src={currentTrack.imageUrl} 
                alt={currentTrack.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center w-full">
              <h3 className="font-bold truncate">{currentTrack.title}</h3>
              <p className="text-sm text-gray-500 truncate">{currentTrack.artist}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" onClick={handlePrevious}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={handleNext}>
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
