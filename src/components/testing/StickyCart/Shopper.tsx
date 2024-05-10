import "./shop-v3.css";


export default function Shopper() {
return (
    
  <>
  <main>
    <article className="article">
      <h2>Dynamic Sticky Sidebar Component</h2>
      <p>Click on the elements below to add them to the sidebar component.</p>
      <ul className="items grid">
        {[...Array(100)].map((_, index) => (
          <li>
            <button className="item">
              <div className="thumbnail"></div>
              <div className="info">
                <div className="title"></div>
                <div className="subtitle"></div>
              </div>
            </button>
          </li>
        ))}
      </ul>
      <p>Added this extra content for spacing purposes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed porta arcu, vitae hendrerit magna. Nullam nec mi augue. Morbi non odio mauris. Vivamus accumsan lectus ac libero ornare lacinia. Etiam quis purus nec augue fermentum interdum. Aliquam sit amet dui rutrum, aliquam augue ut, iaculis arcu. Nunc euismod, magna sit amet gravida gravida, erat diam scelerisque massa, id dignissim sapien elit quis mauris. In interdum lectus id mattis aliquam. Ut pellentesque accumsan consectetur. Curabitur varius mollis lacus, nec rhoncus massa facilisis ac.</p>
      <p>Maecenas fringilla consectetur blandit. Phasellus pulvinar, eros eleifend fermentum accumsan, leo massa rutrum lectus, nec cursus orci turpis at libero. Quisque dolor ex, suscipit id felis ac, bibendum aliquam enim. Curabitur mollis ligula a ipsum fermentum, in volutpat arcu mattis. Nulla facilisi. Duis mattis venenatis erat non sollicitudin. Phasellus nec augue eget magna eleifend laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed bibendum dolor euismod erat rhoncus, et mattis enim facilisis. Quisque arcu est, molestie sed massa nec, gravida feugiat massa. Donec id velit mi. Curabitur accumsan elit in magna mollis, quis pharetra felis faucibus.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In molestie magna sit amet lobortis convallis. Etiam at magna eget risus venenatis luctus quis nec justo. Pellentesque elementum imperdiet mi. Vivamus nec fringilla est. Suspendisse tincidunt euismod turpis quis ornare. Donec et dui in massa porttitor malesuada. Aliquam erat volutpat.</p>
    </article>
    <aside className="sidebar">
      <div className="component"> 
        <div className="header">Selected Items</div>
        <div className="content">
          <div className="empty-text">Your cart is currently empty</div>
          <ul className="items list"></ul>
        </div>
        <div className="footer">
          <button className="button">Checkout</button>
          <button className="button empty-cart">Empty Cart</button>
        </div>
      </div>
    </aside>
  </main>
  <footer></footer>
  </>
);
}


/*
const items = document.querySelector(".items");
const componentItems = document.querySelector(".component .items");
const emptyText = document.querySelector(".empty-text");
const emptyBtn = document.querySelector(".empty-cart");

items.addEventListener("click", (e) => {
  if (emptyText !== null) {
    emptyText.setAttribute("hidden", true);
  }

  if (e.target.matches(".item")) {
    const item = e.target.cloneNode(true);
    componentItems.append(item);
  }
});

componentItems.addEventListener("click", (e) => {
  if (e.target.matches(".item")) {
    e.target.remove();
  }
  if (componentItems.children.length < 1) {
    emptyText.removeAttribute("hidden");
  }
});

emptyBtn.addEventListener("click", (e) => {
  while (componentItems.lastElementChild) {
    componentItems.removeChild(componentItems.lastElementChild);
  }
  emptyText.removeAttribute("hidden");
});
*/