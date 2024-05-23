export default function MobileLink() {
return (
<div className="flex-1 group">
  <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-orange-500">
      <span className="block px-1 pt-1 pb-1">
          <i className="far fa-home text-2xl pt-1 mb-1 block"></i>
          <span className="block text-xs pb-2">Home</span>
          <span className="block w-5 mx-auto h-1 group-hover:bg-orange-500 rounded-full"></span>
      </span>
  </a>
</div>
);

}