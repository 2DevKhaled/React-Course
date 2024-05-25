import "./Post.css";
export default function Posts() {
  const article = [
    { id: 1, title: "API", paragraph: "Application Interface Programming" },
    { id: 2, title: "SQl", paragraph: "Standrd Query langauge" },
    { id: 3, title: "JS", paragraph: "JavaScript Programming Language" },
    { id: 5, title: "HTML", paragraph: "" },
  ];
  const postArtical = article.map((ele) => {
    return (
      <div className="card" key={ele.id}>
        <h3>{ele.title}</h3>
        {ele.paragraph == null || ele.paragraph === "" ? (
          <div></div>
        ) : (
          <div>
            <hr />
            <h5>{ele.paragraph}</h5>
          </div>
        )}
      </div>
    );
  });
  console.log(postArtical);
  return <div>{postArtical}</div>;
}
