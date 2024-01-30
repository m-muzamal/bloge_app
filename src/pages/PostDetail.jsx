import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../assets/images/blog95.jpg";

function PostDetail() {
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor />
          <div className="post-detail_buttons">
            <Link to={`/post/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/post/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is a post titel.</h1>
        <div className="post-detail_thumbnail">
          <img src={Thumbnail} alt="thumbnail" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          doloribus, eos consequuntur praesentium architecto, facilis et magni
          alias in maxime repellendus non consectetur quae quo illo dignissimos
          optio illum provident minus quos laborum quisquam iste saepe quis!
          Expedita, soluta illum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          nihil consectetur praesentium dicta. Mollitia voluptatum accusamus at
          cumque eum nesciunt iusto eveniet iste corrupti nemo quas repellat aut
          placeat incidunt rem temporibus minima officiis tempora deleniti sint,
          qui consequatur! Non fuga, ab inventore consequatur libero debitis,
          voluptate nam odit, dolorum saepe iure cum dolores ex?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          maiores, labore vitae ipsam id voluptates obcaecati quidem voluptas
          ipsa vero? Nesciunt atque dolorem facilis. Magni ipsum est ratione
          eligendi fugiat repellendus, quidem illum. Laudantium, quidem saepe
          amet quia officiis tenetur quam eveniet. Iste in earum fuga dolor
          eaque at reprehenderit provident? In mollitia optio quo dolorum
          doloribus maiores, omnis blanditiis vero quibusdam ut distinctio illum
          praesentium aliquid asperiores amet est at modi deserunt illo
          provident dolores, nemo accusantium fugit corporis! Hic, labore
          doloremque dignissimos architecto autem blanditiis facilis delectus
          aut, quam repellendus, deserunt animi. Reiciendis corporis cumque
          assumenda suscipit velit qui sit porro perspiciatis. Impedit cum
          nostrum eius inventore in deserunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit
          reiciendis vitae, culpa quisquam a nesciunt esse debitis atque omnis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          repellat excepturi pariatur minima in vitae explicabo perferendis sed
          asperiores voluptas itaque, totam blanditiis? Ipsam autem ullam eius,
          praesentium recusandae veritatis impedit atque voluptatem quia
          officiis vitae nulla deserunt aspernatur commodi similique unde nihil
          quis vero voluptatibus, doloremque ipsum! Obcaecati possimus sapiente
          odio hic eveniet ipsum accusamus sit voluptates quae amet. Sunt vero
          quibusdam voluptatem recusandae voluptatibus repellendus perspiciatis.
          Distinctio explicabo, ratione sed possimus rerum maxime dignissimos
          molestias blanditiis pariatur laudantium asperiores repellat provident
          magni quae ea reprehenderit error dolor at culpa vel tempora? Harum
          perferendis ipsa optio similique vitae accusantium nulla explicabo
          officiis adipisci eos voluptate quos, illum libero dignissimos
          architecto? Minus repellat sequi architecto, quam aspernatur quos
          ducimus doloribus nam porro numquam libero deserunt ex temporibus a
          commodi culpa dolorem! Quisquam ipsam consectetur ipsa temporibus modi
          cumque natus vitae, fuga autem! Enim voluptatibus, distinctio nam
          nihil libero quasi nobis quis voluptatum commodi omnis vitae a
          asperiores ipsam officiis hic accusamus. Voluptates provident fugiat
          cupiditate cumque, obcaecati sed. Laudantium molestiae tempore velit
          deleniti cumque provident, eveniet impedit quas placeat, cupiditate
          maxime accusamus nisi. Optio aliquam aperiam reiciendis officia?
          Nobis, magni odit? Atque a esse modi rem sequi distinctio,
          voluptatibus odit.
        </p>
      </div>
    </section>
  );
}

export default PostDetail;
