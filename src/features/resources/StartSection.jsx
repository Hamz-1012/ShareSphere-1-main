import Button from '../../ui/Button';
function StartSection() {
  return (
    <>
      <div className="border-1 mt-20 h-56 w-full items-center justify-center rounded-lg bg-slate-500">
        <h1 className="border-1 pt-10 text-center font-mono text-4xl  font-bold text-white">
          Get Set Download and Share
        </h1>
        <p className="font-serif-Cambria text-center text-xl font-semibold text-white">
          One place to upload and share knowledge
        </p>

        <div className=" flex items-center justify-center">
          <div className="  border-1 flex items-center justify-center ">
            <img src="/image2.png" className="mt-4 h-32 w-32 " />
          </div>
          <Button type="primary">
            <p className="font-mono text-xl">Home</p>
          </Button>
        </div>
      </div>
    </>
  );
}

export default StartSection;
