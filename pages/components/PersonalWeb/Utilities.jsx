import React from 'react';

const ContentContainer = ({ children }) => {
  return (
    <div className="mx-auto max-w-full px-6 sm:px-6 lg:px-8 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      {children}
    </div>
  );
};

export default ContentContainer;

export function BackgroundContainer({ children }) {
    return (
      <div id="body-wrapper" className="flex w-full">
        <div className="fixed inset-0 flex justify-center sm:px-8 ">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }