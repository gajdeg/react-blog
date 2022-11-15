import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost ">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/3601081/pexels-photo-3601081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>Geri</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          perferendis explicabo necessitatibus commodi ratione possimus
          laboriosam architecto, itaque quis sed quia voluptatum reprehenderit
          nostrum est excepturi cupiditate sequi amet! Temporibus? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consectetur laudantium
          quos odit nam aperiam fugit natus libero. A ea odit sed alias. Ab
          possimus quo sapiente hic, deleniti repudiandae eveniet? Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Voluptates architecto at
          nesciunt enim harum maiores natus sunt repudiandae dolorem sequi fuga,
          mollitia quidem laudantium, minima consequatur officia quod aspernatur
          commodi.
        </p>
      </div>
    </div>
  );
}
