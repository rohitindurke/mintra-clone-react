import item1 from './imgs/item1.png'


const HomeItem = ({item}) =>{
    return (
      <>
        <div id="firstRow">
          <div className="item-container">
            <img className="item-image" src={item1} alt="item image" />
            <div className="rating">
              {item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                (${item.discount_percentage}% OFF)
              </span>
            </div>
          </div>

          <div className="item-container">
            <img className="item-image" src={item1} alt="item image" />
            <div className="rating">
              {item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                (${item.discount_percentage}% OFF)
              </span>
            </div>
          </div>

          <div className="item-container">
            <img className="item-image" src={item1} alt="item image" />
            <div className="rating">
              {item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                (${item.discount_percentage}% OFF)
              </span>
            </div>
          </div>
          <div className="item-container">
            <img className="item-image" src={item1} alt="item image" />
            <div className="rating">
              {item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                (${item.discount_percentage}% OFF)
              </span>
            </div>
          </div>

          <div className="item-container">
            <img className="item-image" src={item1} alt="item image" />
            <div className="rating">
              {item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                (${item.discount_percentage}% OFF)
              </span>
            </div>
          </div>
        </div>

        <div id="firstRow">
          <div className="item-container">
            <img className="item-image" src={item1} alt="item image" />
            <div className="rating">
              {item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                (${item.discount_percentage}% OFF)
              </span>
            </div>
          </div>

          <div className="item-container">
            <img className="item-image" src={item1} alt="item image" />
            <div className="rating">
              {item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                (${item.discount_percentage}% OFF)
              </span>
            </div>
          </div>

          <div className="item-container">
            <img className="item-image" src={item1} alt="item image" />
            <div className="rating">
              {item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                (${item.discount_percentage}% OFF)
              </span>
            </div>
          </div>
          <div className="item-container">
            <img className="item-image" src={item1} alt="item image" />
            <div className="rating">
              {item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                (${item.discount_percentage}% OFF)
              </span>
            </div>
          </div>

          <div className="item-container">
            <img className="item-image" src={item1} alt="item image" />
            <div className="rating">
              {item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                (${item.discount_percentage}% OFF)
              </span>
            </div>
          </div>
        </div>
      </>
    );
}
export default HomeItem;