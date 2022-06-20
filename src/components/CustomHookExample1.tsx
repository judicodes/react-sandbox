import useFetch from "./hooks/useFetch";

interface Post {
  title: string;
}

interface ApiResponse {
  data: Post[];
  loading: boolean;
}

function CustomHookExample1() {
  const { data, loading }: ApiResponse = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div>
      {data.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
}

export default CustomHookExample1;
