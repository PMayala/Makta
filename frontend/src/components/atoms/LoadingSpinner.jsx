import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="relative flex items-center justify-center w-32 h-32">
      {/* Outer spinning circle */}
      <div className="absolute w-32 h-32 border-8 border-t-8 border-blue-500 border-solid rounded-full animate-spin"></div>
      
      {/* Middle spinning circle */}
      <div className="absolute w-28 h-28 border-6 border-t-6 border-red-500 border-solid rounded-full animate-spin-fast"></div>
      
      {/* Inner spinning circle */}
      <div className="absolute w-20 h-20 border-4 border-t-4 border-green-500 border-solid rounded-full animate-spin-faster"></div>
      
      {/* Bouncing book */}
      <div className="absolute flex items-center justify-center w-16 h-16">
        <div className="w-12 h-12 bg-yellow-500 border-4 border-yellow-700 rounded-md relative animate-bounce">
          <div className="absolute top-1 left-1 w-full h-full border-t-2 border-yellow-700 rounded-md"></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-yellow-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Small bouncing book in center */}
      <div className="absolute flex items-center justify-center w-8 h-8 bg-yellow-500 border-2 border-yellow-700 rounded-md animate-bounce-fast">
        <div className="absolute top-1 left-1 w-full h-full border-t-2 border-yellow-700 rounded-md"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <style jsx>{`
        @keyframes spin-fast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        @keyframes spin-faster {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-720deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(-30%); }
          50% { transform: translateY(0); }
        }

        @keyframes bounce-fast {
          0%, 100% { transform: translateY(-20%); }
          50% { transform: translateY(0); }
        }

        .animate-spin-fast {
          animation: spin-fast 0.5s linear infinite;
        }

        .animate-spin-faster {
          animation: spin-faster 1s linear infinite;
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        .animate-bounce-fast {
          animation: bounce-fast 0.8s infinite;
        }
      `}</style>
    </div>
  );
}
