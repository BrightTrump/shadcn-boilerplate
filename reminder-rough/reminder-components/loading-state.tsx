import React from "react";

export default function LoadingState() {
  return (
    <div className="grid content-start gap-5 pr-3">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="grid grid-cols-[auto_1fr_auto] gap-3 py-3 border-b border-gray-200"
        >
          <span className="grid w-5 h-5 rounded-md bg-gray-200 animate-pulse"></span>

          <div className="grid gap-1">
            <span className="block w-3/4 bg-gray-200 rounded-sm h-4 animate-pulse"></span>
            <span className="block w-2/4 bg-gray-200 rounded-sm h-2 animate-pulse"></span>
            <div className="grid grid-flow-col justify-start gap-3">
              <span className="block w-20 bg-gray-200 rounded-sm h-2 animate-pulse"></span>
              <span className="block w-20 bg-gray-200 rounded-sm h-2 animate-pulse"></span>
            </div>
          </div>

          <div className="grid grid-flow-col justify-end gap-3">
            <span className="grid w-4 h-4 rounded-md bg-gray-200 animate-pulse"></span>
            <span className="grid w-4 h-4 rounded-md bg-gray-200 animate-pulse"></span>
          </div>
        </div>
      ))}
    </div>
  );
}
