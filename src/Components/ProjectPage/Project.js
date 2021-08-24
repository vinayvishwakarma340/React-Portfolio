import React from "react";
import Navbar from '../HomePage/Navbar'

const Project = (props) => {
  return (
    <div className="main">
      <section className="home-section ">
      <Navbar />
      <div className="container">

        <img style={{width:"100%",height:"500px"}} src="https://images.pexels.com/photos/41315/africa-african-animal-cat-41315.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=1260" alt="  " />
        <h2>This is Project page</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit iste similique eveniet, aspernatur quo at totam veritatis dolore repellat quidem. Quis nihil maxime, quibusdam nulla doloribus soluta asperiores consequuntur numquam explicabo libero eveniet deleniti aspernatur quia similique assumenda voluptatem repellat doloremque reprehenderit dolorum tempore. Ea deleniti molestias eos repudiandae aperiam ipsam enim accusamus facilis culpa, maxime dignissimos praesentium reiciendis inventore autem, atque mollitia consequatur possimus laudantium placeat consequuntur nihil nesciunt quo voluptatibus est. Quos quis hic, sunt, nobis necessitatibus harum facilis odio itaque debitis explicabo quisquam ab expedita placeat porro esse aut inventore amet. Quidem inventore error obcaecati voluptatum doloremque!</p>
        <span>Project link : </span><a href="https://www.pexels.com/search/lion/">google</a>
      </div>
      </section>
    </div>
  );
};

export default Project;
