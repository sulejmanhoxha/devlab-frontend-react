import { useNavigate } from "react-router-dom";

import { usePosts } from "../../hooks/usePosts";

const PostsPage = () => {
  const { postsQuery } = usePosts();

  return (
    <>
      <div className="container mx-auto bg-white px-6 py-28 md:py-40">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {postsQuery.isLoading || postsQuery.isRefetching ? (
            <h1>Loading...</h1>
          ) : null}

          {postsQuery.error ? <h1>Error: {postsQuery.error.message}</h1> : null}

          {postsQuery.isSuccess &&
          !postsQuery.isRefetching &&
          postsQuery.data.length > 0
            ? postsQuery.data.map((pet) => <PetCard key={pet.id} {...pet} />)
            : null}

          {postsQuery.isSuccess &&
          !postsQuery.isRefetching &&
          postsQuery.data.length === 0 ? (
            <h1>No pets found</h1>
          ) : null}
        </div>
      </div>
    </>
  );
};

export const PetCard = ({ id, image, title, abstract }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer transition-transform hover:-translate-y-1"
      onClick={() => navigate(`/posts/${id}`)}
    >
      <img
        src={image}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a ${title}`}
      />

      <p className="mt-1.5 text-lg font-medium">{title}</p>
      <p className="line-clamp-2 text-sm text-neutral-500">{abstract}</p>
    </div>
  );
};

export default PostsPage;
