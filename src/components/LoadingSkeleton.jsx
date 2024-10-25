const LoadingSkeleton = () => {
  return (
    <div className="p-4 border rounded shadow-md bg-white w-full max-w-xs mx-2">
      <div className="animate-pulse">
        <div className="h-48 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
