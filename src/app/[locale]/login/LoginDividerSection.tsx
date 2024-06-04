export default function LoginDividerSection({ text }: { text: string }) {
  return (
    <>
      <div className="hidden lg:flex mt-4 items-center justify-between">
        <span className="border-b w-1/6 lg:w-1/5"></span>
        <p className="text-xs text-center text-gray-500 uppercase">{text}</p>
        <span className="border-b w-1/6 lg:w-1/5"></span>
      </div>
    </>
  );
}
