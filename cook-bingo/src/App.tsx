export const App = () => {
  return (
    <>
      <div className="m-auto w-fit justify-items-center bg-blue-100">
        <div className="grid gap-4 grid-cols-4 p-4">
          {Array(16)
            .fill(0)
            .map((i) => (
              <div className="w-28 h-28 bg-white"></div>
            ))}
        </div>
      </div>
    </>
  );
};
