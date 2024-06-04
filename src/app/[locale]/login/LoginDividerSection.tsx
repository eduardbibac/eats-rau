export default function LoginDividerSection({ text }: { text: string }) {
  return (
    <>
      <div className="mt-4 hidden items-center justify-between lg:flex">
        <span className="w-1/6 border-b lg:w-1/5"></span>
        <p className="text-center text-xs uppercase text-gray-500">{text}</p>
        <span className="w-1/6 border-b lg:w-1/5"></span>
      </div>
    </>
  );
}
