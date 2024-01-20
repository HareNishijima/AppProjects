export const App = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-fit p-4">
        <div className="flex w-56 h-56 bg-red-100 rounded">
          <div className="h-12 w-12 bg-red-500 rounded" />
          <div className="h-12 w-12 bg-red-500 rounded" />
          <div className="h-12 w-12 bg-red-500 rounded" />
          <div className="h-12 w-12 bg-red-500 rounded" />
        </div>
        <div className="flex w-56 h-56 bg-red-100 rounded justify-center">
          <div className="h-12 w-12 bg-red-500 rounded" />
          <div className="h-12 w-12 bg-red-500 rounded" />
          <div className="h-12 w-12 bg-red-500 rounded" />
          <div className="h-12 w-12 bg-red-500 rounded" />
        </div>
        <div className="flex w-56 h-56 bg-red-100 rounded items-center">
          <div className="h-12 w-12 bg-red-500 rounded" />
          <div className="h-12 w-12 bg-red-500 rounded" />
          <div className="h-12 w-12 bg-red-500 rounded" />
          <div className="h-12 w-12 bg-red-500 rounded" />
        </div>
        <div className="flex w-56 h-56 bg-red-100 rounded justify-center items-center">
          <div className="h-12 w-12 bg-red-500 rounded" />
          <div className="h-12 w-12 bg-red-500 rounded" />
          <div className="h-12 w-12 bg-red-500 rounded" />
          <div className="h-12 w-12 bg-red-500 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-fit p-4">
        <div className="flex w-56 h-56 bg-blue-100 rounded flex-wrap">
          <div className="h-20 w-20 bg-blue-500 rounded" />
          <div className="h-20 w-20 bg-blue-500 rounded" />
          <div className="h-20 w-20 bg-blue-500 rounded" />
          <div className="h-20 w-20 bg-blue-500 rounded" />
        </div>
        <div className="flex w-56 h-56 bg-blue-100 rounded flex-wrap justify-center">
          <div className="h-20 w-20 bg-blue-500 rounded" />
          <div className="h-20 w-20 bg-blue-500 rounded" />
          <div className="h-20 w-20 bg-blue-500 rounded" />
          <div className="h-20 w-20 bg-blue-500 rounded" />
        </div>
        <div className="flex w-56 h-56 bg-blue-100 rounded flex-wrap content-center">
          <div className="h-20 w-20 bg-blue-500 rounded" />
          <div className="h-20 w-20 bg-blue-500 rounded" />
          <div className="h-20 w-20 bg-blue-500 rounded" />
          <div className="h-20 w-20 bg-blue-500 rounded" />
        </div>
        <div className="flex w-56 h-56 bg-blue-100 rounded flex-wrap justify-center content-center">
          <div className="h-20 w-20 bg-blue-500 rounded" />
          <div className="h-20 w-20 bg-blue-500 rounded" />
          <div className="h-20 w-20 bg-blue-500 rounded" />
          <div className="h-20 w-20 bg-blue-500 rounded" />
        </div>
      </div>
    </>
  );
};
