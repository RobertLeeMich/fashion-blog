import "../image/blog-image-1.jpg"

function Article(prop) {
  return (
    <div className="App">
      <main>
      <article>
        <p class="date">11/12/20</p>
        <p class="blog-title">On the Street in Brooklyn</p>
        <img
          src={require("../image/blog-image-1.jpg")}
          alt="A woman standing next to a brick wall in a city."
        />
        <p class="para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nisi at
          dolorum quam aperiam. Et eligendi modi aliquid nemo aut animi harum,
          labore necessitatibus repellendus excepturi. Pariatur ex corporis
          minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          saepe minus nulla, fuga maxime minima itaque ab sunt maiores nostrum
          illum totam inventore autem quo sit incidunt sint dolor dolore. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Minus, provident?
          Ex iusto, quidem cumque obcaecati quis harum nam aut ratione quasi
          explicabo, quod provident excepturi necessitatibus adipisci blanditiis
          error deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Veniam quo harum deserunt cum distinctio. Nesciunt provident,
          nam rerum temporibus obcaecati reiciendis. Asperiores fuga officiis
          perferendis magni eligendi illum laborum laboriosam?
        </p>

        <a class="continue"><p>Continues...</p></a>
      </article>
      <article>
        <p class="date">11/11/20</p>
        <p class="blog-title">Vintage in Vogue</p>
        <img
          src={require("../image/blog-image-2.jpg")}
          alt="A woman, a man, and a woman's headshots together, showing them dressed up in formal attire."
        />
        <p class="para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nisi at
          dolorum quam aperiam. Et eligendi modi aliquid nemo aut animi harum,
          labore necessitatibus repellendus excepturi. Pariatur ex corporis
          minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          saepe minus nulla, fuga maxime minima itaque ab sunt maiores nostrum
          illum totam inventore autem quo sit incidunt sint dolor dolore. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Minus, provident?
          Ex iusto, quidem cumque obcaecati quis harum nam aut ratione quasi
          explicabo, quod provident excepturi necessitatibus adipisci blanditiis
          error deleniti. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum distinctio sequi facere necessitatibus suscipit nesciunt
          cum debitis molestias nihil labore inventore quam alias atque, dolores
          blanditiis accusamus ipsam aliquid facilis.
        </p>

        <a class="continue"><p>Continues...</p></a>
      </article>
    </main>
    </div>
  );
}

export default Article
