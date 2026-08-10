import "./detail.css"

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        {/* Using the "A" placeholder to exactly match the John Doe image. 
            If you want your image back, replace this div with: 
            <img src="./avatar.png" alt="" /> */}
        <div className="avatarPlaceholder">A</div>
        <h2>Shahjahan</h2>
        <p>Hello Meet The Creater of Linux.</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.-W9gfsK2eZGoZs4I5c0trgHaD0%3Fr%3D0%26pid%3DApi&f=1&ipt=db2458a4b61f2e7d24b6f156cc2cb31619d8cee0f93ac7101a38c14c77e4c693&ipo=images"
                  alt=""
                />
              </div>
              <span>photo_2026_2.png</span>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.-W9gfsK2eZGoZs4I5c0trgHaD0%3Fr%3D0%26pid%3DApi&f=1&ipt=db2458a4b61f2e7d24b6f156cc2cb31619d8cee0f93ac7101a38c14c77e4c693&ipo=images"
                  alt=""
                />
              </div>
              <span>photo_2026_2.png</span>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.-W9gfsK2eZGoZs4I5c0trgHaD0%3Fr%3D0%26pid%3DApi&f=1&ipt=db2458a4b61f2e7d24b6f156cc2cb31619d8cee0f93ac7101a38c14c77e4c693&ipo=images"
                  alt=""
                />
              </div>
              <span>photo_2026_2.png</span>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.-W9gfsK2eZGoZs4I5c0trgHaD0%3Fr%3D0%26pid%3DApi&f=1&ipt=db2458a4b61f2e7d24b6f156cc2cb31619d8cee0f93ac7101a38c14c77e4c693&ipo=images"
                  alt=""
                />
              </div>
              <span>photo_2026_2.png</span>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <button>Block User</button>
        <button className="logout">Log out</button>
      </div>
    </div>
  )
}

export default Detail;