import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, qui
        saepe! Accusamus, nulla quo adipisci aliquid consequatur atque placeat
        et delectus eveniet mollitia, fuga voluptas eum ipsa illum quod aut.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non obcaecati
        possimus, praesentium voluptates accusamus rerum tenetur iste incidunt
        similique voluptatem aliquam voluptas vero sit dolores veritatis unde
        animi sunt earum.
      </p>
    </div>
  );
}
